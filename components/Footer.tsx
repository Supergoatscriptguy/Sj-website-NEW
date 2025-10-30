'use client';

import Link from 'next/link';
import { Youtube, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/game-info', label: 'Game Info' },
    { href: '/locations', label: 'Locations' },
    { href: '/characters', label: 'Characters' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/credits', label: 'Credits' },
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@SorcererJourney', label: 'YouTube Official' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative mt-20 glass border-t border-slate-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.roblox.com/games/86982716859526/Sorcerers-Journey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Play the Game
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/pUnKjfAKph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-slate-700 hover:border-blue-500/50 transition-all"
                  title={social.label}
                >
                  <social.icon size={20} className="text-slate-400 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400 space-y-2">
          <p>© 2025 Sorcerer&apos;s Journey. All rights reserved. Not affiliated with Jujutsu Kaisen or MAPPA.</p>
          <p className="text-slate-500">
            Website designed and developed by Micah | This is the official Sorcerer&apos;s Journey website
          </p>
        </div>
      </div>
    </footer>
  );
}
