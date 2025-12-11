import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { GOVERNANCE_CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface GovernanceProps {
    onViewChange?: (view: ViewState) => void;
}

export const Governance: React.FC<GovernanceProps> = ({ onViewChange }) => {
  return (
    <section id="governance" className="py-24 relative overflow-hidden bg-brand-dark">
        {/* Abstract Background */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Governance Section */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{GOVERNANCE_CONTENT.summary.title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <GlassCard variant="dark" className="p-0 overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                        <GOVERNANCE_CONTENT.summary.icon className="w-12 h-12 text-cyan-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{GOVERNANCE_CONTENT.summary.subtitle}</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            {GOVERNANCE_CONTENT.summary.description}
                        </p>
                        <button 
                            onClick={() => onViewChange?.('governance')}
                            className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors gap-2 group/btn"
                        >
                            Find out more <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="relative min-h-[400px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark via-transparent to-transparent z-10 hidden lg:block"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                            alt="Corporate Governance" 
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* CSR Section */}
        <div className="text-center max-w-4xl mx-auto">
            <div className="mb-12">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Giving Back</span>
                <h2 className="text-4xl font-serif font-bold text-white">{GOVERNANCE_CONTENT.csr.title}</h2>
            </div>

            <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 rotate-1"></div>
                <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 -rotate-1"></div>

                <GlassCard className="!p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>
                    
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                        <GOVERNANCE_CONTENT.csr.icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{GOVERNANCE_CONTENT.csr.subtitle}</h3>
                    <p className="text-slate-300 leading-relaxed mb-8">
                        {GOVERNANCE_CONTENT.csr.description}
                    </p>
                    
                    <button 
                        onClick={() => onViewChange?.('charity')}
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all text-sm uppercase tracking-wider"
                    >
                        Find out more
                    </button>
                </GlassCard>
            </div>
        </div>
      </div>
    </section>
  );
};
