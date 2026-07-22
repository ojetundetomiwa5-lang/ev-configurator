import Link from "next/link";

const products = [
  {
    name: "Solar Panels",
    slug: "solar-panels",
    category: "Home Energy",
    description: "Generate clean electricity from your rooftop.",
    image: "/images/solar-panels.jpg",
  },
  {
    name: "Solar Roof",
    slug: "solar-roof",
    category: "Home Energy",
    description: "A modern roof designed to produce solar energy.",
    image: "/images/solar-roof.jpg",
  },
  {
    name: "Powerwall",
    slug: "powerwall",
    category: "Battery Storage",
    description: "Store solar energy and power your home during outages.",
    image: "/images/powerwall.jpg",
  },
  {
    name: "Wall Connector",
    slug: "wall-connector",
    category: "Charging",
    description: "Fast and convenient charging installed at home.",
    image: "/images/wall-connector.jpg",
  },
  {
    name: "Mobile Connector",
    slug: "mobile-connector",
    category: "Charging",
    description: "Portable charging for home and travel.",
    image: "/images/mobile-connector.jpg",
  },
  {
    name: "Tesla Accessories",
    slug: "tesla-accessories",
    category: "Accessories",
    description: "Floor mats, roof racks, chargers and other accessories.",
    image: "/images/accessories.jpg",
  },
];

export default function Energy() {
  return (
    <section id="energy" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold">
          Energy, Charging & Accessories
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Power your vehicle and your home with Tesla products.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-xl border border-gray-700 bg-gray-950 transition hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-gray-400">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 block w-full rounded border border-white py-3 text-center transition hover:bg-white hover:text-black"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}