import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-display tracking-[0.35em]">APPEARAL</div>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">
            Editorial streetwear studio.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] font-mono">
          <Link
            href="/shop"
            aria-label="Shop"
            className="text-muted hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Shop
          </Link>
          <Link
            href="/about"
            aria-label="About"
            className="text-muted hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            About
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="text-muted hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Cart
          </Link>
        </nav>
      </div>
    </footer>
  );
}
