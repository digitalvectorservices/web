import { Cpu, ShieldCheck, Maximize, MessageSquare, ArrowRight } from 'lucide-react';

export const Feature = ({feature, index}) => {
    return (
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
    )
}