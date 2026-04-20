import React from "react";
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
      {/* <Home /> */}
      {/* <Services/> */}
      <Contact/>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}



