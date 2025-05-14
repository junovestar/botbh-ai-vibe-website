
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SplineGlobe from '@/components/SplineGlobe';
import FeaturedIn from '@/components/FeaturedIn';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Mission from '@/components/Mission';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/ScrollAnimation';

const Index = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SplineGlobe />
      <FeaturedIn />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
