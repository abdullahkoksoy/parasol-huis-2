import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer3D from "@/components/ProductViewer3D";
import AnimatedSection from "@/components/AnimatedSection";
import ProductConfigurator from "@/components/ProductConfigurator";
import CollectionTeaser from "@/components/CollectionTeaser";
import ProductZoomOnScroll from "@/components/ProductZoomOnScroll";
import ProductZoomOnScroll2 from "@/components/ProductZoomOnScroll2";
import ProductZoomOnScroll3 from "@/components/ProductZoomOnScroll3";
import ProductZoomOnScroll4 from "@/components/ProductZoomOnScroll4";
import ProductZoomOnScroll5 from "@/components/ProductZoomOnScroll5";
import ExploreHabitats from "@/components/ExploreHabitats";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <CollectionTeaser />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ProductZoomOnScroll />
            <ProductZoomOnScroll4 />
            <ProductZoomOnScroll3 />
            <ProductZoomOnScroll2 />
            <ProductZoomOnScroll5 />
          </div>
        </section>

        <ExploreHabitats />

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
