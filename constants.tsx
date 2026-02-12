import React from 'react';
import { NavItem, ServiceItem, Testimonial, CaseStudy, BlogPost, TeamMember } from './types';
import { 
  BarChart3, 
  Globe, 
  Megaphone, 
  MousePointer2, 
  Search,
  PenTool,
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', route: 'home' },
  { label: 'Expertise', route: 'services' },
  { label: 'Agency', route: 'about' },
  { label: 'Journal', route: 'blog' },
  { label: 'Contact', route: 'contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Architecture',
    description: 'Engineering visibility through technical SEO and semantic dominance.',
    icon: <Search className="w-6 h-6" />,
    route: 'service-seo'
  },
  {
    id: 'social',
    title: 'Brand Resonance',
    description: 'Cultivating community and narrative across social ecosystems.',
    icon: <Megaphone className="w-6 h-6" />,
    route: 'service-social'
  },
  {
    id: 'ppc',
    title: 'Precision Acquisition',
    description: 'High-intent programmatic advertising and performance marketing.',
    icon: <MousePointer2 className="w-6 h-6" />,
    route: 'service-ppc'
  },
  {
    id: 'web',
    title: 'Digital Experience',
    description: 'Immersive web design that merges aesthetics with conversion science.',
    icon: <Globe className="w-6 h-6" />,
    route: 'service-web'
  },
  {
    id: 'content',
    title: 'Content Strategy',
    description: 'Data-informed storytelling that drives engagement and authority.',
    icon: <PenTool className="w-6 h-6" />,
    route: 'service-content'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow',
    content: "Banerjee doesn't just run ads; they architect growth systems. The level of strategic depth is unmatched.",
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Apex Innovations',
    content: "We needed a partner who understood luxury tech. Banerjee delivered an experience, not just a website.",
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Director',
    company: 'Luxe Living',
    content: "Minimalist, precise, and effective. They cut through the noise and delivered pure results.",
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: 'Neon Energy',
    category: 'Digital Product Design',
    image: 'https://picsum.photos/800/600?random=10',
    metric: '240%',
    metricLabel: 'Organic Lift'
  },
  {
    id: 2,
    title: 'Velvet Apparel',
    category: 'Brand Systems',
    image: 'https://picsum.photos/800/600?random=11',
    metric: '12.5x',
    metricLabel: 'ROAS'
  },
  {
    id: 3,
    title: 'Horizon FinTech',
    category: 'Growth Architecture',
    image: 'https://picsum.photos/800/600?random=12',
    metric: '50k+',
    metricLabel: 'User Base'
  },
  {
    id: 4,
    title: 'EcoSpace',
    category: 'Narrative Strategy',
    image: 'https://picsum.photos/800/600?random=13',
    metric: '180%',
    metricLabel: 'Lead Volume'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Death of "Generic" in AI Marketing',
    excerpt: 'Why human curation and brand soul are becoming the ultimate competitive advantage.',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/800/500?random=20',
    category: 'Opinion'
  },
  {
    id: 2,
    title: 'Architecting Digital Silence',
    excerpt: 'Using minimalism to command attention in an economy of noise.',
    date: 'Sep 28, 2023',
    image: 'https://picsum.photos/800/500?random=21',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Semantic SEO in 2024',
    excerpt: 'Moving beyond keywords into the realm of entity-based search optimization.',
    date: 'Sep 15, 2023',
    image: 'https://picsum.photos/800/500?random=22',
    category: 'Strategy'
  }
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Arjun Banerjee", role: "Principal", image: "https://picsum.photos/400/500?random=30" },
  { id: 2, name: "Sophia Lin", role: "Creative Director", image: "https://picsum.photos/400/500?random=31" },
  { id: 3, name: "Marcus Thorne", role: "Head of Strategy", image: "https://picsum.photos/400/500?random=32" },
  { id: 4, name: "Isabella Cruz", role: "Tech Lead", image: "https://picsum.photos/400/500?random=33" },
];