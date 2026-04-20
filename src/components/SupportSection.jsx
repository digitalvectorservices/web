import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Support from "../assets/images/support.jpg";

export const SupportSection = () => {
  const points = [
    "Expert guidance for code deployment and integration",
    "Fast, reliable support for technical challenges",
    "Continuous improvement through feedback and collaboration"
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* We use the same AnimatedCard wrapper logic from before */}
        <div className="relative p-[1.5px] rounded-[32px] overflow-hidden">
          {/* Static Track */}
          <div className="absolute inset-0 rounded-[32px] border border-white/5 z-0"></div>
          
          {/* Moving Snake Border */}
          <div className="absolute inset-[-1000%] animate-border-snake z-0
            bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
          />

          {/* Main Content Container */}
          <div className="relative bg-[#0b0d0b] rounded-[30px] z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              
              {/* Left Side: Content */}
              <div className="p-10 lg:p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Dedicated Support Available <br /> in Every Language
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    Dedicated experts available 24/7 for clear communication, 
                    quick assistance, and outstanding worldwide experiences.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-4">
                  {points.map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle2 size={20} className="text-white shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="bg-primary hover:brightness-110 text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(theme(colors.primary),0.5)]">
                  Get Started Now <ArrowRight size={18} strokeWidth={3} />
                </button>
              </div>

              {/* Right Side: Image with masking */}
              <div className="relative h-full min-h-[400px] lg:min-h-full overflow-hidden">
                {/* Background Glow behind the person */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full"></div>
                
                <img 
                  src={Support} 
                  alt="Support Specialist" 
                  className="relative z-10 w-full h-full object-cover object-center lg:scale-110"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
