"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="pt-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Wer steckt hinter Ajkune Professional */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center mb-32">
            <motion.div 
              className="relative aspect-[3/4] w-full max-w-sm justify-self-end"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/ajkune1.jpg"
                alt="Ajkune Ahmetaj"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              className="space-y-6 pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium">ÜBER AJKUNE PROFESSIONAL</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                WER STECKT HINTER<br />
                AJKUNE PROFESSIONAL?
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                Ajkune Professional steht für Exzellenz und Innovation im Bereich Hairstyling und
                Kosmetik. Hinter dieser Marke steht Ajkune Ahmetaj, eine renommierte kosovo-albanische
                Hairstylistin und Philanthropin mit Sitz in der Schweiz. Mit einem feinen Gespür für Trends
                und einem tiefen Verständnis für die individuellen Bedürfnisse ihrer Kunden hat Ajkune
                eine bemerkenswerte Karriere aufgebaut.
              </p>
            </motion.div>
          </div>

          {/* Unsere Mission - Dunkler Bereich */}
          <div className="bg-[hsl(0_0%_9%)] w-screen relative right-0 py-20" style={{ marginLeft: 'calc(-50vw + 50%)', marginBottom: '-1px' }}>
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 order-2 md:order-1">
                  <span className="text-sm font-medium text-white">AJKUNE PROFESSIONAL</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    UNSERE MISSION
                  </h2>
                  <p className="text-white/80 text-base md:text-lg">
                    Die Zufriedenheit meiner Kunden motiviert mich täglich, neue Produkte zu entwickeln und
                    sie in unserem Salon einzusetzen. Ob im Salon oder im Büro – ich lebe meinen Traum mit
                    Ajkune Professional.
                  </p>
                </div>
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto order-1 md:order-2">
                  <Image
                    src="/geschichte.webp"
                    alt="Unsere Mission"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
} 