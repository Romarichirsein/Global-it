import { motion } from 'motion/react';
import { Target, Lightbulb, Users, ShieldCheck, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { staggerContainer, fadeUpItem, fadeInItem, slideInLeft, slideInRight } from '../lib/animations';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Target,     title: 'Précision',     desc: 'Chaque installation est optimisée pour la perfection et la durabilité.', color: 'text-sky-400',    bg: 'bg-sky-400/10' },
    { icon: Lightbulb, title: 'Innovation',     desc: 'Nous adoptons les dernières technologies pour vous offrir le meilleur.', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { icon: Users,     title: 'Collaboration',  desc: 'Votre vision combinée à notre expertise pour un résultat unique.',       color: 'text-teal-400',   bg: 'bg-teal-400/10' },
    { icon: ShieldCheck, title: 'Fiabilité',    desc: 'Des solutions robustes et sécurisées sur lesquelles vous comptez.',      color: 'text-amber-400',  bg: 'bg-amber-400/10' },
  ];

  const reasons = [
    'Expertise professionnelle dans tous nos domaines',
    'Intervention rapide sur site',
    'Solutions modernes & sécurisées',
    'Accompagnement personnalisé et suivi après-vente',
    'Prix compétitifs en FCFA',
    'Disponibilité 24h/24 pour les urgences',
  ];

  return (
    <div className="pt-24 pb-32 overflow-hidden">

      {/* ══ HERO ══ */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
              À Propos de Global IT
            </motion.div>
            <motion.h1 variants={fadeUpItem} className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-none">
              {t('about.title')}
            </motion.h1>
            <motion.p variants={fadeUpItem} className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Chez <strong>Global IT</strong>, nous proposons des solutions informatiques et technologiques complètes pour particuliers et entreprises. Notre mission : mettre la technologie au service de votre sécurité et de votre performance.
            </motion.p>
            <motion.div variants={fadeUpItem} className="space-y-3 mb-8">
              <h2 className="text-xs font-black text-sky-400 uppercase tracking-[0.2em]">{t('about.mission')}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-l-4 border-sky-400 pl-6 text-lg">
                "{t('about.missionText')}"
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn-glow inline-flex items-center gap-2 bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg shadow-sky-400/20">
                  Nous Contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="/team.png" alt="Notre équipe Global IT" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </motion.div>

            {/* Floating badge — years */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-sky-400 p-10 rounded-[2rem] text-slate-900 shadow-xl hidden md:flex flex-col items-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className="text-4xl font-black italic">10+</div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-70 mt-1">Années d'exp.</div>
            </motion.div>

            {/* Floating badge — phone */}
            <motion.div
              className="absolute -top-5 -left-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <div className="w-9 h-9 bg-sky-400/10 rounded-xl flex items-center justify-center">
                <Phone className="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <div className="text-sm font-black text-zinc-900 dark:text-white">678 404 649</div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest">Appelez-nous</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/3 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUpItem} className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Ce Qui Nous Définit</motion.div>
            <motion.h2 variants={fadeUpItem} className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">Nos Valeurs Fondamentales</motion.h2>
            <motion.div variants={fadeUpItem} className="section-line" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                variants={fadeInItem}
                className="premium-card text-center p-8 group"
              >
                <motion.div
                  className={`w-20 h-20 ${v.bg} rounded-3xl mx-auto flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <v.icon className={`w-10 h-10 ${v.color}`} />
                </motion.div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/service-video.png" alt="Nos installations" className="w-full rounded-[2rem] shadow-2xl" />
            </motion.div>
            <motion.div
              className="absolute -top-6 -left-6 bg-slate-900 dark:bg-zinc-800 text-white p-6 rounded-2xl shadow-xl border border-sky-400/20"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="text-2xl font-black text-sky-400">678 404 649</div>
              <div className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">Appelez-nous</div>
            </motion.div>
          </motion.div>

          {/* Reasons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUpItem} className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pourquoi Nous Choisir ?</motion.div>
            <motion.h2 variants={fadeUpItem} className="text-4xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
              L'excellence au <span className="text-gradient">service</span> de vos projets
            </motion.h2>
            <div className="space-y-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-sky-400/40 hover:shadow-md transition-all duration-300"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-zinc-700 dark:text-slate-300 font-medium">{r}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
