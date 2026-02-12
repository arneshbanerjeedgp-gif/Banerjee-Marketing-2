import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { CaseStudies } from './pages/CaseStudies';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { RouteName } from './types';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteName>('home');

  // Simple scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={setCurrentRoute} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={setCurrentRoute} />;
      case 'service-seo':
        return <ServiceDetail type="seo" onNavigate={setCurrentRoute} />;
      case 'service-social':
        return <ServiceDetail type="social" onNavigate={setCurrentRoute} />;
      case 'service-ppc':
        return <ServiceDetail type="ppc" onNavigate={setCurrentRoute} />;
      case 'service-web':
        return <ServiceDetail type="web" onNavigate={setCurrentRoute} />;
      case 'service-content':
        return <ServiceDetail type="content" onNavigate={setCurrentRoute} />;
      case 'cases':
        return <CaseStudies />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <Layout currentRoute={currentRoute} onNavigate={setCurrentRoute}>
      {renderPage()}
    </Layout>
  );
};

export default App;