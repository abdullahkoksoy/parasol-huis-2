"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="hover:text-gray-300 transition-colors">
      {children}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [show, setShow] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (!isHome) return; // Don't attach scroll handler if not home

    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsAtTop(currentY < 50);

      if (currentY > lastY && currentY > 100) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isHome && isAtTop ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 py-0 flex justify-between items-center">
        <Link href="/" className="flex items-center -mt-2">
          <Image
            src="/images/products/logo-parasol.png"
            alt="Parasol Huis Logo"
            width={108}
            height={108}
            className="object-contain"
          />
          <span
            className={`text-xl font-light tracking-widest -ml-14 mt-4 ${
              isHome && isAtTop ? "text-white" : "text-black"
            }`}
          >
            PARASOL<span className="font-medium"> HUIS</span>
          </span>
        </Link>

        <div
          className={`hidden md:flex space-x-8 ${
            isHome && isAtTop ? "text-white" : "text-black"
          }`}
        >
          <NavLink href="/products">PRODUCTEN</NavLink>
          <NavLink href="/about">OVER ONS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
