import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CompaniesSection from '@/components/CompaniesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <ParticleBackground />
      
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <WhyChooseSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
