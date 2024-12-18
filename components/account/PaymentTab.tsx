"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash2 } from "lucide-react";

const mockPaymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "09/24",
  },
];

export function PaymentTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Payment Methods</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Card
        </Button>
      </div>

      <div className="grid gap-4">
        {mockPaymentMethods.map((method) => (
          <Card key={method.id} className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <CreditCard className="h-8 w-8" />
                <div>
                  <p className="font-medium">{method.type} •••• {method.last4}</p>
                  <p className="text-sm text-gray-600">Expires: {method.expiry}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}