"use client";

import { Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[50vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-sky-400" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-12 leading-tight"
          >
            <span className="md:hidden">
              vestir bien,<br />
              más barato
            </span>
            <span className="hidden md:block">
              Vestir bien,<br />
              más barato
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8">
              Descubre el catálogo <Shirt className="ml-2 h-5 w-5 fill-current" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}