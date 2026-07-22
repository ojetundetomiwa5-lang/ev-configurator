import Link from "next/link";
import AddToCartButton from "../../components/AddToCartButton";

const products = {
  "solar-panels": {
    name: "Solar Panels",
    category: "Home Energy",
    price: "$12,500",
    image: "/images/solar-panels.jpg",
    description:
      "Tesla Solar Panels help generate clean electricity from your rooftop and can reduce your dependence on the power grid.",
    features: [
      "Clean energy generation",
      "Low-profile design",
      "Works with Powerwall",
      "Suitable for residential use",
    ],
  },

  "solar-roof": {
    name: "Solar Roof",
    category: "Home Energy",
    price: "$18,000",
    image: "/images/solar-roof.jpg",
    description:
      "Tesla Solar Roof combines durable roofing materials with solar energy technology to power your home.",
    features: [
      "Modern roof design",
      "Built-in solar technology",
      "Durable construction",
      "Works with Powerwall",
    ],
  },

  powerwall: {
    name: "Powerwall",
    category: "Battery Storage",
    price: "$8,500",
    image: "/images/powerwall.jpg",
    description:
      "Powerwall stores electricity for later use, helping power your home during outages or when solar energy is unavailable.",
    features: [
      "Backup power during outages",
      "Stores solar energy",
      "Compact wall-mounted design",
      "Energy monitoring support",
    ],
  },

  "wall-connector": {
    name: "Wall Connector",
    category: "Charging",
    price: "$475",
    image: "/images/wall-connector.jpg",
    description:
      "The Wall Connector provides fast and convenient charging for your Tesla vehicle from home.",
    features: [
      "Fast home charging",
      "Indoor and outdoor installation",
      "Wi-Fi connectivity",
      "Compatible with Tesla vehicles",
    ],
  },

  "mobile-connector": {
    name: "Mobile Connector",
    category: "Charging",
    price: "$250",
    image: "/images/mobile-connector.jpg",
    description:
      "The Mobile Connector is a portable charging solution designed for use at home or while travelling.",
    features: [
      "Portable charging",
      "Easy to store",
      "Suitable for travel",
      "Durable charging cable",
    ],
  },

  "tesla-accessories": {
    name: "Tesla Accessories",
    category: "Accessories",
    price: "$150",
    image: "/images/accessories.jpg",
    description:
      "Browse a selection of Tesla accessories, including floor mats, roof racks, charging equipment, and interior products.",
    features: [
      "Vehicle protection accessories",
      "Interior accessories",
      "Charging accessories",
      "Designed for Tesla vehicles",
    ],
  },
};

type ProductSlug = keyof typeof products;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug as ProductSlug];

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Product Not Found</h1>

        <Link
          href="/#energy"
          className="mt-6 rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-black"
        >
          Return to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Link
            href="/#energy"
            className="text-gray-400 transition hover:text-white"
          >
            ← Back to Products
          </Link>

          <p className="mt-10 text-sm uppercase tracking-[0.25em] text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-5 text-3xl font-semibold">{product.price}</p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            {product.description}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Product Features</h2>

            <ul className="mt-4 space-y-3 text-gray-300">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <AddToCartButton
  slug={slug}
  name={product.name}
  price={product.price}
  image={product.image}
/>
        </div>
      </section>
    </main>
  );
}