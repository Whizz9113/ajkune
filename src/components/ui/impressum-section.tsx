"use client";

import { motion } from "framer-motion";

export function ImpressumSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Impressum</h1>
            <p className="text-gray-600">Angaben gemäß § 5 TMG</p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Unternehmensangaben</h2>
              <p className="text-gray-600">
                Ajkune Professional GmbH<br />
                Mitteldorfstrasse 34<br />
                5722 Gränichen<br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Kontakt</h2>
              <p className="text-gray-600">
                Telefon: <a href="tel:+41627710705" className="hover:text-[#fe23d9] transition-colors">+41 62 771 07 05</a><br />
                E-Mail: <a href="mailto:info@coiffeurajkune.ch" className="hover:text-[#fe23d9] transition-colors">info@coiffeurajkune.ch</a><br />
                Website: <a href="https://www.ajkune-professional.ch" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe23d9] transition-colors">www.ajkune-professional.ch</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Handelsregister</h2>
              <p className="text-gray-600">
                Handelsregister Kanton Aargau<br />
                UID: CHE-472.664.164
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Geschäftsführung</h2>
              <p className="text-gray-600">
                Ajkune Ahmetaj
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-600">
                UID: CHE-472.664.164<br />
                gemäß §27 a Umsatzsteuergesetz
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Verantwortlich für den Inhalt</h2>
              <p className="text-gray-600">
                WebDevian GmbH<br />
                Schaffhauserstrasse. 6<br />
                8180 Bülach<br />
                Schweiz<br />
                <br />
                Telefon: <a href="tel:+41765424482" className="hover:text-[#fe23d9] transition-colors">+41 76 542 44 82</a><br />
                E-Mail: <a href="mailto:info@webdevian.ch" className="hover:text-[#fe23d9] transition-colors">info@webdevian.ch</a><br />
                Website: <a href="https://www.webdevian.ch" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe23d9] transition-colors">www.webdevian.ch</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Streitschlichtung</h2>
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#fe23d9] transition-colors ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-gray-600 mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 