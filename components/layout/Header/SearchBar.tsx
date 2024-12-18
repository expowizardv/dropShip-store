"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/lib/hooks/useSearch";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const { query, results, suggestions, setQuery } = useSearch();

  // Mostrar sugerencias al abrir el popover
  useEffect(() => {
    if (open && !query) {
      setQuery("");
    }
  }, [open]);

  return (
    <div className="relative w-full max-w-2xl">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-full pl-4 pr-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[calc(100vw-2rem)] max-w-2xl p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Buscar productos..." 
              value={query} 
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>No se encontraron resultados.</CommandEmpty>
              <CommandGroup heading={query ? "Resultados" : "Sugerencias populares"}>
                {(query ? results : suggestions).map((product) => (
                  <CommandItem key={product.id}>
                    <Link
                      href={`/producto/${product.id}`}
                      className="flex items-center gap-4 w-full"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}