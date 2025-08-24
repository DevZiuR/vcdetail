'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

interface GallerySectionProps {
  onWhatsAppBooking: () => void;
}

export default function GallerySection({ onWhatsAppBooking }: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentType, setCurrentType] = useState<'image' | 'video'>('image');

  const galleryImages = [
    'https://i.imgur.com/XCLRIr9.jpeg',
    'https://i.imgur.com/MmtjWtL.jpeg',
    'https://i.imgur.com/ScmgzZ4.jpeg',
    'https://i.imgur.com/2KehwFh.jpeg'
  ];

  const verticalVideos = [
    'https://i.imgur.com/ZzFlecg.mp4',
    'https://i.imgur.com/oSlBAzb.mp4',
    'https://i.imgur.com/xtmHygI.mp4',
    'https://i.imgur.com/ZLpGUEd.mp4'
  ];

  // Combine all media items for lightbox - only images and vertical videos
  const allMedia = [
    ...galleryImages.map(img => ({ type: 'image' as const, url: img })),
    ...verticalVideos.map(vid => ({ type: 'video' as const, url: vid }))
  ];

  const openLightbox = (index: number, type: 'image' | 'video') => {
    setCurrentIndex(index);
    setCurrentType(type);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
    setCurrentType(allMedia[(currentIndex + 1) % allMedia.length].type);
  };

  const prevMedia = () => {
    const newIndex = currentIndex === 0 ? allMedia.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentType(allMedia[newIndex].type);
  };

  const { ref: sectionRef } = useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="gallery" className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={fadeInUp(titleVisible, 0)}
          >
            Our <span className='text-[#929AAB]'>Work</span> Speaks for Itself
          </h2>
          <p 
            className="text-xl text-stone-300 max-w-3xl mx-auto font-serif leading-relaxed"
            style={fadeInUp(titleVisible, 200)}
          >
            See the transformation. Experience the difference.
          </p>
        </div>

        {/* Mixed Media Gallery - Images and Vertical Videos with Consistent Height */}
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Mix all media together with same aspect ratio */}
          {allMedia.map((media, index) => {
            if (media.type === 'image') {
              return (
                <div 
                  key={`media-${index}`} 
                  className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative"
                  onClick={() => openLightbox(index, 'image')}
                  style={scaleIn(galleryVisible, index * 100)}
                >
                  <Image
                    src={media.url}
                    alt={`Detailing work ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              );
            } else {
              // Vertical videos with same aspect ratio as images
              return (
                <div 
                  key={`media-${index}`} 
                  className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative"
                  onClick={() => openLightbox(index, 'video')}
                  style={scaleIn(galleryVisible, index * 100)}
                >
                  <video
                    src={media.url}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div ref={buttonRef} className="text-center mt-12">
          <button
            onClick={onWhatsAppBooking}
            className="bg-stone-200 text-stone-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors transform hover:scale-105"
            style={fadeInUp(buttonVisible, 0)}
          >
            Book Your Detail Today
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Media Content */}
              <div className="w-full h-full flex items-center justify-center">
                {currentType === 'image' ? (
                  <Image
                    src={allMedia[currentIndex].url}
                    alt={`Gallery item ${currentIndex + 1}`}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    quality={95}
                  />
                ) : (
                  <video
                    src={allMedia[currentIndex].url}
                    className="max-w-full max-h-full object-contain rounded-lg max-w-sm"
                    controls
                    autoPlay
                    loop
                  />
                )}
              </div>

              {/* Media Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-white font-medium">
                  {currentIndex + 1} / {allMedia.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}