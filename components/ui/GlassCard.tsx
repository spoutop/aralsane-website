import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'dark' | 'light';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, variant = 'light' }) => {
  const baseStyles = "backdrop-blur-xl border rounded-2xl p-8 relative overflow-hidden transition-all duration-500";
  
  const variants = {
    light: "bg-white/5 border-white/10 shadow-xl",
    dark: "bg-black/20 border-white/5 shadow-2xl"
  };

  const hoverStyles = hoverEffect 
    ? "hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]" 
    : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {/* Subtle shine effect element */}
      {hoverEffect && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </div>
  );
};