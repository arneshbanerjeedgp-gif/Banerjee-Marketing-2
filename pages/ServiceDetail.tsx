import React from 'react';
import { Section, PageHeader, Button, FadeIn, TextReveal } from '../components/UI';
import { RouteName } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  type: 'seo' | 'social' | 'ppc' | 'web' | 'content';
  onNavigate: (r: RouteName) => void;
}

const CONTENT = {
  seo: {
    title: 'Search Arch.',
    subtitle: 'Structuring digital presence to dominate semantic search entities.',
    features: ['Technical Infrastructure', 'Semantic Entity Mapping', 'Authority Architecture', 'Content Ecosystems'],
    stat: '300%',
    statLabel: 'Visibility Index'
  },
  social: {
    title: 'Resonance',
    subtitle: 'Building genuine cultural momentum and brand equity.',
    features: ['Narrative Design', 'Community Engineering', 'Visual Identity Systems', 'Viral Mechanics'],
    stat: '10x',
    statLabel: 'Engagement Depth'
  },
  ppc: {
    title: 'Acquisition',
    subtitle: 'Algorithmic trading for customer acquisition. Maximizing ROAS.',
    features: ['Programmatic Buying', 'Funnel Architecture', 'Creative Testing', 'Attribution Modeling'],
    stat: '-40%',
    statLabel: 'CPA Reduction'
  },
  web: {
    title: 'Experience',
    subtitle: 'Immersive interfaces functioning as high-performance business assets.',
    features: ['Interaction Design', 'Performance Engineering', 'Headless CMS', 'WebGL/3D'],
    stat: '0.2s',
    statLabel: 'Latency'
  },
  content: {
    title: 'Editorial',
    subtitle: 'Strategic content engines that drive authority and conversion.',
    features: ['Brand Journalism', 'Video Production', 'Thought Leadership', 'Omnichannel Distribution'],
    stat: '500%',
    statLabel: 'Reach Expansion'
  }
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ type, onNavigate }) => {
  const content = CONTENT[type];

  return (
    <>
      <PageHeader title={content.title} subtitle={content.subtitle} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
           <div className="md:col-span-8">
             <FadeIn>
               <h2 className="text-sm font-bold uppercase tracking-widest text-brand-gray mb-12">The Methodology</h2>
               <div className="space-y-8">
                 {content.features.map((feature, i) => (
                   <div key={i} className="group border-b border-white/10 pb-8 flex items-baseline gap-8">
                     <span className="text-sm font-bold text-brand-accent">0{i+1}</span>
                     <h3 className="text-3xl md:text-5xl font-display font-bold uppercase group-hover:translate-x-4 transition-transform duration-300">{feature}</h3>
                   </div>
                 ))}
               </div>
             </FadeIn>
           </div>
           
           <div className="md:col-span-4 sticky top-32 h-fit">
             <FadeIn delay={200}>
               <div className="bg-white/5 p-12 border border-white/10 text-center">
                 <p className="text-8xl font-display font-bold text-white mb-2">{content.stat}</p>
                 <p className="text-brand-gray uppercase tracking-widest text-xs mb-12">{content.statLabel}</p>
                 <Button className="w-full" onClick={() => onNavigate('contact')}>Request Audit</Button>
               </div>
             </FadeIn>
           </div>
        </div>
      </Section>
    </>
  );
};