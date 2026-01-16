import { Italiana, Manrope } from 'next/font/google';
import "./globals.css";

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: "Milan Bhimani | Software Developer",
  description: "Portfolio of Milan Bhimani, a Software Developer specializing in MERN Stack, Python, and Data Science.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${italiana.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}