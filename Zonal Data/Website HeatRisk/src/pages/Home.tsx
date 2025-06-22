import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { RouteComparison } from '../components/RouteComparison';
import { MapSection } from '../components/MapSection';
import { WhatsNewSection } from '../components/WhatsNewSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
export const HomePage = () => {
  return <div className="bg-dark-900">
      <HeroSection />
      <section className="py-12 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <RouteComparison />
            </div>
            <div>
              <MapSection />
            </div>
          </div>
        </div>
      </section>
      <WhatsNewSection />
      <AboutSection />
      <ContactSection />
    </div>;
};