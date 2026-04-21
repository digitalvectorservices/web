import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { WhatsAppButton } from "./components/Whatsapp";
import { Upbutton } from "./components/Upbutton";
import { Services } from "./pages/Services";
import { AboutUs } from "./pages/AboutUs"
import { Contact } from "./pages/Contact"
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <Upbutton/>
    </div>
  );
}



