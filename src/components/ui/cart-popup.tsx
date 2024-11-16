"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Coffein Shampoo 250ml",
    price: "19.90 CHF",
    image: "/shop2.webp",
    quantity: 1
  },
  {
    id: 2,
    name: "Electric Tape Remover",
    price: "129.00 CHF",
    image: "/shop1.webp",
    quantity: 1
  }
];

export function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(" CHF", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50"
          onMouseLeave={onClose}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Warenkorb</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {cartItems.length > 0 ? (
              <>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × {item.price}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-[#fe23d9]">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Gesamt</span>
                    <span className="font-bold">{total.toFixed(2)} CHF</span>
                  </div>
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white"
                    >
                      Zur Kasse
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={onClose}
                    >
                      Weiter einkaufen
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-8 text-center text-gray-500">
                Ihr Warenkorb ist leer
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 