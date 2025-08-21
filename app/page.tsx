'use client';

import { Phone } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const whatsappBooking = () => {
    window.open('https://api.whatsapp.com/send/?phone=17868164231&text&type=phone_number&app_absent=0', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={whatsappBooking}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation */}
      <Navigation
        onWhatsAppBooking={whatsappBooking}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection
        onWhatsAppBooking={whatsappBooking}
        onScrollToSection={scrollToSection}
      />

      {/* About Section */}
      <AboutSection onWhatsAppBooking={whatsappBooking} />

      {/* Services Section */}
      <ServicesSection onWhatsAppBooking={whatsappBooking} />

      {/* Gallery Section */}
      <GallerySection
        onWhatsAppBooking={whatsappBooking}
      />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <ContactSection onWhatsAppBooking={whatsappBooking} />

      {/* Footer */}
      <Footer />
    </div>
  );
}