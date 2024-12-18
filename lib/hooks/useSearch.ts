"use client";

import { create } from "zustand";
import { products, type Product } from "@/lib/data/products";

interface SearchState {
  query: string;
  results: Product[];
  suggestions: Product[];
  setQuery: (query: string) => void;
}

// Mejora del hook de búsqueda con caché y sugerencias
export const useSearch = create<SearchState>((set, get) => ({
  query: "",
  results: [],
  suggestions: products.slice(0, 5), // Mostrar los 5 primeros productos como sugerencias iniciales
  setQuery: (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Actualizar el estado inmediatamente para mejor UX
    set({ query });
    
    // Si la consulta está vacía, mostrar sugerencias iniciales
    if (!normalizedQuery) {
      set({ results: [], suggestions: products.slice(0, 5) });
      return;
    }

    // Implementar debounce para mejorar rendimiento
    const timeoutId = setTimeout(() => {
      const searchTerms = normalizedQuery.split(/\s+/);
      
      const filtered = products.filter((product) => {
        const searchableText = [
          product.name,
          product.description,
          product.category,
          ...product.tags,
        ].join(" ").toLowerCase();
        
        return searchTerms.every(term => searchableText.includes(term));
      });

      set({ results: filtered, suggestions: filtered.slice(0, 5) });
    }, 300); // Debounce de 300ms

    return () => clearTimeout(timeoutId);
  },
}));