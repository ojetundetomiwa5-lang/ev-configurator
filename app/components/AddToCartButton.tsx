"use client";

import { useState } from "react";

type AddToCartButtonProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export default function AddToCartButton({
  slug,
  name,
  price,
  image,
}: AddToCartButtonProps) {
  const [message, setMessage] = useState("");

  function addToCart() {
    const savedCart = localStorage.getItem("cart");

    const cart: CartItem[] = savedCart
      ? JSON.parse(savedCart)
      : [];

    const existingProduct = cart.find(
      (item) => item.slug === slug
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        slug,
        name,
        price,
        image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));

    setMessage("Added to cart ✓");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={addToCart}
        className="w-full rounded-lg bg-white px-8 py-4 font-bold text-black transition hover:bg-gray-200"
      >
        Add to Cart
      </button>

      <p className="mt-3 h-6 text-center text-green-400">
        {message}
      </p>
    </div>
  );
}