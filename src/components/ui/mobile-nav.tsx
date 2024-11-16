"use client";

import Link from "next/link";
import { Home, Scissors, CalendarDays, Menu as MenuIcon, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          <Link 
            href="/" 
            className={`flex flex-col items-center space-y-1 relative ${
              pathname === "/" ? "text-[#fe23d9]" : "text-gray-600"
            }`}
          >
            {pathname === "/" && (
              <span className="absolute -top-2 left-0 right-0 h-0.5 bg-[#fe23d9] rounded-full motion-safe:animate-pulse" />
            )}
            <Home size={20} />
            <span className="text-xs">Home</span>
          </Link>
          
          <Link 
            href="/behandlungen" 
            className={`flex flex-col items-center space-y-1 relative ${
              pathname === "/behandlungen" ? "text-[#fe23d9]" : "text-gray-600"
            }`}
          >
            {pathname === "/behandlungen" && (
              <span className="absolute -top-2 left-0 right-0 h-0.5 bg-[#fe23d9] rounded-full motion-safe:animate-pulse" />
            )}
            <Scissors size={20} />
            <span className="text-xs">Behandlungen</span>
          </Link>
          
          <Link 
            href="/kontakt" 
            className={`flex flex-col items-center space-y-1 relative ${
              pathname === "/kontakt" ? "text-[#fe23d9]" : "text-gray-600"
            }`}
          >
            {pathname === "/kontakt" && (
              <span className="absolute -top-2 left-0 right-0 h-0.5 bg-[#fe23d9] rounded-full motion-safe:animate-pulse" />
            )}
            <CalendarDays size={20} />
            <span className="text-xs">Termin</span>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center space-y-1 text-gray-600"
          >
            <MenuIcon size={20} />
            <span className="text-xs">Menü</span>
          </button>
          
          <Link 
            href="/warenkorb" 
            className={`flex flex-col items-center space-y-1 relative ${
              pathname === "/warenkorb" ? "text-[#fe23d9]" : "text-gray-600"
            }`}
          >
            {pathname === "/warenkorb" && (
              <span className="absolute -top-2 left-0 right-0 h-0.5 bg-[#fe23d9] rounded-full motion-safe:animate-pulse" />
            )}
            <ShoppingCart size={20} />
            <span className="text-xs">Warenkorb</span>
          </Link>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
              <nav className="space-y-6">
                <Link 
                  href="/produkte"
                  className="flex items-center space-x-4 text-gray-800 hover:text-[#fe23d9] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">Produkte</span>
                </Link>
                <Link 
                  href="/behandlungen"
                  className="flex items-center space-x-4 text-gray-800 hover:text-[#fe23d9] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">Behandlungen</span>
                </Link>
                <Link 
                  href="/uber-uns"
                  className="flex items-center space-x-4 text-gray-800 hover:text-[#fe23d9] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">Über uns</span>
                </Link>
                <Link 
                  href="/kontakt"
                  className="flex items-center space-x-4 text-gray-800 hover:text-[#fe23d9] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">Kontakt</span>
                </Link>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link 
                    href="/impressum"
                    className="flex items-center space-x-4 text-gray-500 hover:text-[#fe23d9] transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Impressum</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 