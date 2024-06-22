// layout.js
"use client";
import React, { useState } from "react";
import '../styles/globals.css';
import { CartProvider } from './context/CartContext';
import Link from 'next/link';
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-grey shadow-md">
            <div className="max-w-6xl flex items-center justify-between mx-auto p-4 md:p-4">
              <div className="flex items-center">
                <Link href="/" legacyBehavior>
                  <div className="text-white font-semibold text-2xl md:text-3xl ml-0">
                    Product Catalog
                  </div>
                </Link>
              </div>
              <nav className="hidden text-white md:flex gap-6 text-primary items-center font-semibold text-lg">
                <Link href="/" legacyBehavior>
                  <div className="hover:underline">Home</div>
                </Link>
                <Link href="/shop" legacyBehavior>
                  <div className="hover:underline">Shopping</div>
                </Link>
                <Link href="/about" legacyBehavior>
                  <div className="hover:underline">About</div>
                </Link>
                <Link href="/cart" legacyBehavior>
                  <div className="flex items-center hover:underline">
                    <FaShoppingCart className="mr-2" /> Cart
                  </div>
                </Link>
              </nav>
              <div className="md:hidden text-white">
                <button onClick={toggleMenu} className="text-3xl">
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
            {isOpen && (
              <nav className="flex flex-col bg-alabaster md:hidden text-primary font-semibold text-lg py-4">
                <Link href="/" className="py-2 text-center" onClick={toggleMenu} legacyBehavior>
                  Home
                </Link>
                <Link href="/shop" legacyBehavior>
                  <div className="py-2 text-center" onClick={toggleMenu}>Shopping</div>
                </Link>
                <Link href="/about" className="py-2 text-center" onClick={toggleMenu} legacyBehavior>
                  About us
                </Link>
                <Link href="/cart" className="py-2 text-center flex items-center justify-center" onClick={toggleMenu} legacyBehavior>
                  <FaShoppingCart className="mr-2" /> Cart
                </Link>
              </nav>
            )}
            <style jsx>{`
              .hover-bg-sienna:hover {
                background-color: #a0522d; /* Change this to the desired hover color */
              }
            `}</style>
          </header>
          <main className="pt-16">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
