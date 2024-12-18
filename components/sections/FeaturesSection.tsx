"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Envío Gratis",
    description: "En pedidos superiores a $100",
    icon: "🚚",
  },
  {
    title: "Pago Seguro",
    description: "100% pago seguro",
    icon: "🔒",
  },
  {
    title: "Soporte 24/7",
    description: "Atención dedicada",
    icon: "💬",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}