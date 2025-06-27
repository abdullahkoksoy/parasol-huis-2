// lib/parasols.ts
export interface Parasol {
  id: string;
  name: string;
  img: string;
  href: string;
  category: string;
}

const parasols: Parasol[] = [
  {
    id: "mega-banana",
    name: "Mega Banana Parasol",
    img: "/images/products/Banana-Mega.jpg",
    href: "/products/mega-banana",
    category: "Banana",
  },
  {
    id: "ronde-avocado",
    name: "Avocado Ronde Parasol",
    img: "/images/products/Avokado-Round-Garden-Parasol.jpg",
    href: "/products/Avokado-Round-Garden-Parasol",
    category: "Avocado",
  },
  {
    id: "ronde-kiwi",
    name: "Kiwi Ronde Strandparasol",
    img: "/images/products/Kiwi-ronde-strandparasol.jpg",
    href: "/products/ronde-kiwi",
    category: "Kiwi",
  },
  {
    id: "Luxe-Telescopische-Parasol",
    name: "Luxe Telescopische Parasol",
    img: "/images/products/Luxe-Telescopische-Parasol.jpg",
    href: "/products/Luxe-Telescopische-Parasol",
    category: "Telescopische",
  },
  {
    id: "Avocado-Vleermuis-Parasol",
    name: "Avocado Vleermuis Parasol",
    img: "/images/products/Avocado-Vleermuis-Parasol.jpg",
    href: "/products/Avocado-Vleermuis-Parasol",
    category: "Avocado",
  },
  {
    id: "T-Model-Dubbele-Parasol",
    name: "T-Model Dubbele Parasol",
    img: "/images/products/T-Model-Dubbele-Parasol.png",
    href: "/products/T-Model-Dubbele-Parasol",
    category: "Dubbele",
  },
  {
    id: "Vierzijdige-Mega-Parasol",
    name: "Vierzijdige Mega Parasol",
    img: "/images/products/Vierzijdige-Mega-Parasol.png",
    href: "/products/Vierzijdige-Mega-Parasol",
    category: "Dubbele",
  },
  {
    id: "ronde-kiwi2",
    name: "Kiwi Ronde Strandparasol",
    img: "/images/products/Kiwi-ronde-strandparasol.jpg",
    href: "/products/ronde-kiwi",
    category: "Kiwi",
  },
  {
    id: "Luxe-Telescopische-Parasol2",
    name: "Luxe Telescopische Parasol",
    img: "/images/products/Luxe-Telescopische-Parasol.jpg",
    href: "/products/Luxe-Telescopische-Parasol",
    category: "Telescopische",
  },
  {
    id: "Avocado-Vleermuis-Parasol2",
    name: "Avocado Vleermuis Parasol",
    img: "/images/products/Avocado-Vleermuis-Parasol.jpg",
    href: "/products/Avocado-Vleermuis-Parasol",
    category: "Avocado",
  },
  // …add more items here…
];

export default parasols;
