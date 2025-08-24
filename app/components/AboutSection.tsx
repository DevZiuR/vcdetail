import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight } from '../hooks/useScrollAnimation';

interface AboutSectionProps {
  onWhatsAppBooking: () => void;
}

export default function AboutSection({ onWhatsAppBooking }: AboutSectionProps) {
  const { ref: sectionRef } = useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 tracking-tight leading-tight text-center lg:text-left"
              style={fadeInUp(titleVisible, 0)}
            >
              Miami's Premier Luxury Detail Specialists
            </h2>
            <div 
              className="space-y-6 text-lg text-stone-700 font-serif leading-relaxed"
              style={slideInLeft(contentVisible, 200)}
            >
              <p>
                At Vice City Mobile Wash & Detail, we understand that your luxury vehicle <span className='font-bold'>deserves nothing but the finest care</span>. Our team of certified professionals specializes in exotic and performance vehicles, bringing years of expertise to every detail.
              </p>
              <p>
                From our private studio for paint correction and ceramic coating to our mobile service that comes to you, <span className='font-bold'>deliver exceptional results</span> we with unmatched convenience.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center" style={fadeInUp(contentVisible, 400)}>
                  <div className="text-3xl font-bold text-stone-900">25+</div>
                  <div className="text-stone-600">5-Star Reviews</div>
                </div>
                <div className="text-center" style={fadeInUp(contentVisible, 500)}>
                  <div className="text-3xl font-bold text-stone-900">100%</div>
                  <div className="text-stone-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center" style={fadeInUp(contentVisible, 600)}>
              <button
                onClick={onWhatsAppBooking}
                className="bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-800 transition-colors transform hover:scale-105"
              >
                Experience the Difference
              </button>
            </div>
          </div>

          <div ref={imageRef} className="relative flex justify-center">
            <div style={slideInRight(imageVisible, 0)}>
              <Image
                src="https://i.imgur.com/d7bHt8n.png"
                alt="Vice City Mobile Wash Team"
                width={395}
                height={609}
                className="max-w-xs sm:max-w-sm h-auto rounded-2xl shadow-2xl object-cover object-center"
                loading="lazy"
                quality={90}
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
              style={fadeInUp(imageVisible, 300)}
            >
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-stone-900 mr-2" />
                <span className="font-semibold text-stone-900">Miami Based</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}