import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function StrongCTA() {
  return (
    <section className="section-padding bg-brand-gold text-brand-brown">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Design Your Dream Sofa Today</h2>
          <p className="text-xl mb-10 font-medium opacity-90">
            Premium Quality | Factory Prices | Expert Installation in Bengaluru
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919611780429"
              className="bg-brand-brown text-brand-cream px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl"
            >
              <Phone size={24} /> Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919611780429"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl"
            >
              <MessageSquare size={24} /> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#showroom"
              className="bg-white text-brand-brown px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl"
            >
              <MapPin size={24} /> Visit Store
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
