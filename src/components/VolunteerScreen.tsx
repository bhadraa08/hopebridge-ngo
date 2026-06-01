import React, { useState } from 'react';
import { ShieldCheck, Heart, User, Mail, Phone, Calendar, Briefcase, Code, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VolunteerScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Education & Tutoring',
    skills: '',
    availability: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    'Education & Tutoring',
    'Healthcare Support',
    'Disaster Relief',
    'Administrative/Tech',
    'Field Outreach',
  ];

  const availabilities = ['Weekdays', 'Weekends', 'Evenings', 'Remote'];

  const toggleAvailability = (item: string) => {
    setForm((prev) => {
      const exists = prev.availability.includes(item);
      return {
        ...prev,
        availability: exists
          ? prev.availability.filter((a) => a !== item)
          : [...prev.availability, item],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert('Please fill out the required fields.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form save for states
      setForm({
        name: '',
        email: '',
        phone: '',
        role: 'Education & Tutoring',
        skills: '',
        availability: [],
      });
    }, 1800);
  };

  return (
    <div className="min-h-screen">
      {/* Narrative Header Hero */}
      <section className="relative w-full h-[320px] md:h-[480px] overflow-hidden flex items-center select-none">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Volunteers helping in Indian communities" 
            className="w-full h-full object-cover brightness-[0.3]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY_l4IAG_f11P7BzxatVtHQMNS59bPTkPyhLcyEla_oAn9qF-YzS0v7HXs8HLmBAwHSvYHg_AD_OlI7MlBYEbFWFF4QgMSgc_gseZMZllxu8CVXekIvhCgGuG_BHO3t9EGjh47qniWJne4XPtT7xaPxAfd10Xir86W8YRUuPIy5I2ypfFQ-r9OveryrUI9Z7nZ4OeSGMcTV_ODO9OTfgJW4ivQ_effONjLlnpa9AxC2vDdiECQcw_ZVad6CNhIDK4bGL2OID4-Z7vk"
          />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto text-white w-full text-left">
          <span className="text-xs font-bold text-tertiary bg-accent-yellow px-4 py-1.5 rounded-full mb-6 inline-block uppercase tracking-widest">
            Be the Change
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight font-black text-white">
            Lend a Hand,<br />Heal a Heart.
          </h1>
          <p className="text-sm md:text-lg max-w-xl text-white/90 leading-relaxed font-medium">
            Join our network of dedicated volunteers making a tangible difference across 22 Indian states.
          </p>
        </div>
      </section>

      {/* Narrative grid and application form page content */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Narrative Column (Left Side) */}
          <article className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display text-primary font-medium tracking-tight">
                The Power of Presence
              </h2>
              <div className="w-16 h-1 bg-tertiary rounded-full"></div>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-medium">
                In India, progress is not just about policies; it is about the active hands that deliver care. At HopeBridge, we believe that volunteering is an act of deep dignity. Whether you are teaching a child in rural Bihar or organizing a local healthcare camp in Maharashtra, your presence bridges the gap between despair and opportunity.
              </p>
            </div>

            {/* Active Impact Metrics */}
            <div className="grid grid-cols-2 gap-6 select-none font-sans">
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-sm">
                <span className="text-2xl md:text-3xl font-display font-medium text-primary block mb-1">15k+</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Active Volunteers</span>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-sm">
                <span className="text-2xl md:text-3xl font-display font-medium text-primary block mb-1">200+</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Communities Reached</span>
              </div>
            </div>

            {/* Warm testimonial photography container */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg border border-outline-variant/20 group">
              <img 
                alt="Impact of volunteering" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO3NJba9Ehu-_SROr9I1OTnWunlD4tOjmit1txGEl9QwBl878MZazeNg4BULJiklZ-QOK5X6rObUBbmtn62J7khZ_blYHg6hEr5rdpT-hc41vWPuqzx_iLlr-KMxtkQezdnt1LrlBj-4iLwdludEdA9V3SYoOVKOxjZkSpQicar_0nZqqauf_RhL7CxJUOZJB8XB0beV7ZVfF7J7BmeaX8Eo9WS8ozU7-nkPRHWMGtuHcjbj15npvjUd9cFzaHrkNaxM8pc0VH1WFT"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white text-xs md:text-sm font-sans italic leading-relaxed text-left">
                  "Volunteering with HopeBridge gave my life a new sense of purpose I never found in a corporate boardroom." <br />
                  <strong className="text-accent-yellow font-bold not-italic block mt-1.5">— Meera, Bangalore</strong>
                </p>
              </div>
            </div>
          </article>

          {/* Form application column (Right side) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-12 shadow-md border border-outline-variant/30 relative">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-display text-primary font-medium mb-2">Volunteer Application</h3>
              <p className="text-sm font-sans text-on-surface-variant">Fill out the details below and our coordinator will reach out within 48 hours for onboarding.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="v-name">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 opacity-70" />
                        <input 
                          type="text" 
                          id="v-name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Aarav Sharma" 
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-11 pr-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="v-email">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 opacity-70" />
                        <input 
                          type="email" 
                          id="v-email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="aarav@example.com" 
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-11 pr-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="v-phone">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 opacity-70" />
                        <input 
                          type="tel" 
                          id="v-phone"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX" 
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-11 pr-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                        />
                      </div>
                    </div>

                    {/* Preferred Role selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="v-role">
                        Preferred Role
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 opacity-70" />
                        <select 
                          id="v-role"
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-11 pr-10 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface appearance-none"
                        >
                          {roles.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Skills description area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="v-skills">
                      Skills &amp; Key Expertise
                    </label>
                    <div className="relative">
                      <Code className="absolute left-4 top-4 text-primary w-4 h-4 opacity-70" />
                      <textarea 
                        id="v-skills"
                        rows={3}
                        value={form.skills}
                        onChange={(e) => setForm({ ...form, skills: e.target.value })}
                        placeholder="e.g., Medical training, Web development, Teaching, Translation, Disaster management, Logistics..." 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-11 pr-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Availability checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block">
                      Availability
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
                      {availabilities.map((avail) => {
                        const isSelected = form.availability.includes(avail);
                        return (
                          <div
                            key={avail}
                            onClick={() => toggleAvailability(avail)}
                            className={`flex items-center gap-2 p-3.5 border rounded-xl cursor-pointer hover:bg-surface-container-high transition-all ${
                              isSelected
                                ? 'bg-primary/5 border-primary text-primary font-bold'
                                : 'border-outline-variant/30 text-on-surface-variant'
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={isSelected}
                              onChange={() => {}} // Controlled by element click
                              className="rounded border-outline text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                            />
                            <span className="text-xs font-sans tracking-wide">{avail}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA application submit button */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover hover:shadow-lg disabled:bg-primary-container text-white py-4 rounded-full font-bold text-base tracking-wide shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                    <p className="text-center text-[10px] font-semibold text-on-surface-variant/70 tracking-wide mt-4 uppercase">
                      By submitting, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                    <CheckCircle2 className="w-10 h-10 fill-current" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-bold text-primary">Welcome to the Bridge!</h4>
                    <p className="text-sm text-on-surface-variant font-sans max-w-sm mx-auto leading-relaxed">
                      Thank you for applying. A HopeBridge deployment coordinator is auditing your profile and will contact you via email or phone within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Register Another Volunteer
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
