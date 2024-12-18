"use client";

import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/hooks/useAuth";
import { LoginDialog } from "./LoginDialog";
import { useState } from "react";

export function UserMenu() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  if (!isAuthenticated || !user) {
    return (
      <>
        <Button variant="ghost" size="sm" onClick={() => setShowLoginDialog(true)}>
          <User className="h-5 w-5 mr-2" />
          <span>Iniciar sesión</span>
        </Button>
        <LoginDialog
          open={showLoginDialog}
          onOpenChange={setShowLoginDialog}
        />
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <User className="h-5 w-5" />
          <span>{user.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={logout}>
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}