'use client';

import { Users } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Characters() {
  // Skeleton placeholders - to be filled with actual character data
  const skeletonCards = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Characters' }
          ]} />

          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="purple" icon={<Users className="w-4 h-4" />}>
              In game Characters
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 mt-6">
              Characters
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Character information coming soon
            </p>
            <p className="text-sm text-slate-400">
              Waiting for confirmation from the development team
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletonCards.map((index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 animate-pulse"
              >
                {/* Image skeleton */}
                <div className="relative aspect-square bg-slate-800/50" />

                {/* Content skeleton */}
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-slate-700/50 rounded w-3/4" />
                  <div className="h-4 bg-slate-700/30 rounded w-1/2" />
                  <div className="space-y-2 pt-2">
                    <div className="h-3 bg-slate-700/30 rounded w-full" />
                    <div className="h-3 bg-slate-700/30 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-slate-400 text-sm">
                More characters will be added once confirmed by the dev team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
