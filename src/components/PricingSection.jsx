import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PricingCard = ({ plan, index }) => {
  // Calculamos un retraso basado en el índice para que las animaciones no coincidan
  const delay = `${index * 1.5}s`; 

  return (
    <div className="relative p-[1.5px] rounded-[32px] overflow-hidden h-full">
      {/* Borde Estático de fondo */}
      <div className="absolute inset-0 rounded-[32px] border border-white/5 z-0"></div>
      
      {/* Animación de Borde Snake Desincronizada */}
      <div 
        className="absolute inset-[-1000%] animate-border-snake z-0
        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
        style={{ animationDelay: delay }} // Aplicamos el delay dinámico
      />

      {/* Contenido de la Tarjeta */}
      <div className="relative bg-[#0b0d0b] rounded-[30px] p-8 flex flex-col h-full z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="min-h-[60px]">
            <h3 className="text-white text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 text-[11px] mt-2 leading-relaxed">{plan.description}</p>
          </div>
          {/* Badge opcional para mantener el diseño original si lo deseas */}
          {plan.name === "Business" && (
            <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 uppercase tracking-wider shrink-0">
              Popular
            </span>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <p className="text-gray-500 text-[10px] mt-1">Billed annually</p>
        </div>

        {/* Botón con el mismo color primario para todas */}
        <button className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-primary text-black transition-all hover:brightness-110 active:scale-95 mb-8 shadow-[0_0_20px_rgba(theme(colors.primary),0.2)]">
          Get started now <ArrowRight size={16} strokeWidth={3} />
        </button>

        <ul className="space-y-4 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-300 text-[12px]">
              <CheckCircle2 size={16} className="text-white shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
