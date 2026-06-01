import { useState, useEffect } from 'react';
import { ScreenID } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import FAB from './components/FAB';

// Screen Components
import HomeScreen from './components/HomeScreen';
import VolunteerScreen from './components/VolunteerScreen';
import CausesScreen from './components/CausesScreen';
import ContactScreen from './components/ContactScreen';
import DonateScreen from './components/DonateScreen';
import BlogScreen from './components/BlogScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenID>('home');

  const handleNavigate = (screen: ScreenID) => {
    setCurrentScreen(screen);
    // Instant scroll to top preserves consistent page entry feel
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface uppercase-sans selection:bg-primary/20 selection:text-primary">
      {/* Universal Navigation Header */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Dynamic Viewport Mount */}
      <main className="flex-grow pb-16 md:pb-0">
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'volunteer' && <VolunteerScreen />}
        {currentScreen === 'causes' && <CausesScreen onNavigate={handleNavigate} />}
        {currentScreen === 'contact' && <ContactScreen />}
        {currentScreen === 'donate' && <DonateScreen />}
        {currentScreen === 'blog' && <BlogScreen />}
      </main>

      {/* Quick Action Floating Donation FAB */}
      <FAB currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Updated Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Responsive Tactical Mobile Bottom Bar */}
      <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}
