import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MobileBankingSection } from './components/MobileBankingSection';
import { DirectorSection } from './components/DirectorSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { AssetStatusModal } from './components/AssetStatusModal';
import { FloatingActions } from './components/FloatingActions';
import { ServiceItem, TELECOM_INFO } from './data/telecomData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [assetModalOpen, setAssetModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'offline', 'online', 'bank', 'director', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#18243a] flex flex-col font-sans">
      {/* Header */}
      <Header
        activeSection={activeSection}
        onOpenAssetModal={() => setAssetModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Services Section (Offline & Online) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Mobile Banking Section */}
        <MobileBankingSection onSelectService={(service) => setSelectedService(service)} />

        {/* Director Profile Section */}
        <DirectorSection />

        {/* Work Gallery Section */}
        <GallerySection onOpenAssetModal={() => setAssetModalOpen(true)} />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer & FAQ */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Interactive Service Detail & Inquiry Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Asset Status & Image Info Modal */}
      <AssetStatusModal
        isOpen={assetModalOpen}
        onClose={() => setAssetModalOpen(false)}
      />
    </div>
  );
}
