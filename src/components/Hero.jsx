"use client";
import { useState, useEffect } from "react";
import hero1 from "../assets/images/hero1.jpeg";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

const slides = [
  {
    image: hero1,
    title:
      "We Create World Advancing Software With Vision and Passion",
    description:
      "We help build the operating system for data-driven companies to find and pull their performance levers.",
  },
  {
    image: hero1,
    title:
      "Building Digital Products That Scale With Your Business",
    description:
      "From idea to execution, we deliver high-quality software solutions tailored to your growth.",
  },
  {
    image: hero1,
    title:
      "Empowering Innovation Through Modern Technology",
    description:
      "We design and develop cutting-edge solutions that help companies stay ahead of the curve.",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-16">
        <div className="max-w-md sm:max-w-lg md:max-w-xl text-white text-center md:text-left flex flex-col items-center md:items-start">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            {slide.description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Primary */}
            <button className="bg-[var(--color-primary)] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-medium hover:brightness-110 transition">
              Get started now →
            </button>

            {/* Secondary */}
            <button className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl font-medium text-white border border-white/30 hover:bg-white/10 transition">
              Learn more →
            </button>

          </div>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
            <div className="flex -space-x-3">
              <img src={avatar1} className="w-8 h-8 rounded-full border border-black" />
              <img src={avatar2} className="w-8 h-8 rounded-full border border-black" />
              <img src={avatar3}  className="w-8 h-8 rounded-full border border-black" />
            </div>

            <div>
              <p className="text-sm text-gray-300">
                Trusted by industry experts
              </p>
              <p className="text-sm text-white">★★★★★ 4.9</p>
            </div>
          </div>

        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? "bg-[var(--color-primary)] scale-110"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};