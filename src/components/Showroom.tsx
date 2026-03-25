import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function Showroom() {
  return (
    <section id="showroom" className="section-padding bg-brand-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-6">Visit Our Bengaluru Showroom</h2>
            <p className="text-lg text-brand-brown/70 mb-8 leading-relaxed">
              Experience the comfort and quality firsthand. Visit us to explore fabrics, designs, and get expert advice for your home.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-brown">Address</div>
                  <p className="text-brand-brown/70">No. 46, 4th Cross, Vidyasagar Layout, Thanisandra Main Road, Bengaluru – 560077</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-brown">Opening Hours</div>
                  <p className="text-brand-brown/70">Mon - Sun: 10:00 AM - 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-brand-brown">Call Us</div>
                  <p className="text-brand-brown/70">+91 9611780429</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=13.0583,77.6322"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Navigation size={20} /> Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.536343516315!2d77.6322!3d13.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1743f5555555%3A0x5555555555555555!2sThanisandra%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711360000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
