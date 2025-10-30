'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, X, Filter } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

type GalleryCategory = 'all' | 'locations' | 'gameplay' | 'characters' | 'items';

interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: GalleryCategory;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { src: '/images/Sendai.png', title: 'Sendai Village', description: 'Starting area for new sorcerers', category: 'locations' },
    { src: '/images/SendaiSquare.png', title: 'Village Square', description: 'Where players find NPCs', category: 'locations' },
    { src: '/images/Elban1.png', title: 'Forest of Elban', description: 'First combat area', category: 'locations' },
    { src: '/images/ElbanHouse.png', title: 'Elban Cabin', description: 'Hidden house with special quests', category: 'locations' },
    { src: '/images/Shibuya1.png', title: 'Shibuya District', description: 'Endgame area', category: 'locations' },
    { src: '/images/Shibuya2.png', title: 'Shibuya Streets', description: 'Urban battleground', category: 'locations' },
    { src: '/images/Charicter-nanami.png', title: 'Kento Nanami', description: 'Grade 1 Sorcerer', category: 'characters' },
    { src: '/images/NormalChar.png', title: 'New Student', description: 'Starter character', category: 'characters' },
    { src: '/images/Wis.png', title: 'Wis', description: 'Quest giver NPC', category: 'characters' },
    { src: '/images/TrainingDummy.png', title: 'Training Area', description: 'Practice combat skills', category: 'gameplay' },
    { src: '/images/setspawnguy.png', title: 'Draco', description: 'Spawn point coordinator', category: 'gameplay' },
    { src: '/images/slaughterdemondagger.png', title: 'Slaughter Demon Dagger', description: 'Rare weapon', category: 'items' },
    { src: '/images/Invertedspearofheaven.png', title: 'Inverted Spear of Heaven', description: 'Legendary weapon', category: 'items' },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'locations', label: 'Locations' },
    { id: 'gameplay', label: 'Gameplay' },
    { id: 'characters', label: 'Characters' },
    { id: 'items', label: 'Items' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery' }
          ]} />

          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" icon={<Sparkles className="w-4 h-4" />} className="mb-6">
              Visual Showcase
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl text-slate-400 mb-4">
              New and improved screenshots/pictures pending
            </p>
            <p className="text-sm text-slate-500">
              Current images are kinda bad, new pictures will be added soon
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-950/95 backdrop-blur-lg border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as GalleryCategory)}
                className={`px-6 py-2.5 font-semibold whitespace-nowrap rounded-lg transition-all ${
                  activeFilter === filter.id
                    ? 'bg-white text-slate-950 shadow-lg'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <StaggerItem key={index}>
                <div
                  onClick={() => setLightboxImage(item)}
                  className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer bg-slate-900 border border-white/10 hover:border-white/20 transition-all"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-xl">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-6xl w-full">
            <div className="relative aspect-video w-full mb-6 rounded-2xl overflow-hidden">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{lightboxImage.title}</h2>
              <p className="text-slate-400 text-lg">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
