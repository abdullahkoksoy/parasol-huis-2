"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  img: string;
  href: string;
  category: string;
}

export default function ProductCard({
  product,
  isLarge = false,
}: {
  product: Product;
  isLarge?: boolean;
}) {
  return (
    <Link href={product.href} className="group block bg-white">
      {/* Image wrapper */}
      <div className="relative w-full aspect-[4/5] overflow-hidden -mt-30">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Product name */}
      <div
        className={`text-center text-base font-medium uppercase tracking-wide text-black ${
          isLarge ? "-mt-35" : "-mt-20"
        }`}
      >
        {product.name}
      </div>
    </Link>
  );
}
