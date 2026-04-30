import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Vidéo', 'Web', 'Réseau', 'Maintenance'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Système de Vidéosurveillance — École',
      category: 'Vidéo',
      description: 'Installation complète de 16 caméras HD avec accès à distance pour une école primaire.',
      image: '/service-video.png',
    },
    {
      id: 2,
      title: 'Site Web Vitrine — Boutique',
      category: 'Web',
      description: 'Création d\'un site web professionnel avec galerie de produits et formulaire de contact.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 3,
      title: 'Infrastructure Réseau — PME',
      category: 'Réseau',
      description: 'Déploiement d\'un réseau Wi-Fi professionnel couvrant 3 bâtiments avec 50 postes.',
      image: '/service-network.png',
    },
    {
      id: 4,
      title: 'Maintenance Parc Informatique',
      category: 'Maintenance',
      description: 'Contrat de maintenance mensuelle pour 30 postes informatiques dans une entreprise.',
      image: '/service-maintenance.png',
    },
    {
      id: 5,
      title: 'Application Mobile E-Commerce',
      category: 'Web',
      description: 'Développement d\'une application mobile de vente en ligne pour une boutique locale.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 6,
      title: 'Sécurité Résidentielle — Villa',
      category: 'Vidéo',
      description: 'Installation de 8 caméras IP avec enregistreur NVR pour une résidence privée.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const filteredProjects = filter === 'Tous'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]"
        >
          Notre Portfolio
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter"
        >
          {t('projects.title')}
        </motion.h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Découvrez quelques-uns de nos projets réalisés avec succès pour nos clients.
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
                  ? "bg-sky-400 border-sky-400 text-slate-900 shadow-lg shadow-sky-400/30"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-sky-400"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="text-sky-400 font-black text-[10px] uppercase tracking-widest mb-2">{p.category}</div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed">{p.description}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-sky-400/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-slate-900 p-8">
                    <ExternalLink className="w-10 h-10 mx-auto mb-3" />
                    <div className="font-black text-lg uppercase tracking-tight">{p.title}</div>
                    <div className="text-sm mt-2 opacity-80">{p.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
