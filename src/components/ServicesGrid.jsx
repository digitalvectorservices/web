import React from 'react';
import { Cpu, ShieldCheck, Maximize, MessageSquare, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Powerful API's",
    description: "Build smarter systems using robust, well-documented APIs that simplify integrations and accelerate development processes.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Secure & isolated",
    description: "Maintain complete control with isolated infrastructure designed to safeguard sensitive information and prevent cross-environment risks.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Ready for scale",
    description: "Scale your applications seamlessly with architecture optimized for speed, reliability, and evolving business requirements.",
    icon: <Maximize size={20} />,
  },
  {
    title: "Ongoing context",
    description: "Maintain seamless continuity with real-time context that persists across sessions, workflows, and collaborative environments.",
    icon: <MessageSquare size={20} />,
  },
];

export const ServicesGrid = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 flex flex-col h-full transition-all duration-300 hover:border-primary/30 group"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-10 text-black shadow-[0_0_15px_rgba(theme(colors.primary),0.2)]">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-white text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {feature.description}
                </p>
              </div>

              {/* Action Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Get Started Now <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
