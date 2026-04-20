import React from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <Stats/>
      <Services/>
    </div>
  );
}