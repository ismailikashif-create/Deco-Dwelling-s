/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Showroom from './components/Showroom';
import LeadForm from './components/LeadForm';
import StrongCTA from './components/StrongCTA';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags (Conceptual, handled by index.html usually but good for structure) */}
      <header className="sr-only">
        <h1>Sofa shop in Bengaluru - Custom sofas Bangalore - Best sofa showroom near me</h1>
      </header>

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Trust />
        <ProductShowcase />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Showroom />
        <LeadForm />
        <StrongCTA />
      </main>

      <Footer />
      
      <StickyActions />
    </div>
  );
}

