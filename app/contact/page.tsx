import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to homepage
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Speak with our team
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Have questions about a vehicle, delivery, financing, or test
              drives? Send us a message and our dealership team will get back
              to you.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 text-lg">tesladealership95@gmail.com</p>
              </div>

              

              <div>
                <p className="text-sm text-gray-500">Opening hours</p>
                <p className="mt-1 text-lg">
                  Monday to Saturday, 9:00 AM to 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6 rounded-2xl border border-gray-800 bg-gray-950 p-8">
            <div>
              <label className="mb-2 block">Full name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="mb-2 block">Email address</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="mb-2 block">Phone number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="mb-2 block">Subject</label>
              <select
                required
                defaultValue=""
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
              >
                <option value="" disabled>
                  Select a subject
                </option>

                <option value="Vehicle enquiry">Vehicle enquiry</option>
                <option value="Test drive">Test drive</option>
                <option value="Order support">Order support</option>
                <option value="Financing">Financing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block">Message</label>
              <textarea
                required
                rows={6}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-6 py-4 font-bold text-black transition hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}