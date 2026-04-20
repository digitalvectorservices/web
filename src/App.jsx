import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { WhatsAppButton } from "./components/Whatsapp";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact"

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}



