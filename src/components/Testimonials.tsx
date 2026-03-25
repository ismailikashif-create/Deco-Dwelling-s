import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    location: 'Whitefield, Bengaluru',
    text: 'The L-shaped sofa we ordered is perfect! The quality of the fabric and the comfort level exceeded our expectations. Highly recommend Deco Dwelling.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    location: 'HSR Layout, Bengaluru',
    text: 'Factory-direct pricing really made a difference. We got a luxury recliner for almost half the price of branded showrooms. Excellent service!',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    location: 'Thanisandra, Bengaluru',
    text: 'Being local was a big plus. I visited the showroom, picked my fabric, and the sofa was delivered within 10 days. The customization is top-notch.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-4">What Our Customers Say</h2>
          <p className="text-lg text-brand-brown/60 max-w-2xl mx-auto">
            Trusted by homeowners across Bengaluru for quality, comfort, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-beige/20 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-gold/20" size={48} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-brown/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-brand-brown">{t.name}</div>
                <div className="text-sm text-brand-gold font-medium">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
