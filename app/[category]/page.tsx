import { notFound } from "next/navigation";
import { CATEGORY_DETAILS } from "@/lib/constants/categories";
import type { CategorySlug } from "@/lib/types/category";

export function generateStaticParams() {
  return Object.keys(CATEGORY_DETAILS).map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = CATEGORY_DETAILS[params.category as CategorySlug];

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-gray-600 mb-8">{category.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aquí irían los productos de la categoría */}
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Productos próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}