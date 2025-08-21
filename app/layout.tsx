import type { Metadata } from 'next';
import { Inter, Playfair_Display, Crimson_Text } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Vice City Mobile Wash & Detail - Premier Miami Luxury Car Detailing',
  description: 'Miami\'s premier mobile luxury car detailing service. Paint correction, ceramic coating, and full detailing for exotic and performance vehicles. We come to you!',
  keywords: 'Miami car detailing, mobile detailing, luxury car wash, paint correction, ceramic coating, car wrapping, window tinting',
  icons: {
    icon: 'https://i.imgur.com/MPWMCui.png',
    shortcut: 'https://i.imgur.com/MPWMCui.png',
    apple: 'https://i.imgur.com/MPWMCui.png',
  },
  openGraph: {
    title: 'Vice City Mobile Wash & Detail - Premier Miami Luxury Car Detailing',
    description: 'Miami\'s premier mobile luxury car detailing service. Paint correction, ceramic coating, and full detailing for exotic and performance vehicles.',
    images: ['https://i.imgur.com/RbfwkSI.jpeg'],
    url: 'https://vicecitymobilewash.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vice City Mobile Wash & Detail',
    description: 'Miami\'s premier mobile luxury car detailing service',
    images: ['https://i.imgur.com/RbfwkSI.jpeg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${crimson.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}