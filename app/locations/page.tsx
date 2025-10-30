'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Locations() {
  const [activeTab, setActiveTab] = useState('sendai');

  const locations = {
    sendai: {
      name: 'Sendai Village',
      role: 'Starting Area',
      description: 'You begin your journey as a sorcerer here',
      images: [
        { src: '/images/Sendai.png', caption: 'Village Entrance' },
        { src: '/images/SendaiSquare.png', caption: 'Village Square' },
        { src: '/images/TrainingDummy.png', caption: 'Training Grounds' },
      ],
    },
    elban: {
      name: 'Forest of Elban',
      role: 'Probably a mid-game area',
      description: 'A epic cursed forest',
      images: [
        { src: '/images/Elban1.png', caption: 'Forest Path' },
        { src: '/images/ElbanHouse.png', caption: 'Abandoned Shrine' },
        { src: '/images/ElbanRandomPic.png', caption: 'Deep Woods' },
      ],
    },
    shibuya: {
      name: 'Shibuya ',
      role: 'Probably a late game area',
      description: 'Idk brooo',
      images: [
        { src: '/images/Shibuya1.png', caption: 'City Streets' },
        { src: '/images/Shibuya2.png', caption: 'Subway Entrance' },
        { src: '/images/Invertedspearofheaven.png', caption: 'Legendary Artifacts' },
      ],
    },
  };

  const tabs = [
    { id: 'sendai', label: 'Sendai Village' },
    { id: 'elban', label: 'Forest of Elban' },
    { id: 'shibuya', label: 'Shibuya ' },
  ];

  const currentLocation = locations[activeTab as keyof typeof locations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
            ]}
          />

          <div className="text-center mt-8">
            <Badge variant="purple" icon={<MapPin className="w-4 h-4" />}>Cursed Locations</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 mt-6">
              Locations
            </h1>
            <p className="text-xl text-slate-300">
              Journey through diverse locations filled with mystery
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-950'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-3xl font-bold text-white mb-3">
                {currentLocation.name}
              </h2>
              <div className="mb-3">
                <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-purple-300 text-sm font-medium">
                  {currentLocation.role}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {currentLocation.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentLocation.images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl aspect-video border border-white/10 hover:border-white/20 transition-all">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
