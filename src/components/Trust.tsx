import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Truck, Gem } from 'lucide-react';

export default function Trust() {
  const stats = [
    { icon: <Users className="text-brand-gold" size={32} />, value: '500+', label: 'Happy Customers' },
    { icon: <Gem className="text-brand-gold" size={32} />, value: '100%', label: 'Custom Designs' },
    { icon: <ShieldCheck className="text-brand-gold" size={32} />, value: 'Premium', label: 'Quality Materials' },
    { icon: <Truck className="text-brand-gold" size={32} />, value: 'Fast', label: 'Bengaluru Delivery' },
  ];

  return (
    <section className="bg-brand-brown py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-brand-cream/70 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
