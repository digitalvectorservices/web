import React from 'react';
import { Cpu, ShieldCheck, Maximize, MessageSquare, ArrowRight } from 'lucide-react';
import { Feature } from './Feature';

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
            <Feature feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
