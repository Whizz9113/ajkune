"use client";

import { motion } from "framer-motion";

export function ImpressumSection() {
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
                Telefon: +41 62 771 07 05<br />
                E-Mail: info@coiffeurajkune.ch<br />
                Website: www.ajkune-professional.ch
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
                Telefon: +4176 542 44 82<br />
                info@webdevian.ch<br />
                www.webdevian.ch
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Streitschlichtung</h2>
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr.<br />
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