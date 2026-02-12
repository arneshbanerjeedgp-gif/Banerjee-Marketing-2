import React from 'react';
import { Section, Button, TextReveal, FadeIn, Marquee, MagneticLink } from '../components/UI';
import { CASE_STUDIES, SERVICES } from '../constants';
import { RouteName } from '../types';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Home: React.FC<{ onNavigate: (r: RouteName) => void }> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end pb-24 md:pb-12 px-6 md:px-12 pt-32 overflow-hidden supports-[height:100svh]:min-h-[100svh]">
         {/* Background video implication or texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
         
         {/* Mobile-optimized blur blob */}
         <div className="absolute top-0 right-0 w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] bg-blue-900/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4 md:translate-x-0 md:translate-y-0" />

         <div className="max-w-[1600px] mx-auto w-full z-10">
           <div className="mb-10 md:mb-12 flex justify-between items-end">
             <FadeIn delay={200}>
               <p className="text-sm md:text-base font-bold uppercase tracking-widest max-w-[280px] md:max-w-xs text-brand-gray leading-relaxed">
                 Strategy, Design & Development for the ambitious.
               </p>
             </FadeIn>
             <FadeIn delay={400} className="hidden md:block">
               <ArrowDown className="w-8 h-8 animate-bounce text-white/50" />
             </FadeIn>
           </div>
           
           {/* Mobile-optimized typography with dynamic stroke width */}
           <h1 className="text-[17vw] md:text-[13.5vw] leading-[0.85] md:leading-[0.8] font-display font-bold uppercase tracking-tighter mb-4 mix-blend-screen [--stroke-width:1px] md:[--stroke-width:2px]">
             <div className="overflow-hidden"><TextReveal delay={100}>Digital</TextReveal></div>
             <div className="overflow-hidden text-transparent" style={{ WebkitTextStroke: 'var(--stroke-width) white' }}><TextReveal delay={200}>Alchemy</TextReveal></div>
           </h1>
         </div>
      </section>

      {/* Marquee Strip */}
      <Marquee items={['Strategy', 'Branding', 'Development', 'Marketing', 'Content', 'Analytics']} />

      {/* Intro Statement */}
      <Section className="border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
             <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">The Agency</span>
           </div>
           <div className="md:col-span-8">
             <FadeIn>
               <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-12">
                 We bridge the gap between <span className="text-gray-500">Silicon Valley data</span> and <span className="text-gray-500">high-end aesthetic precision</span>. We don't just build websites; we architect digital dominance.
               </h2>
               <MagneticLink onClick={() => onNavigate('about')}>Read our philosophy</MagneticLink>
             </FadeIn>
           </div>
        </div>
      </Section>

      {/* Selected Works - Large List Style */}
      <Section>
        <div className="flex justify-between items-end mb-24">
           <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">Selected<br/>Works</h2>
           <Button variant="outline" onClick={() => onNavigate('cases')} className="hidden md:flex">All Projects</Button>
        </div>

        <div className="flex flex-col">
          {CASE_STUDIES.slice(0, 3).map((study, index) => (
            <div 
              key={study.id} 
              className="group py-12 border-t border-white/10 flex flex-col md:flex-row gap-8 md:items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
              onClick={() => onNavigate('cases')}
            >
               <div className="w-full md:w-1/2 aspect-video overflow-hidden">
                 <img 
                   src={study.image} 
                   alt={study.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                 />
               </div>
               <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-between h-full py-4">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-xs font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">{study.category}</span>
                       <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">{study.metric} growth</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">{study.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold uppercase tracking-widest">View Case Study</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities / Services */}
      <Section className="bg-[#0A0A0A] border-y border-white/10" fullWidth>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
             <div className="sticky top-32 h-fit">
               <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 block">Capabilities</span>
               <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
                 Full Stack<br/>Growth
               </h2>
               <p className="text-xl text-brand-gray mb-12 max-w-md font-soft font-light">
                 Our methodology is modular. We deploy specialized squads to tackle specific growth vectors in your business.
               </p>
               <Button onClick={() => onNavigate('services')}>Explore Services</Button>
             </div>
             
             <div className="space-y-6">
               {SERVICES.map((service, i) => (
                 <FadeIn 
                    key={service.id} 
                    delay={i * 150} 
                    direction="left"
                    className="block"
                 >
                    <div 
                      className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-500 group cursor-pointer" 
                      onClick={() => onNavigate(service.route)}
                    >
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-2xl font-soft font-light text-white/30 group-hover:text-white/100 transition-colors">0{i+1}</span>
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all duration-300">
                             <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <h3 className="text-3xl font-soft font-medium tracking-tight mb-3">{service.title}</h3>
                        <p className="text-brand-gray text-base leading-relaxed font-soft font-light">{service.description}</p>
                    </div>
                 </FadeIn>
               ))}
             </div>
          </div>
        </div>
      </Section>

      {/* CTA - Improved with Dark Premium Animated Background */}
      <div className="p-4 md:p-6 pb-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#050505] border border-white/10">
           {/* Texture */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-20" />
           
           {/* Animated Deep Cosmic Mesh Gradients */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-indigo-900/60 rounded-full blur-[120px] animate-[spin_20s_linear_infinite]" />
             <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-blue-900/40 rounded-full blur-[120px] animate-[spin_25s_linear_infinite_reverse]" />
             <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60vw] h-[60vw] bg-violet-900/30 rounded-full blur-[150px] animate-pulse" />
           </div>

           <section className="py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center relative z-30">
             <FadeIn>
               <div className="mb-16">
                 <h2 className="text-[10vw] md:text-[12vw] leading-[0.8] font-display font-bold uppercase tracking-tighter text-white">
                   <span className="block hover:translate-x-4 transition-transform duration-700 drop-shadow-2xl">Let's Make</span>
                   <span className="block text-transparent transition-opacity duration-500" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>History</span>
                 </h2>
               </div>
               
               <button 
                 onClick={() => onNavigate('contact')}
                 className="group relative bg-white text-black px-12 h-20 md:h-24 rounded-full text-lg md:text-xl font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
               >
                 <span className="relative z-10 flex items-center gap-4">
                   Start a Project
                   <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                 </span>
               </button>
             </FadeIn>
           </section>
        </div>
      </div>
    </>
  );
};