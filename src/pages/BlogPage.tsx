import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';
import { useShop } from '../context/ShopContext';

export const BlogPage: React.FC = () => {
  const { setActivePage } = useShop();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="py-12 bg-[#050505] min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00CFFF] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#848c9e]">
              <span className="text-[#00CFFF] font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              {selectedPost.title}
            </h1>

            <p className="text-sm text-[#8c94a8] italic border-l-2 border-[#00CFFF] pl-4 my-4">
              {selectedPost.excerpt}
            </p>

            {/* Structured Content Paragraphs */}
            <div className="space-y-6 pt-4 text-sm text-[#C0C6D4] leading-relaxed">
              {selectedPost.content.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-xs sm:text-sm text-[#8c94a6] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 flex flex-wrap gap-1.5">
              {selectedPost.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#121522] border border-[#1d2334] text-[11px] text-[#A2A9B8]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author footnote */}
            <div className="mt-12 pt-6 border-t border-[#171b28] flex items-center justify-between text-xs text-[#737b8e]">
              <div>Author: {selectedPost.author}</div>
              <button
                onClick={() => setActivePage('shop')}
                className="text-[#00CFFF] hover:text-white font-medium"
              >
                Shop Related Products →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#E100FF] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Printing Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Print Guides & Resources
          </h1>
          <p className="text-xs sm:text-sm text-[#8a92a5] mt-2">
            Expert insights on paper weights, color spaces, bespoke finishing, and designing impactful physical merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BLOG_POSTS.map(post => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-6 rounded-2xl bg-[#090b12] border border-[#161a28] hover:border-[#2b354d] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#71788c] mb-3">
                  <span className="text-[11px] font-bold text-[#00CFFF] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-base font-bold text-white group-hover:text-[#00CFFF] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-[#828a9c] mt-2.5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#131622] flex items-center justify-between text-xs text-[#A2A9B8]">
                <span>{post.author}</span>
                <span className="font-semibold text-[#00CFFF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
