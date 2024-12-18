"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { MAIN_CATEGORIES } from "@/lib/constants/categories";
import { MobileNavLogo } from "./MobileNavLogo";
import { MobileNavLinks } from "./MobileNavLinks";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <MobileNavLogo />
        <MobileNavLinks onClose={onClose} />
      </SheetContent>
    </Sheet>
  );
}