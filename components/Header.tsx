import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';

interface HeaderProps {
  onViewChange: (view: ViewState) => void;
  currentView: ViewState;
}

export const Header: React.FC<HeaderProps> = ({ onViewChange, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: typeof NAV_ITEMS[0]) => {
    e.preventDefault();
    if (item.action) {
      onViewChange(item.action);
      // Wait for view change to render before scrolling
      setTimeout(() => {
        if (item.href.startsWith('#')) {
            const element = document.querySelector(item.href);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'home' ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
            onClick={() => onViewChange('home')}
            className="flex items-center hover:opacity-90 transition-opacity"
        >
          <img 
            src="/assets/logos/logo_main.svg" 
            alt="Abdul Razzaq Al-Sane Group logo" 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="h-6 w-px bg-white/20 mx-2"></div>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Globe size={20} />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Mail size={20} />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl h-screen">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-serif text-white hover:text-cyan-400"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
