// components/CollectionTeaser.tsx
"use client";

import Image from "next/image";

const collections = [
  {
    title: "Beachs",
    image: "/images/products/parasol-beach.jpg",
    href: "#",
  },
  {
    title: "Gardens",
    image: "/images/products/parasol-garden.jpg",
    href: "#",
  },
  {
    title: "Pools",
    image: "/images/products/parasol-pool.jpg",
    href: "#",
  },
  {
    title: "Restaurant & Cafe",
    image: "/images/products/parasol-cafe.jpg",
    href: "#",
  },
];

export default function CollectionTeaser() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {collections.map(({ title, image, href }, i) => (
        <a
          key={i}
          href={href}
          className="group relative block overflow-hidden rounded-lg h-[350px]"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-1 rounded-md text-black font-semibold text-lg transition-opacity duration-300 group-hover:opacity-100 opacity-90 cursor-pointer">
            {title}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </a>
      ))}
    </section>
  );
}
