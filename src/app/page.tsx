import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { ProductSection } from "@/components/ui/product-section";
import { LocationsSection } from "@/components/ui/locations-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSection />
      <LocationsSection />
      <TestimonialsSection />
      <InstagramFeed />
      <Footer />
    </>
  );
}
