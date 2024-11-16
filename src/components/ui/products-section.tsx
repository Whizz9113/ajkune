"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  brand: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Coffein Shampoo 250ml",
    price: "19.90 CHF",
    image: "/shop2.webp",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 2,
    name: "Electric Tape Remover",
    price: "19.00 CHF",
    oldPrice: "35.00",
    discount: "-35%",
    image: "/shop1.webp",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 3,
    name: "Hair Curling Lockenstab",
    price: "109.00 CHF",
    oldPrice: "199.00",
    discount: "-45%",
    image: "/shop3.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 4,
    name: "Repair-Shampoo 200ml",
    price: "19.90 CHF",
    image: "/shop4.webp",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 5,
    name: "Silvershampoo Yes Silver 250ml",
    price: "29.90 CHF",
    image: "/shop5.webp",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 6,
    name: "Extentions Remover",
    price: "19.90 CHF",
    image: "/shop6.webp",
    brand: "AJKUNE PROFESSIONAL"
  }
];

export function ProductsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium">AJKUNE PROFESSIONAL</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">UNSERE PRODUKTE</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Entdecken Sie unsere exklusive Produktpalette für professionelle Haarpflege. 
              Qualität und Innovation für Ihr perfektes Styling.
            </p>
          </div>

          {/* Filter Bereich */}
          <div className="container mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-6 rounded-lg shadow-sm">
              {/* Suchfeld */}
              <div className="space-y-2">
                <Label htmlFor="search">Suche</Label>
                <Input
                  id="search"
                  placeholder="Produkt suchen..."
                  className="w-full"
                />
              </div>

              {/* Verfügbarkeit als Select */}
              <div className="space-y-2">
                <Label>Verfügbarkeit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Alle Produkte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Produkte</SelectItem>
                    <SelectItem value="in-stock">Auf Lager</SelectItem>
                    <SelectItem value="out-of-stock">Ausverkauft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Preis */}
              <div className="space-y-2">
                <Label>Preis</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    className="w-full"
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Sortieren */}
              <div className="space-y-2">
                <Label>Sortieren nach</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Auswählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Alphabetisch, A-Z</SelectItem>
                    <SelectItem value="name-desc">Alphabetisch, Z-A</SelectItem>
                    <SelectItem value="price-asc">Preis, aufsteigend</SelectItem>
                    <SelectItem value="price-desc">Preis, absteigend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Produkt Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                  index % 3 === 1 ? 'lg:relative lg:top-32' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-[400px] cursor-pointer">
                  <Link href={`/produkte/${product.id}`}>
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-[#fe23d9] text-white px-2 py-1 text-xs md:text-sm rounded-md z-10">
                        {product.discount}
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <h3 className="text-lg font-medium text-gray-900 mt-1">{product.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold">{product.price}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white"
                  >
                    In den Warenkorb
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 