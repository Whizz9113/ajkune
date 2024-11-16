"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Armonda Kryeziu",
    image: "/testimonial1.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  {
    id: 2,
    name: "Conny Wyss",
    image: "/testimonial2.jpg",
    text: "Ich bin seit mehreren Jahren Kundin bei Coiffeur Ajkune! Die Haarqualität ist sensationell und der Service hervorragend! Ein Team, das mit Leidenschaft arbeitet!"
  },
  {
    id: 3,
    name: "Diana Müller",
    image: "/testimonial3.jpg",
    text: "Das beste Beautystudio in der Region! Meine Erwartungen haben sich zu 100% erfüllt. Alle meine Wünsche exakt umgesetzt!"
  },
  {
    id: 4,
    name: "Sarah Weber",
    image: "/testimonial1.jpg",
    text: "Fantastischer Service und hervorragende Beratung! Das Team versteht es perfekt, auf individuelle Wünsche einzugehen. Ich bin begeistert von den Ergebnissen!"
  },
  {
    id: 5,
    name: "Laura Schmidt",
    image: "/testimonial2.jpg",
    text: "Ein absoluter Geheimtipp! Die Atmosphäre ist entspannend und das Team ist hochprofessionell. Hier wird Haarpflege zur Wellness-Erfahrung."
  },
  {
    id: 6,
    name: "Maria Berger",
    image: "/testimonial3.jpg",
    text: "Endlich habe ich meinen Lieblingssalon gefunden! Die Qualität der Produkte und die Expertise des Teams sind unübertroffen. Immer wieder gerne!"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) >= testimonials.length 
        ? 0 
        : prevIndex + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const step = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      return prevIndex - step < 0 
        ? Math.max(testimonials.length - step, 0) 
        : prevIndex - step;
    });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
  );

  return (
    <section className="py-20 md:py-20 bg-[hsl(0_0%_9%)]">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-12">
          <span className="text-sm md:text-base font-medium text-white">KUNDENBEWERTUNGEN</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6 text-white">
            WAS SAGEN<br />
            UNSERE KUNDEN
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Unsere Kunden liegen uns am Herzen und ihre Meinungen über uns auch.
            Hier präsentieren wir euch die neuesten Kundenbewertungen über
            Ajkune Professional.
          </p>
        </div>

        <div className="flex gap-4 mb-6 md:mb-8">
          <button 
            className="w-8 h-8 transition-opacity hover:opacity-70"
            onClick={prevSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="#fe23d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="w-8 h-8 transition-opacity hover:opacity-70"
            onClick={nextSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="#fe23d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-white p-4 md:p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-gray-900 font-medium text-sm md:text-base">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 