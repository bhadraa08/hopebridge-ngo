import { useState } from 'react';
import { Cause, ScreenID } from '../types';
import { causesData } from '../data';
import { AlertCircle, Check, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CausesScreenProps {
  onNavigate: (screen: ScreenID) => void;
}

export default function CausesScreen({ onNavigate }: CausesScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Projects' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'women-empowerment', label: 'Women Empowerment' },
    { id: 'environment', label: 'Environment' },
  ];

  const filteredCauses = selectedCategory === 'All'
    ? causesData
    : causesData.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen">
      
      {/* Narrative Page Header */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-12 md:py-16 text-center md:text-left">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
          Active Mandates
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
          Our Causes
        </h1>
        <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Focused sustainable initiatives addressing the most critical needs in health, educational, and ecological recovery for marginalized communities across India.
        </p>
      </section>

      {/* Categories Filtering Horizontal Bar */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-12 select-none">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 select-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold shadow-sm transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white scale-102 hover:bg-primary-hover shadow-md'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Causes Dynamic Showcase Grid */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto min-h-[400px]">
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCauses.map((cause) => (
              <motion.div
                layout
                key={cause.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row h-full text-left"
              >
                {/* Cause Image / Column */}
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden select-none bg-surface-container-high shrink-0">
                  <img 
                    alt={cause.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                    src={cause.image}
                  />
                  
                  {/* Urgent Tag indicator */}
                  {cause.isUrgent && (
                    <div className="absolute top-4 left-4 z-10 bg-error text-white px-4 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Urgent</span>
                    </div>
                  )}
                </div>

                {/* Content body / Column */}
                <div className="p-8 flex flex-col justify-between flex-grow md:w-3/5">
                  <div className="space-y-3">
                    <span className="text-primary text-[10px] font-sans font-extrabold uppercase tracking-widest block">
                      {cause.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-display text-lg md:text-xl text-primary font-bold group-hover:text-primary-hover transition-colors leading-tight">
                      {cause.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs md:text-sm font-sans leading-relaxed">
                      {cause.description}
                    </p>
                  </div>

                  {/* Impact metrics / Allocation progress */}
                  <div className="pt-6 mt-auto">
                    <div className="flex justify-between items-center mb-2 font-sans text-xs font-bold text-on-surface tracking-wide">
                      <span>₹{cause.raisedAmount.toLocaleString('en-IN')} raised</span>
                      <span className={cause.isUrgent ? 'text-error' : 'text-primary'}>
                        {cause.raisedPercent}%
                      </span>
                    </div>
                    
                    {/* Progress slider bar container */}
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-6">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${cause.raisedPercent}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${
                          cause.isUrgent ? 'bg-error' : 'bg-primary'
                        }`}
                      ></motion.div>
                    </div>

                    <button 
                      onClick={() => onNavigate('donate')}
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-full font-sans text-xs font-bold tracking-widest uppercase shadow-sm active:scale-95 transition-all cursor-pointer"
                    >
                      Support This Cause
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty status message if search yields nothing */}
        {filteredCauses.length === 0 && (
          <div className="flex flex-col items-center justify-center p-20 text-center space-y-4">
            <HelpCircle className="w-12 h-12 text-on-surface-variant/40" />
            <p className="text-on-surface-variant text-base font-sans">No matching campaigns active right now.</p>
          </div>
        )}
      </section>

      {/* Sustainable Development Goals highlight segment */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 md:px-20 mt-12 bg-white rounded-2xl border border-outline-variant/20 shadow-sm text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Global Alignment</span>
        <h2 className="text-2xl md:text-3xl font-display text-primary mt-2 mb-6">UN Sustainable Development Alignment</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10 font-sans">
          All on-ground operations are architected and reported according to international SDG parameters, ensuring verified impact metrics and structured compliance.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none text-left font-sans text-xs font-bold">
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3">
            <div className="bg-primary/15 text-primary p-2.5 rounded-lg shrink-0">01</div>
            <div>
              <p className="text-primary">NO POVERTY</p>
              <p className="text-[10px] text-on-surface-variant font-medium">SHG livelihoods &amp; tools</p>
            </div>
          </div>
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3">
            <div className="bg-primary/15 text-primary p-2.5 rounded-lg shrink-0">03</div>
            <div>
              <p className="text-primary">GOOD HEALTH</p>
              <p className="text-[10px] text-on-surface-variant font-medium">Clinical forest deployment</p>
            </div>
          </div>
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3">
            <div className="bg-primary/15 text-primary p-2.5 rounded-lg shrink-0">04</div>
            <div>
              <p className="text-primary">QUALITY EDUCATION</p>
              <p className="text-[10px] text-on-surface-variant font-medium">Digital Akshara learning</p>
            </div>
          </div>
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center gap-3">
            <div className="bg-primary/15 text-primary p-2.5 rounded-lg shrink-0">15</div>
            <div>
              <p className="text-primary">LIFE ON LAND</p>
              <p className="text-[10px] text-on-surface-variant font-medium">Western Ghats biodiversity</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
