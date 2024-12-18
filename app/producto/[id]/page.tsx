import { products } from "@/lib/data/products";
import { ProductDetails } from "@/components/product/ProductDetails";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return null;
  }

  return <ProductDetails product={product} />;
}