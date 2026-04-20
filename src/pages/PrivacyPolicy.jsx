import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#0b0d0b] border border-white/5 p-8 md:p-12 rounded-[32px] shadow-2xl">
        
        {/* Título Principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">
          Política de Privacidad
        </h1>

        <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed">
          
          <section>
            <p>
              En <span className="text-white font-semibold">Digital Vector Services</span>, nos comprometemos a proteger su privacidad conforme a la Ley n.º 25.326 de Argentina.
            </p>
          </section>

          {/* Sección con Título y Lista */}
          <section>
            <h3 className="text-white text-lg font-bold mb-4">1. Datos que recolectamos</h3>
            <p className="mb-4">Recopilamos información necesaria para la gestión de proyectos:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Digital Vector Services</li>
              <li>digitalvectorservices@gmail.com</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold mb-4">2. Finalidad</h3>
            <p>
              Los datos se utilizan exclusivamente para responder consultas de desarrollo y mejorar la experiencia en nuestra plataforma.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
};