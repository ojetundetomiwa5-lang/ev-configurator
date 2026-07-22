"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      setCart([]);
    }
  }, []);

  function getPriceNumber(price: string) {
    return Number(price.replace(/[^0-9.]/g, ""));
  }

  const total = cart.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  const orderDetails = cart
    .map(
      (item) =>
        `${item.name} — Quantity: ${item.quantity} — Price: ${
          item.price
        } — Subtotal: $${(
          getPriceNumber(item.price) * item.quantity
        ).toLocaleString()}`
    )
    .join("\n");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = formData.get("fullName");
    const customerEmail = formData.get("email");
    const customerPhone = formData.get("phone");
    const deliveryAddress = formData.get("address");

    try {
      const response = await fetch(
        "https://formspree.io/f/xwvgnrnl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            subject: "New Tesla Dealership Order",
            customerName,
            customerEmail,
            customerPhone,
            deliveryAddress,
            orderDetails:
              orderDetails || "No products were found in the cart.",
            totalAmount: `$${total.toLocaleString()}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("The order could not be submitted.");
      }

      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cart-updated"));

      setCart([]);
      setSubmitted(true);
      form.reset();
    } catch {
      setErrorMessage(
        "Your order could not be sent. Please check your internet connection and try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 pt-28 text-white">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            Order Received
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Thank you. Your order information has been sent successfully.
            Our team will contact you with payment and delivery details.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-black"
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-2xl">
        <Link
          href="/cart"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to Cart
        </Link>

        <h1 className="mt-8 text-4xl font-bold md:text-6xl">
          Checkout
        </h1>

        <p className="mt-4 text-gray-400">
          Enter your contact and delivery information.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="mt-4 text-gray-400">
              Your cart is empty.
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.slug}
                  className="flex justify-between gap-4 border-b border-gray-800 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>

                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    $
                    {(
                      getPriceNumber(item.price) * item.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="flex justify-between pt-2 text-xl font-bold">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8"
        >
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block font-medium"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 block font-medium"
            >
              Delivery Address
            </label>

            <textarea
              id="address"
              name="address"
              rows={4}
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          {errorMessage && (
            <p className="rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={sending || cart.length === 0}
            className="w-full rounded-lg bg-white px-8 py-4 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            {sending ? "Sending Order..." : "Submit Order"}
          </button>
        </form>
      </section>
    </main>
  );
}