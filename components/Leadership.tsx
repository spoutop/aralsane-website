import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SHAREHOLDERS, ADVISORY_BOARD_MEMBERS, MANAGEMENT_TEAMS } from '../constants';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            The Essence of Our <br className="md:hidden" />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Success is Our People
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
            {/* Shareholders */}
            <div>
                <h3 className="text-2xl font-serif text-white mb-8 border-l-4 border-cyan-500 pl-4">Shareholders</h3>
                <GlassCard className="!p-0 h-full">
                    <div className="p-8 space-y-6">
                        {SHAREHOLDERS.map((leader, index) => (
                            <div key={index} className="flex justify-between items-start group border-b border-white/5 last:border-0 pb-4 last:pb-0">
                                <div>
                                    <span className="block text-lg text-white font-medium group-hover:text-cyan-400 transition-colors">{leader.name}</span>
                                    <span className="text-sm text-slate-400">{leader.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

            {/* Advisory Board */}
            <div>
                <h3 className="text-2xl font-serif text-white mb-8 border-l-4 border-blue-500 pl-4">Advisory Board</h3>
                <div className="space-y-8">
                    <p className="text-slate-400 leading-relaxed text-sm">
                        The Abdul Razzaq Al-Sane & Sons Group Advisory Board is composed of members with strong experience in executive management and specific market knowledge. Established to complement the Group’s Board of Directors, it offers new and different perspectives on the Group’s operating sectors: water & beverages, hospitality, education and real estate. The Board also provides expertise in investment and finance, offering holistic advice on the economy, investment trends and sector-specific outlooks.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {ADVISORY_BOARD_MEMBERS.map((leader, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 mb-4 group-hover:border-cyan-500 transition-colors">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h4 className="text-white font-bold text-sm">{leader.name}</h4>
                                <p className="text-cyan-500 text-xs uppercase tracking-wide mt-1">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Management Team - Detailed List */}
        <div>
            <div className="text-center mb-12">
                <h3 className="text-3xl font-serif text-white relative inline-block">
                    Management Team
                    <div className="absolute -bottom-2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MANAGEMENT_TEAMS.map((dept, index) => (
                    <GlassCard key={index} className="!p-6 hover:bg-white/5 transition-colors">
                        <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-4 border-b border-white/10 pb-2">
                            {dept.department}
                        </h4>
                        <div className="space-y-4">
                            {dept.members.map((member, mIdx) => (
                                <div key={mIdx}>
                                    <p className="text-white font-medium">{member.name}</p>
                                    <p className="text-slate-400 text-sm mt-0.5">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};
