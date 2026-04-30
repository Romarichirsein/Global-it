import { motion } from 'motion/react';
import { Target, Lightbulb, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: 'Précision', desc: 'Chaque installation et chaque solution sont optimisées pour la perfection et la durabilité.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Nous explorons sans cesse les nouvelles technologies pour vous offrir le meilleur.' },
    { icon: Users, title: 'Collaboration', desc: 'Votre vision combinée à notre expertise pour un résultat qui vous ressemble.' },
    { icon: ShieldCheck, title: 'Fiabilité', desc: 'Des solutions robustes et sécurisées sur lesquelles vous pouvez compter à 100%.' },
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
    <div className="pt-24 pb-32 space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]"
            >
              À Propos de Nous
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-none"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
            >
              Chez <strong>Global IT</strong>, nous proposons des solutions informatiques et technologiques complètes pour particuliers et entreprises. Notre mission : mettre la technologie au service de votre sécurité et de votre performance.
            </motion.p>
            <div className="space-y-4 mb-8">
              <h2 className="text-xs font-black text-sky-400 uppercase tracking-[0.2em]">{t('about.mission')}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-l-4 border-sky-400 pl-6 text-lg">
                "{t('about.missionText')}"
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Nous Contacter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/team.png"
                alt="Notre équipe Global IT"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-sky-400 p-10 rounded-[2rem] text-slate-900 shadow-xl hidden md:block">
              <div className="text-4xl font-black mb-1 italic">10+</div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Ce Qui Nous Définit</div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">Nos Valeurs Fondamentales</h2>
            <div className="w-20 h-1.5 bg-sky-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group glass-card"
              >
                <div className="w-20 h-20 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 mx-auto flex items-center justify-center mb-6 group-hover:bg-sky-400 group-hover:border-sky-400 transition-all shadow-lg">
                  <v.icon className="w-10 h-10 text-sky-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/service-video.png"
              alt="Nos installations"
              className="w-full rounded-[2rem] shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-sky-400/20">
              <div className="text-2xl font-black text-sky-400">678 404 649</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Appelez-nous</div>
            </div>
          </div>
          <div>
            <div className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pourquoi Nous Choisir ?</div>
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter">
              L'excellence au <span className="text-sky-400">service</span> de vos projets
            </h2>
            <div className="space-y-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 rounded-2xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-slate-300 font-medium">{r}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
