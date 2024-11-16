"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentDialog } from "@/components/ui/appointment-dialog";

interface Treatment {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

const treatments: Treatment[] = [
  {
    id: 1,
    name: "Föhnen",
    subtitle: "Bei Locken 39 CHF Aufschlag",
    description: "Professioneller Haarschnitt inkl. Beratung, Waschen, Schneiden und Föhnen",
    duration: "60 min",
    price: "ab 85 CHF",
    image: "/demo.jpg"
  },
  {
    id: 2,
    name: "Waschen, Schneiden & Föhnen",
    subtitle: "Dauer der Behandlung 30 Minuten",
    description: "Klassischer Herrenhaarschnitt inkl. Waschen und Styling",
    duration: "45 min",
    price: "ab 55 CHF",
    image: "/demo.jpg"
  },
  {
    id: 3,
    name: "Normales Make-up",
    subtitle: "Dauer des Make-up 60 Minuten",
    description: "Professionelle Haarfarbe oder Strähnen inkl. Pflege und Styling",
    duration: "120-180 min",
    price: "ab 120 CHF",
    image: "/demo.jpg"
  },
  {
    id: 4,
    name: "Schneiden",
    subtitle: "Dauer der Behandlung 30 Minuten",
    description: "Natürlich aussehende Farbverläufe mit der Balayage-Technik",
    duration: "150-210 min",
    price: "ab 180 CHF",
    image: "/demo.jpg"
  },
  {
    id: 5,
    name: "Braut Make-up",
    subtitle: "Dauer für den Schöhnsten Tag 120 Minuten",
    description: "Natürlich aussehende Farbverläufe mit der Balayage-Technik",
    duration: "150-210 min",
    price: "ab 180 CHF",
    image: "/demo.jpg"
  }
];

export function TreatmentsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium">AJKUNE PROFESSIONAL</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">UNSERE BEHANDLUNGEN</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Entdecken Sie unsere professionellen Behandlungen. Von klassischen Haarschnitten bis hin zu 
              aufwendigen Farbtechniken - wir bieten Ihnen erstklassige Dienstleistungen für jeden Anspruch.
            </p>
          </div>

          {/* Standort Tabs */}
          <Tabs defaultValue="granichen" className="w-full max-w-6xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-3 bg-[hsl(0_0%_9%)] rounded-lg h-auto p-1 mb-12">
              <TabsTrigger 
                value="granichen" 
                className="py-3 text-white data-[state=active]:bg-[#fe23d9] data-[state=active]:text-white rounded-md transition-all"
              >
                Gränichen
              </TabsTrigger>
              <TabsTrigger 
                value="olten"
                className="py-3 text-white data-[state=active]:bg-[#fe23d9] data-[state=active]:text-white rounded-md transition-all"
              >
                Olten
              </TabsTrigger>
              <TabsTrigger 
                value="spreitenbach"
                className="py-3 text-white data-[state=active]:bg-[#fe23d9] data-[state=active]:text-white rounded-md transition-all"
              >
                Spreitenbach
              </TabsTrigger>
            </TabsList>
            <TabsContent value="granichen">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{treatment.name}</h3>
                          <h4 className="text-sm text-gray-500 mt-1">{treatment.subtitle}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{treatment.duration}</p>
                          <p className="text-lg font-semibold text-[#fe23d9]">{treatment.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 flex-1">{treatment.description}</p>
                      <AppointmentDialog 
                        treatment={treatment.name}
                        location="Gränichen"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="olten">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{treatment.name}</h3>
                          <h4 className="text-sm text-gray-500 mt-1">{treatment.subtitle}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{treatment.duration}</p>
                          <p className="text-lg font-semibold text-[#fe23d9]">{treatment.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 flex-1">{treatment.description}</p>
                      <AppointmentDialog 
                        treatment={treatment.name}
                        location="Olten"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="spreitenbach">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{treatment.name}</h3>
                          <h4 className="text-sm text-gray-500 mt-1">{treatment.subtitle}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{treatment.duration}</p>
                          <p className="text-lg font-semibold text-[#fe23d9]">{treatment.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 flex-1">{treatment.description}</p>
                      <AppointmentDialog 
                        treatment={treatment.name}
                        location="Spreitenbach"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Zusätzliche Informationen */}
          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-6">
              Alle Preise sind Richtpreise und können je nach Aufwand und Haarlänge variieren.
              Für eine genaue Preisauskunft beraten wir Sie gerne persönlich.
            </p>
            <Button 
              className="bg-[#fe23d9] hover:bg-[#fe23d9]/90 text-white px-8"
            >
              Alle Preise ansehen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 