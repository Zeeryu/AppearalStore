"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useCart } from "@/components/providers/CartProvider";

const filters = {
  tags: ["Outerwear", "Bottoms", "Knit", "Editorial", "Accessories"],
  colors: ["Noir", "Acid", "Sand", "Neon", "Stone"],
  sizes: ["XS", "S", "M", "L", "XL"],
};

const colorSwatches: Record<string, string> = {
  Noir: "#0d0d0d",
  Acid: "#b6ff2f",
  Sand: "#d8c4a6",
  Neon: "#ff4fd8",
  Stone: "#b9b9b9",
  Ink: "#1f1f2b",
  Graphite: "#3a3a3a",
  Chalk: "#f5f1e8",
  Clay: "#b86d3c",
  Indigo: "#2f3b66",
  Cloud: "#e5e5e5",
  Slate: "#5a5f6a",
};

export function ShopGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some((item) => item.toLowerCase().includes(query.toLowerCase()));
      const matchesTag = tag ? product.tags.includes(tag) : true;
      const matchesColor = color ? product.colors.includes(color) : true;
      const matchesSize = size ? product.sizes.includes(size) : true;
      return matchesQuery && matchesTag && matchesColor && matchesSize;
    });
  }, [products, query, tag, color, size]);

  const handleAdd = (product: Product) => {
    addItem({ product, quantity: 1 });
    setToast(`${product.name} added to cart`);
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }
    toastTimer.current = window.setTimeout(() => {
      setToast(null);
    }, 2200);
  };

  return (
    <section className="bg-bg py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Shop</p>
            <h1 className="mt-3 font-display text-3xl uppercase tracking-[0.2em]">
              Product grid
            </h1>
          </div>
          <div className="w-full max-w-xs">
            <Input
              aria-label="Search products"
              placeholder="Search by name or tag"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Tags</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.tags.map((item) => (
                <Button
                  key={item}
                  type="button"
                  aria-label={`Filter by ${item}`}
                  variant={tag === item ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setTag(tag === item ? null : item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Colors</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.colors.map((item) => (
                <Button
                  key={item}
                  type="button"
                  aria-label={`Filter by ${item} color`}
                  variant={color === item ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setColor(color === item ? null : item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Sizes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.sizes.map((item) => (
                <Button
                  key={item}
                  type="button"
                  aria-label={`Filter by size ${item}`}
                  variant={size === item ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setSize(size === item ? null : item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.slug}
              className="group rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-glow"
            >
              <Link
                href={`/product/${product.slug}`}
                aria-label={`View ${product.name}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
              </Link>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em]">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs text-muted">${product.price}</p>
                </div>
                <Badge variant="ghost">{product.tags[0]}</Badge>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="sr-only">
                    Colors: {product.colors.join(", ")}
                  </span>
                  {product.colors.slice(0, 4).map((shade) => (
                    <span
                      key={shade}
                      aria-hidden="true"
                      className="h-3 w-3 rounded-full border border-border"
                      style={{ backgroundColor: colorSwatches[shade] ?? "#999" }}
                    />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted">
                  {product.colors.length} colors
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      aria-label={`Quick view ${product.name}`}
                      variant="outline"
                      size="sm"
                    >
                      Quick view
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="relative">
                    <DialogHeader>
                      <DialogTitle>{product.name}</DialogTitle>
                      <DialogDescription>{product.description}</DialogDescription>
                    </DialogHeader>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        aria-label="Close quick view"
                        variant="ghost"
                        size="sm"
                        className="absolute right-6 top-6"
                      >
                        Close
                      </Button>
                    </DialogClose>
                    <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr]">
                      <div className="relative h-64 overflow-hidden rounded-2xl">
                        <Image
                          src={product.images[1] ?? product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted">
                            Colors
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {product.colors.map((item) => (
                              <Badge key={item}>{item}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted">
                            Sizes
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {product.sizes.map((item) => (
                              <Badge key={item} variant="ghost">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button
                          type="button"
                          aria-label={`Add ${product.name} to cart`}
                          onClick={() => handleAdd(product)}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  type="button"
                  aria-label={`Add ${product.name} to cart`}
                  variant="accent"
                  size="sm"
                  onClick={() => handleAdd(product)}
                >
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {toast && (
            <motion.div
              key="cart-toast"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-6 right-6 z-50 rounded-full border border-border bg-fg text-bg px-5 py-3 text-xs uppercase tracking-[0.3em] shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
              role="status"
              aria-live="polite"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
