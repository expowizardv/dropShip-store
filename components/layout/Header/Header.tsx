"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { CartButton } from "./CartButton";
import { UserMenu } from "./UserMenu";
import { MobileNav } from "./MobileNav";
import { MobileSearch } from "./MobileSearch";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="bg-black text-white py-2 text-center">
        <p className="text-sm font-medium px-4">
          PROMOCIÓN DE LANZAMIENTO. -5% EN TODOS LOS ARTÍCULOS
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/El_Corte_Ingl%C3%A9s_logo.svg/2560px-El_Corte_Ingl%C3%A9s_logo.svg.png"
                alt="Store Logo"
                className="h-8"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <UserMenu />
            </div>
            <CartButton />
          </div>
        </div>
      </div>

      <MobileSearch />

      <nav className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </nav>

      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}