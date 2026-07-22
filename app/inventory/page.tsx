"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const cars = [
  {
    name: "Model S",
    slug: "model-s",
    price: "$74,990",
    priceValue: 74990,
    range: "405 miles",
    rangeValue: 405,
    image: "/images/model-s.jpg",
  },
  {
    name: "Model 3",
    slug: "model-3",
    price: "$38,990",
    priceValue: 38990,
    range: "363 miles",
    rangeValue: 363,
    image: "/images/model-3.jpg",
  },
  {
    name: "Model X",
    slug: "model-x",
    price: "$79,990",
    priceValue: 79990,
    range: "329 miles",
    rangeValue: 329,
    image: "/images/model-x.jpg",
  },
  {
    name: "Model Y",
    slug: "model-y",
    price: "$44,990",
    priceValue: 44990,
    range: "337 miles",
    rangeValue: 337,
    image: "/images/model-y.jpg",
  },
  {
    name: "Cybertruck",
    slug: "cybertruck",
    price: "$69,990",
    priceValue: 69990,
    range: "340 miles",
    rangeValue: 340,
    image: "/images/cybertruck.jpg",
  },
  {
    name: "Roadster",
    slug: "roadster",
    price: "Coming Soon",
    priceValue: 999999,
    range: "620 miles",
    rangeValue: 620,
    image: "/images/roadster.jpg",
  },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  useEffect(() => {
  const savedFavorites = localStorage.getItem("tesla-favorites");

  if (savedFavorites) {
    try {
      setFavorites(JSON.parse(savedFavorites));
    } catch {
      setFavorites([]);
    }
  }

  setFavoritesLoaded(true);
}, []);

useEffect(() => {
  if (favoritesLoaded) {
    localStorage.setItem("tesla-favorites", JSON.stringify(favorites));
  }
}, [favorites, favoritesLoaded]);

  function toggleFavorite(slug: string) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(slug)) {
        return currentFavorites.filter((carSlug) => carSlug !== slug);
      }

      return [...currentFavorites, slug];
    });
  }

  const filteredCars = useMemo(() => {
    let matchingCars = cars.filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    );

    if (showFavoritesOnly) {
      matchingCars = matchingCars.filter((car) =>
        favorites.includes(car.slug)
      );
    }

    return [...matchingCars].sort((firstCar, secondCar) => {
      if (sortOption === "price-low") {
        return firstCar.priceValue - secondCar.priceValue;
      }

      if (sortOption === "price-high") {
        return secondCar.priceValue - firstCar.priceValue;
      }

      if (sortOption === "range-high") {
        return secondCar.rangeValue - firstCar.rangeValue;
      }

      if (sortOption === "range-low") {
        return firstCar.rangeValue - secondCar.rangeValue;
      }

      return firstCar.name.localeCompare(secondCar.name);
    });
  }, [search, sortOption, favorites, showFavoritesOnly]);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-gray-400 transition hover:text-white"
        >
          ← Back to homepage
        </Link>

        <div className="mt-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
            Tesla Dealership
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Available Inventory
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse our selection of Tesla vehicles and save your favorites.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search vehicles..."
            className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-white"
          />

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-white"
          >
            <option value="name">Sort by name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="range-high">Range: High to Low</option>
            <option value="range-low">Range: Low to High</option>
          </select>

          <button
            type="button"
            onClick={() => setShowFavoritesOnly((current) => !current)}
            className={`rounded-xl border px-5 py-4 font-semibold transition ${
              showFavoritesOnly
                ? "border-white bg-white text-black"
                : "border-gray-700 bg-gray-900 text-white hover:border-white"
            }`}
          >
            {showFavoritesOnly
              ? "Showing Favorites"
              : `Favorites (${favorites.length})`}
          </button>
        </div>

        <p className="mt-6 text-center text-gray-400">
          {filteredCars.length} Vehicles Available
        </p>

        {filteredCars.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => {
              const isFavorite = favorites.includes(car.slug);

              return (
                <article
                  key={car.slug}
                  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-2 hover:border-gray-600"
                >
                  <button
                    type="button"
                    onClick={() => toggleFavorite(car.slug)}
                    aria-label={
                      isFavorite
                        ? `Remove ${car.name} from favorites`
                        : `Add ${car.name} to favorites`
                    }
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-2xl backdrop-blur-md transition hover:scale-110"
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>

                  <div className="h-64 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">{car.name}</h2>

                        <p className="mt-2 text-gray-400">
                          Estimated range: {car.range}
                        </p>
                      </div>

                      <p className="text-lg font-semibold">{car.price}</p>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Link
                        href={`/vehicles/${car.slug}`}
                        className="flex-1 rounded-lg bg-white px-5 py-3 text-center font-semibold text-black transition hover:bg-gray-200"
                      >
                        View Details
                      </Link>

                      <Link
                        href="/book-test-drive"
                        className="flex-1 rounded-lg border border-white px-5 py-3 text-center font-semibold transition hover:bg-white hover:text-black"
                      >
                        Test Drive
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">No vehicles found</h2>

            <p className="mt-3 text-gray-400">
              Try changing your search or add some vehicles to your favorites.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}