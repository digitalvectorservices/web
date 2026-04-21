import React from 'react';
import { PricingCard } from './PricingCard';

export const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "299",
      description: "Herramientas esenciales de desarrollo y soporte para lanzar proyectos.",
      features: [
        "Configuración de Proyecto Único",
        "Auditoría de Código Base",
        "Integración de APIs",
        "Diseño Responsivo",
        "Optimización Básica",
        "Control de Versiones",
        "Estructura SEO",
        "Integración de Formularios",
        "Soporte por Email"
      ]
    },
    {
      name: "Business",
      price: "699",
      description: "Funciones avanzadas e integraciones para escalar múltiples proyectos.",
      features: [
        "Hasta 3 Proyectos",
        "Revisión de Código Avanzada",
        "Análisis de Rendimiento",
        "Flujos de Automatización",
        "Mejoras de Seguridad",
        "Pipeline de CI/CD",
        "Monitoreo de APIs",
        "Analítica Personalizada",
        "Reportes de Performance",
        "Soporte por Chat",
        "Consultoría Mensual"
      ]
    },
    {
      name: "Enterprise",
      price: "1.999",
      description: "Soluciones integrales diseñadas para sistemas de gran escala y alto rendimiento.",
      features: [
        "Proyectos Ilimitados",
        "Optimización Completa",
        "Planificación de Arquitectura",
        "Despliegue en la Nube",
        "Desarrollo de APIs",
        "Cumplimiento de Seguridad",
        "Paneles Personalizados",
        "Soporte Prioritario",
        "QA Dedicado"
      ]
    }
  ];

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Elige tu Plan</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Selecciona el plan que mejor se adapte a las necesidades de tu negocio.
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