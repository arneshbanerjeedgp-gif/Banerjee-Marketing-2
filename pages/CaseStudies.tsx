import React from 'react';
import { Section, PageHeader, FadeIn, MagneticLink } from '../components/UI';
import { CASE_STUDIES } from '../constants';

export const CaseStudies: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Archive" 
        subtitle="A collection of defining moments in digital brand architecture."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {CASE_STUDIES.map((study, index) => (
             <FadeIn key={study.id} delay={index * 100}>
               <div className="group cursor-pointer block">
                 <div className="aspect-[4/3] overflow-hidden mb-8 bg-white/5 relative">
                   <div className="absolute inset-0 bg-brand-accent mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                   <img 
                     src={study.image} 
                     alt={study.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                   />
                   <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                     <p className="text-4xl font-display font-bold uppercase">{study.metric}</p>
                     <p className="text-xs font-bold uppercase tracking-widest">{study.metricLabel}</p>
                   </div>
                 </div>
                 
                 <div className="flex justify-between items-start border-t border-white/10 pt-6">
                    <div>
                       <h3 className="text-3xl font-display font-bold uppercase mb-2">{study.title}</h3>
                       <p className="text-sm font-bold uppercase tracking-widest text-brand-gray">{study.category}</p>
                    </div>
                    <MagneticLink>View Case</MagneticLink>
                 </div>
               </div>
             </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};