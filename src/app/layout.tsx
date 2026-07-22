import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import LightParticleCanvas from '@/components/LightParticleCanvas';
import CursorSpotlight from '@/components/CursorSpotlight';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollToTop from '@/components/ScrollToTop';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Virika Olivia Soans | Data Science & Software Engineer',
  description:
    'Portfolio of Virika Olivia Soans - B.Tech in CSE (Data Science) graduate from Dayananda Sagar University (CGPA 9.42). Specializing in Vision Transformers, Deep Learning, Financial AI, and Modern Web Development.',
  keywords: [
    'Virika Olivia Soans',
    'Data Science',
    'Software Engineer',
    'Vision Transformers',
    'Deep Learning',
    'Dayananda Sagar University',
    'Swin Transformer',
    'AI Risk Analysis',
    'Portfolio',
  ],
  authors: [{ name: 'Virika Olivia Soans' }],
  openGraph: {
    title: 'Virika Olivia Soans | Data Science & Software Engineer',
    description:
      'Bridging Artificial Intelligence, Analytics, and Modern Web Development. Explore projects in Vision Transformers, Explainable AI, and Healthcare.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} light scroll-smooth`}>
      <body className="bg-[#faf9f6] text-[#0f172a] font-sans antialiased min-h-screen flex flex-col selection:bg-[#0f172a] selection:text-white relative">
        <ScrollProgressBar />
        <LightParticleCanvas />
        <CursorSpotlight />
        <div className="relative z-10">{children}</div>
        <ScrollToTop />
      </body>
    </html>
  );
}
