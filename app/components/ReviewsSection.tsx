import { Star } from 'lucide-react';
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

export default function ReviewsSection() {
  const { ref: sectionRef } = useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <div 
            className="flex items-center justify-center mb-6"
            style={fadeInUp(titleVisible, 0)}
          >
            <div className="flex text-yellow-400 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-stone-900">5.0</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight"
            style={fadeInUp(titleVisible, 200)}
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-xl text-stone-600 font-serif"
            style={fadeInUp(titleVisible, 400)}
          >
            25+ Five-Star Google Reviews
          </p>
        </div>

        <div ref={reviewsRef} className="grid md:grid-cols-3 gap-8">
          <div 
            className="bg-stone-50 p-8 rounded-2xl"
            style={scaleIn(reviewsVisible, 0)}
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-stone-700 mb-6">
              "Amazing service, attention to detail, and super convenient. Made the wrap on the car look like it was brand new. And the interior smells amazing. Will be coming back and recommending to friends💯"
            </p>
            <p className="font-semibold text-stone-900">- Dylan Goularte</p>
          </div>

          <div 
            className="bg-stone-50 p-8 rounded-2xl"
            style={scaleIn(reviewsVisible, 200)}
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-stone-700 mb-6">
              "1000/10 my car was like new. Fast service and attention to detail"
            </p>
            <p className="font-semibold text-stone-900">- Maba Peña</p>
          </div>

          <div 
            className="bg-stone-50 p-8 rounded-2xl"
            style={scaleIn(reviewsVisible, 400)}
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-stone-700 mb-6">
              "Just got my car cleaned at VCDetail Carwash and wow-I'm seriously impressed! Huge shoutout to Jhonatham for the amazing job. Super friendly and detailed. My car's never looked better. Definitely coming back!"
            </p>
            <p className="font-semibold text-stone-900">- Dania Quesada</p>
          </div>
        </div>

        <div ref={buttonRef} className="text-center mt-12">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJC4979iav328RQWCcPbGpNwo&source=g.page.m._&laa=merchant-review-solicitation&fbclid=PAZXh0bgNhZW0CMTEAAaeFR3RQkolqPdn1T0lgsqvHcFZ9xtRk1i96Gw5Ntv3pLR4kBkVh-j5EqIsj8A_aem_7FMB4PUlIO40Ofg4wR5skQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 font-serif"
            style={fadeInUp(buttonVisible, 0)}
          >
            View More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}