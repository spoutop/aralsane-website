import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SECTORS } from '../constants';

export const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
                <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 uppercase">
                    Pursuing Long Term Growth and Value Creation Through Investment in <span className="text-cyan-400">Diversified Sectors</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    We are dedicated to investing and operating in growing sectors that are poised to create value and make a positive impact on our communities. Our four sectors revolve around key elements of human life. Hospitality, food and beverage, education and real estate are permanent necessities across any economic cycles.
                </p>
            </div>
            <div className="hidden md:block">
                <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300">
                    <ArrowUpRight size={28} />
                </button>
            </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {SECTORS.map((sector, index) => {
            // First item (Real Estate) is large (2x2 on desktop)
            const isLarge = index === 0;
            const gridClass = isLarge ? 'md:col-span-2' : 'md:col-span-1';
            
            return (
                <div key={index} className={`group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${gridClass}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/30 transition-colors duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-lg">
                            <sector.icon size={28} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>

                    {sector.logos?.length ? (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {sector.logos.map((logo, logoIdx) => (
                          <div key={logoIdx} className="bg-white/80 rounded-lg px-3 py-2 backdrop-blur-md shadow-inner">
                            <img src={logo} alt={`${sector.title} brand ${logoIdx + 1}`} className="h-8 object-contain" />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    
                    <div>
                        <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors`}>{sector.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-md line-clamp-3 group-hover:line-clamp-none transition-all">
                            {sector.description}
                        </p>
                        {sector.link && (
                          <a href={sector.link} className="inline-flex items-center gap-2 text-cyan-200 text-sm font-semibold mt-3 hover:text-white">
                            Find out more <ArrowUpRight size={16} />
                          </a>
                        )}
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
