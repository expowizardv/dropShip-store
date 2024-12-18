"use client";

import Link from "next/link";

export function MobileNavLogo() {
  return (
    <div className="p-6 border-b">
      <Link href="/" className="block">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/El_Corte_Ingl%C3%A9s_logo.svg/2560px-El_Corte_Ingl%C3%A9s_logo.svg.png"
          alt="Store Logo"
          className="h-8"
        />
      </Link>
    </div>
  );
}