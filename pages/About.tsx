import React from 'react';
import { Section, PageHeader, FadeIn, TextReveal } from '../components/UI';
import { TEAM } from '../constants';

export const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="The Firm" 
        subtitle="Banerjee Digital is an independent strategy and design consultancy born in the intersection of data science and high art."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
           <div className="lg:col-span-4 sticky top-32">
             <div className="w-full aspect-[3/4] overflow-hidden">
               <img 
                 src="https://picsum.photos/800/1000?random=hq" 
                 alt="HQ" 
                 className="w-full h-full object-cover grayscale contrast-125"
               />
             </div>
             <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-gray">San Francisco, CA</p>
           </div>
           
           <div className="lg:col-span-8">
             <FadeIn>
               <h3 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-12">
                 We reject the generic. In a world where every agency uses the same AI tools to produce the same average results, Banerjee stands for <span className="text-white border-b border-white">crafted excellence</span>.
               </h3>
             </FadeIn>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-gray text-lg leading-relaxed">
                <FadeIn delay={100}>
                  <p>
                    Founded by Arjun Banerjee, our firm operates on a "fewer, better" philosophy. We take on a limited number of clients to ensure obsessive attention to detail and deep strategic immersion. We are not a vendor; we are your growth architects.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p>
                    Our aesthetic is inspired by brutalist architecture and minimalist tech design—strip away the decorative, amplify the essential. We believe that bold design builds trust, and trust builds revenue.
                  </p>
                </FadeIn>
             </div>

             <div className="mt-24 border-t border-white/10 pt-24">
               <h2 className="text-6xl font-display font-bold uppercase tracking-tighter mb-12">Leadership</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
                 {TEAM.map((member) => (
                   <div key={member.id} className="group">
                      <div className="aspect-[4/5] overflow-hidden mb-6 bg-white/5">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <h4 className="text-xl font-bold uppercase">{member.name}</h4>
                      <p className="text-sm font-bold uppercase tracking-widest text-brand-gray mt-1">{member.role}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};