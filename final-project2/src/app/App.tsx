import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { TestimonialSection } from './components/TestimonialSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <HowToOrderSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}