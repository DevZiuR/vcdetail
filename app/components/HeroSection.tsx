'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';

interface HeroSectionProps {
  onWhatsAppBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onWhatsAppBooking, onScrollToSection }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    'https://i.imgur.com/MmtjWtL.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <Image
          src={galleryImages[currentImageIndex]}
          alt="Luxury Car Detailing"
          fill
          className="object-cover object-center transition-all duration-1000 opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-stone-900/70"></div>
      </div>

  <div className="relative z-10 flex items-start justify-center h-full pt-28 sm:pt-40 md:pt-44 lg:pt-56">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Elite Mobile <span className='text-[#929AAB]'>Detailing</span> <br />
            <span className="text-stone-200 font-medium">That <span className='text-[#929AAB]'>Comes</span> To You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto font-serif leading-relaxed">
            Luxury car care for Miami's most discerning drivers. Paint correction & ceramic coating at our private studio. <span className='font-bold'>Full detailing</span> at your location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onWhatsAppBooking}
              className="bg-stone-200 text-stone-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => onScrollToSection('gallery')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-stone-900 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-white font-semibold">5.0 Google Reviews</span>
              <Image
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google"
                width={24}
                height={24}
                className="h-5 w-5 sm:h-6 sm:w-6 ml-2 bg-white rounded-full border border-[#DEDCD3] shadow-sm object-contain p-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  );
}