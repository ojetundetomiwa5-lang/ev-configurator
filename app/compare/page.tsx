"use client";

import { useState } from "react";
import Link from "next/link";

const cars = [
  {
    name: "Model S",
    price: "$74,990",
    range: "405 miles",
    speed: "200 mph",
    acceleration: "1.99 sec",
  },
  {
    name: "Model 3",
    price: "$38,990",
    range: "363 miles",
    speed: "162 mph",
    acceleration: "3.1 sec",
  },
  {
    name: "Model X",
    price: "$79,990",
    range: "329 miles",
    speed: "163 mph",
    acceleration: "2.5 sec",
  },
  {
    name: "Model Y",
    price: "$44,990",
    range: "337 miles",
    speed: "155 mph",
    acceleration: "3.5 sec",
  },
  {
    name: "Cybertruck",
    price: "$69,990",
    range: "340 miles",
    speed: "130 mph",
    acceleration: "2.6 sec",
  },
];

export default function ComparePage() {
  const [carOne, setCarOne] = useState(cars[0]);
  const [carTwo, setCarTwo] = useState(cars[1]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <Link href="/" className="text-gray-400 hover:text-white">
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-5xl font-bold text-center">
          Compare Vehicles
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Compare two Tesla models side by side.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <select
            className="bg-gray-900 border border-gray-700 rounded-lg p-4"
            onChange={(e) =>
              setCarOne(cars.find((car) => car.name === e.target.value)!)
            }
          >
            {cars.map((car) => (
              <option key={car.name}>{car.name}</option>
            ))}
          </select>

          <select
            className="bg-gray-900 border border-gray-700 rounded-lg p-4"
            onChange={(e) =>
              setCarTwo(cars.find((car) => car.name === e.target.value)!)
            }
          >
            {cars.map((car) => (
              <option key={car.name}>{car.name}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto mt-12">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4">{carOne.name}</th>
                <th className="p-4">{carTwo.name}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-gray-700">
                <td className="p-4">Price</td>
                <td className="p-4">{carOne.price}</td>
                <td className="p-4">{carTwo.price}</td>
              </tr>

              <tr className="border-t border-gray-700">
                <td className="p-4">Range</td>
                <td className="p-4">{carOne.range}</td>
                <td className="p-4">{carTwo.range}</td>
              </tr>

              <tr className="border-t border-gray-700">
                <td className="p-4">Top Speed</td>
                <td className="p-4">{carOne.speed}</td>
                <td className="p-4">{carTwo.speed}</td>
              </tr>

              <tr className="border-t border-gray-700">
                <td className="p-4">0–60 mph</td>
                <td className="p-4">{carOne.acceleration}</td>
                <td className="p-4">{carTwo.acceleration}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}