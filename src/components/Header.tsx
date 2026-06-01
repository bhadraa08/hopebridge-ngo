import { useState } from 'react';
import { ScreenID } from '../types';
import { Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenID;
  onNavigate: (screen: ScreenID) => void;
}

export default function Header({ currentScreen, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ScreenID; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'causes', label: 'Our Causes' },
    { id: 'volunteer', label: 'Join Volunteer' },
    { id: 'blog', label: 'Stories & Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-20 max-w-[1280px] mx-auto h-20">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
            HopeBridge
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={`font-sans text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer pb-1 border-b-2 ${
                currentScreen === item.id
                  ? 'text-primary border-primary font-bold'
                  : 'text-on-secondary-container border-transparent hover:text-primary hover:border-primary/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('donate')}
            className={`cursor-pointer px-6 py-2.5 rounded-full font-bold transition-all duration-300 font-sans text-sm active:scale-95 shadow-sm ${
              currentScreen === 'donate'
                ? 'bg-primary-container text-white border-2 border-primary-container'
                : 'bg-primary text-white hover:bg-primary-hover hover:shadow-md'
            }`}
          >
            Donate
          </button>
        </nav>

        {/* Mobile Hamburguer Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 hover:bg-surface-container rounded-full active:scale-90 transition-all cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-outline-variant/30 shadow-xl z-40 transition-all duration-300 animate-slide-down">
          <div className="px-6 py-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-sans font-semibold py-2 px-3 rounded-lg transition-all ${
                  currentScreen === item.id
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-on-secondary-container hover:bg-surface-container hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('donate');
                setIsOpen(false);
              }}
              className="mt-4 w-full bg-primary text-white py-4 rounded-full font-bold text-center shadow-md active:scale-95 transition-all text-base"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
