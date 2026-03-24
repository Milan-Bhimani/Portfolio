import type { Metadata } from 'next';
import './globals.css';
import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  title: 'Milan Bhimani — Software Developer',
  description: 'Building secure, scalable digital ecosystems. Backend & Full-Stack Engineer based in Ahmedabad, India.',
  openGraph: {
    title: 'Milan Bhimani — Software Developer',
    description: 'Backend & Full-Stack Engineer based in Ahmedabad, India.',
    url: 'https://milanhbhimani.me',
    siteName: 'Milan Bhimani',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
