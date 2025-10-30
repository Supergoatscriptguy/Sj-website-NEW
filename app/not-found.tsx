'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Looks like you wandered into the wrong domain. This page doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            href="/"
            variant="primary"
            size="lg"
            icon={<Home size={20} />}
          >
            Go Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            icon={<ArrowLeft size={20} />}
          >
            Go Back
          </Button>
        </div>

        {/* Optional helpful links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/game-info" className="text-slate-400 hover:text-white transition-colors text-sm">
              Game Info
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/locations" className="text-slate-400 hover:text-white transition-colors text-sm">
              Locations
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/characters" className="text-slate-400 hover:text-white transition-colors text-sm">
              Characters
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors text-sm">
              Gallery
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/credits" className="text-slate-400 hover:text-white transition-colors text-sm">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
