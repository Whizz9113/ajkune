"use client";

import { motion } from "framer-motion";

export function PrivacySection() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-bold mb-2">Allgemeine Hinweise</h3>
                <p className="text-gray-600">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                  werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">2. Datenerfassung auf unserer Website</h2>
                <h3 className="text-lg font-bold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p className="text-gray-600">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
                  Impressum dieser Website entnehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">3. Wie erfassen wir Ihre Daten?</h2>
                <p className="text-gray-600">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
                  die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme 
                  erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">4. Wofür nutzen wir Ihre Daten?</h2>
                <p className="text-gray-600">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
                  zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">5. Analyse-Tools und Tools von Drittanbietern</h2>
                <p className="text-gray-600">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies 
                  und mit sogenannten Analyseprogrammen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">6. Welche Rechte haben Sie bezüglich Ihrer Daten?</h2>
                <p className="text-gray-600">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser 
                  Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im 
                  Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">7. Kontaktformular</h2>
                <p className="text-gray-600">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der 
                  von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">8. Newsletter</h2>
                <p className="text-gray-600">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse 
                  sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind 
                  und mit dem Empfang des Newsletters einverstanden sind.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-gray-600">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. 
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                  "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">10. Shopify</h2>
                <p className="text-gray-600">
                  Unser Online-Shop wird auf der Plattform von Shopify Inc. betrieben. Shopify speichert Ihre Daten auf Servern in den USA. 
                  Die Übermittlung Ihrer Daten in die USA erfolgt auf Grundlage von EU-Standardvertragsklauseln. Shopify ist unter dem 
                  Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten.
                </p>
                <p className="text-gray-600 mt-4">
                  Shopify verwendet Ihre Daten zum einen, um den Betrieb unseres Online-Shops zu ermöglichen, zum anderen für Analysen 
                  und Statistiken. Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen, d.h. Interesse an einer sicheren 
                  und effizienten Bereitstellung unseres Online-Angebots.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">11. Google Analytics</h2>
                <p className="text-gray-600">
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für 
                  die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt 
                  die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend "Google" genannt.
                </p>
                <p className="text-gray-600 mt-4">
                  Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse 
                  der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung 
                  dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                </p>
                <p className="text-gray-600 mt-4">
                  Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse 
                  an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">12. Google Maps</h2>
                <p className="text-gray-600">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, 
                  Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-gray-600 mt-4">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden 
                  in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat 
                  keinen Einfluss auf diese Datenübertragung.
                </p>
                <p className="text-gray-600 mt-4">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer 
                  leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne 
                  von Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p className="text-gray-600 mt-4">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: 
                  https://policies.google.com/privacy?hl=de
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 