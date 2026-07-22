"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookTestDrive() {
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
        throw new Error("The test-drive request could not be sent.");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setErrorMessage(
        "Your test-drive request could not be sent. Please check your internet connection and try again."
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
            Test Drive Booked
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Your request has been sent successfully. Our team will
            contact you to confirm the date and location.
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
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white">
      <div className="w-full max-w-xl rounded-xl bg-gray-900 p-8">
        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to homepage
        </Link>

        <h1 className="mb-8 mt-6 text-4xl font-bold">
          Book a Test Drive
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Tesla Test Drive Booking"
          />

          <input
            type="hidden"
            name="requestType"
            value="Test Drive Booking"
          />

          <input
            type="text"
            name="fullName"
            required
            placeholder="Full Name"
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
          />

          <select
            name="vehicle"
            required
            defaultValue=""
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
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

          <div>
            <label
              htmlFor="preferredDate"
              className="mb-2 block text-sm text-gray-300"
            >
              Preferred test-drive date
            </label>

            <input
              id="preferredDate"
              type="date"
              name="preferredDate"
              required
              className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="mb-2 block text-sm text-gray-300"
            >
              Preferred time
            </label>

            <input
              id="preferredTime"
              type="time"
              name="preferredTime"
              required
              className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <input
            type="text"
            name="location"
            required
            placeholder="Preferred Location"
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
          />

          <textarea
            name="notes"
            rows={4}
            placeholder="Additional notes"
            className="w-full rounded bg-gray-800 p-4 outline-none focus:ring-2 focus:ring-white"
          />

          {errorMessage && (
            <p className="rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded bg-white p-4 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            {sending ? "Sending Request..." : "Book Test Drive"}
          </button>
        </form>
      </div>
    </main>
  );
}