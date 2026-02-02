"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/CartProvider";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(product.sizes[0]);
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <section className="bg-bg py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border bg-fg/5">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`View image ${index + 1}`}
                className={`relative h-24 overflow-hidden rounded-2xl border ${
                  activeImage === index ? "border-accent" : "border-border"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg`}
                onClick={() => setActiveImage(index)}
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {product.tags.join(" / ")}
            </p>
            <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.2em]">
              {product.name}
            </h1>
            <p className="mt-2 text-lg">${product.price}</p>
          </div>

          <p className="text-sm text-muted">{product.description}</p>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Color</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  type="button"
                  aria-label={`Select color ${color}`}
                  variant={activeColor === color ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setActiveColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  type="button"
                  aria-label={`Select size ${size}`}
                  variant={activeSize === size ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              aria-label={`Add ${product.name} to cart`}
              onClick={() =>
                addItem({ product, quantity: 1, size: activeSize, color: activeColor })
              }
            >
              Add to cart
            </Button>
            <Badge variant="ghost">{activeColor}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
