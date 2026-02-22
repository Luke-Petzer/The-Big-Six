import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { SpecsSection } from './components/SpecsSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';
export function App() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <TimelineSection />
      <SpecsSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}