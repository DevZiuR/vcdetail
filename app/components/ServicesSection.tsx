import { Shield, MapPin } from 'lucide-react';
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight, scaleIn } from '../hooks/useScrollAnimation';

interface ServicesSectionProps {
  onWhatsAppBooking: () => void;
}

export default function ServicesSection({ onWhatsAppBooking }: ServicesSectionProps) {
  const { ref: sectionRef } = useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: additionalRef, isVisible: additionalVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight"
            style={fadeInUp(titleVisible, 0)}
          >
            Premium Services
          </h2>
          <p 
            className="text-xl text-stone-600 max-w-3xl mx-auto font-serif leading-relaxed"
            style={fadeInUp(titleVisible, 200)}
          >
            From mobile convenience to studio perfection, we deliver unmatched luxury car care
          </p>
        </div>

        <div ref={servicesRef} className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Studio Services */}
          <div 
            className="bg-stone-900 text-white p-8 rounded-2xl"
            style={slideInLeft(servicesVisible, 0)}
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-stone-200 mr-3" />
              <h3 className="text-2xl font-bold tracking-tight">Premium Studio Services</h3>
            </div>
            <p className="text-stone-300 mb-6 font-serif">Perfect conditions for paint correction & ceramic coating</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-stone-200 pl-4">
                <h4 className="font-bold text-lg">Paint Correction</h4>
                <p className="text-stone-300">Multi-stage correction process</p>
              </div>
              <div className="border-l-4 border-stone-200 pl-4">
                <h4 className="font-bold text-lg">Ceramic Coating</h4>
                <p className="text-stone-300">Long-lasting protection & gloss</p>
              </div>
              <div className="border-l-4 border-stone-200 pl-4">
                <h4 className="font-bold text-lg">Paint Protection Film (PPF)</h4>
                <p className="text-stone-300">Ultimate paint preservation</p>
              </div>
            </div>

            <button
              onClick={onWhatsAppBooking}
              className="w-full mt-6 bg-stone-200 text-stone-900 py-3 rounded-full font-bold hover:bg-white transition-colors"
            >
              Schedule Studio Service
            </button>
          </div>

          {/* Mobile Services */}
          <div 
            className="bg-stone-50 p-8 rounded-2xl border border-stone-200"
            style={slideInRight(servicesVisible, 200)}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-stone-900 mr-3" />
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight">Mobile Detailing</h3>
            </div>
            <p className="text-stone-600 mb-6 font-serif">We come to you - home, office, anywhere in Miami</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-stone-900">Interior</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Deep vacuum extraction</li>
                  <li>• Dashboard & console detailing</li>
                  <li>• Leather cleaning & conditioning</li>
                  <li>• Full steam cleaning</li>
                  <li>• Crystal-clear windows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-stone-900">Exterior</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Hand wash with pH-neutral shampoo</li>
                  <li>• Spray ceramic coating</li>
                  <li>• UV protection & glossy finish</li>
                  <li>• Trim & plastic restoration</li>
                  <li>• Wheel cleaning & tire shine</li>
                </ul>
              </div>
            </div>

            <button
              onClick={onWhatsAppBooking}
              className="w-full mt-6 bg-stone-900 text-white py-3 rounded-full font-bold hover:bg-stone-800 transition-colors"
            >
              Book Mobile Service
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div ref={additionalRef} className="grid md:grid-cols-2 gap-8">
          <div 
            className="text-center p-6 border border-stone-200 rounded-xl hover:shadow-lg transition-shadow"
            style={scaleIn(additionalVisible, 0)}
          >
            <Shield className="w-12 h-12 text-stone-900 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-stone-900 mb-2">Car Wrapping</h4>
            <p className="text-stone-600">Transform your vehicle's appearance with premium vinyl wraps</p>
          </div>
          <div 
            className="text-center p-6 border border-stone-200 rounded-xl hover:shadow-lg transition-shadow"
            style={scaleIn(additionalVisible, 200)}
          >
            <Shield className="w-12 h-12 text-stone-900 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-stone-900 mb-2">Window Tinting</h4>
            <p className="text-stone-600">Privacy and UV protection with professional installation</p>
          </div>
        </div>
      </div>
    </section>
  );
}