"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-light tracking-widest">
          PARASOL<span className="font-medium"> HUIS</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLink href="/products">PRODUCTS</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
