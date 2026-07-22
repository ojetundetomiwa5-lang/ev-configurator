import Link from "next/link";
import ImageGallery from "../../components/ImageGallery";

const vehicles = {
  "model-s": {
    name: "Model S",
    price: "$74,990",
    images: [
      "/images/model-s.jpg",
      "/images/model-s-interior.jpg",
      "/images/model-s-rear.jpg",
      "/images/model-s-side.jpg",
    ],
    range: "405 miles",
    topSpeed: "200 mph",
    acceleration: "1.99 seconds",
    battery: "100 kWh",
    seats: "5",
    drive: "All-Wheel Drive",
    horsepower: "1,020 hp",
    charging: "Supercharger Compatible",
  },

  "model-3": {
    name: "Model 3",
    price: "$38,990",
    images: [
      "/images/model-3.jpg",
      "/images/model-3-interior.jpg",
      "/images/model-3-rear.jpg",
      "/images/model-3-side.jpg",
    ],
    range: "363 miles",
    topSpeed: "125 mph",
    acceleration: "4.9 seconds",
    battery: "75 kWh",
    seats: "5",
    drive: "Rear-Wheel Drive",
    horsepower: "283 hp",
    charging: "Supercharger Compatible",
  },

  "model-x": {
    name: "Model X",
    price: "$79,990",
    images: [
      "/images/model-x.jpg",
      "/images/model-x-interior.jpg",
      "/images/model-x-rear.jpg",
      "/images/model-x-side.jpg",
    ],
    range: "329 miles",
    topSpeed: "149 mph",
    acceleration: "2.5 seconds",
    battery: "100 kWh",
    seats: "7",
    drive: "All-SWheel Drive",
    horsepower: "1,020 hp",
    charging: "Supercharger Compatible",
  },

  "model-y": {
    name: "Model Y",
    price: "$44,990",
    images: [
      "/images/model-y.jpg",
      "/images/model-y-interior.jpg",
      "/images/model-y-rear.jpg",
      "/images/model-y-side.jpg",
    ],
    range: "337 miles",
    topSpeed: "135 mph",
    acceleration: "4.8 seconds",
    battery: "75 kWh",
    seats: "5",
    drive: "All-Wheel Drive",
    horsepower: "384 hp",
    charging: "Supercharger Compatible",
  },

  cybertruck: {
    name: "Cybertruck",
    price: "$69,990",
    images: [
      "/images/cybertruck.jpg",
      "/images/cybertruck-interior.jpg",
      "/images/cybertruck-rear.jpg",
      "/images/cybertruck-side.jpg",
    ],
    video: "/videos/cybertruck.mp4",
    range: "340 miles",
    topSpeed: "130 mph",
    acceleration: "2.6 seconds",
    battery: "123 kWh",
    seats: "5",
    drive: "All-Wheel Drive",
    horsepower: "845 hp",
    charging: "Supercharger Compatible",
  },

  roadster: {
    name: "Roadster",
    price: "Coming Soon",
    images: [
      "/images/roadster.jpg",
      "/images/roadster-interior.jpg",
      "/images/roadster-rear.jpg",
      "/images/roadster-side.jpg",
    ],
    range: "620 miles",
    topSpeed: "250+ mph",
    acceleration: "1.9 seconds",
    battery: "200 kWh",
    seats: "4",
    drive: "All-Wheel Drive",
    horsepower: "Performance Spec",
    charging: "Supercharger Compatible",
  },
};

type VehicleSlug = keyof typeof vehicles;

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = vehicles[slug as VehicleSlug];

  if (!vehicle) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">Vehicle Not Found</h1>

        <Link
          href="/#vehicles"
          className="mt-6 rounded border border-white px-6 py-3"
        >
          Return to Vehicles
        </Link>
      </main>
    );
  }

  const specifications = [
    { label: "Range", value: vehicle.range },
    { label: "Top Speed", value: vehicle.topSpeed },
    { label: "0–60 mph", value: vehicle.acceleration },
    { label: "Battery", value: vehicle.battery },
    { label: "Seats", value: vehicle.seats },
    { label: "Drive", value: vehicle.drive },
    { label: "Horsepower", value: vehicle.horsepower },
    { label: "Charging", value: vehicle.charging },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="grid grid-cols-1 gap-10 p-6 lg:grid-cols-2 lg:p-10">
        <div className="space-y-6">
          {"video" in vehicle && (
            <video
              src={vehicle.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl object-cover shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          )}

          <ImageGallery images={vehicle.images} name={vehicle.name} />
        </div>

        <div className="flex flex-col justify-center">
          <Link
            href="/#vehicles"
            className="text-gray-400 transition hover:text-white"
          >
            ← Back to Vehicles
          </Link>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            {vehicle.name}
          </h1>

          <p className="mt-4 text-3xl text-gray-300">{vehicle.price}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-700 p-5 text-center">
              <p className="text-2xl font-bold">{vehicle.range}</p>
              <p className="mt-1 text-gray-400">Range</p>
            </div>

            <div className="rounded-xl border border-gray-700 p-5 text-center">
              <p className="text-2xl font-bold">{vehicle.topSpeed}</p>
              <p className="mt-1 text-gray-400">Top Speed</p>
            </div>

            <div className="rounded-xl border border-gray-700 p-5 text-center">
              <p className="text-2xl font-bold">{vehicle.acceleration}</p>
              <p className="mt-1 text-gray-400">0–60 mph</p>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Available Colours</h2>

          <div className="mt-4 flex gap-4">
            <div className="h-10 w-10 rounded-full border-2 border-white bg-white" />
            <div className="h-10 w-10 rounded-full border-2 border-white bg-black" />
            <div className="h-10 w-10 rounded-full border-2 border-white bg-red-700" />
            <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-700" />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/order"
              className="rounded-lg bg-white px-8 py-4 text-center font-bold text-black transition hover:bg-gray-200"
            >
              Order Now
            </Link>

            <Link
              href="/book-test-drive"
              className="rounded-lg border border-white px-8 py-4 text-center font-bold transition hover:bg-white hover:text-black"
            >
              Book Test Drive
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold md:text-5xl">
            Full Specifications
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {specifications.map((specification) => (
              <div
                key={specification.label}
                className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-950 p-6"
              >
                <p className="text-gray-400">{specification.label}</p>

                <p className="text-right text-lg font-semibold">
                  {specification.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}