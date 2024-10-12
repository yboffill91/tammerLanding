import type { Metadata } from 'next';
import './globals.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { NAV_ITEMS } from '@/constants';

export const metadata: Metadata = {
  title:
    'Tamer Digital -- Seriously focus on building the Business of your dreams',
  description:
    'Tamer Digital is a digital agency that helps you build the business of your dreams. We are a team of experts who are passionate about helping you achieve your goals. Our team of experts is dedicated to helping you succeed in your business with Digital Strategies, Digital Marketing, SEO Positioning, Social Media Marketing, Content Marketing, website Development, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased scroll-smooth overflow-x-hidden'>
        <main className='margin-auto'>
          <NavBar logo='TamerDigital' navItems={NAV_ITEMS} />

          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
