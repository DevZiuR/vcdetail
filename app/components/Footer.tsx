import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="https://i.imgur.com/RbfwkSI.jpeg" 
              alt="Vice City Mobile Wash & Detail" 
              width={48}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-stone-400 font-serif">
              Miami's premier luxury mobile car detailing service
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-stone-400 font-serif">
              <li>Mobile Detailing</li>
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
              <li>Car Wrapping</li>
              <li>Window Tinting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-stone-400 font-serif">
              <p>(786) 816-4231</p>
              <p>Miami, Florida</p>
              <p>By Appointment Only</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors cursor-pointer">
                <a
                  href="https://www.instagram.com/vcdetail_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-full h-full"
                >
                  <span className="text-sm">IG</span>
                </a>
              </div>
              <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors cursor-pointer">
                <a href="https://www.facebook.com/profile.php?id=61576921455377&mibextid=wwXIfr&rdid=ezuxYD1VYMZwAo2Z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A4fDyNazK%2F%3Fmibextid%3DwwXIfr"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook"
                >
                <span className="text-sm">FB</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p className="font-serif">&copy; 2025 <span className="font-bold">Vice City Mobile Wash & Detail</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}