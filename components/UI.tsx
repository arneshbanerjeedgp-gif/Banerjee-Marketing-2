import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// --- Text Reveal Animation ---
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`text-reveal-wrapper ${isVisible ? 'is-visible' : ''} ${className}`}>
      <div className="text-reveal block">
        {children}
      </div>
    </div>
  );
};

// --- Fade In Container with Direction ---
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'up': return 'opacity-0 translate-y-12';
      case 'down': return 'opacity-0 -translate-y-12';
      case 'left': return 'opacity-0 -translate-x-12'; // Enters from left (starts at -12)
      case 'right': return 'opacity-0 translate-x-12'; // Enters from right (starts at +12)
      case 'none': return 'opacity-0';
      default: return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Buttons ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "relative px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group font-sans";
  
  const variants = {
    primary: "bg-white text-black hover:bg-[#EAEAEA]",
    outline: "bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-white hover:opacity-70 p-0"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant !== 'ghost' && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

// --- Magnetic Link ---
export const MagneticLink: React.FC<{ children: ReactNode; onClick?: () => void; className?: string }> = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`group relative flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/80 transition-colors ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform duration-300" />
      {children}
    </button>
  );
};

// --- Section Layout ---
export const Section: React.FC<{ children: ReactNode; className?: string; fullWidth?: boolean }> = ({ children, className = '', fullWidth = false }) => (
  <section className={`py-24 md:py-32 ${fullWidth ? 'w-full' : 'max-w-[1600px] mx-auto px-6 md:px-12'} ${className}`}>
    {children}
  </section>
);

// --- Page Header ---
export const PageHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-white/10">
    <div className="overflow-hidden mb-6">
       <h1 className="text-6xl md:text-[8vw] leading-[0.85] font-display font-bold uppercase tracking-tighter">
         <TextReveal>{title}</TextReveal>
       </h1>
    </div>
    {subtitle && (
      <FadeIn delay={300}>
        <div className="flex flex-col md:flex-row gap-6 md:items-start max-w-3xl">
          <ArrowUpRight className="w-8 h-8 text-brand-accent md:mt-2" />
          <p className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed">{subtitle}</p>
        </div>
      </FadeIn>
    )}
  </section>
);

// --- Marquee ---
export const Marquee: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse = false }) => (
  <div className="w-full overflow-hidden border-y border-white/10 bg-brand-black py-6">
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-12 mx-6">
          <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent stroke-text opacity-30 whitespace-nowrap" style={{ WebkitTextStroke: '1px #555' }}>
            {item}
          </span>
          <div className="w-3 h-3 bg-brand-accent rounded-full" />
        </div>
      ))}
    </div>
  </div>
);