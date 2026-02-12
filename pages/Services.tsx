import React from 'react';
import { Section, PageHeader, Button, FadeIn, TextReveal } from '../components/UI';
import { SERVICES } from '../constants';
import { RouteName } from '../types';
import { ArrowDownRight } from 'lucide-react';

export const Services: React.FC<{ onNavigate: (r: RouteName) => void }> = ({ onNavigate }) => {
  return (
    <>
      <PageHeader 
        title="Capabilities" 
        subtitle="Modular growth systems designed for scalability and impact."
      />

      <Section>
        {/* Changed from rectangular list to rounded card grid to match Home page */}
        <div className="space-y-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} direction="up">
              <div 
                className="bg-white/5 rounded-[2rem] border border-white/10 group relative p-8 md:p-12 hover:border-white/40 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                onClick={() => onNavigate(service.route)}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 relative z-10">
                  <div className="md:w-1/3">
                    <span className="text-sm font-soft font-light text-brand-gray mb-4 block tracking-widest">0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-soft font-medium tracking-tight group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="md:w-1/3">
                    <p className="text-lg text-brand-gray leading-relaxed mb-8 font-soft font-light">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {['Audit', 'Strategy', 'Execution', 'Optimization'].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm uppercase tracking-widest text-gray-500 font-sans">
                           <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-brand-accent transition-colors"/> {step}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="font-soft">Explore {service.title}</Button>
                  </div>
                  
                  <div className="md:w-1/12 flex justify-end">
                     <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all duration-500">
                        <ArrowDownRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:-rotate-90 transition-all duration-500" />
                     </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};