import { CheckCircle2, ArrowRight } from 'lucide-react';
import ourStories from "../assets/images/ourStory.jpeg";

export const OurStory = () => (
  <section className="bg-black py-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="rounded-[40px] overflow-hidden h-[500px]">
        <img src={ourStories} className="w-full h-full object-cover" alt="Team" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">Nosotros</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">Digital Vector Services nació en Buenos Aires con una misión clara: transformar el potencial de las empresas en realidades digitales de alto impacto. No solo creamos sitios web; diseñamos herramientas estratégicas que impulsan el crecimiento y la presencia de nuestros clientes en un mercado cada vez más exigente.</p>
        <p className="text-gray-400 mb-10 leading-relaxed">A lo largo de los años, nos hemos consolidado como socios expertos en la creación de plataformas seguras, ágiles y preparadas para escalar. Nos apasiona resolver la complejidad técnica para entregar experiencias simples, elegantes y eficientes que conectan a las marcas con su audiencia ideal. Nuestro compromiso es acompañar tu evolución con soluciones robustas que conviertan tus metas en resultados tangibles.</p>
      </div>
    </div>
  </section>
);