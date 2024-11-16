import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ProductDetailSection } from "@/components/ui/product-detail-section";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <ProductDetailSection productId={params.id} />
      <Footer />
    </>
  );
} 