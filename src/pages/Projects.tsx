import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { 
  staggerContainer, 
  fadeUpItem, 
  fadeInItem,
  usePageScrollProgress 
} from '../lib/animations';

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
  const scrollProgress = usePageScrollProgress();

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
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress }} />
      
      <div className="pt-32 pb-32 overflow-hidden">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 mb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-sky-400/5 rounded-full blur-[100px] -z-10" />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
              Notre Portfolio
            </motion.div>
            <motion.h1
              variants={fadeUpItem}
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter"
            >
              {t('projects.title')}
            </motion.h1>
            <motion.div variants={fadeUpItem} className="section-line mb-6" />
            <motion.p variants={fadeUpItem} className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Découvrez l'excellence technologique à travers nos réalisations marquantes au Cameroun.
            </motion.p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
                  filter === cat
                    ? "bg-sky-400 border-sky-400 text-slate-900 shadow-xl shadow-sky-400/20"
                    : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-slate-400 hover:border-sky-400/50"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.05 
                  }}
                  className="group relative h-[450px] premium-card overflow-hidden"
                >
                  {/* Image with Parallax-like hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-sky-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3"
                    >
                      {p.category}
                    </motion.div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                      {p.description}
                    </p>
                    
                    <motion.div 
                      className="mt-6 flex items-center gap-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                    >
                      <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">Voir détails</span>
                    </motion.div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-sky-400 group-hover:border-sky-400 transition-all duration-300">
                    <Layers className="w-4 h-4 text-white group-hover:text-slate-900" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Bottom Banner */}
        <section className="mt-32 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-sky-400 rounded-[3rem] p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-white rotate-12 blur-3xl animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-tight relative z-10">
              Vous avez un projet <br /> simillaire en tête ?
            </h2>
            
            <div className="relative z-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-slate-900 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-3 shadow-2xl shadow-slate-900/20"
                >
                  Parlons-en maintenant <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
