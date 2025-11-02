'use client';

import { Button } from '@/components/Button';

export default function SecretPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          You found it.
        </h1>

        <p className="text-xl text-slate-400 mb-8">
          Thanks for checking out the site. We appreciate the curiosity.
        </p>

        <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <p className="text-slate-300 mb-2">
            If you have any feedback or suggestions, feel free to reach out on{' '}
            <a
              href="https://discord.gg/pUnKjfAKph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Discord
            </a>.
          </p>
          <p className="text-sm text-slate-500">
            - Muk & Micah
          </p>
        </div>

        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
