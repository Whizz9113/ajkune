"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
    name: "Electric Tape Remover",
    price: "129.00 CHF",
    oldPrice: "199.00",
    discount: "-35%",
    image: "/product1.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 2,
    name: "Hair Curling Lockenstab",
    price: "109.00 CHF",
    oldPrice: "199.00",
    discount: "-45%",
    image: "/product2.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 3,
    name: "Repair-Shampoo 200ml",
    price: "19.90 CHF",
    image: "/product3.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 4,
    name: "Silvershampoo Yes Silver 250ml",
    price: "29.90 CHF",
    image: "/product4.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 5,
    name: "Professional Haarspray Extra Strong",
    price: "24.90 CHF",
    oldPrice: "34.90",
    discount: "-30%",
    image: "/product1.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 6,
    name: "Glanz Serum Intensive Care",
    price: "39.90 CHF",
    image: "/product2.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 7,
    name: "Color Protection Shampoo",
    price: "22.90 CHF",
    oldPrice: "29.90",
    discount: "-25%",
    image: "/product3.jpg",
    brand: "AJKUNE PROFESSIONAL"
  },
  {
    id: 8,
    name: "Feuchtigkeits-Maske Deep Repair",
    price: "34.90 CHF",
    image: "/product4.jpg",
    brand: "AJKUNE PROFESSIONAL"
  }
];

export function ProductSection() {
  return (
    <section className="py-10 md:py-20 bg-[hsl(0_0%_9%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 md:gap-16 items-start">
          {/* Linke Seite - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 py-20 md:py-0"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
              AJKUNE<br />
              PROFESSIONAL
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Unser Name steht für Schweizer Innovation. Wir verwenden
              nur die hochwertigsten Inhaltsstoffe für unsere Produkte und
              nutzen diese auch in unseren Salons.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                className="bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto"
              >
                Alle Produkte
              </Button>
            </div>
          </motion.div>

          {/* Rechte Seite - Produkt Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-visible mt-8 lg:mt-0"
          >
            <div className="relative">
              <Carousel
                className="w-full mx-auto"
                opts={{
                  align: "start",
                }}
              >
                <div className="absolute -left-4 md:-left-12 top-[60%] flex flex-col gap-6">
                  <CarouselPrevious className="static translate-x-0 translate-y-0 !h-auto !w-auto !bg-transparent !border-0 hover:!bg-transparent">
                    <div className="w-6 md:w-8 h-6 md:h-8">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"
                        className="w-full h-full"
                      >
                        <path 
                          fill="#fe23d9"
                          d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"
                        />
                      </svg>
                    </div>
                  </CarouselPrevious>
                  
                  <CarouselNext className="static translate-x-0 translate-y-0 !h-auto !w-auto !bg-transparent !border-0 hover:!bg-transparent">
                    <div className="w-6 md:w-8 h-6 md:h-8">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"
                        className="w-full h-full"
                      >
                        <path 
                          fill="#fe23d9"
                          d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"
                        />
                      </svg>
                    </div>
                  </CarouselNext>
                </div>

                <CarouselContent className="-ml-2 md:-ml-4">
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="relative bg-white rounded-lg overflow-hidden h-[350px] md:h-[400px]">
                        <div className="h-[200px] md:h-[250px] relative bg-white">
                          {product.discount && (
                            <span className="absolute top-2 left-2 bg-[#fe23d9] text-white px-2 py-1 text-xs md:text-sm rounded-md z-10">
                              {product.discount}
                            </span>
                          )}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-3 md:p-4 h-[150px] flex flex-col justify-between">
                          <div>
                            <p className="text-xs text-gray-500">{product.brand}</p>
                            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mt-1">{product.name}</h3>
                          </div>
                          <div className="flex items-baseline gap-2">
                            {product.oldPrice && (
                              <span className="text-xs md:text-sm text-gray-500 line-through">
                                {product.oldPrice}
                              </span>
                            )}
                            <span className="text-sm md:text-base font-semibold">{product.price}</span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 