import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProductBySlug } from "@/lib/products";

type PageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  return <ProductDetail product={product} />;
}
