import Link from "next/link";

const cars = [
  {
    name: "Model S",
    slug: "model-s",
    price: "Starting at $74,990",
    image: "/images/model-s.jpg",
  },
  {
    name: "Model 3",
    slug: "model-3",
    price: "Starting at $38,990",
    image: "/images/model-3.jpg",
  },
  {
    name: "Model X",
    slug: "model-x",
    price: "Starting at $79,990",
    image: "/images/model-x.jpg",
  },
  {
    name: "Model Y",
    slug: "model-y",
    price: "Starting at $44,990",
    image: "/images/model-y-front.jpg",
  },
  {
    name: "Cybertruck",
    slug: "cybertruck",
    price: "Starting at $69,990",
    image: "/images/cybertruck-front.jpg",
  },
  {
    name: "Roadster",
    slug: "roadster",
    price: "Coming Soon",
    image: "/images/roadster.jpg",
  },
];

export default function Vehicles() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Vehicles</h2>

          <p className="mt-4 text-gray-400">
            Explore our lineup of premium electric vehicles.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.slug}
              className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 transition duration-300 hover:-translate-y-2 hover:border-white"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{car.name}</h3>

                <p className="mt-2 text-gray-400">{car.price}</p>

                <Link
                  href={`/vehicles/${car.slug}`}
                  className="mt-6 block rounded-lg border border-white px-5 py-3 text-center font-semibold transition hover:bg-white hover:text-black"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}