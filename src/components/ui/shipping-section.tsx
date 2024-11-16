"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ShippingSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Versandinformationen</h1>
            <p className="text-gray-600">Informationen zu Versand und Lieferung</p>
          </div>

          <div className="space-y-12">
            {/* Versandpartner */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Image
                  src="/Swiss_Post_logo_2023.svg.png"
                  alt="Swiss Post"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                Versandpartner
              </h2>
              <p className="text-gray-600">
                Wir versenden alle Bestellungen mit der Schweizerischen Post. Damit gewährleisten 
                wir eine zuverlässige und schnelle Zustellung Ihrer Bestellung.
              </p>
            </div>

            {/* Versandkosten */}
            <div>
              <h2 className="text-xl font-bold mb-4">Versandkosten</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Die Versandkosten betragen pauschal:
                </p>
                <p className="text-2xl font-bold text-[#fe23d9] mb-4">
                  CHF 9.00
                </p>
                <p className="text-gray-600">
                  Dieser Preis gilt für Lieferungen innerhalb der Schweiz und Liechtenstein.
                </p>
              </div>
            </div>

            {/* Liefergebiet */}
            <div>
              <h2 className="text-xl font-bold mb-4">Liefergebiet</h2>
              <p className="text-gray-600">
                Wir liefern an alle Adressen innerhalb:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>der Schweiz</li>
                <li>Liechtenstein (FL)</li>
              </ul>
            </div>

            {/* Lieferzeit */}
            <div>
              <h2 className="text-xl font-bold mb-4">Lieferzeit</h2>
              <p className="text-gray-600">
                Die Lieferzeit beträgt in der Regel 2-3 Werktage nach Zahlungseingang. 
                Bestellungen, die bis 14:00 Uhr bei uns eingehen, werden in der Regel 
                noch am selben Tag versendet.
              </p>
            </div>

            {/* Sendungsverfolgung */}
            <div>
              <h2 className="text-xl font-bold mb-4">Sendungsverfolgung</h2>
              <p className="text-gray-600">
                Nach dem Versand Ihrer Bestellung erhalten Sie von uns eine E-Mail mit 
                der Tracking-Nummer. Mit dieser können Sie den aktuellen Status Ihrer 
                Sendung jederzeit online verfolgen.
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Fragen zum Versand?</h2>
              <p className="text-gray-600 mb-4">
                Bei Fragen zu Ihrer Bestellung oder zum Versand stehen wir Ihnen 
                gerne zur Verfügung:
              </p>
              <p className="text-gray-600">
                Telefon: +41 62 771 07 05<br />
                E-Mail: info@coiffeurajkune.ch
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 