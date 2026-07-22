"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  quantity: number;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  function updateCartCount() {
    try {
      const savedCart = localStorage.getItem("cart");

      const cart: CartItem[] = savedCart
        ? JSON.parse(savedCart)
        : [];

      const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setCartCount(totalItems);
    } catch {
      setCartCount(0);
    }
  }

  useEffect(() => {
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black/90 px-6 py-4 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Tesla Dealership"
            width={170}
            height={60}
            className="h-auto w-[170px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/finance">Finance</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/cart">
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-800 pt-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link
            href="/inventory"
            onClick={() => setMenuOpen(false)}
          >
            Inventory
          </Link>

          <Link
            href="/compare"
            onClick={() => setMenuOpen(false)}
          >
            Compare
          </Link>

          <Link
            href="/finance"
            onClick={() => setMenuOpen(false)}
          >
            Finance
          </Link>

          <Link
            href="/reviews"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      )}
    </nav>
  );
}