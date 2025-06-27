// app/products/page.tsx
"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import products from "@/lib/parasols";
import Navbar from "@/components/Navbar";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter the list
  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Grab first, second, and sixth (index 5) if they exist
  const first = filtered[0];
  const second = filtered[1];
  const third = filtered[2];
  const fourth = filtered[3];
  const fifth = filtered[4];
  const sixth = filtered[5];
  const seventh = filtered[6];

  // The rest (excluding those three)
  const rest = filtered.filter(
    (_, i) =>
      i !== 0 && i !== 1 && i !== 2 && i !== 3 && i !== 4 && i !== 5 && i !== 6
  );

  return (
    <>
      <Navbar />
      <HeroBanner />

      <div className="max-w-7xl mx-auto px-6 bg-white">
        <FilterBar active={activeCategory} setActive={setActiveCategory} />

        {/* Large cards: first, second, sixth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {first && <ProductCard product={first} isLarge />}
          {second && <ProductCard product={second} isLarge />}
        </div>

        {/* Remaining products in a 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
          {third && <ProductCard product={third} />}
          {fourth && <ProductCard product={fourth} />}
          {fifth && <ProductCard product={fifth} />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-20">
          {sixth && <ProductCard product={sixth} isLarge />}
          {seventh && <ProductCard product={seventh} isLarge />}
        </div>

        {/* Remaining products in a 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {rest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
