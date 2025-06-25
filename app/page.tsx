import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer3D from "@/components/ProductViewer3D";
import AnimatedSection from "@/components/AnimatedSection";
import ProductConfigurator from "@/components/ProductConfigurator";
import CollectionTeaser from "@/components/CollectionTeaser";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <CollectionTeaser />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ProductViewer3D />
          </div>
        </section>

        <AnimatedSection />

        <div className="container mx-auto px-6">
          <ProductConfigurator />
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>PARASOLHUIS © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
