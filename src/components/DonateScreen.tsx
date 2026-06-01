import React, { useState } from 'react';
import { Heart, ShieldCheck, Download, Loader2, CheckCircle2, DollarSign, Award, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { causesData } from '../data';

export default function DonateScreen() {
  const [pledgeType, setPledgeType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [pan, setPan] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designatedCause, setDesignatedCause] = useState(causesData[0].id);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'bank'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const preselectedAmounts = [500, 1000, 2500, 5000];

  const getImpactMessage = (amount: number) => {
    if (amount <= 500) {
      return 'Provides monthly school supplies & custom study books for one child.';
    } else if (amount <= 1000) {
      return 'Funds basic pediatric healthcare clinical checks and immunization for three children.';
    } else if (amount <= 2500) {
      return 'Stocks digital tablets and customized Project Akshara modules for half a study classroom.';
    } else if (amount <= 5000) {
      return 'Funds native forest evergreen saplings conservation for 1/4 hectare in Western Ghats.';
    } else {
      return `Powers significant on-ground operations, community mobilization, and essential infrastructure.`;
    }
  };

  const getActiveAmount = () => {
    if (customAmount) {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) ? 0 : parsed;
    }
    return selectedAmount;
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(0); // De-select standard ones
  };

  const handlePresetSelect = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount(''); // Clear custom amount
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReceiptNumber(`HB-80G-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 2000);
  };

  const currentAmountDisplay = getActiveAmount();
  const currentImpact = getImpactMessage(currentAmountDisplay);

  return (
    <div className="min-h-screen">
      
      {/* Header Narrative */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-12 md:py-16 text-center md:text-left">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
          Safe &amp; Documented giving
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
          Donate Now
        </h1>
        <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Make a direct verified contribution. Choose an active campaign, select your sum, and view the documented real-world impact of your funds below.
        </p>
      </section>

      {/* Main Form Content */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Narrative support column left */}
          <article className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-display text-primary font-medium tracking-tight">Our Commitment to Trust</h2>
              <div className="w-12 h-1 bg-tertiary rounded-full"></div>
            </div>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-medium">
              We pledge 100% of designated funds to on-ground execution. All transactions are securely audited and fully compliant under Indian Central Tax redemption terms.
            </p>

            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 space-y-4 font-sans select-none text-xs text-on-surface">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">80G TAX REDEMPTION</h4>
                  <p className="text-[11px] text-on-surface-variant font-medium mt-0.5">HopeBridge donations are 50% tax deductible under Section 80G of the Income Tax Act.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-primary">100% TRANSPARENCY</h4>
                  <p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Receive geolocated video logs and expense receipts showing the implementation progress.</p>
                </div>
              </div>
            </div>

            {/* Laughing kids landscape image */}
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md border border-outline-variant/30 select-none">
              <img 
                alt="Smiles of children supported by digital learning" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWN4s8hKln8-nLfvnF2HmR3jAaKcegusrawuQMrNDb9H-5qRUxnAN5JegzjRyBHmpJ5c4Nd1lKhxGCa8fhJBDkFDCo7AjhZsMywt2fuCAEx_oFGMLfTX_g_NerAqsSkaVQcCX5RIpszekMfB3XeXdsplQ9dKBiuoLMkKksTGc0vP-YycO3HkCgG8XRjbz0ov-_6mrzfvz2jTkny73A4c-UShuTlocLF2fFGHh_8B_NkXwd4Ktun5a_ByJBDW_E9irChEzEP93FURII"
              />
            </div>
          </article>

          {/* Core donation billing form card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-12 shadow-md border border-outline-variant/30 relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="donation-form"
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  {/* Select One-Time vs Monthly Plan */}
                  <div className="grid grid-cols-2 gap-3 bg-surface-container/50 p-1.5 rounded-full select-none">
                    <button
                      type="button"
                      onClick={() => setPledgeType('one-time')}
                      className={`py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-extrabold cursor-pointer transition-all ${
                        pledgeType === 'one-time'
                          ? 'bg-primary text-white shadow-md'
                          : 'text-on-secondary-container hover:text-primary'
                      }`}
                    >
                      Give Once
                    </button>
                    <button
                      type="button"
                      onClick={() => setPledgeType('monthly')}
                      className={`py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-extrabold cursor-pointer transition-all ${
                        pledgeType === 'monthly'
                          ? 'bg-primary text-white shadow-md'
                          : 'text-on-secondary-container hover:text-primary'
                      }`}
                    >
                      Give Monthly
                    </button>
                  </div>

                  {/* Preselected amount grids */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block">
                      Select Amount (INR)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
                      {preselectedAmounts.map((amt) => {
                        const isSelected = selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => handlePresetSelect(amt)}
                            className={`py-4 border rounded-xl font-sans text-sm font-bold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-primary/5 border-primary text-primary scale-102 font-black shadow-xs'
                                : 'border-outline-variant/30 text-on-secondary-container hover:bg-surface-container-high'
                            }`}
                          >
                            ₹{amt.toLocaleString('en-IN')}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Amount Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="custom-amt">
                      Or Enter Custom Amount (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm">₹</span>
                      <input 
                        type="number" 
                        id="custom-amt"
                        min="50"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        placeholder="e.g. 15000" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 pl-8 pr-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>
                  </div>

                  {/* Visual Impact Box representation */}
                  <div className="p-5 rounded-xl bg-primary-container/10 border border-primary/20 text-indigo-950 font-sans text-xs md:text-sm flex gap-3.5 items-start mt-4 select-none">
                    <div className="bg-primary/10 text-primary p-2 rounded-xl shrink-0">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-xs uppercase tracking-wide">Immediate Impact of your Funds</p>
                      <p className="text-on-surface-variant font-medium mt-1 leading-relaxed">
                        {currentImpact}
                      </p>
                    </div>
                  </div>

                  {/* Personal details info fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="pan-name">
                        Full Donor Name *
                      </label>
                      <input 
                        type="text" 
                        id="pan-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Gaurav Mehta" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="pan-email">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="pan-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="gaurav@example.com" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* India Central PAN Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="pan-id">
                        PAN Number (Option for 80G Tax Exemption)
                      </label>
                      <input 
                        type="text" 
                        id="pan-id"
                        value={pan}
                        maxLength={10}
                        onChange={(e) => setPan(e.target.value.toUpperCase())}
                        placeholder="ABCDE1234F" 
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface uppercase"
                      />
                    </div>

                    {/* Designated campaign target cause selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block" htmlFor="designate-cause">
                        Designate Campaign Cause
                      </label>
                      <select 
                        id="designate-cause"
                        value={designatedCause}
                        onChange={(e) => setDesignatedCause(e.target.value)}
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3.5 px-4 text-sm font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface"
                      >
                        {causesData.map((cause) => (
                          <option key={cause.id} value={cause.id}>
                            {cause.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Payment System Selection */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary font-sans uppercase tracking-wider block">
                      Secure Payment Mode
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 select-none">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`py-3.5 border rounded-xl font-sans text-xs font-semibold cursor-pointer transition-all ${
                          paymentMethod === 'card'
                            ? 'bg-primary/5 border-primary text-primary font-bold'
                            : 'border-outline-variant/30 text-on-secondary-container hover:bg-surface-container-high'
                        }`}
                      >
                        Credit/Debit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`py-3.5 border rounded-xl font-sans text-xs font-semibold cursor-pointer transition-all ${
                          paymentMethod === 'upi'
                            ? 'bg-primary/5 border-primary text-primary font-bold'
                            : 'border-outline-variant/30 text-on-secondary-container hover:bg-surface-container-high'
                        }`}
                      >
                        UPI &amp; NetBanking
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`py-3.5 border rounded-xl font-sans text-xs font-semibold cursor-pointer transition-all ${
                          paymentMethod === 'bank'
                            ? 'bg-primary/5 border-primary text-primary font-bold'
                            : 'border-outline-variant/30 text-on-secondary-container hover:bg-surface-container-high'
                        }`}
                      >
                        Bank Direct Transfer
                      </button>
                    </div>
                  </div>

                  {/* Complete Secure billing button */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting || currentAmountDisplay <= 0}
                      className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary-container text-white py-4 rounded-full font-bold text-base tracking-wide shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Routing Secure Channels...</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4 fill-current" />
                          <span>Complete Secure Contribution of ₹{currentAmountDisplay.toLocaleString('en-IN')}</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[9px] font-semibold text-on-surface-variant/70 tracking-wider mt-4 uppercase">
                      PCI-DSS Compliant • SSL Encrypted Transaction Server
                    </p>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 py-4 text-center"
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                      <CheckCircle2 className="w-10 h-10 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-black text-primary">Contribution Cleared!</h4>
                      <p className="text-sm font-sans text-on-surface-variant font-semibold">Your support is currently saving lives on-ground.</p>
                    </div>
                  </div>

                  {/* Simulated Receipt Breakdown */}
                  <div className="bg-surface-container-low border border-dashed border-outline rounded-2xl p-6 md:p-8 space-y-4 text-xs font-mono text-on-surface text-left">
                    <div className="text-center font-bold border-b border-outline-variant/30 pb-4">
                      <p className="font-display font-bold text-lg text-primary tracking-tight">HOPEBRIDGE FOUNDATION RECEIPT</p>
                      <p className="text-[10px] text-on-surface-variant font-sans mt-0.5">80G CERTIFIED TRANSACTION SLIP</p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 pt-2">
                      <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">Receipt Number</span>
                      <span className="text-right font-bold text-primary">{receiptNumber}</span>

                      <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">Donor Name</span>
                      <span className="text-right font-bold">{name}</span>

                      <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">Email Registered</span>
                      <span className="text-right">{email}</span>

                      {pan && (
                        <>
                          <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">PAN Registered</span>
                          <span className="text-right uppercase font-bold">{pan}</span>
                        </>
                      )}

                      <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">Designated campaign</span>
                      <span className="text-right font-bold truncate max-w-[150px]">
                        {causesData.find(c => c.id === designatedCause)?.title || 'General Relief'}
                      </span>

                      <span className="text-on-surface-variant font-bold font-sans uppercase tracking-wider text-[10px]">Pledge Method</span>
                      <span className="text-right capitalize font-bold">{pledgeType}</span>
                    </div>

                    <div className="border-t border-dashed border-outline-variant/50 pt-4 flex justify-between items-center font-sans">
                      <span className="font-bold text-primary uppercase text-xs tracking-wider">Total Donated</span>
                      <span className="text-xl font-black text-primary">₹{currentAmountDisplay.toLocaleString('en-IN')}.00</span>
                    </div>

                    <div className="text-[9px] font-sans text-on-secondary-fixed-variant leading-relaxed text-center italic pt-4">
                      This receipt has been recorded in Central Registry. A formal PDF certification with IRS 80G seal has been delivered to your email inbox. Thank you!
                    </div>
                  </div>

                  {/* Print / download receipt simulation action */}
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => window.print()}
                      className="border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Print Receipt</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      Make Another Donation
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
