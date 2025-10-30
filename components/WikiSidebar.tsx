'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { wikiData } from '@/lib/wikiData';

export function WikiSidebar() {
  const params = useParams();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    wikiData.map(cat => cat.id) // All expanded by default
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const currentCategory = params?.category as string;
  const currentArticle = params?.article as string;

  return (
    <div className="w-full lg:w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 h-fit lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-white mb-4 px-2">Wiki Contents</h2>

      <nav className="space-y-1">
        {wikiData.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          const isCategoryActive = currentCategory === category.id;

          return (
            <div key={category.id}>
              <button
                data-category={category.id}
                aria-expanded={isExpanded}
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all ${
                  isCategoryActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-medium">{category.title}</span>
                {isExpanded ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {isExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.articles.map((article) => {
                    const isArticleActive = currentCategory === category.id && currentArticle === article.id;

                    return (
                      <Link
                        key={article.id}
                        href={`/wiki/${category.id}/${article.id}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                          isArticleActive
                            ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400'
                            : 'text-slate-500 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {article.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
