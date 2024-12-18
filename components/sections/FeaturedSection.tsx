"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const featuredShoes = [
  {
    id: 1,
    name: "Air Max",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Deportivo",
  },
  {
    id: 2,
    name: "Y2K",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    category: "Retro",
  },
  {
    id: 3,
    name: "Air Force 1",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    category: "Clásico",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Consigue nuestros iconos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredShoes.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/producto/${shoe.id}`}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="object-contain w-full h-full p-8 transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-4">
                      {shoe.name}
                    </Badge>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}