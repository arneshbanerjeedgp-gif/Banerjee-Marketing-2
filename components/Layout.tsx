import React, { useState, useEffect } from 'react';
import { RouteName } from '../types';
import { Menu, X } from 'lucide-react';
import { Chatbot } from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
  currentRoute: RouteName;
  onNavigate: (route: RouteName) => void;
}

export const Navbar: React.FC<{ currentRoute: RouteName; onNavigate: (r: RouteName) => void }> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { label: string; route: RouteName }[] = [
    { label: 'Works', route: 'cases' },
    { label: 'Agency', route: 'about' },
    { label: 'Expertise', route: 'services' },
    { label: 'Journal', route: 'blog' },
    { label: 'Contact', route: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 mix-blend-difference text-white px-6 md:px-12 py-6 flex justify-between items-center ${scrolled ? 'py-4' : 'py-8'}`}>
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-display font-bold uppercase tracking-tighter hover:opacity-70 transition-opacity"
        >
          Banerjee<span className="text-brand-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className="text-sm font-bold uppercase tracking-widest hover-underline-animation"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-brand-black transition-transform duration-700 cubic-bezier(0.8,0,0,1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
             <span className="text-xl font-display font-bold uppercase text-gray-500">Menu</span>
             <button onClick={() => setIsOpen(false)}><X className="w-8 h-8 text-white" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {[{ label: 'Home', route: 'home' as RouteName }, ...menuItems].map((item, i) => (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setIsOpen(false);
                }}
                className="text-5xl font-display font-bold uppercase text-left hover:text-brand-accent transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">San Francisco</p>
            <p className="text-lg font-display">hello@banerjee.digital</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ onNavigate: (r: RouteName) => void }> = ({ onNavigate }) => (
  <footer className="bg-brand-black pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-32">
        <h2 className="text-[12vw] leading-[0.8] font-display font-bold uppercase tracking-tighter mb-12 md:mb-0 select-none text-white/10">
          Banerjee
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
           <div>
             <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">Socials</h3>
             <ul className="space-y-4">
               {['LinkedIn', 'Instagram', 'Twitter', 'Behance'].map((social) => (
                 <li key={social}><a href="#" className="block text-xl font-display hover:translate-x-2 transition-transform">{social}</a></li>
               ))}
             </ul>
           </div>
           <div>
             <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">Menu</h3>
             <ul className="space-y-4">
               {['Works', 'Services', 'Agency', 'Contact'].map((link) => (
                 <li key={link}><button onClick={() => onNavigate(link.toLowerCase() as any)} className="block text-xl font-display hover:translate-x-2 transition-transform">{link}</button></li>
               ))}
             </ul>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
        <div className="flex gap-8 mb-4 md:mb-0">
          <span className="text-xs text-gray-500 uppercase tracking-widest">© 2026 BANERJEE MARKETING</span>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Privacy Policy</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           <span className="text-xs font-bold uppercase tracking-widest">All Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children, currentRoute, onNavigate }) => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-white selection:text-black">
      <Navbar currentRoute={currentRoute} onNavigate={onNavigate} />
      <main className="min-h-screen w-full overflow-hidden">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
};