import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];

  const projects: Project[] = [
    { id: 1, title: 'Quantum Banking App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, title: 'Luxury Real Estate Portal', category: 'Web', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, title: 'BioTech Dashboard', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, title: 'EcoTravel Companion', category: 'Mobile', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, title: 'Minimalist Portfolio', category: 'Web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, title: 'Financial Analytics Tool', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight"
        >
          {t('projects.title')}
        </motion.h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all border",
                filter === cat 
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30" 
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-blue-600"
              )}
            >
              {cat === 'All' ? t('projects.all') : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-10 space-y-4">
                  <div className="text-blue-500 font-bold text-xs uppercase tracking-widest">{p.category}</div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-zinc-900" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
