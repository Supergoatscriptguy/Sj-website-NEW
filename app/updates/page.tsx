'use client';

import { useState } from 'react';
import { Calendar, Search, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Breadcrumb } from '@/components/Breadcrumb';

interface Update {
  version: string;
  date: string;
  title: string;
  changes: string[];
  category: 'major' | 'minor' | 'patch';
}

export default function Updates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVersion, setSelectedVersion] = useState<string>('all');

  // Placeholder updates - will be populated when updates are released
  const updates: Update[] = [
    // Example format:
    // {
    //   version: '1.0.0',
    //   date: '2025-01-15',
    //   title: 'Initial Release',
    //   changes: [
    //     'Added Sendai Village starting area',
    //     'Implemented basic combat system',
    //     'Added character creation',
    //   ],
    //   category: 'major'
    // }
  ];

  const versions = ['all', ...updates.map(u => u.version)];

  const filteredUpdates = updates.filter(update => {
    const matchesSearch = searchQuery === '' ||
      update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.changes.some(change => change.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesVersion = selectedVersion === 'all' || update.version === selectedVersion;

    return matchesSearch && matchesVersion;
  });

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case 'major': return 'blue';
      case 'minor': return 'default';
      case 'patch': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Updates' }
          ]} />

          <div className="text-center mt-8">
            <Badge variant="blue" icon={<Calendar className="w-4 h-4" />} className="mb-6">
              Changelog
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Game Updates
            </h1>
            <p className="text-xl text-slate-400">
              Track all the latest changes and improvements
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
            </div>

            {/* Version Dropdown */}
            <div className="relative">
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer hover:bg-white/10 font-medium"
              >
                <option value="all" className="bg-slate-900 text-white py-2">All Versions</option>
                {updates.map(update => (
                  <option key={update.version} value={update.version} className="bg-slate-900 text-white py-2">
                    v{update.version}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredUpdates.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-6 p-8 rounded-2xl bg-white/5 border border-white/10 inline-block">
                <Calendar className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No Updates Yet</h3>
                <p className="text-slate-400">
                  {searchQuery ? 'No updates match your search.' : 'Updates will appear here as the game develops.'}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {filteredUpdates.map((update, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={getBadgeVariant(update.category)}>
                        v{update.version}
                      </Badge>
                      <span className="text-slate-500 text-sm">{update.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{update.title}</h2>
                  </div>
                </div>

                <div className="space-y-2">
                  {update.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 leading-relaxed">{change}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
