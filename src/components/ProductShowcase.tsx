import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'L Shape Sofas',
    description: 'Maximize your corner space with our elegant L-shaped designs.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Recliners',
    description: 'Experience ultimate relaxation with our premium motorized recliners.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop',
  },
  {
    title: 'Sofa Cum Beds',
    description: 'Versatile functionality without compromising on style or comfort.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Custom Design Sofas',
    description: 'Your vision, our craftsmanship. Tailored to your exact needs.',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1922&auto=format&fit=crop',
  },
  {
    title: 'Luxury Interior Solutions',
    description: 'Complete home interiors that define luxury and sophistication.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-4">Our Premium Collections</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            Explore our wide range of handcrafted furniture designed for modern Bengaluru homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-brand-cream"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-brown mb-2">{cat.title}</h3>
                <p className="text-brand-brown/70 mb-6 text-sm leading-relaxed">{cat.description}</p>
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-brand-gold font-bold hover:gap-3 transition-all"
                >
                  Get Price <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
