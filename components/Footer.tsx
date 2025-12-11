import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Twitter, Printer } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { ViewState } from '../types';

interface FooterProps {
    onViewChange?: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer id="contact" className="bg-[#050B16] pt-32 pb-10 border-t border-white/5 relative">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          
          {/* Brand & Address */}
          <div className="space-y-10">
            <div>
                <button onClick={() => onViewChange?.('home')} className="flex items-center mb-6 text-left hover:opacity-80 transition-opacity">
                  <img src="/assets/logos/logo_main.svg" alt="ARSG logo" className="h-16 w-auto object-contain drop-shadow-lg" />
                </button>
                
                <p className="text-slate-400 max-w-md leading-relaxed">
                Pursuing long term growth and value creation through investment in diversified sectors. A legacy built on trust, excellence, and innovation.
                </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={18} />
                </div>
                <div>
                    <span className="block text-white font-medium mb-1">Headquarters</span>
                    <span className="text-slate-400 text-sm">{CONTACT_INFO.address}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                    <Phone size={18} />
                </div>
                <div>
                    <span className="block text-white font-medium mb-1">Phone</span>
                    <span className="text-slate-400 text-sm">{CONTACT_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                    <Printer size={18} />
                </div>
                <div>
                    <span className="block text-white font-medium mb-1">Fax</span>
                    <span className="text-slate-400 text-sm">{CONTACT_INFO.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                    <Mail size={18} />
                </div>
                <div>
                    <span className="block text-white font-medium mb-1">Email</span>
                    <span className="text-slate-400 text-sm">{CONTACT_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[300px] lg:h-auto rounded-3xl overflow-hidden group border border-white/10">
            <img 
              src="/assets/legacy/grey_burb.jpg" 
              alt="Map backdrop" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-white font-serif font-bold text-xl mb-2">Kuwait</h4>
                <p className="text-slate-400 text-sm mb-4">P.O. Box 745 Safat 13008 Kuwait</p>
                <a 
                  className="px-6 py-3 bg-white/10 hover:bg-cyan-500 backdrop-blur-md border border-white/20 hover:border-cyan-500 rounded-xl text-white flex items-center gap-2 transition-all w-fit text-sm"
                  href="https://www.google.com/maps/search/?api=1&query=Abdul+Razzaq+Abdul+Hameed+Al-Sane+%26+Sons+Group+Kuwait"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    View on Google Maps <ArrowRight size={16} />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Abdul Razzaq Al-Sane & Sons Group. All Rights Reserved.</p>
          
          <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all">
                    <Icon size={18} />
                </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
