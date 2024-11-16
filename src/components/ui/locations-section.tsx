"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LocationsSection() {
  return (
    <section className="py-10 md:py-20">
      {/* Weißer Bereich */}
      <div className="bg-white mb-16 md:mb-32">
        <div className="container mx-auto px-4">
          {/* Header - Container zentriert, Text links */}
          <div className="flex flex-col items-center py-20 md:py-0">
            <div className="max-w-3xl w-full text-left">
              <span className="text-sm font-medium">AJKUNE PROFESSIONAL</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6">UNSERE STANDORTE</h2>
              <p className="text-base md:text-lg text-gray-600">
                Mit Stolz präsentieren wir Ihnen unsere drei exklusiven Standorte, an denen wir unsere Leidenschaft für professionelle Haarpflege und
                Schönheitspflege leben. Jeder unserer Standorte ist einzigartig und bietet Ihnen ein unvergessliches Erlebnis, sei es in Olten,
                Spreitenbach oder Gränichen. Wir laden Sie ein, die besondere Atmosphäre in jedem unserer Salons zu entdecken und sich von unserem
                hochqualifizierten Team verwöhnen zu lassen.
              </p>
            </div>
          </div>

          {/* Standort Olten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-16 md:mt-32 py-20 md:py-0">
            {/* Bild von rechts */}
            <motion.div 
              className="relative aspect-[4/3] w-full max-w-md mx-auto md:mx-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/olten.jpg"
                alt="Ajkune Professional Olten"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>

            {/* Text von links */}
            <motion.div 
              className="space-y-4 md:space-y-6 pt-4 md:pt-8"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium">AJKUN PROFESSIONAL OLTEN</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                UNSER STANDORT IN<br />OLTEN
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Unser Salon in Olten verkörpert Stil und Eleganz. Hier bieten wir Ihnen eine Oase der
                Entspannung und erstklassiger Haarpflege. Unser erfahrenes Team sorgt dafür, dass Sie
                sich wohlfühlen und mit einem Lächeln unseren Salon verlassen. Erleben Sie in Olten die
                Verbindung von traditioneller Handwerkskunst und modernen Techniken, die Ihr Haar
                zum Strahlen bringen.
              </p>
              <Button 
                variant="outline"
                className="flex items-center gap-2 text-black border-black hover:bg-black hover:text-white transition-colors w-full md:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dunkler Bereich - Spreitenbach */}
      <div className="w-full bg-[hsl(0_0%_9%)] py-20 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8 order-2 md:order-1">
              <span className="text-sm font-medium text-white">NO BASIC ZONE SPREITENBACH</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                UNSER STANDORT IN<br />SPREITENBACH
              </h3>
              <p className="text-white/80 text-base md:text-lg">
                Im Herzen von Spreitenbach erwartet Sie unser No Basic Zone Salon, der für
                Individualität und kreative Freiheit steht. Hier dreht sich alles um Sie und Ihre
                Persönlichkeit. Unser Team von Experten arbeitet mit Ihnen zusammen, um einzigartige
                Looks zu kreieren, die Ihre Persönlichkeit unterstreichen. In Spreitenbach setzen wir auf
                Innovation und Exzellenz, um Ihnen das Beste zu bieten.
              </p>
              <Button 
                variant="outline"
                className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-black transition-colors w-full md:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto md:mx-0 order-1 md:order-2">
              <Image
                src="/olten.jpg"
                alt="No Basic Zone Spreitenbach"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Weißer Bereich - Gränichen */}
      <div className="bg-white py-20 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/olten.jpg"
                alt="Ajkune Professional Gränichen"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
              <span className="text-sm font-medium">AJKUN PROFESSIONAL GRÄNICHEN</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                UNSER STANDORT IN<br />GRÄNICHEN
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Unser Salon in Gränichen ist ein Ort der Verwandlung und des Wohlfühlens. 
                Hier verbinden wir traditionelle Handwerkskunst mit modernster Technik, 
                um Ihnen ein einzigartiges Styling-Erlebnis zu bieten. Unser engagiertes Team 
                steht Ihnen mit Expertise und Kreativität zur Seite, um Ihre individuellen 
                Wünsche zu verwirklichen und Ihre natürliche Schönheit zu betonen.
              </p>
              <Button 
                variant="outline"
                className="flex items-center gap-2 text-black border-black hover:bg-black hover:text-white transition-colors w-full md:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 