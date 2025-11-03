'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/game-info', label: 'Game Info' },
  { href: '/locations', label: 'Locations' },
  { href: '/characters', label: 'Characters' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/updates', label: 'Updates' },
  { href: '/credits', label: 'Credits' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Sorcerer's Journey Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Sorcerer&apos;s Journey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Discord Button */}
          <a
            href="https://discord.gg/pUnKjfAKph"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2.5 bg-white text-slate-950 hover:bg-slate-100 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            Join Discord
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://discord.gg/pUnKjfAKph"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-white text-slate-950 text-center rounded-lg font-semibold"
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
