"use client";

import { motion } from "framer-motion";

export function RevocationSection() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Widerrufsrecht</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Widerrufsbelehrung</h2>
                <p className="text-gray-600">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. 
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, 
                  der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Ausübung des Widerrufsrechts</h2>
                <p className="text-gray-600">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung 
                  (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen 
                  Vertrag zu widerrufen, informieren.
                </p>
                <p className="text-gray-600 mt-4">
                  Der Widerruf ist zu richten an:
                </p>
                <p className="text-gray-600 mt-4">
                  Ajkune Professional GmbH<br />
                  Mitteldorfstrasse 34<br />
                  5722 Gränichen<br />
                  Schweiz<br />
                  <br />
                  E-Mail: info@coiffeurajkune.ch
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Folgen des Widerrufs</h2>
                <p className="text-gray-600">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen 
                  erhalten haben, einschliesslich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, 
                  die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, 
                  günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn 
                  Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags 
                  bei uns eingegangen ist.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Rücksendung der Ware</h2>
                <p className="text-gray-600">
                  Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem 
                  Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden 
                  oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von 
                  vierzehn Tagen absenden.
                </p>
                <p className="text-gray-600 mt-4">
                  Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Ausschluss des Widerrufsrechts</h2>
                <p className="text-gray-600">
                  Das Widerrufsrecht besteht nicht bei folgenden Verträgen:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Verträge zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde</li>
                  <li>Verträge zur Lieferung von Waren, die nach Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Muster-Widerrufsformular</h2>
                <p className="text-gray-600">
                  (Wenn Sie den Vertrag widerrufen wollen, können Sie folgende oder eine ähnliche eindeutige Formulierung verwenden):
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-600">
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)<br /><br />
                    — Bestellt am (*)/erhalten am (*)<br />
                    — Name des/der Verbraucher(s)<br />
                    — Anschrift des/der Verbraucher(s)<br />
                    — Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br />
                    — Datum<br /><br />
                    (*) Unzutreffendes streichen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 