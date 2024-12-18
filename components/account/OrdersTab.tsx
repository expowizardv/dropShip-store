"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye } from "lucide-react";

const mockOrders = [
  {
    id: "PED-001",
    date: "2024-03-15",
    status: "Entregado",
    total: 299.99,
    items: [
      { name: "Air Jordan 1 Chicago", quantity: 1, price: 299.99 }
    ]
  },
  {
    id: "PED-002",
    date: "2024-03-10",
    status: "En Tránsito",
    total: 189.98,
    items: [
      { name: "Nike SB Dunk Low", quantity: 1, price: 189.98 }
    ]
  }
];

export function OrdersTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Mis Pedidos</h2>
        <Button variant="outline">Filtrar Pedidos</Button>
      </div>

      {mockOrders.map((order) => (
        <Card key={order.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-4 w-4" />
                <span className="font-medium">Pedido {order.id}</span>
              </div>
              <p className="text-sm text-gray-600">
                Realizado el {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <Badge variant={order.status === "Entregado" ? "default" : "secondary"}>
              {order.status}
            </Badge>
          </div>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                </div>
                <p className="font-medium">{item.price.toFixed(2)}€</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Importe Total</p>
              <p className="text-lg font-bold">{order.total.toFixed(2)}€</p>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Ver Detalles
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}