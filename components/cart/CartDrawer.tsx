"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/providers/CartProvider";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, removeItem, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  return (
    <>
      <Button
        type="button"
        aria-label="Open cart drawer"
        variant="outline"
        size="sm"
        className="relative"
        onClick={() => setOpen(true)}
      >
        Cart
        <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-black">
          {count}
        </span>
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="cart-drawer"
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close cart drawer"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 h-full w-[min(92vw,420px)] border-l border-border bg-bg p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Cart</p>
                <Button
                  type="button"
                  aria-label="Close cart"
                  variant="ghost"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.2em]">
                Your edit
              </h3>

              <div className="mt-6 space-y-4 overflow-y-auto pr-1">
                {items.length === 0 ? (
                  <div className="rounded-2xl border border-border bg-fg/5 p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      Empty
                    </p>
                    <p className="mt-3 text-sm">No items yet.</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/shop" aria-label="Go to shop">
                        Shop now
                      </Link>
                    </Button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.product.slug}
                      className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm uppercase tracking-[0.2em]">
                          {item.product.name}
                        </p>
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
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
                        {item.color ?? item.product.colors[0]} /{" "}
                        {item.size ?? item.product.sizes[0]}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span>${item.product.price}</span>
                        <div className="flex items-center gap-2">
                          <Button
                            type="button"
                            aria-label={`Decrease quantity for ${item.product.name}`}
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.product.slug, item.quantity - 1)
                            }
                          >
                            -
                          </Button>
                          <span className="min-w-[24px] text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            type="button"
                            aria-label={`Increase quantity for ${item.product.name}`}
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.product.slug, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="mt-4 w-full"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/cart" aria-label="Go to cart">
                    View cart
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
