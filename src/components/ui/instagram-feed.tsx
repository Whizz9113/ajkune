"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Beispiel-Feed-Daten (später durch echte Instagram API ersetzen)
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/feed1.jpg",
    link: "https://instagram.com/post1"
  },
  {
    id: 2,
    imageUrl: "/feed2.jpg",
    link: "https://instagram.com/post2"
  },
  {
    id: 3,
    imageUrl: "/feed3.jpg",
    link: "https://instagram.com/post3"
  },
  {
    id: 4,
    imageUrl: "/feed4.jpg",
    link: "https://instagram.com/post4"
  },
  {
    id: 5,
    imageUrl: "/feed5.jpg",
    link: "https://instagram.com/post5"
  },
  {
    id: 6,
    imageUrl: "/feed6.jpg",
    link: "https://instagram.com/post6"
  },
  {
    id: 7,
    imageUrl: "/feed7.jpg",
    link: "https://instagram.com/post7"
  },
  {
    id: 8,
    imageUrl: "/feed8.jpg",
    link: "https://instagram.com/post8"
  }
];

export function InstagramFeed() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full">
      {instagramPosts.map((post, index) => (
        <motion.a
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square w-full overflow-hidden group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1
          }}
          viewport={{ once: true }}
        >
          <Image
            src={post.imageUrl}
            alt="Instagram Post"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
        </motion.a>
      ))}
    </section>
  );
} 