import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutLegacy } from './components/AboutLegacy';
import { Sectors } from './components/Sectors';
import { Leadership } from './components/Leadership';
import { Governance } from './components/Governance';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import { ViewState } from './types';
import { ShieldCheck, Heart, ArrowLeft } from 'lucide-react';
import { GOVERNANCE_CONTENT } from './constants';

// Page Components (Inline to keep file count managed, as requested pattern)
const GovernancePage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in min-h-screen">
    <button onClick={onBack} className="flex items-center gap-2 text-cyan-500 hover:text-white mb-8 transition-colors">
      <ArrowLeft size={20} /> Back to Home
    </button>
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <ShieldCheck className="text-cyan-500 w-12 h-12" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{GOVERNANCE_CONTENT.full.title}</h1>
      </div>
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl space-y-8">
        <p className="text-slate-300 text-lg leading-relaxed">{GOVERNANCE_CONTENT.full.p1}</p>
        <p className="text-slate-300 text-lg leading-relaxed">{GOVERNANCE_CONTENT.full.p2}</p>
        
        <div className="bg-cyan-900/20 p-8 rounded-2xl border border-cyan-500/20">
          <h3 className="text-xl font-bold text-white mb-6">{GOVERNANCE_CONTENT.full.listIntro}</h3>
          <ul className="space-y-4">
            {GOVERNANCE_CONTENT.full.list.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-cyan-100">
                <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CharityPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in min-h-screen">
    <button onClick={onBack} className="flex items-center gap-2 text-cyan-500 hover:text-white mb-8 transition-colors">
      <ArrowLeft size={20} /> Back to Home
    </button>
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Heart className="text-pink-500 w-12 h-12" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{GOVERNANCE_CONTENT.csrFull.title}</h1>
      </div>
      <div className="bg-gradient-to-br from-white/5 to-purple-900/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        
        <p className="text-slate-300 text-lg leading-relaxed relative z-10">{GOVERNANCE_CONTENT.csrFull.p1}</p>
        <p className="text-slate-300 text-lg leading-relaxed relative z-10">{GOVERNANCE_CONTENT.csrFull.p2}</p>
        
        <div className="grid md:grid-cols-3 gap-4 pt-8">
            {['Scholarships', 'Research Support', 'Financial Aid'].map((tag, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white font-medium hover:bg-white/10 transition-colors">
                    {tag}
                </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden flex flex-col">
      <Header onViewChange={setView} currentView={view} />
      
      <main className="flex-grow relative">
        {view === 'home' && (
          <>
            <Hero />
            <AboutLegacy />
            <Sectors />
            <Leadership />
            <Governance onViewChange={setView} />
          </>
        )}
        {view === 'governance' && <GovernancePage onBack={() => setView('home')} />}
        {view === 'charity' && <CharityPage onBack={() => setView('home')} />}
      </main>

      <Footer onViewChange={setView} />
      <GeminiChat />
    </div>
  );
}

export default App;