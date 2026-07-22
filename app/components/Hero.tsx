"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Model S",
    subtitle: "Plaid",
    description: "Beyond Ludicrous",
    image: "/images/model-s.jpg",
  },
  {
    title: "Model 3",
    subtitle: "Performance",
    description: "Built for Efficiency",
    image: "/images/model-3.jpg",
  },
  {
    title: "Cybertruck",
    subtitle: "Built for Any Planet",
    description: "The Future of Utility",
    image: "/images/cybertruck.jpg",
  },
  {
    title: "Roadster",
    subtitle: "The Fastest Tesla",
    description: "The Future of Speed",
    image: "/images/roadster.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function nextSlide() {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }

  function previousSlide() {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-screen bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl font-bold md:text-8xl">
          {slide.title}
        </h1>

        <p className="mt-4 text-2xl">{slide.subtitle}</p>

        <p className="mt-2 text-lg text-gray-300">
          {slide.description}
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/inventory"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-gray-200"
          >
            Browse Inventory
          </Link>

          <Link
            href="/book-test-drive"
            className="rounded-full border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
          >
            Test Drive
          </Link>
        </div>

        <div className="absolute bottom-8 flex items-center gap-4">
          <button
            onClick={previousSlide}
            className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/40"
          >
            ←
          </button>

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-gray-500"
              }`}
            />
          ))}

          <button
            onClick={nextSlide}
            className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}