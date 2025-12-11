import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { STATS } from '../constants';
import { Quote, ArrowRight } from 'lucide-react';

export const AboutLegacy: React.FC = () => {
  return (
    <section id="about" className="pt-24 lg:pt-64 pb-32 relative overflow-hidden bg-brand-dark">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 mt-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Timeline & Content Left */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-cyan-500"></div>
              <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">Our Legacy</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-3 leading-tight text-white">
              The Late Abdul Razzaq <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Al-Sane</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-7">May God Bless His Soul</p>
            
            {/* Timeline Item */}
            <div className="relative border-l border-white/10 ml-4 space-y-12">
                {/* 1950s Era */}
                <div className="relative pl-12">
                    <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-cyan-500 rounded-full ring-4 ring-brand-dark"></span>
                    <h3 className="text-xl font-bold text-white mb-4">The Beginning (1950s)</h3>
                    <div className="relative bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md max-w-xl">
                        <Quote className="absolute -top-3 -right-3 text-cyan-500/20 rotate-180" size={40} />
                        <p className="text-slate-300 leading-relaxed">
                            Having trained as a lawyer, Mr. Al-Sane opened a law office in the late 1950s and was the first lawyer in Kuwait to specialize in commercial law. His pioneering spirit laid the foundation for a diversified conglomerate.
                        </p>
                    </div>
                </div>

                {/* Growth Era */}
                <div className="relative pl-12">
                    <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-blue-500 rounded-full ring-4 ring-brand-dark"></span>
                    <h3 className="text-xl font-bold text-white mb-4">Expansion & Diversification</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-xl">
                        Building upon strong legal foundations, the group expanded into education, hospitality, and FMCG, becoming a pillar of the Kuwaiti economy.
                    </p>
                    <a href="#sectors" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 inline-flex items-center gap-1">
                        View our sectors <ArrowRight size={14} />
                    </a>
                </div>
            </div>

            <div className="mt-10">
              <GlassCard className="!p-8 md:!p-10 bg-brand-dark/70 border-white/10">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-2xl font-serif text-white">About Abdul Razzaq Al-Sane &amp; Sons Group</h3>
                    <a href="https://www.aralsane.com/about-aralsane/" className="text-cyan-400 text-sm uppercase tracking-widest inline-flex items-center gap-2 hover:text-white">
                      Find out more <ArrowRight size={14} />
                    </a>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Abdul Razzaq Al-Sane &amp; Sons Group (ARSG) is a diversified holding company with four core business lines operating across multiple sectors including education, water &amp; beverages, hospitality &amp; real estate. A family business with a history dating back over seventy years and a deeply rooted pioneering spirit, the group continues to successfully build upon its current strong and stable assets and drive sustainable profitable growth and expand its market reach within the GCC region and beyond.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['/assets/icons/1948.svg', '/assets/icons/1500.svg', '/assets/icons/divrecity.svg'].map((icon, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 w-28 h-20 flex items-center justify-center">
                        <img src={icon} alt="ARSG fact" className="max-h-12 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Image/Shape Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative pr-4 lg:pr-12">
                <div className="relative aspect-[4/5] rounded-t-[100px] rounded-b-[40px] overflow-hidden border border-white/10 group shadow-2xl">
                    <img 
                        src="/assets/legacy/founder.jpg" 
                        alt="Founder" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-cyan-400 font-serif italic mb-1">"Honesty and integrity are the cornerstones of success."</p>
                        <p className="text-white text-sm opacity-90">Founder (1928 - 2009)</p>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-[60px] opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Floating Glass */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-32">
          {STATS.map((stat, index) => (
            <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                <GlassCard className="relative h-full flex flex-col items-center justify-center text-center !p-8 bg-brand-dark/90 !border-white/5 group-hover:!border-transparent transition-all">
                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">{stat.value}</h4>
                    <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-medium group-hover:text-slate-200 text-center">{stat.label}</p>
                </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
