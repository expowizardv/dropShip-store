"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EmailPopupContent } from "./EmailPopupContent";
import { useEmailPopup } from "./useEmailPopup";

export function EmailPopup() {
  const { open, setOpen, shouldShowPopup } = useEmailPopup();

  useEffect(() => {
    if (shouldShowPopup) {
      setOpen(true);
    }
  }, [shouldShowPopup, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Obtén un descuento especial</DialogTitle>
        </DialogHeader>
        <EmailPopupContent onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}