'use client';

import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

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

export default function GameInfo() {
  const links = [
    {
      title: 'Discord Server',
      description: 'Join our community to chat with other players, get support, and stay updated.',
      href: 'https://discord.gg/pUnKjfAKph',
      icon: DiscordIcon,
    },
    {
      title: 'Roblox Group',
      description: 'Follow our official Roblox group for announcements and exclusive rewards.',
      href: 'https://www.roblox.com/communities/34917301/Muks-Productions',
      icon: RobloxIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Game Info', href: '/game-info' },
            ]}
          />

          <div className="text-center mt-8">
            <Badge variant="blue">Game Details</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 mt-6">
              Game Information
            </h1>
            <p className="text-xl text-slate-300">
              Everything you need to know about Sorcerer&apos;s Journey
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">About the Game</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Sorcerer&apos;s Journey is an Roblox open world JJK (Jujutsu Kaisen) experience.
              You can explore diverse locations, master cursed techniques, and battle opponents in
              this thrilling RPG adventure.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">✓</span>
                <span className="text-slate-300">Jujutsu Kaisen inspired gameplay</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">✓</span>
                <span className="text-slate-300">Continuous updates with new content</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">✓</span>
                <span className="text-slate-300">Active developer support and community</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">✓</span>
                <span className="text-slate-300">Currently still in development, game will release in "2030" (probably sooner)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Useful Links
          </h2>

          <StaggerContainer className="space-y-4">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <StaggerItem key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                        <Icon />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {link.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
