import React from 'react';
import { Smartphone, Laptop, CreditCard, ArrowRight } from 'lucide-react';
import Feature from "../assets/images/feature.jpg";
import { AnimatedCard, SmallFeature } from './SmallFeature';

export const FeaturesSection = () => {
  const smallFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Innovative mobile apps carefully tailored to your special needs."
    },
    {
      icon: Laptop,
      title: "Integration With Devices",
      description: "Seamless device integration designed to simplify your experience."
    },
    {
      icon: CreditCard,
      title: "Billing Systems",
      description: "Smart billing systems built to simplify financial management."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                Discover All The Powerful <br /> Codespot Features
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Unlock powerful features designed to streamline workflows, 
                enhance collaboration, spark innovation, and help your ideas reach the world faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {smallFeatures.map((f, i) => (
                <SmallFeature feature={f} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Compressed Height */}
          <div className="lg:col-span-5">
           <AnimatedCard className="rounded-[32px]">
  <div className="p-8 flex flex-col items-center text-center justify-center h-full min-h-[450px] gap-6">
    
    {/* Visual Container */}
    <div className="w-full aspect-square max-w-[200px] relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] opacity-40"></div>
      
      {/* The Circle: 
          - overflow-hidden: clips the square image into a circle
          - z-10: keeps it above the glow
      */}
      <div className="w-48 h-48 rounded-full relative z-10 border border-white/10 overflow-hidden flex items-center justify-center bg-[#0b0d0b]">
         
         {/* The Image:
             - w-full h-full: makes it fill the container
             - object-cover: ensures it covers the area without stretching 
         */}
         <img 
            src={Feature} 
            alt="Feature Illustration" 
            className="w-full h-full object-cover block" 
         />
         
      </div>
    </div>
    
    {/* Text Content */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold max-w-[280px] mx-auto leading-snug">
        Where Privacy Meets Performance Excellence
      </h3>
      <p className="text-gray-400 text-sm max-w-[280px] mx-auto">
        Designed to provide privacy, reliability, and security for modern businesses everywhere.
      </p>
      <button className="bg-primary hover:brightness-110 text-black font-black py-3 px-8 rounded-full flex items-center gap-3 mx-auto transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(theme(colors.primary),0.5)] text-sm">
        GET STARTED <ArrowRight size={18} strokeWidth={3} />
      </button>
    </div>
  </div>
</AnimatedCard>
          </div>

        </div>
      </div>
    </section>
  );
};
