import { ReactNode } from 'react';

export type RouteName = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-seo' 
  | 'service-social' 
  | 'service-ppc' 
  | 'service-web' 
  | 'service-content'
  | 'cases' 
  | 'blog' 
  | 'contact';

export interface NavItem {
  label: string;
  route: RouteName;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  route: RouteName;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  metric: string;
  metricLabel: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}