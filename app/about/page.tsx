import Link from "next/link";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-gray-400 hover:text-white">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-5xl font-bold">
          About Your Dealership Name
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-8">
          At TESLA DELARSHIP, we are passionate about delivering premium
          electric vehicles with exceptional customer service. Our goal is to
          make the car-buying experience simple, transparent, and enjoyable.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-400">
              Deliver innovative electric vehicles while providing a first-class
              customer experience.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-400">
              To become one of the world's leading electric vehicle dealerships.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            <p className="mt-4 text-gray-400">
              Premium vehicles, expert support, secure ordering, and excellent
              after-sales service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}