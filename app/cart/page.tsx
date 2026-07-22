"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setLoading(false);
  }, []);

  function saveCart(updatedCart: CartItem[]) {
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  window.dispatchEvent(new Event("cart-updated"));
}

  function increaseQuantity(slug: string) {
    const updatedCart = cart.map((item) =>
      item.slug === slug
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    saveCart(updatedCart);
  }

  function decreaseQuantity(slug: string) {
    const updatedCart = cart
      .map((item) =>
        item.slug === slug
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updatedCart);
  }

  function removeItem(slug: string) {
    const updatedCart = cart.filter((item) => item.slug !== slug);
    saveCart(updatedCart);
  }

  function getPriceNumber(price: string) {
    return Number(price.replace(/[^0-9.]/g, ""));
  }

  const total = cart.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Loading cart...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold md:text-6xl">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-gray-800 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-400">
              Add a product before checking out.
            </p>

            <Link
              href="/#energy"
              className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_350px]">
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.slug}
                  className="flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:flex-row"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-40 sm:w-52">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-gray-400">
                        {item.price} each
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.slug)}
                          className="h-10 w-10 rounded-lg border border-gray-700"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.slug)}
                          className="h-10 w-10 rounded-lg border border-gray-700"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-semibold">
                          $
                          {(
                            getPriceNumber(item.price) * item.quantity
                          ).toLocaleString()}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeItem(item.slug)}
                          className="mt-2 text-sm text-gray-400 hover:text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-2xl border border-gray-800 bg-gray-950 p-6">
              <h2 className="text-2xl font-semibold">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between border-b border-gray-800 pb-5">
                <span className="text-gray-400">Subtotal</span>

                <span className="font-semibold">
                  ${total.toLocaleString()}
                </span>
              </div>

              <Link
                href="/checkout"
                className="mt-8 block rounded-lg bg-white px-6 py-4 text-center font-bold text-black"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/#energy"
                className="mt-4 block text-center text-gray-400 hover:text-white"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}