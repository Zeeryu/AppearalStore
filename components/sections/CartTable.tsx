"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { Button } from "@/components/ui/button";

export function CartTable() {
  const { items, updateQuantity, removeItem, clear } = useCart();

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  const estimatedShipping = subtotal > 0 ? 18 : 0;
  const estimatedTax = Math.round(subtotal * 0.08);
  const total = subtotal + estimatedShipping + estimatedTax;

  if (items.length === 0) {
    return (
      <section className="bg-bg py-16">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Cart</p>
          <h1 className="mt-4 font-display text-3xl uppercase tracking-[0.2em]">
            Your cart is empty
          </h1>
          <Button asChild className="mt-6">
            <Link href="/shop" aria-label="Browse shop">
              Browse shop
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Cart</p>
            <h1 className="mt-3 font-display text-3xl uppercase tracking-[0.2em]">
              Your edit
            </h1>
          </div>
          <Button
            type="button"
            aria-label="Clear cart"
            variant="outline"
            size="sm"
            onClick={clear}
          >
            Clear
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.product.slug}
                className="grid gap-4 rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.12)] md:grid-cols-[160px_1fr_auto]"
              >
                <div className="relative h-32 overflow-hidden rounded-2xl">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em]">
                      {item.product.name}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
                      {item.color ?? item.product.colors[0]} /{" "}
                      {item.size ?? item.product.sizes[0]}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted">Unit</span>
                    <span>${item.product.price}</span>
                    <span className="text-muted">Total</span>
                    <span>
                      ${(item.product.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      aria-label={`Decrease quantity for ${item.product.name}`}
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="min-w-[32px] text-center text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      type="button"
                      aria-label={`Increase quantity for ${item.product.name}`}
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      type="button"
                      aria-label={`Remove ${item.product.name}`}
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.slug)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between md:flex-col md:items-end">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted">
                    Line total
                  </span>
                  <span className="text-lg font-semibold">
                    ${(item.product.price * item.quantity).toFixed(0)}
                  </span>
                </div>
              </div>
            ))}
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/shop" aria-label="Continue shopping">
                Continue shopping
              </Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-fg/15 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Order summary
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Estimated shipping</span>
                <span>${estimatedShipping}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Estimated tax</span>
                <span>${estimatedTax}</span>
              </div>
              <div className="h-px bg-border/60" />
              <div className="flex items-center justify-between text-lg">
                <span>Total</span>
                <span className="font-semibold">${total}</span>
              </div>
            </div>
            <Button
              type="button"
              aria-label="Proceed to checkout"
              variant="accent"
              size="lg"
              className="mt-6 w-full"
            >
              Checkout
            </Button>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
              Secure checkout · Free returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
