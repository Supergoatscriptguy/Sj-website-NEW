'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Map, Users, ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 71 55" fill="currentColor">
    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
  </svg>
);

const RobloxIcon = () => (
  <svg width="20" height="20" viewBox="397 377 375 367" fill="currentColor">
    <g transform="matrix(1.3333333,0,0,-1.3333333,0,405.02)">
      <g transform="translate(389.0068,129.7562)">
        <path d="M62.4-268.5l-35.2,9.1l9.1,35.2l35.2-9.1L62.4-268.5z M-17.6-133L-64-313.3l180.4-46.4l46.4,180.4L-17.6-133z"/>
      </g>
    </g>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="blue" icon={<Sparkles className="w-4 h-4" />} className="mb-6">
                Currently in Development
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Sorcerer's Journey
              </h1>

              <p className="text-2xl text-slate-300 mb-4">
                A Roblox experience inspired by Jujutsu Kaisen
              </p>

              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Step into a world where cursed energy flows through everything. Train, explore, and battle in an immersive JJK-inspired adventure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://www.roblox.com/games/86982716859526/Sorcerers-Journey"
                  variant="primary"
                  size="lg"
                  icon={<Play size={20} />}
                >
                  Play on Roblox
                </Button>
                <Button
                  href="https://discord.gg/pUnKjfAKph"
                  variant="outline"
                  size="lg"
                  icon={<DiscordIcon />}
                >
                  Join Discord
                </Button>
                <Button
                  href="https://www.roblox.com/communities/34917301/Muks-Productions"
                  variant="outline"
                  size="lg"
                  icon={<RobloxIcon />}
                >
                  Join Group
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/3] bg-slate-900">
                <Image
                  src="/images/Sendai.png"
                  alt="Sorcerer's Journey - Sendai Village"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">Sendai Village</p>
                  <p className="text-slate-300 text-sm">Your journey begins here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <div className="relative aspect-square bg-slate-900">
                  <Image
                    src="/images/SendaiSquare.png"
                    alt="Sendai Square"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold text-white mb-6">What is Sorcerer's Journey?</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Sorcerer's Journey</span> is a Roblox game inspired by the world of Jujutsu Kaisen. The game is currently in active development, with the team working hard to bring the JJK universe to life.
                </p>
                <p>
                  Explore unique locations like Sendai Village, adventure into the mysterious Forest of Elban, and experience the epic city of Shibuya. The game aims to capture the essence of what makes Jujutsu Kaisen special.
                </p>
                <div className="pt-4">
                  <div className="inline-block px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg">
                    <p className="text-slate-400 text-sm">
                      This is a fan-made project and is not officially affiliated with Jujutsu Kaisen, MAPPA, or Gege Akutami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Explore the World</h2>
              <p className="text-slate-400 text-lg">Discover our diverse locations across the game</p>
            </div>
            <Link href="/locations" className="hidden md:block">
              <Button variant="outline" icon={<ArrowRight size={18} />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large featured location */}
            <Link href="/locations" className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all md:row-span-2">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/Sendai.png"
                  alt="Sendai Village"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge variant="blue" className="mb-3">Starting Area</Badge>
                  <h3 className="text-3xl font-bold text-white mb-2">Sendai Village</h3>
                  <p className="text-slate-300">Your journey as a sorcerer begins here</p>
                </div>
              </div>
            </Link>

            {/* Smaller locations */}
            <Link href="/locations" className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/images/Elban1.png"
                  alt="Forest of Elban"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Forest of Elban</h3>
                  <p className="text-slate-300 text-sm">A mysterious cursed forest</p>
                </div>
              </div>
            </Link>

            <Link href="/locations" className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/images/Shibuya1.png"
                  alt="Shibuya District"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Shibuya District</h3>
                  <p className="text-slate-300 text-sm">Possibly an epic battleground</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/locations">
              <Button variant="outline" icon={<ArrowRight size={18} />}>
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/game-info" className="group block p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <Sparkles className="text-blue-400" size={24} />
                </div>
                <ArrowRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Game Info</h3>
              <p className="text-slate-400">Learn about the game and join the community</p>
            </Link>

            <Link href="/credits" className="group block p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                  <Users className="text-purple-400" size={24} />
                </div>
                <ArrowRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dev Team</h3>
              <p className="text-slate-400">Meet the people bringing this project to life</p>
            </Link>

            <Link href="/gallery" className="group block p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                  <Map className="text-cyan-400" size={24} />
                </div>
                <ArrowRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Gallery</h3>
              <p className="text-slate-400">Browse screenshots from the game</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Jump into the action
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                The game is still being worked on, but you can see it now on Roblox. Join our Discord to keep up with updates and talk with the community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="https://www.roblox.com/games/86982716859526/Sorcerers-Journey"
                variant="primary"
                size="lg"
                icon={<Play size={20} />}
              >
                Play on Roblox
              </Button>
              <Button
                href="https://discord.gg/pUnKjfAKph"
                variant="outline"
                size="lg"
                icon={<DiscordIcon />}
              >
                Join Discord
              </Button>
              <Button
                href="https://www.roblox.com/communities/34917301/Muks-Productions"
                variant="outline"
                size="lg"
                icon={<RobloxIcon />}
              >
                Join Group
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
