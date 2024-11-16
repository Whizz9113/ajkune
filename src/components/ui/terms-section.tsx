"use client";

import { motion } from "framer-motion";

export function TermsSection() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-4">1. Geltung der AGB</h2>
            <p className="text-gray-600 mb-6">
              Die vorliegenden allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche über die Homepage der Firma getätigten Warenbestellungen. Massgebend ist die zum Zeitpunkt der Bestellung auf der Homepage publizierte Fassung der AGB.
            </p>
            <p className="text-gray-600 mb-6">
              Änderungen der AGB sind jederzeit vorbehalten. Im Weiteren gelten – sofern keine Regelungen in den AGB enthalten sind – die einschlägigen Bestimmungen des Schweizerischen Obligationenrechtes.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Vertragsgebiet</h2>
            <p className="text-gray-600 mb-6">
              Im Onlineshop der Firma sind „momentan" nur Warenlieferungen in der Schweiz und im Fürstentum Liechtenstein vorgesehen. Bestellungen aus anderen Ländern können „leider noch nicht" berücksichtigt werden.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Preise</h2>
            <p className="text-gray-600 mb-6">
              Das Angebot ist gültig, solange der Vorrat reicht. Sämtliche Preise sind in Schweizerfranken angegeben. Pro Lieferung berechnet Coiffeur-ajkune.ch dem Kunden, unabhängig von der Anzahl der Artikel (siehe Ziffer 6. Lieferung), den zum jeweiligen Produktkreis angegebenen Versandkostenanteil.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Vertragsabschluss und Rücktritt</h2>
            <p className="text-gray-600 mb-6">
              Sämtliche Angaben zu Waren und Preisen auf der Homepage der Firma sind freibleibend und unverbindlich. Mit der Bestellung über die Homepage gibt der Kunde ein verbindliches Angebot ab. Die Firma bestätigt die Annahme per E-mail an den Kunden. Erst mit dieser ausdrücklichen Annahme wird ein Vertrag geschlossen und erhält der Kunde Anspruch auf Lieferung der Ware.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Zahlung</h2>
            <p className="text-gray-600 mb-6">
              Die Bezahlung der bestellten Waren erfolgt per Rechnung, PayPal oder Mastercard/Visa. Bei Zahlung per Rechnung, ist diese innert 30 Tagen zu bezahlen. Nach dieser Frist wird eine Gebühr für die Mahnspesen von CHF 15.00 bei der ersten Mahnung erfolgen, bei einer weiteren Mahnung werden nochmals weitere CHF 15.00 auferlegt.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Lieferung</h2>
            <p className="text-gray-600 mb-6">
              Die Lieferungskosten richten sich nach den Tarifen der Schweizerischen Post. Die Warenlieferung erfolgt in der Regel innerhalb von 2-3 Arbeitstagen, Verfügbarkeit vorbehalten. Nutzen und Gefahr liegen ab Abgabe der Ware beim Transporteur beim Kunden.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Eigentumsvorbehalt</h2>
            <p className="text-gray-600 mb-6">
              Bis zur vollständigen Begleichung aller gegen den Kunden bestehenden Ansprüche verbleibt die gelieferte Ware im Eigentum von Coiffeur-ajkune.ch.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Widerrufsrecht</h2>
            <p className="text-gray-600 mb-6">
              Der Kunde hat das Recht, die Ware innert 14 Tagen nach Erhalt zurückzugeben. Das Widerrufsrecht kann nur rechtswirksam ausgeübt werden, wenn die Ware unbenutzt, unbeschädigt, vollständig und in ungeöffneter Originalverpackung zurückgesandt wird.
            </p>
            <p className="text-gray-600 mb-6">
              Die Ware ist auf Kosten sowie Nutzen und Gefahr des Kunden an folgende Adresse zurückzusenden:<br />
              Ajkune Professional GmbH<br />
              Mitteldorfstrasse 34<br />
              5722 Gränichen<br />
              info@coiffeurajkune.ch
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Gewährleistung</h2>
            <p className="text-gray-600 mb-6">
              Coiffeur-ajkune.ch garantiert, die Ware in einwandfreier Qualität zu liefern. Sollten trotzdem Mängel an der gelieferten Ware vorhanden sein, hat der Kunde die Pflicht, innert 8 Tagen nach Lieferung die Mängel schriftlich zu melden.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">10. Datenschutz</h2>
            <p className="text-gray-600 mb-6">
              Sämtliche vom Besteller getätigten Angaben über seine Person werden streng vertraulich behandelt und nur von der Firma selbst genutzt.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">11. Datensicherheit</h2>
            <p className="text-gray-600 mb-6">
              Es wird eine geeignete Sicherheitstechnologie eingesetzt, um die Kundendaten gegen unbefugtes Bearbeiten zu schützen. Für die Sicherheit der im Internet übermittelten Daten kann jedoch keine Haftung übernommen werden. Die Übermittlung der Daten erfolgt unverschlüsselt.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">12. Recht und Gerichtstand</h2>
            <p className="text-gray-600">
              Sämtliche über die Homepage der Firma geschlossenen Verträge unterstehen dem Schweizer Recht. Bei Bestellung durch Privatpersonen für den privaten Gebrauch richtet sich der Gerichtstand nach dem Gerichtstandsgesetz. In allen übrigen Fällen ist Winterthur ausschliesslicher Gerichtstand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 