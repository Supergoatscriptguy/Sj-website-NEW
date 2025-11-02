'use client';

import { motion } from 'framer-motion';
import { Sparkles, Code, Eye } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

export default function SecretPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[128px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Sparkle Icon */}
            <motion.div
              className="inline-block mb-8"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <Eye className="w-12 h-12 text-blue-400" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="blue" icon={<Sparkles className="w-4 h-4" />} className="mb-6">
                Secret Discovered
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  You Found It!
                </span>
              </h1>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 mb-12"
            >
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Congratulations! You discovered the hidden page.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Only the most curious explorers find their way here. Consider yourself part of an exclusive club of digital treasure hunters.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-400">Curiosity Level</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">Elite</div>
                <div className="text-sm text-slate-400">Explorer Status</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">1/∞</div>
                <div className="text-sm text-slate-400">Secrets Found</div>
              </div>
            </motion.div>

            {/* Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm mb-8 max-w-2xl mx-auto"
            >
              <p className="text-slate-300 leading-relaxed mb-4">
                <span className="font-semibold text-white">From the dev team:</span> Thanks for exploring every corner of our site! Your attention to detail is what makes this community special. Stay tuned for more updates and hidden surprises.
              </p>
              <p className="text-sm text-slate-500 italic">
                - Muk & Micah
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button href="/" variant="primary" size="lg">
                Return Home
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
