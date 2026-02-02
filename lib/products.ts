export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "noir-frame-bomber",
    name: "Noir Frame Bomber",
    price: 268,
    description: "Matte twill bomber with satin lining and tonal hardware.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80&sat=-30",
    ],
    colors: ["Noir", "Stone"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["Outerwear", "Best Seller"],
  },
  {
    slug: "acid-line-hoodie",
    name: "Acid Line Hoodie",
    price: 148,
    description: "Heavyweight fleece hoodie with oversize shoulder drop.",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80&sat=-20",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["Acid", "Ink"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Essentials", "Hoodie"],
  },
  {
    slug: "sandstone-trench",
    name: "Sandstone Trench",
    price: 312,
    description: "Tailored trench with extended lapel and hidden closure.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80&sat=-40",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["Sand", "Clay"],
    sizes: ["XS", "S", "M", "L"],
    tags: ["Outerwear", "Lookbook"],
  },
  {
    slug: "nightwave-cargo",
    name: "Nightwave Cargo",
    price: 174,
    description: "Structured cargo pant with articulated knee seam.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80&sat=-60",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80&sat=-50",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80&sat=-30",
    ],
    colors: ["Ink", "Graphite"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Bottoms", "Utility"],
  },
  {
    slug: "echo-knit-tee",
    name: "Echo Knit Tee",
    price: 98,
    description: "Compact knit tee with elongated sleeve and rib neck.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80&sat=-25",
    ],
    colors: ["Chalk", "Noir"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["Basics", "Knit"],
  },
  {
    slug: "neon-signal-shell",
    name: "Neon Signal Shell",
    price: 236,
    description: "Water-resistant shell with hidden hood and taped seams.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: ["Neon", "Onyx"],
    sizes: ["S", "M", "L"],
    tags: ["Outerwear", "Technical"],
  },
  {
    slug: "studio-selvedge-denim",
    name: "Studio Selvedge Denim",
    price: 188,
    description: "Rigid selvedge denim with high rise and straight leg.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80&sat=-70",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80&sat=-50",
    ],
    colors: ["Indigo"],
    sizes: ["28", "30", "32", "34", "36"],
    tags: ["Bottoms", "Denim"],
  },
  {
    slug: "halo-knit-set",
    name: "Halo Knit Set",
    price: 214,
    description: "Soft knit co-ord with tonal stitch and flatlock detail.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80&sat=-45",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80&sat=-35",
    ],
    colors: ["Stone", "Cloud"],
    sizes: ["XS", "S", "M", "L"],
    tags: ["Sets", "Knit"],
  },
  {
    slug: "graphite-puffer-vest",
    name: "Graphite Puffer Vest",
    price: 158,
    description: "Matte ripstop puffer with high collar and storm flap.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80&sat=-15",
    ],
    colors: ["Graphite", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Outerwear", "Layering"],
  },
  {
    slug: "noir-studio-cap",
    name: "Noir Studio Cap",
    price: 58,
    description: "Structured cap with embroidered wordmark.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80&sat=-80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80&sat=-20",
    ],
    colors: ["Noir"],
    sizes: ["One Size"],
    tags: ["Accessories"],
  },
  {
    slug: "acid-track-pant",
    name: "Acid Track Pant",
    price: 132,
    description: "Relaxed track pant with tonal piping and zip cuff.",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80&sat=-10",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80&sat=-20",
    ],
    colors: ["Acid", "Slate"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Bottoms", "Sport"],
  },
  {
    slug: "sand-atelier-oxford",
    name: "Sand Atelier Oxford",
    price: 118,
    description: "Crisp oxford shirt with elongated cuff and hidden placket.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80&sat=-5",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80&sat=-15",
    ],
    colors: ["Sand", "Chalk"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Shirts", "Editorial"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}
