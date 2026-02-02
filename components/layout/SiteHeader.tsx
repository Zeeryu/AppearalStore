import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Cart", href: "/cart" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="APPEARAL home"
          className="text-lg font-display tracking-[0.4em]"
        >
          APPEARAL
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className="font-mono text-xs uppercase tracking-[0.3em] text-muted transition hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CartDrawer />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/shop" aria-label="Shop now">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
