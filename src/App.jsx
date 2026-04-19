import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/Whatsapp";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#031b0f] to-black" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#22c55e,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8">
            We Create World
            <br />
            Advancing
            <br />
            Software With
            <br />
            Vision and Passion
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            We help build the operating system for data-driven companies
            to scale and grow efficiently.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex gap-6 justify-end">
          {/* Card */}
          <div className="bg-gradient-to-b from-[#0f2a1d] to-black border border-green-900/40 rounded-2xl p-8 w-64 shadow-xl">
            <h3 className="text-4xl font-bold mb-4">$500K</h3>
            <p className="text-gray-300 leading-relaxed">
              Saved Through Resource Optimization
            </p>

            <div className="mt-8 h-32 bg-green-500/20 rounded-xl" />
          </div>

          {/* Image placeholder */}
          <div className="w-64 h-[360px] rounded-2xl bg-gradient-to-br from-green-800 to-green-400 shadow-xl" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Clients" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-[#f7f9f8]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {s.value}
            </div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Web Development",
      desc: "High-performance, scalable web applications using modern frameworks.",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-focused interfaces that enhance user experience.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your visibility and ranking on search engines.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition bg-white"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
