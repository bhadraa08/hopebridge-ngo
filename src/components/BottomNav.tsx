import { ScreenID } from '../types';
import { Home, HeartHandshake, Coins, BookOpen, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  currentScreen: ScreenID;
  onNavigate: (screen: ScreenID) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const items: { id: ScreenID; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'causes', label: 'Causes', icon: HeartHandshake },
    { id: 'donate', label: 'Donate', icon: Coins },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-white border-t border-outline-variant/30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-2 pb-safe">
      <div className="flex justify-around items-center h-14">
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center flex-1 cursor-pointer transition-all duration-300"
            >
              <div 
                className={`flex items-center justify-center p-1.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary/10 text-primary scale-110' 
                    : 'text-on-secondary-container hover:text-primary'
                }`}
              >
                <IconComponent className="w-5 h-5" />
              </div>
              <span 
                className={`text-[10px] font-semibold tracking-wider uppercase mt-1 transition-colors duration-300 ${
                  isActive ? 'text-primary font-extrabold' : 'text-on-secondary-container/80'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
