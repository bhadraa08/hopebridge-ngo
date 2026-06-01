import { ScreenID } from '../types';
import { causesData, testimonialsData } from '../data';
import { Award, Users, MapPin, CheckCircle, ArrowRight, HeartHandshake, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenID) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  // We'll showcase the first two featured causes
  const featuredCauses = causesData.slice(0, 2);

  const steps = [
    {
      num: '1',
      title: 'Secure Donation',
      desc: 'Choose a primary cause and contribute safely via our secure encrypted platform.',
      icon: '🛡️',
    },
    {
      num: '2',
      title: 'Direct Allocation',
      desc: '100% of designated funds are transparently routed to verified local field partners.',
      icon: '📈',
    },
    {
      num: '3',
      title: 'Rural Implementation',
      desc: 'On-ground execution begins including smart schools, clinics, and clean water wells.',
      icon: '🧱',
    },
    {
      num: '4',
      title: 'Detailed Impact Reports',
      desc: 'Receive geolocated progress updates, photos, and certified tax receipts.',
      icon: '📝',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-bright py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 space-y-6 text-center md:text-left z-10"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Transforming India
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary font-black leading-tight">
              Building Hope.<br />
              <span className="text-primary-container">Transforming Lives</span><br />
              Across India.
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-medium max-w-lg leading-relaxed">
              HopeBridge Foundation is dedicated to empowering marginalized communities through sustainable education, healthcare, and economic initiatives.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <button 
                onClick={() => onNavigate('donate')}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Support a Child
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('impact-stats');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer"
              >
                Our Impact
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative h-[380px] md:h-[520px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                alt="Indian school children laughing and learning" 
                className="w-full h-full object-cover select-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQSz8woruCopYTsQau2malyRJpO4p2tqP_Y9-hjfenNDTeGoEuohjlN9NDVN9XxeOr-F6w5nA-DQWrNtlNsAXZgJcAW0eKu4PYT5XRWQyi_HC5_5B3cGUb6Jd8HG8XDaf1A9-M6I6kLRhpyl2Yqnm3dXNXmEzk7AiHV3kfpohRv28SSI8xCMVThX_lo_Xly3FWPd9jKtalJ0hMO65EQipqSUqF1KYjYgxHYD9nB4lFWvyXy8uajY8UTFL1i4RwqK29xp7j3PEAccRc"
              />
            </div>
            
            {/* NGO Partner Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-lg hidden md:block border border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-secondary-container tracking-wider uppercase">NGO Partner</p>
                  <p className="font-sans font-bold text-xs text-primary">Verified Impact</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact-stats" className="py-16 md:py-24 bg-surface-container-low transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Footprint</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary mt-2">Durable Change We Build Together</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 select-none font-sans">
            <div className="p-8 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">150,000+</h3>
              <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">Children Supported</p>
            </div>
            <div className="p-8 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">1,200+</h3>
              <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">Villages Reached</p>
            </div>
            <div className="p-8 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">5,000+</h3>
              <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">Volunteers Involved</p>
            </div>
            <div className="p-8 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">850+</h3>
              <p className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Causes Section */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Current Initiatives</span>
            <h2 className="text-3xl md:text-4xl font-display text-primary">Urgent Causes That Need Your Support</h2>
          </div>
          <button 
            onClick={() => onNavigate('causes')}
            className="group flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase cursor-pointer hover:underline"
          >
            <span>View All Causes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Causes Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Education (Dominating card) */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  alt="Students in digital literacy class" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                  src={featuredCauses[0].image}
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                    {featuredCauses[0].category.replace('-', ' ')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display text-primary font-medium mb-3 leading-tight">
                    {featuredCauses[0].title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-sm md:text-base leading-relaxed mb-6">
                    {featuredCauses[0].description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-on-secondary-fixed-variant">Raised: ₹{(featuredCauses[0].raisedAmount / 100000).toFixed(1)}L</span>
                    <span className="text-primary">{featuredCauses[0].raisedPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-on-secondary-container/20 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${featuredCauses[0].raisedPercent}%` }}></div>
                  </div>
                  <button 
                    onClick={() => onNavigate('donate')}
                    className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    Support Education
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Healthcare */}
          <div className="lg:col-span-4 group flex flex-col rounded-2xl bg-surface-container shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
            <div className="h-56 overflow-hidden relative">
              <img 
                alt="Mobile medical clinic in India" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                src={featuredCauses[1].image}
              />
              <span className="absolute top-4 left-4 bg-tertiary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
                Urgent Initiative
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {featuredCauses[1].category}
                </span>
                <h3 className="text-lg md:text-xl font-display text-primary font-medium mb-2 leading-tight">
                  {featuredCauses[1].title}
                </h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-4">
                  Providing essential health services directly to unreachable families in distant villages.
                </p>
              </div>
              <div className="pt-4">
                <div className="w-full h-1.5 bg-on-secondary-container/20 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-primary rounded-full animate-width-fill" style={{ width: `${featuredCauses[1].raisedPercent}%` }}></div>
                </div>
                <button 
                  onClick={() => onNavigate('donate')}
                  className="w-full border-2 border-primary hover:bg-primary hover:text-white text-primary py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Contribution's Journey - How It Works */}
      <section className="py-20 bg-surface-bright border-y border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Dignified Operations</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary mt-2">Your Contribution's Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative font-sans">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-primary/20 -z-0"></div>
            
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-primary-container text-white rounded-full flex items-center justify-center mb-2 shadow-lg hover:rotate-3 transition-transform duration-300">
                  <span className="text-3xl text-white">{step.icon}</span>
                </div>
                <h4 className="font-bold text-base text-primary font-display">{step.num}. {step.title}</h4>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Voices of Change */}
      <section className="py-20 md:py-24 max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Real Stories</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary mt-2">Voices Of Change</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, idx) => (
            <div 
              key={test.name} 
              className={`p-8 rounded-2xl border transition-all duration-300 relative ${
                test.featured 
                  ? 'bg-primary text-white border-primary shadow-xl md:-translate-y-4' 
                  : 'bg-surface-container-low border-outline-variant/20 hover:border-primary/30 hover:shadow-md'
              }`}
            >
              {/* Giant quote mark */}
              <span className={`absolute top-4 right-8 font-display text-7xl font-extrabold select-none pointer-events-none opacity-10 ${
                test.featured ? 'text-white' : 'text-primary'
              }`}>
                ”
              </span>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full overflow-hidden border-2 shadow-sm ${
                  test.featured ? 'border-white' : 'border-primary'
                }`}>
                  <img alt={test.name} className="w-full h-full object-cover" src={test.image} />
                </div>
                <div className="text-left font-sans">
                  <h4 className={`font-bold text-sm ${test.featured ? 'text-white' : 'text-primary'}`}>
                    {test.name}
                  </h4>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${
                    test.featured ? 'text-accent-yellow/80' : 'text-on-secondary-fixed-variant'
                  }`}>
                    {test.role}
                  </p>
                </div>
              </div>
              
              <p className={`font-serif text-sm leading-relaxed italic ${
                test.featured ? 'text-white/90' : 'text-on-surface'
              }`}>
                "{test.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action section: Join Us & Become a Volunteer */}
      <section className="py-12 md:py-20 max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Donate Card */}
          <div className="bg-surface-container p-8 md:p-14 rounded-2xl text-center flex flex-col items-center justify-center border border-outline-variant/10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Heart className="w-8 h-8 fill-current text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display text-primary font-medium mb-3">Make a Donation</h3>
            <p className="text-on-surface-variant font-sans text-sm md:text-base max-w-sm mb-8 leading-relaxed">
              Every rupee goes directly to our local on-ground initiatives across India. Start your journey of giving and build a safe, transparent bridge.
            </p>
            <button 
              onClick={() => onNavigate('donate')}
              className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold font-sans text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Donate Now
            </button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-primary p-8 md:p-14 rounded-2xl text-center flex flex-col items-center justify-center shadow-xl text-white">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
              <HeartHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display text-white font-medium mb-3">Become a Volunteer</h3>
            <p className="text-white/80 font-sans text-sm md:text-base max-w-sm mb-8 leading-relaxed">
              Lend your unique skills and valuable time to make a real-world impact. Join our ever-growing family of changemakers in communities.
            </p>
            <button 
              onClick={() => onNavigate('volunteer')}
              className="bg-white hover:bg-surface-container-low text-primary px-10 py-4 rounded-full font-bold font-sans text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Apply to Volunteer
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
