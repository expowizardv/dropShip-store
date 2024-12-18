"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/lib/hooks/useSearch";

export function MobileSearch() {
  const { query, setQuery } = useSearch();

  return (
    <div className="w-full px-4 py-2 bg-white border-b md:hidden">
      <div className="relative">
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
    </div>
  );
}