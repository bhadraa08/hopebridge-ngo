import React, { useState } from 'react';
import { BlogPost } from '../types';
import { blogPostsData } from '../data';
import { Search, Calendar, BookOpen, X, Share2, Heart, Sparkles, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStory, setActiveStory] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [shared, setShared] = useState<string | null>(null);

  const categories = [
    { id: 'All', label: 'All Stories' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'women-empowerment', label: 'Women Empowerment' },
    { id: 'environment', label: 'Environment' },
  ];

  // Filtering + Searching logic
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleShare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShared(id);
    navigator.clipboard.writeText(`${window.location.origin}/stories/${id}`);
    setTimeout(() => setShared(null), 3000);
  };

  return (
    <div className="min-h-screen">
      
      {/* Narrative Page Header */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-12 md:py-16 text-center md:text-left">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
          Impact Chronicles
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
          Stories of Hope
        </h1>
        <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Updates, reports, and diaries written directly by our on-ground deployment coordinators and verified field volunteers.
        </p>
      </section>

      {/* Filters & search utility block */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-12 select-none">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6">
          
          {/* Categories Selector list */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1 order-2 md:order-1 select-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white scale-102 hover:bg-primary-hover shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search bar input controller */}
          <div className="relative order-1 md:order-2 w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4 opacity-70" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports..."
              className="w-full bg-surface-container-low border border-outline-variant/40 rounded-full py-2.5 pl-11 pr-4 text-xs font-sans outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface"
            />
          </div>

        </div>
      </section>

      {/* Stories grid list layout */}
      <section className="px-6 md:px-20 max-w-[1280px] mx-auto py-4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              onClick={() => setActiveStory(post)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative select-none">
                <img 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  src={post.image}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                  {post.category.replace('-', ' ')}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-on-surface-variant text-[10px] uppercase font-bold tracking-wider font-sans select-none">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-primary font-bold group-hover:text-primary-hover leading-snug transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant font-sans text-xs md:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-outline-variant/20 mt-6 flex justify-between items-center select-none">
                  <span className="text-primary font-sans text-xs font-bold uppercase tracking-widest group-hover:underline flex items-center gap-1.5 cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5" /> Read Full Story
                  </span>
                  
                  {/* Micro actions inside card */}
                  <div className="flex items-center gap-4 text-on-secondary-fixed-variant">
                    <button 
                      onClick={(e) => handleLike(post.id, e)}
                      className="hover:text-primary active:scale-90 transition-transform cursor-pointer flex items-center gap-1"
                    >
                      <Heart className={`w-4 h-4 ${likes[post.id] ? 'fill-current text-primary' : ''}`} />
                      <span className="text-xs font-semibold">{likes[post.id] || 0}</span>
                    </button>
                    <button 
                      onClick={(e) => handleShare(post.id, e)}
                      className="hover:text-primary active:scale-90 transition-transform cursor-pointer"
                      title="Copy URL link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </article>
          ))}
        </motion.div>

        {/* Empty Search Outcomes */}
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <FolderOpen className="w-12 h-12 text-on-surface-variant/40" />
            <p className="text-on-surface-variant font-sans text-sm">No stories or diaries found matching "{searchQuery}"</p>
          </div>
        )}
      </section>

      {/* Reader Modal Overlay */}
      <AnimatePresence>
        {activeStory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-outline-variant/30 text-left flex flex-col"
            >
              {/* Header image cover inside reader */}
              <div className="h-60 md:h-72 w-full rlt overflow-hidden relative select-none shrink-0">
                <img 
                  alt={activeStory.title} 
                  className="w-full h-full object-cover" 
                  src={activeStory.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6">
                  <div className="space-y-2">
                    <span className="bg-primary text-white text-[10px] uppercase font-sans font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {activeStory.category.replace('-', ' ')}
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                      {activeStory.title}
                    </h2>
                  </div>
                </div>

                {/* Close modal cross btn */}
                <button 
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow z-20 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Story scroll text content body */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                <div className="flex justify-between items-center text-xs text-on-surface-variant border-b border-outline-variant/30 pb-4 font-sans select-none">
                  <div className="flex items-center gap-1 font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>Published On {activeStory.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-bold">
                    <Sparkles className="w-4 h-4" /> Verified Impact Update
                  </span>
                </div>

                <div className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed space-y-5 font-normal">
                  <p className="font-semibold text-primary text-base md:text-lg italic font-serif bg-surface-container-low p-4 rounded-xl border-l-4 border-primary">
                    "{activeStory.excerpt}"
                  </p>
                  
                  {activeStory.content ? (
                    <p className="leading-relaxed whitespace-pre-line">{activeStory.content}</p>
                  ) : (
                    <p>HopeBridge teams are actively conducting structured assessments and reporting. Detailed long-text stories are currently streaming from local field hubs...</p>
                  )}
                </div>

                {/* Action footer inside drawer modal */}
                <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center select-none">
                  <div></div>
                  <button 
                    onClick={() => setActiveStory(null)}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold font-sans text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Close Story
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copy notification popup bar */}
      <AnimatePresence>
        {shared && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white py-3 px-6 rounded-full shadow-lg text-xs font-sans font-bold z-50 flex items-center gap-2 select-none"
          >
            <span>Story URL copied to clipboard! Share with friends.</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
