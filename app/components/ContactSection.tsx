import { Phone, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

interface ContactSectionProps {
  onWhatsAppBooking: () => void;
}

export default function ContactSection({ onWhatsAppBooking }: ContactSectionProps) {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={fadeInUp(titleVisible, 0)}
          >
            Ready to Transform Your Vehicle?
          </h2>
          <p 
            className="text-xl text-stone-300 max-w-3xl mx-auto font-serif leading-relaxed"
            style={fadeInUp(titleVisible, 200)}
          >
            Book your appointment today and experience Miami's premier mobile detailing service
          </p>
        </div>

        <div ref={contactRef} className="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            className="text-center"
            style={scaleIn(contactVisible, 0)}
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-stone-200" />
            <h3 className="text-xl font-bold mb-2">WhatsApp Booking</h3>
            <button
              onClick={onWhatsAppBooking}
              className="text-stone-300 hover:text-white transition-colors"
            >
              (786) 816-4231
            </button>
          </div>

          <div 
            className="text-center"
            style={scaleIn(contactVisible, 200)}
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-stone-200" />
            <h3 className="text-xl font-bold mb-2">Service Area</h3>
            <a
              href="https://maps.app.goo.gl/9ZB7U6eRxz5Tkdpy9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors"
            >
              Greater Miami Area
            </a>
          </div>

          <div 
            className="text-center"
            style={scaleIn(contactVisible, 400)}
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-stone-200" />
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            <p className="text-stone-300">By Appointment Only</p>
          </div>
        </div>

        <div ref={buttonRef} className="text-center">
          <button
            onClick={onWhatsAppBooking}
            className="bg-stone-200 text-stone-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={fadeInUp(buttonVisible, 0)}
          >
            BOOK YOUR DETAIL NOW
          </button>
        </div>
      </div>
    </section>
  );
}