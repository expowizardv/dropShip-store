"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Deportivos",
    description: "Rendimiento y comodidad para tus entrenamientos",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3",
    href: "/categoria/deportivos"
  },
  {
    id: 2,
    name: "Casual",
    description: "Estilo diario con máxima comodidad",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3",
    href: "/categoria/casual"
  },
  {
    id: 3,
    name: "Formal",
    description: "Elegancia para ocasiones especiales",
    image: "https://images.unsplash.com/photo-1478186510433-7draaf7d4647?ixlib=rb-4.0.3",
    href: "/categoria/formal"
  }
];

export function CategorySection() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Explora Nuestras Categorías</h2>
        <p className="text-gray-600">Encuentra el estilo perfecto para cada ocasión</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={category.href}>
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-[4/5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-200">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}