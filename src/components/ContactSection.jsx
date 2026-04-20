import React from 'react';
import Us from "../assets/images/Us.jpeg";

export const ContactSection = () => {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get in Touch With Us</h2>
          <p className="text-gray-400 max-w-3xl text-base leading-relaxed">
            Founded in 2010, Codespot began as a small team of tech enthusiasts with a vision to redefine digital experiences through innovation, collaboration, and reliable development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Lado Izquierdo: Imagen Única Grande */}
          <div className="relative rounded-[32px] overflow-hidden border border-white/5 shadow-2xl min-h-[400px] lg:min-h-full">
            <img 
              src={Us}
              alt="Codespot Office Environment" 
              className="w-full h-full object-cover object-center absolute inset-0" 
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="bg-[#0b0d0b] border border-white/5 p-8 md:p-10 rounded-[32px] shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Campos de Texto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Your name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">
                    Your email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@company.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Company Inc." 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
                <div>
                  <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" 
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-[11px] font-bold block mb-2 uppercase tracking-wider">Project details (optional)</label>
                <textarea 
                  rows="6" 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-black px-10 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(theme(colors.primary),0.4)]"
              >
                Submit Form
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};