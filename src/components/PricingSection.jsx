import React from 'react';
import { PricingCard } from './PricingCard';

export const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "299",
      description: "Essential development tools and support to launch projects.",
      features: ["Single Project Setup", "Core Code Audit", "API Integration", "Responsive Design", "Basic Optimization", "Version Control", "SEO Structure", "Form Integration", "Email Support"]
    },
    {
      name: "Business",
      price: "699",
      description: "Advanced features and integrations for scaling multiple projects.",
      features: ["Up to 3 Projects", "Advanced Code Review", "Performance Insights", "Automation Workflows", "Security Enhancements", "CI/CD Pipeline", "API Monitoring", "Custom Analytics", "Performance Reports", "Chat Support", "Monthly Consultation"]
    },
    {
      name: "Enterprise",
      price: "1.999",
      description: "Comprehensive solutions crafted for large, performance systems.",
      features: ["Unlimited Projects", "Full Optimization", "Architecture Planning", "Cloud Deployment", "API Development", "Security Compliance", "Custom Dashboards", "Priority Support", "Dedicated QA"]
    }
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pick Your Plan</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Choose the plan that best fits your business needs.
          </p>
        </div>

        {/* Grid responsivo: se apila en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
