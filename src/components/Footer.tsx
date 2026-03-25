import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageSquare, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-display font-bold text-white tracking-tight">Deco Dwelling's</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold -mt-1">Sofa's & Interior's</span>
            </div>
            <p className="text-brand-cream/60 leading-relaxed mb-6">
              Bengaluru's premier destination for custom-made luxury sofas and complete interior solutions. Crafting comfort since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/919611780429" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Our Products</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-brand-gold transition-colors">Our Process</a></li>
              <li><a href="#showroom" className="hover:text-brand-gold transition-colors">Visit Showroom</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#products" className="hover:text-brand-gold transition-colors">L Shape Sofas</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Motorized Recliners</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Sofa Cum Beds</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Custom Designs</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Interior Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-brand-cream/60">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-gold shrink-0" />
                <span>No. 46, 4th Cross, Vidyasagar Layout, Thanisandra Main Road, Bengaluru – 560077</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <a href="tel:+919611780429" className="hover:text-brand-gold transition-colors">+91 9611780429</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <a href="mailto:ismailikashif@gmail.com" className="hover:text-brand-gold transition-colors">ismailikashif@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream/40">
          <p>© 2026 Deco Dwelling's Sofa's & Interior's. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
