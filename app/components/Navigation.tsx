'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onWhatsAppBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ onWhatsAppBooking, onScrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Paint Correction',
    'Ceramic Coating',
    'Full Detail Service',
    'Interior Deep Clean',
    'Engine Bay Cleaning',
    'Headlight Restoration',
    'Scratch Removal',
    'Wax & Polish'
  ];

  const handleScrollToSection = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white text-black text-sm py-2 w-full border-b border-stone-200">
        <div className="w-full px-4 text-center font-medium">
          Call us: <a href="tel:7868164231" className="text-black hover:underline">(786) 816-4231</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#151515] backdrop-blur-sm border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <Image
                src="https://i.imgur.com/MPWMCui.png"
                alt="Vice City Mobile Wash & Detail"
                width={50}
                height={50}
                className="h-12 w-auto"
                  priority
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-stone-200 hover:text-stone-50 transition-colors font-serif"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-stone-800 rounded-lg shadow-xl border border-stone-700 z-50">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleScrollToSection('services');
                            setIsServicesOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-stone-200 hover:bg-stone-700 hover:text-white transition-colors font-serif"
                          style={{ fontFamily: 'Crimson Text, serif' }}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button onClick={() => handleScrollToSection('gallery')} className="text-stone-200 hover:text-stone-50 transition-colors font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>Gallery</button>
              <button onClick={() => handleScrollToSection('reviews')} className="text-stone-200 hover:text-stone-50 transition-colors font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>Reviews</button>
              <button onClick={() => handleScrollToSection('about')} className="text-stone-200 hover:text-stone-50 transition-colors font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>About</button>
              <button
                onClick={onWhatsAppBooking}
                className="bg-stone-200 text-stone-900 px-6 py-2 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </button>
            </div>

            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-200 hover:text-white p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-900">
                <div className="space-y-1">
                  <button onClick={() => handleScrollToSection('services')} className="block px-3 py-2 text-stone-200 hover:text-white font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>Services</button>
                  <div className="pl-6 space-y-1">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleScrollToSection('services')}
                        className="block px-3 py-1 text-stone-300 hover:text-white text-sm font-serif"
                        style={{ fontFamily: 'Crimson Text, serif' }}
                      >
                        • {service}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => handleScrollToSection('gallery')} className="block px-3 py-2 text-stone-200 hover:text-white font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>Gallery</button>
                <button onClick={() => handleScrollToSection('reviews')} className="block px-3 py-2 text-stone-200 hover:text-white font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>Reviews</button>
                <button onClick={() => handleScrollToSection('about')} className="block px-3 py-2 text-stone-200 hover:text-white font-serif" style={{ fontFamily: 'Crimson Text, serif' }}>About</button>
                <button
                  onClick={onWhatsAppBooking}
                  className="block w-full mt-4 bg-stone-200 text-stone-900 px-6 py-2 rounded-full font-semibold text-center"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}