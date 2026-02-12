import React from 'react';
import { Section, PageHeader, Button, FadeIn, MagneticLink } from '../components/UI';

export const Contact: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Initiate" 
        subtitle="Ready to redefine your category? Let's start the conversation."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <FadeIn>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-12">Contact Details</h2>
              <div className="space-y-12">
                 <div className="border-b border-white/10 pb-12">
                   <p className="text-sm font-bold uppercase tracking-widest text-brand-gray mb-2">New Business</p>
                   <a href="mailto:hello@banerjee.digital" className="text-4xl font-display font-bold hover:text-brand-accent transition-colors">hello@banerjee.digital</a>
                 </div>
                 
                 <div className="border-b border-white/10 pb-12">
                   <p className="text-sm font-bold uppercase tracking-widest text-brand-gray mb-2">Office</p>
                   <p className="text-2xl font-light">
                     101 Marketing St, Suite 500<br/>
                     San Francisco, CA 94105
                   </p>
                 </div>

                 <div className="flex gap-8">
                    <MagneticLink>LinkedIn</MagneticLink>
                    <MagneticLink>Instagram</MagneticLink>
                    <MagneticLink>Twitter</MagneticLink>
                 </div>
              </div>
            </FadeIn>
          </div>

          <div>
             <FadeIn delay={200}>
               <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                 <div className="relative group">
                   <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-accent transition-colors placeholder-white/20" />
                 </div>
                 <div className="relative group">
                   <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-accent transition-colors placeholder-white/20" />
                 </div>
                 <div className="relative group">
                   <select className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-accent transition-colors text-white/50">
                     <option className="bg-brand-black">Project Type</option>
                     <option className="bg-brand-black">Branding</option>
                     <option className="bg-brand-black">Web Design</option>
                     <option className="bg-brand-black">Marketing</option>
                   </select>
                 </div>
                 <div className="relative group">
                   <textarea rows={4} placeholder="Tell us about the project" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-display focus:outline-none focus:border-brand-accent transition-colors placeholder-white/20 resize-none" />
                 </div>
                 
                 <Button className="w-full bg-white hover:bg-gray-200 text-black border-none py-6 text-lg">Send Request</Button>
               </form>
             </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
};