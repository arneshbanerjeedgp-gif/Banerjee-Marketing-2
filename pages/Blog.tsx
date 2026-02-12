import React from 'react';
import { Section, PageHeader, FadeIn, MagneticLink } from '../components/UI';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Journal" 
        subtitle="Insights on the evolving landscape of digital culture."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              <div className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
                <div className="md:col-span-4 aspect-[16/10] overflow-hidden bg-white/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="md:col-span-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-brand-gray mb-6">
                      <span className="text-brand-accent">{post.category}</span>
                      <span>—</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6 group-hover:text-white/70 transition-colors">{post.title}</h3>
                    <p className="text-brand-gray text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
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