"use client";

import Link from "next/link";
import { MAIN_CATEGORIES } from "@/lib/constants/categories";

export function MainNav() {
  return (
    <div className="flex h-14 items-center justify-center">
      <div className="grid grid-flow-col gap-x-8 auto-cols-max">
        {MAIN_CATEGORIES.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}