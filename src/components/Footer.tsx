import React, { useState } from 'react';
import { ScreenID } from '../types';
import { Heart, Mail, Globe, Sparkles, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenID) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  return (
    <footer className="bg-surface-container text-on-surface-variant w-full rounded-t-3xl border-t border-outline-variant/30 mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-20 py-16 md:py-20 max-w-[1280px] mx-auto">
        
        {/* Brand column */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-display font-bold text-primary tracking-tight">
              HopeBridge
            </span>
          </div>
          <p className="text-on-secondary-fixed-variant leading-relaxed text-sm font-sans">
            Dedicated to building a resilient India where every citizen has the chance to thrive with dignity through sustainable education, healthcare, and economic initiatives.
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="HopeBridge website"
              className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@hopebridge.org" 
              aria-label="HopeBridge Email"
              className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h4 className="font-sans font-bold text-primary text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 font-sans text-sm font-medium">
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('causes')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                Our Causes
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('blog')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                Stories & Blog
              </button>
            </li>
          </ul>
        </div>

        {/* Get Involved Column */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h4 className="font-sans font-bold text-primary text-sm uppercase tracking-wider">Get Involved</h4>
          <ul className="space-y-3 font-sans text-sm font-medium">
            <li>
              <button 
                onClick={() => onNavigate('donate')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                Donate Now
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('volunteer')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                Volunteer
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('contact')} 
                className="text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h4 className="font-sans font-bold text-primary text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-on-secondary-fixed-variant font-sans text-sm leading-relaxed">
            Stay updated with our latest impact stories, project releases, and active relief campaigns across India.
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
            <div className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Email Address" 
                className="bg-surface-container-high border-0 focus:ring-2 focus:ring-primary/20 rounded-full px-5 py-3 text-sm flex-grow font-sans text-on-surface outline-none transition-all placeholder:text-on-surface-variant/60"
              />
              <button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-full font-bold font-sans text-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Join
              </button>
            </div>
            
            {error && (
              <p className="text-xs text-error font-sans font-semibold pl-3 animate-pulse">{error}</p>
            )}
            
            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold pl-3 bg-primary/10 py-1.5 px-3 rounded-lg w-fit">
                <CheckCircle className="w-3.5 h-3.5 fill-current" />
                <span>Thanks! Sent confirmation to email inbox.</span>
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Under footer segment */}
      <div className="border-t border-primary/10 max-w-[1280px] mx-auto py-8 text-center px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-on-secondary-fixed-variant">
        <p>© {new Date().getFullYear()} HopeBridge Foundation India. All rights reserved.</p>
        <div className="flex gap-6 font-semibold">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <span className="flex items-center gap-1 text-primary">
            <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500 animate-spin-slow" /> Grounded Heritage Design
          </span>
        </div>
      </div>
    </footer>
  );
}
