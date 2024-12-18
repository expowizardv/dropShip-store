"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Heart, Settings, CreditCard, LogOut } from "lucide-react";
import { OrdersTab } from "@/components/account/OrdersTab";
import { WishlistTab } from "@/components/account/WishlistTab";
import { SettingsTab } from "@/components/account/SettingsTab";
import { PaymentTab } from "@/components/account/PaymentTab";

export default function AccountPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Por favor, Inicia Sesión</h1>
          <p className="text-gray-600 mb-8">
            Necesitas iniciar sesión para ver esta página.
          </p>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mi Cuenta</h1>
            <p className="text-gray-600">Bienvenido de nuevo, {user.name}</p>
          </div>
          <Button variant="outline" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>

        <Tabs defaultValue="orders" className="space-y-8">
          <TabsList className="grid grid-cols-4 gap-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Lista de Deseos
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Pagos
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Ajustes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <OrdersTab />
          </TabsContent>
          
          <TabsContent value="wishlist">
            <WishlistTab />
          </TabsContent>
          
          <TabsContent value="payment">
            <PaymentTab />
          </TabsContent>
          
          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}