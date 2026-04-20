import React from 'react';

export const TermsAndConditions = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#0b0d0b] border border-white/5 p-8 md:p-12 rounded-[32px] shadow-2xl">
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tight">
          Términos y Condiciones
        </h1>

        <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed">
          
          <section>
            <p>
              Bienvenido a <span className="text-white font-semibold">Digital Vector Services</span>. Al acceder a nuestro sitio web y utilizar nuestros servicios de desarrollo y consultoría tecnológica, usted acepta cumplir con los siguientes términos.
            </p>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold mb-4">1. Objeto</h3>
            <p>
              Digital Vector Services, con domicilio en CABA, Argentina, ofrece servicios de desarrollo de software, diseño de aplicaciones y soluciones tecnológicas personalizadas. Estos términos regulan el uso de la plataforma y el contacto inicial para la contratación de dichos servicios.
            </p>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold mb-4">2. Propiedad Intelectual</h3>
            <p>
              Todo el contenido presente en este sitio, incluyendo pero no limitado a logos, diseños, código fuente (React/Vite), textos y gráficos, es propiedad exclusiva de Digital Vector Services o cuenta con las licencias correspondientes. Queda prohibida su reproducción sin autorización previa.
            </p>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold mb-4">3. Responsabilidad</h3>
            <p>
              La empresa no se responsabiliza por:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500">
              <li>Interrupciones temporales del servicio debido a actualizaciones técnicas.</li>
              <li>Uso indebido de la información proporcionada por el usuario en los formularios de contacto.</li>
              <li>Veracidad de los datos ingresados por terceros.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white text-lg font-bold mb-4">4. Jurisdicción y Ley Aplicable</h3>
            <p>
              Para cualquier controversia derivada de la interpretación o cumplimiento de estos términos, las partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción.
            </p>
          </section>

          <section className="pt-6 border-t border-white/5">
            <p className="text-xs">
              Última modificación: 20 de abril de 2026.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
};