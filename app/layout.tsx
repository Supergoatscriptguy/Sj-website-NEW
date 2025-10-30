import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Sorcerer's Journey | Jujutsu Kaisen Roblox Experience",
  description: "Embark on an epic adventure in the world of Jujutsu Kaisen. Master cursed techniques, explore mystical locations, and battle powerful sorcerers in this immersive Roblox experience.",
  keywords: ['Sorcerers Journey', 'Jujutsu Kaisen', 'Roblox', 'JJK', 'Anime Game'],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: "Sorcerer's Journey | Jujutsu Kaisen Roblox Experience",
    description: "Embark on an epic adventure in the world of Jujutsu Kaisen",
    images: ['/images/logo.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
