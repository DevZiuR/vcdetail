import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

interface ContactSectionProps {
  onWhatsAppBooking: () => void;
}

export default function ContactSection({ onWhatsAppBooking }: ContactSectionProps) {
  const { ref: sectionRef } = useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="py-20 bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={fadeInUp(titleVisible, 0)}
          >
            Ready to <span className="text-[#929AAB]">Transform</span> Your Vehicle?
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
            <Phone className="w-12 h-12 mx-auto mb-4 text-[#929AAB]" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
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
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#929AAB] " />
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
            <Clock className="w-12 h-12 mx-auto mb-4 text-[#929AAB]" />
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            <p className="text-stone-300">By Appointment Only</p>
          </div>
        </div>

        {/* Short Form CTA */}
        <div className="max-w-xl mx-auto mb-12 bg-[#181818] rounded-2xl shadow-lg p-8" style={fadeInUp(contactVisible, 400)}>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name*</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg bg-[#232323] text-white border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#929AAB]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email*</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-[#232323] text-white border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#929AAB]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone*</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 rounded-lg bg-[#232323] text-white border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#929AAB]" />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-1">Service*</label>
              <select id="service" name="service" required className="w-full px-4 py-2 rounded-lg bg-[#232323] text-white border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#929AAB]">
                <option value="">Select a service</option>
                <option value="exterior">Exterior Detailing</option>
                <option value="interior">Interior Detailing</option>
                <option value="full">Full Detail</option>
                <option value="ceramic">Ceramic Coating</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-semibold mb-1">Additional Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                className="w-full px-4 py-5 rounded-lg bg-[#232323] text-white border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#929AAB] resize-none text-sm"
                placeholder="Let us know anything special about your vehicle, preferred time, or any questions you have..."
              />
            </div>
            <button type="submit" className="w-full bg-[#929AAB] text-[#151515] font-bold py-3 rounded-lg hover:bg-white transition-all duration-200 font-playfair">Book Now</button>
          </form>
        </div>

 
        {/* }
        <div ref={buttonRef} className="text-center">
          
          <button
            onClick={onWhatsAppBooking}
            className="bg-stone-200 text-stone-900 px-6 py-3 md:px-12 md:py-4 rounded-full text-base font-bold font-poppins hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl tracking-wide inline-flex items-center justify-center gap-3"
            style={fadeInUp(buttonVisible, 0)}
          >
            <ArrowRight className="w-5 h-5 mr-1" />
            BOOK YOUR DETAIL NOW
          </button>
        </div>
        */}
      </div>
    </section>
  );
}