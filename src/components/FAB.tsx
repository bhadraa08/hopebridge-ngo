import { ScreenID } from '../types';
import { Heart } from 'lucide-react';

interface FABProps {
  currentScreen: ScreenID;
  onNavigate: (screen: ScreenID) => void;
}

export default function FAB({ currentScreen, onNavigate }: FABProps) {
  // If we are already on the donate screen, no need to show the Donate FAB
  if (currentScreen === 'donate') return null;

  return (
    <button
      onClick={() => onNavigate('donate')}
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-40 group flex items-center gap-3 bg-tertiary hover:bg-[#341e00] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      <Heart className="w-5 h-5 fill-accent-yellow text-accent-yellow animate-pulse group-hover:scale-110 transition-transform" />
      <span className="font-sans font-bold uppercase text-xs tracking-wider hidden md:inline-block">
        Donate Now
      </span>
    </button>
  );
}
