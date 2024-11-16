"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartPopup } from "@/components/ui/cart-popup";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-[var(--black-trans-60)] border-b border-[#fe23d9]"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo links */}
        <div className="flex-shrink-0">
          <Link href="/" className="relative inline-block">
            <Image
              src="/ajkune_logo.png"
              alt="Ajkune Logo"
              width={160}
              height={42}
              className="object-contain md:w-[200px] md:h-[53px]"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[#fe23d9] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation in der Mitte - Desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 whitespace-nowrap">
          <Link href="/" className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]">
            Startseite
          </Link>
          <Link href="/produkte" className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]">
            Produkte
          </Link>
          <Link href="/behandlungen" className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]">
            Behandlungen
          </Link>
          <Link href="/uber-uns" className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]">
            Über uns
          </Link>
          <Link href="/kontakt" className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]">
            Kontakt
          </Link>
        </nav>

        {/* Warenkorb rechts */}
        <div className="flex-shrink-0 relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-white hover:text-[#fe23d9]"
            onMouseEnter={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Button>
          <CartPopup 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-[var(--black-trans-60)] border-t border-[#fe23d9]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]"
              onClick={() => setIsMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              href="/produkte" 
              className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkte
            </Link>
            <Link 
              href="/behandlungen" 
              className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]"
              onClick={() => setIsMenuOpen(false)}
            >
              Behandlungen
            </Link>
            <Link 
              href="/uber-uns" 
              className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              href="/kontakt" 
              className="text-white text-lg font-medium transition-colors hover:text-[#fe23d9]"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
} 