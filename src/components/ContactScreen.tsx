import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    'General Inquiry',
    'Sponsorship & Major Donors',
    'Volunteer Program',
    'Corporate CSR Partnerships',
    'Media & Press',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill out the required fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form variables
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1800);
  };

  return (
    <div className="min-h-screen">
      
      {/* Header Narrative Section */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-12 md:py-16 text-center md:text-left">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
          Connect With Us
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
          Contact Us
        </h1>
        <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Let us connect. Whether you want to partner officially, sponsor a remote digital school, volunteer, or simply write us a note, we are here to listen.
        </p>
      </section>

      {/* Main Aligned Layout Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Geographical coordinates column (Left Side) */}
          <article className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-display text-primary font-medium tracking-tight">Find Us</h2>
              <div className="w-12 h-1 bg-tertiary rounded-full"></div>
            </div>

            {/* Address points */}
            <div className="space-y-6 select-none font-sans">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Head Office</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
                    HopeBridge Foundation, 4401 Heritage Chambers, Nariman Point, Mumbai, Maharashtra, 400021
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Primary Phone</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-medium">+91 22 4567 8900</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Write to Us</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant font-medium">hello@hopebridge.org</p>
                </div>
              </div>
            </div>

            {/* Premium Mumbai Map Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-outline-variant/30 group">
              <img 
                alt="HopeBridge Head Office location map" 
                className="w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkcljpmxrF8_zvj1gCApLpWq-a7L_GhpF9m07SFqST4qX5Lyq-ALo8TyizLDyOvzFkoIqir8GuP7BiQWn4J7cEwI3fDehvVPg6V148hvE0dwVJYe1XuzS7R9dUw2E7v0oQOWm8QGn_XFO_TiD85dsYvf1GhMIc2hMDrvNIyW2zRIGK8U6RweFIZEjfDal9SIYIER7AimAFxjucI2pv_bpQyFgqWQwCiubu5-XOr0J2lEd7xNbKl2ahfMcRXx3EUg2YsCHVcO3udk_p"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              
              {/* Pulsing map pin visual locator */}
              <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl animate-bounce">
                  <Navigation className="w-5 h-5 fill-current text-white transform -rotate-45" />
                </div>
                <div className="w-2.5 h-1 rounded-full bg-black/40 blur-xs"></div>
              </div>

              {/* Tag indicator overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 border border-outline-variant/30 rounded-xl shadow-md text-left max-w-[200px]">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">HopeBridge Nariman Point</p>
                <p className="text-[9px] font-sans text-on-surface-variant font-semibold">Central Office Base</p>
              </div>
            </div>
          </article>

          {/* Feedback Form Card (Right Side) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-12 shadow-md border border-outline-variant/30 relative">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-display text-primary font-medium mb-2">Send us a Message</h3>
              <p className="text-sm font-sans text-on-surface-variant">We make sure each submission is reviewed by the designated leadership team.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="c-name">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="c-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Aditi Verma" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="c-email">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="c-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="aditi@example.com" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="c-phone">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="c-phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>

                    {/* Subject selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="c-subject">
                        Subject mandated
                      </label>
                      <div className="relative">
                        <select 
                          id="c-subject"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-4 pr-10 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface appearance-none"
                        >
                          {subjects.map((sub) => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary font-bold">▼</div>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="c-message">
                      Message *
                    </label>
                    <textarea 
                      id="c-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your partnership request, community needs, or feedback coordinates here..." 
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover hover:shadow-lg disabled:bg-primary-container text-white py-4 rounded-full font-bold text-base tracking-wide shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                    <CheckCircle2 className="w-10 h-10 fill-current" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-bold text-primary">Message Dispatched</h4>
                    <p className="text-sm text-on-surface-variant font-sans max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting HopeBridge. Your coordinates have been structured and stored. Our leadership team will connect back with you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

    </div>
  );
}
