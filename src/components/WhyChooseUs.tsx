import React from 'react';
import { motion } from 'motion/react';
import { Palette, IndianRupee, Hammer, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Palette size={40} className="text-brand-gold" />,
    title: 'Full Customization',
    description: 'Choose your size, fabric, color, and firmness. We build it exactly how you want it.',
  },
  {
    icon: <IndianRupee size={40} className="text-brand-gold" />,
    title: 'Affordable Luxury',
    description: 'Factory-direct pricing means you get premium luxury without the middleman markup.',
  },
  {
    icon: <Hammer size={40} className="text-brand-gold" />,
    title: 'Expert Craftsmanship',
    description: 'Our skilled artisans use high-quality materials to ensure durability and comfort.',
  },
  {
    icon: <MapPin size={40} className="text-brand-gold" />,
    title: 'Local Bengaluru Service',
    description: 'Located in Thanisandra, we offer personalized service and fast local delivery.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-brand-beige/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-6">Why Bengaluru Chooses Deco Dwelling</h2>
            <p className="text-lg text-brand-brown/70 mb-10 leading-relaxed">
              We don't just sell sofas; we create comfort zones. Our commitment to quality and customer satisfaction has made us a trusted name in Bengaluru.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-brand-brown mb-2">{feature.title}</h3>
                  <p className="text-brand-brown/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
              alt="Craftsmanship"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-brand-gold mb-1">100%</div>
              <div className="text-brand-brown font-semibold">Made in Bengaluru</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
