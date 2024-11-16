"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium">AJKUNE PROFESSIONAL</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">KONTAKTIERE UNS</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Haben Sie Fragen oder Anliegen? Wir sind für Sie da! Füllen Sie einfach das Kontaktformular aus,
              und wir werden uns schnellstmöglich bei Ihnen melden.
            </p>
          </div>

          <div className="w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="vorname" className="text-sm font-medium">
                    Vorname
                  </label>
                  <Input
                    id="vorname"
                    placeholder="Ihr Vorname"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="nachname" className="text-sm font-medium">
                    Nachname
                  </label>
                  <Input
                    id="nachname"
                    placeholder="Ihr Nachname"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-Mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre.email@beispiel.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="telefon" className="text-sm font-medium">
                  Telefon
                </label>
                <Input
                  id="telefon"
                  type="tel"
                  placeholder="+41 62 771 07 05"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="nachricht" className="text-sm font-medium">
                  Ihre Nachricht
                </label>
                <Textarea
                  id="nachricht"
                  placeholder="Wie können wir Ihnen helfen?"
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button 
                className="w-full bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white py-6"
              >
                Nachricht senden
              </Button>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold mb-2">Adresse</h3>
              <p className="text-gray-600">
                Ajkune Professional GmbH<br />
                Mitteldorfstrasse 34<br />
                5722 Gränichen
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Telefon</h3>
              <p className="text-gray-600">
                +41 62 771 07 05
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">E-Mail</h3>
              <p className="text-gray-600">
                info@coiffeurajkune.ch
              </p>
            </div>
          </div>

          <motion.div 
            className="mt-20 pt-20 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">ÖFFNUNGSZEITEN</h2>
              <p className="text-gray-600 mt-4">Wir sind für Sie da</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-[#fe23d9] mb-4">Montag - Freitag</h3>
                    <p className="text-gray-600">08:00 - 18:30</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-[#fe23d9] mb-4">Samstag</h3>
                    <p className="text-gray-600">08:00 - 16:00</p>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-[#fe23d9] mb-4">Wichtige Hinweise</h3>
                    <div className="space-y-4 text-gray-600">
                      <p>Termine auch ausserhalb der Öffnungszeiten nach Vereinbarung möglich</p>
                      <p>An Feiertagen geschlossen</p>
                      <motion.div
                        className="inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button 
                          className="mt-4 bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white"
                        >
                          Termin vereinbaren
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Bereich */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">HIER FINDEN SIE UNS</h2>
              <p className="text-gray-600 mt-4">Besuchen Sie uns in unserem Salon</p>
            </div>

            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_0_50px_0_rgba(0,0,0,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.0305507911747!2d8.111321776889611!3d47.34966647125946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47903b1276bfffff%3A0x3c6f5e1a5d9a5c0!2sMitteldorfstrasse%2034%2C%205722%20Gr%C3%A4nichen!5e0!3m2!1sde!2sch!4v1700139000000!5m2!1sde!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
} 