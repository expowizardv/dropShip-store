"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Manejar la suscripción al boletín
    console.log("Suscripción al boletín:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Únete al Movimiento</h2>
          <p className="text-gray-400 mb-8">
            Suscríbete a nuestro boletín para recibir lanzamientos exclusivos, ofertas especiales y contenido detrás de cámaras.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button type="submit" className="bg-white text-black hover:bg-gray-100">
              Suscribirse
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}