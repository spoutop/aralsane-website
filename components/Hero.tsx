import React from 'react';
import { Activity, Layers, Target, ArrowRight, Building2, BookOpen, Droplets } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 lg:pt-0 lg:justify-center bg-brand-dark">
      {/* Dynamic Background Wrapper with Overflow Hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pb-40 lg:pb-32">
        
        {/* Left Content - Typography */}
        <div className="max-w-2xl pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">Since 1948</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 text-white animate-slide-up">
            Continual Quest <br />
            {/* Gradient Text */}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pb-2">
              For Excellence
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-lg mb-10 font-light leading-relaxed animate-slide-up animation-delay-500 border-l-2 border-cyan-500/50 pl-6">
            A diversified legacy building a sustainable future across real estate, FMCG, hospitality, and education in the GCC and beyond.
          </p>

          <div className="flex gap-4 animate-slide-up animation-delay-500">
            <a href="#about" className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-cyan-50 transition-colors flex items-center gap-2">
              Explore Our Legacy <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Content - Abstract Image Grid */}
        <div className="relative hidden lg:block h-[600px] w-full animate-float">
            {/* Top Right - Real Estate */}
            <div className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 z-20 group hover:z-50 transition-all duration-500">
                <img src="/assets/hero/section_one_back.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Real Estate developments" />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                    <Building2 className="text-white w-6 h-6" />
                </div>
            </div>
            
            {/* Middle Left - Water & Beverages */}
            <div className="absolute top-40 right-60 w-60 h-60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-6 z-10 group hover:z-50 transition-all duration-500">
                <img src="/assets/hero/abraj-water-home.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Water and beverages" />
                <div className="absolute inset-0 bg-cyan-900/40 mix-blend-overlay"></div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                    <Droplets className="text-white w-6 h-6" />
                </div>
            </div>
            
            {/* Bottom Right - Education (Updated Image: Modern University) */}
            <div className="absolute bottom-20 right-20 w-72 h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-2 z-30 group hover:z-50 transition-all duration-500">
                <img src="/assets/sectors/EDU.jpg" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Education" />
                <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay"></div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2">
                    <BookOpen className="text-white w-6 h-6" />
                    <span className="text-white font-medium text-xs">Education</span>
                </div>
            </div>
            
            {/* Glow effect behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] -z-10"></div>
        </div>
      </div>

      {/* Floating Info Tabs (Bottom) - Overlapping next section */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full z-20 px-6 translate-y-1/2">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Who We Are", icon: Activity, desc: "A family legacy since 1948", link: "#about" },
              { title: "What We Do", icon: Layers, desc: "Diversified Investment Portfolio", link: "#sectors" },
              { title: "How We Do It", icon: Target, desc: "Sustainable & Ethical Growth", link: "#governance" },
            ].map((item, idx) => (
              <a href={item.link} key={idx} className="block group h-full">
                  <div className="relative overflow-hidden bg-brand-dark/95 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 p-6 lg:p-8 flex items-center gap-4 lg:gap-6 transition-all duration-500 hover:-translate-y-2 rounded-xl shadow-lg hover:shadow-cyan-900/20 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 via-cyan-900/0 to-cyan-900/0 group-hover:via-cyan-900/10 transition-all duration-700"></div>
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                      <item.icon className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-serif font-bold text-lg lg:text-xl mb-1 group-hover:text-cyan-400 transition-colors whitespace-nowrap">{item.title}</h3>
                      <p className="text-slate-400 text-xs lg:text-sm">{item.desc}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile view of Info Tabs - Non floating */}
      <div className="lg:hidden w-full z-20 px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid gap-4">
            {[
              { title: "Who We Are", icon: Activity, desc: "A family legacy since 1948", link: "#about" },
              { title: "What We Do", icon: Layers, desc: "Diversified Investment Portfolio", link: "#sectors" },
              { title: "How We Do It", icon: Target, desc: "Sustainable & Ethical Growth", link: "#governance" },
            ].map((item, idx) => (
              <a href={item.link} key={idx} className="block group">
                  <div className="relative overflow-hidden bg-brand-dark/95 backdrop-blur-xl border border-white/10 p-6 flex items-center gap-4 transition-all duration-300 rounded-xl shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-serif font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
