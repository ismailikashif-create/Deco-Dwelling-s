import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  requirement: string;
};

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // In a real app, you'd send this to a backend
    setSubmitted(true);
  };

  return (
    <section id="quote" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">Get a Free Consultation</h2>
            <p className="text-brand-brown/60">Fill out the form below and our experts will get back to you with a custom quote.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-brown mb-2">Thank You!</h3>
              <p className="text-brand-brown/60">Your request has been received. We'll contact you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-brand-gold font-bold hover:underline"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-brown mb-2">Full Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full px-5 py-4 rounded-xl border-2 bg-brand-cream/20 focus:outline-none transition-all ${errors.name ? 'border-red-500' : 'border-brand-beige focus:border-brand-gold'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-brown mb-2">Phone Number</label>
                  <input
                    {...register('phone', {
                      required: 'Phone is required',
                      pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
                    })}
                    type="tel"
                    placeholder="10-digit mobile number"
                    className={`w-full px-5 py-4 rounded-xl border-2 bg-brand-cream/20 focus:outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-brand-beige focus:border-brand-gold'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-brown mb-2">Your Requirement</label>
                <select
                  {...register('requirement', { required: 'Please select a requirement' })}
                  className={`w-full px-5 py-4 rounded-xl border-2 bg-brand-cream/20 focus:outline-none transition-all ${errors.requirement ? 'border-red-500' : 'border-brand-beige focus:border-brand-gold'}`}
                >
                  <option value="">Select Category</option>
                  <option value="L Shape Sofa">L Shape Sofa</option>
                  <option value="Recliner">Recliner</option>
                  <option value="Sofa Cum Bed">Sofa Cum Bed</option>
                  <option value="Custom Design">Custom Design Sofa</option>
                  <option value="Interior Design">Full Interior Solution</option>
                </select>
                {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2"
              >
                Get Free Consultation <Send size={20} />
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
