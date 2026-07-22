"use client";

import Link from "next/link";
import { useState } from "react";

export default function OrderPage() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xwvgnrnl",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("The vehicle order could not be sent.");
      }

      form.reset();
      setSubmitted(true);
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
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            Vehicle Order Received
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Thank you. Your Tesla order information has been sent
            successfully. Our team will contact you about payment and
            delivery.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-black transition hover:bg-gray-200"
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to homepage
        </Link>

        <h1 className="mt-8 text-4xl font-bold md:text-6xl">
          Order Your Tesla
        </h1>

        <p className="mt-4 text-gray-400">
          Fill in your details and choose the Tesla you want to order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Tesla Vehicle Order"
          />

          <input
            type="hidden"
            name="orderType"
            value="Vehicle Order"
          />

          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block"
            >
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="vehicle"
              className="mb-2 block"
            >
              Choose vehicle
            </label>

            <select
              id="vehicle"
              name="vehicle"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            >
              <option value="" disabled>
                Select a vehicle
              </option>

              <option value="Model S">Model S</option>
              <option value="Model 3">Model 3</option>
              <option value="Model X">Model X</option>
              <option value="Model Y">Model Y</option>
              <option value="Cybertruck">Cybertruck</option>
              <option value="Roadster">Roadster</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="colour"
              className="mb-2 block"
            >
              Choose colour
            </label>

            <select
              id="colour"
              name="colour"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            >
              <option value="" disabled>
                Select a colour
              </option>

              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="deliveryLocation"
              className="mb-2 block"
            >
              Delivery location
            </label>

            <input
              id="deliveryLocation"
              name="deliveryLocation"
              type="text"
              required
              placeholder="Enter your city or address"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="paymentMethod"
              className="mb-2 block"
            >
              Payment option
            </label>

            <select
              id="paymentMethod"
              name="paymentMethod"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            >
              <option value="" disabled>
                Select a payment option
              </option>

              <option value="Full Payment">Full Payment</option>
              <option value="Finance">Finance</option>
              <option value="Contact Me">Discuss with me</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="mb-2 block"
            >
              Additional notes
            </label>

            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Enter any additional information"
              className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          {errorMessage && (
            <p className="rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-white px-6 py-4 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            {sending ? "Sending Order..." : "Submit Order"}
          </button>
        </form>
      </div>
    </main>
  );
}