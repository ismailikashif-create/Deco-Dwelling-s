import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919611780429"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919611780429"
        className="w-14 h-14 bg-brand-brown text-brand-cream rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-brown/90 transition-all"
        title="Call Us Now"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
