import { ShopGrid } from "@/components/sections/ShopGrid";
import { products } from "@/lib/products";

export default function ShopPage() {
  return <ShopGrid products={products} />;
}
