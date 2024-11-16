"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section 
      className="relative min-h-[600px] md:h-screen flex items-end md:items-center pb-16 md:pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="flex justify-center md:justify-end w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="max-w-2xl mt-8 md:mt-32"
          >
            <div className="space-y-4 md:space-y-2 text-center md:text-right">
              <motion.p 
                className="text-sm md:text-base font-medium tracking-wider"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                AJKUNE PROFESSIONAL
              </motion.p>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                UNVERGLEICHLICHES<br />
                HAARERLEBNIS
              </motion.h1>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fe23d9]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                WIE EIN STAR
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 