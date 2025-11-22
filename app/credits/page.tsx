'use client';

import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Credits() {
  const getRoleBadge = (role: string) => {
    if (role.includes('Owner') || role === 'Main Scripter') {
      return { label: 'Owner', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' };
    }
    if (role.includes('Scripter')) {
      return { label: 'Scripter', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
    }
    if (role.includes('VFX')) {
      return { label: 'VFX Artist', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
    }
    if (role.includes('Animator')) {
      return { label: 'Animator', color: 'bg-green-500/20 text-green-300 border-green-500/30' };
    }
    if (role.includes('Modeler')) {
      return { label: 'Modeler', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' };
    }
    if (role.includes('Builder')) {
      return { label: 'Builder', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' };
    }
    if (role.includes('Website')) {
      return { label: 'Web Developer', color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' };
    }
    return { label: 'Developer', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30' };
  };

  const teamMembers = [
    {
      name: 'Micah',
      role: 'Website Designer & Developer',
      link: 'https://www.roblox.com/users/7763902442/profile',
      image: 'https://cdn.discordapp.com/avatars/1097523343638405150/a_865db7a66cffa9e38974025efd26e589.webp?size=80&animated=true',
    },
    {
      name: 'Muk',
      role: 'Main Scripter',
      link: 'https://www.roblox.com/users/2349914114/profile',
      image: '/images/DevIcons/Muk.webp',
      isOwner: true,
    },
    {
      name: 'ayowis',
      role: 'Main Modeler',
      link: 'https://www.roblox.com/users/1401655597/profile',
      image: '/images/DevIcons/Ayowis.webp',
    },
    {
      name: 'kibo',
      role: 'Main VFX',
      link: 'https://www.roblox.com/users/3768904127/profile',
      image: '/images/DevIcons/Itokibo.webp',
    },
    {
      name: 'blazinganimation',
      role: 'Main Animator',
      link: 'https://www.roblox.com/users/1215568029/profile',
      image: '/images/DevIcons/Blazinganimation.webp',
    },
    {
      name: 'xenz',
      role: 'Builder',
      link: '',
      image: '/images/DevIcons/Xenz.webp',
    },
    {
      name: 'SEVY',
      role: 'Builder',
      link: '',
      image: '/images/DevIcons/Sevy.webp',
    },
    {
      name: 'cynte',
      role: 'Scripter',
      link: '',
      image: '/images/DevIcons/Cynite.webp',
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
              { label: 'Credits', href: '/credits' },
            ]}
          />

          <div className="text-center mt-8">
            <Badge variant="purple">Special Thanks</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 mt-6">
              Credits
            </h1>
            <p className="text-xl text-slate-300">
              Recognizing everyone who made this possible
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Development Team</h2>

          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-5 bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Profile Picture */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized={member.image.startsWith('http')}
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${getRoleBadge(member.role).color}`}>
                        {getRoleBadge(member.role).label}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {member.role}
                    </p>
                  </div>

                  {/* Profile Button */}
                  {member.link ? (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all"
                    >
                      View Roblox
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 italic text-right">
                      User profile was not linked,<br />I will respect that and not add it <br /> may be added in the future
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
