"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  );
}