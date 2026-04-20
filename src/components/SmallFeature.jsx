export const AnimatedCard = ({ children, className = "" }) => (
  <div className={`relative p-[1.5px] rounded-2xl overflow-hidden h-full ${className}`}>
    <div className="absolute inset-0 rounded-2xl border border-white/10 z-0"></div>
    <div 
      className="absolute inset-[-1000%] animate-border-snake z-0
      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
    />
    <div className="relative bg-[#0b0d0b] rounded-[15px] h-full z-10">
      {children}
    </div>
  </div>
);

export const SmallFeature = ({feature, index}) => {
    return (
        <AnimatedCard key={index}>
            <div className="p-6 flex flex-col gap-4"> {/* Reduced padding from p-8 */}
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <feature.icon size={20} />
            </div>
            <div className="space-y-2">
                <h3 className="text-white text-base font-bold">{feature.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
                </p>
            </div>
            </div>
        </AnimatedCard>
    )
}