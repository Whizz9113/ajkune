"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

interface ProductDetailProps {
  productId: string;
}

// Diese Daten würden normalerweise aus einer Datenbank kommen
const productData = {
  id: "1",
  name: "Coffein Shampoo 250ml",
  brand: "AJKUNE PROFESSIONAL",
  price: "19.90",
  oldPrice: "29.90",
  discount: "-35%",
  description: "Unser Coffein Shampoo ist speziell entwickelt, um Ihr Haar zu stärken und zu revitalisieren. Die einzigartige Formel mit Koffein stimuliert die Kopfhaut und fördert das Haarwachstum.",
  features: [
    "Mit natürlichem Koffein",
    "Stärkt die Haarwurzeln",
    "Fördert das Haarwachstum",
    "Für alle Haartypen geeignet",
    "Dermatologisch getestet"
  ],
  images: [
    "/shop2.webp",
    "/shop2-detail1.webp",
    "/shop2-detail2.webp"
  ],
  inStock: true
};

export function ProductDetailSection({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Linke Seite - Bilder */}
          <div className="space-y-4">
            <motion.div
              ref={imageRef}
              className="relative aspect-square w-full bg-white rounded-lg overflow-hidden perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              animate={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
                transition: { duration: 0.2 }
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {productData.discount && (
                <span className="absolute top-4 left-4 bg-[#fe23d9] text-white px-3 py-1 text-sm rounded-md z-10">
                  {productData.discount}
                </span>
              )}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  transform: `translateZ(${isHovered ? '50px' : '0px'})`
                }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  fill
                  className="object-contain p-8"
                  style={{
                    filter: `drop-shadow(0 ${isHovered ? '20px' : '10px'} 20px rgba(0,0,0,0.2))`
                  }}
                />
              </motion.div>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {productData.images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[#fe23d9]' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    fill
                    className="object-contain p-4"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Rechte Seite - Produktinfos */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">{productData.brand}</p>
              <h1 className="text-3xl font-bold mt-1">{productData.name}</h1>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold">{productData.price} CHF</span>
              {productData.oldPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {productData.oldPrice} CHF
                </span>
              )}
            </div>

            <p className="text-gray-600">{productData.description}</p>

            <div className="space-y-2">
              <h3 className="font-medium">Eigenschaften:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center border rounded-md">
                  <button 
                    className="p-2 hover:text-[#fe23d9] disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    className="p-2 hover:text-[#fe23d9]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <Button 
                  className="flex-1 bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white py-6"
                >
                  In den Warenkorb
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                {productData.inStock ? 'Auf Lager. Lieferung in 2-3 Werktagen.' : 'Derzeit nicht verfügbar'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 