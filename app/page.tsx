import { ConfiguratorProvider } from '@/components/context/ConfiguratorContext';
import { LanguageProvider } from '@/components/context/LanguageContext';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { EventsBanner } from '@/components/sections/EventsBanner';
import { HeroSection } from '@/components/sections/HeroSection';
import { LocationHours } from '@/components/sections/LocationHours';
import { PastillaConfigurator } from '@/components/sections/PastillaConfigurator';
import { RecipesShowcase } from '@/components/sections/RecipesShowcase';

export default function HomePage() {
  return (
    <LanguageProvider>
      <ConfiguratorProvider>
        <div className="flex min-h-screen flex-col bg-ivory-silk text-espresso-ink">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <RecipesShowcase />
            <PastillaConfigurator />
            <EventsBanner />
            <LocationHours />
          </main>
          <Footer />
        </div>
      </ConfiguratorProvider>
    </LanguageProvider>
  );
}
