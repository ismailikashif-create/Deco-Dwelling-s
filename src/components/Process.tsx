import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Share Requirement',
    description: 'Tell us your needs, space dimensions, and preferred style.',
  },
  {
    number: '02',
    title: 'Get Design & Quote',
    description: 'We provide a tailored design plan and a transparent factory-direct quote.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Our expert craftsmen build your sofa using premium materials.',
  },
  {
    number: '04',
    title: 'Delivery & Installation',
    description: 'We deliver and set up your new furniture at your home in Bengaluru.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Simple Process</h2>
          <p className="text-lg text-brand-cream/60 max-w-2xl mx-auto">
            From vision to reality, we make the journey of getting your custom sofa seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center bg-brand-brown p-6"
            >
              <div className="w-16 h-16 bg-brand-gold text-brand-brown rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
