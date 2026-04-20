import { CheckCircle2, ArrowRight } from 'lucide-react';
import ourStories from "../assets/images/ourStory.jpeg";

export const OurStory = () => (
  <section className="bg-black py-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="rounded-[40px] overflow-hidden h-[500px]">
        <img src={ourStories} className="w-full h-full object-cover" alt="Team" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">Codespot was founded with a shared vision to push the boundaries of digital innovation and deliver meaningful technology solutions.</p>
        <p className="text-gray-400 mb-10 leading-relaxed">Over the years, we've mastered modern frameworks to build secure, scalable, and high-performing applications.</p>
        {/* <button className="bg-primary text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          Get Started <ArrowRight size={18} />
        </button> */}
      </div>
    </div>
  </section>
);