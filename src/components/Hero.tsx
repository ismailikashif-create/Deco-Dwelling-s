import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageSquare, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Sofa Banner"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/80 via-brand-brown/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-gold text-brand-brown text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
              Premium Bengaluru Showroom
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Custom Sofas Designed for Your <span className="text-brand-gold">Dream Living Space</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-cream/90 mb-10 leading-relaxed">
              Premium Comfort | Tailored Designs | Delivered in Bengaluru. Transform your home with furniture that reflects your style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#quote"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                Get Free Quote <ChevronRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#showroom"
                className="btn-outline border-white text-white hover:bg-white hover:text-brand-brown flex items-center justify-center gap-2 text-lg"
              >
                <MapPin size={20} /> Visit Showroom
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919611780429"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md text-lg"
              >
                <MessageSquare size={20} /> Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 right-10 hidden lg:block glass-card p-6 rounded-2xl max-w-xs"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-brown font-bold text-xl">
            10+
          </div>
          <div className="font-bold text-brand-brown">Years of Excellence</div>
        </div>
        <p className="text-sm text-brand-brown/70">Crafting the finest furniture for Bengaluru's most elegant homes.</p>
      </motion.div>
    </section>
  );
}
