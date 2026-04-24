import React, { useRef, useState } from 'react'; // Agregamos useRef y useState
import emailjs from '@emailjs/browser';
import Us from "../assets/images/Us.jpg";

export const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplazá estos IDs con los de tu dashboard de EmailJS
    const SERVICE_ID = 'service_evsdeqa';
    const TEMPLATE_ID = 'template_ect9uqe';
    const PUBLIC_KEY = 'syTZ5WKBhwfbJFOIj';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
          form.current.reset(); // Limpia el formulario
      }, (error) => {
          console.log(error.text);
          setStatus({ type: 'error', message: 'Hubo un error. Intentá de nuevo.' });
      });
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Contactanos</h2>
          <div className="lg:flex gap-9">
            <p className="d-flex  text-gray-400 max-w-2xl text-base leading-relaxed">
              Digital Vector Services nació en la Ciudad Autónoma de Buenos Aires, no de una gran corporación, sino de un grupo de profesionales apasionados por la tecnología que, tras años trabajando en el sector, nos dimos cuenta de algo crucial: muchos negocios locales necesitaban confiabilidad y soluciones reales.
            </p>
            <p className="text-gray-400 max-w-2xl text-base leading-relaxed lg:block hidden">
              Entendemos tu mercado porque es el nuestro. Nos propusimos simplificar lo digital para vos, diseñando tu identidad y construyendo tu web para que tu única preocupación sea atender a tus nuevos clientes. Somos el equipo que está ahí.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          <div className="relative rounded-[32px] overflow-hidden border border-white/5 shadow-2xl min-h-[400px] lg:min-h-full">
            <img 
              src={Us}
              alt="Digital Vector Services Office" 
              className="w-full h-full object-cover object-center absolute inset-0" 
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="bg-[#0b0d0b] border border-white/5 p-8 md:p-10 rounded-[32px] shadow-2xl">
            {/* Agregamos el ref y el onSubmit */}
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Nombre*</label>
                  <input 
                    name="user_name" // Agregamos name para EmailJS
                    required
                    type="text" 
                    placeholder="Juan Pérez" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Correo electrónico *</label>
                  <input 
                    name="user_email" // Agregamos name para EmailJS
                    type="email" 
                    required 
                    placeholder="juanperez@company.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Empresa (opcional)</label>
                  <input 
                    name="user_company" 
                    type="text" 
                    placeholder="Empresa S.A" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Teléfono *</label>
                  <input 
                    name="user_phone" 
                    type="tel" 
                    required 
                    placeholder="+54 (11) 0000-0000" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Consulta *</label>
                <textarea 
                  name="message" // Agregamos name para EmailJS
                  rows="6" 
                  required
                  placeholder="Contanos de tu proyecto, expectativas, etc..." 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="cursor-pointer w-full bg-primary text-black px-10 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(theme(colors.primary),0.4)]"
              >
                Enviar
              </button>

              {/* Mensaje de estado */}
              {status.message && (
                <p className={`text-center text-sm font-bold ${status.type === 'success' ? 'text-primary' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};