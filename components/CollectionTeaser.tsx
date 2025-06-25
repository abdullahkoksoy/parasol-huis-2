// components/CollectionTeaser.tsx
"use client";

import Image from "next/image";

const collections = [
  {
    title: "Parasols",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
    href: "#",
  },
  {
    title: "Shade Sails",
    image:
      "https://images.unsplash.com/photo-1522098543979-ffc7f79d4a45?auto=format&fit=crop&w=1500&q=80",
    href: "#",
  },
  {
    title: "Outdoor Curtains",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1500&q=80",
    href: "#",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1486308510493-cb0800e0f53f?auto=format&fit=crop&w=1500&q=80",
    href: "#",
  },
];

export default function CollectionTeaser() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {collections.map(({ title, image, href }, i) => (
        <a
          key={i}
          href={href}
          className="group relative block overflow-hidden rounded-lg"
          style={{ height: "350px" }}
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
