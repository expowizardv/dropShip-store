"use client";

import Link from "next/link";
import { MAIN_CATEGORIES } from "@/lib/constants/categories";

interface MobileNavLinksProps {
  onClose: () => void;
}

export function MobileNavLinks({ onClose }: MobileNavLinksProps) {
  return (
    <nav className="p-6">
      <div className="space-y-4">
        {MAIN_CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="block text-lg font-medium text-gray-700 hover:text-black transition-colors"
            onClick={onClose}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}