import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Serif_Display, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransition } from "@/components/motion/PageTransition";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const accent = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-accent",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "APPEARAL | Editorial Streetwear",
  description: "Premium editorial streetwear experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${accent.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased relative">
        <Providers>
          <div className="min-h-screen bg-bg text-fg relative z-10">
            <SiteHeader />
            <PageTransition>{children}</PageTransition>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
