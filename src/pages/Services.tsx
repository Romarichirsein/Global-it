import { useRef } from 'react';
import { motion } from 'motion/react';
import { Search, Code, Palette, Smartphone, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { staggerContainer, fadeUpItem, slideInLeft, slideInRight, useParallax } from '../lib/animations';
import { cn } from '../lib/utils';

export default function Services() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);
  const headerParallax = useParallax(headerRef, 0.15);

  const services = [
    {
      icon: Search,      title: t('services.items.video.title'),       desc: t('services.items.video.desc'),
      image: '/service-video.png',
      color: 'text-sky-400',  bg: 'bg-sky-400/10',
      details: ['Installation caméras HD & 4K', 'Accès à distance via smartphone', 'Surveillance 24h/24 7j/7', 'Maintenance et dépannage rapide', 'Devis gratuit sur site'],
    },
    {
      icon: Code,        title: t('services.items.maintenance.title'),  desc: t('services.items.maintenance.desc'),
      image: '/service-maintenance.png',
      color: 'text-indigo-400', bg: 'bg-indigo-400/10',
      details: ['Réparation PC, laptops, MacBook', 'Dépannage téléphones & tablettes', 'Maintenance préventive mensuelle', 'Récupération de données', 'Remplacement de composants'],
    },
    {
      icon: Palette,     title: t('services.items.web.title'),          desc: t('services.items.web.desc'),
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      color: 'text-teal-400', bg: 'bg-teal-400/10',
      details: ['Sites web vitrine & e-commerce', 'Applications web sur mesure', 'Apps mobiles Android & iOS', 'Référencement SEO', 'Hébergement & maintenance'],
    },
    {
      icon: Smartphone,  title: t('services.items.network.title'),      desc: t('services.items.network.desc'),
      image: '/service-network.png',
      color: 'text-rose-400', bg: 'bg-rose-400/10',
      details: ['Installation réseau câblé/Wi-Fi', 'Configuration routeurs & switches', 'Administration de serveurs', 'Sécurisation des réseaux', 'Audit et optimisation'],
    },
    {
      icon: Shield,      title: t('services.items.electric.title'),     desc: t('services.items.electric.desc'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      color: 'text-amber-400', bg: 'bg-amber-400/10',
      details: ['Installation aux normes', 'Dépannage et réparation', 'Tableaux électriques', 'Mise en conformité', 'Câblage et raccordements'],
    },
  ];

  return (
    <div className="pt-24 pb-32 overflow-hidden">

      {/* ══ HEADER ══ */}
      <section ref={headerRef} className="relative py-24 overflow-hidden">
        <motion.div className="absolute inset-0 -z-0" style={{ y: headerParallax }}>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-400/8 rounded-full blur-[80px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
              Ce Que Nous Faisons
            </motion.div>
            <motion.h1 variants={fadeUpItem} className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter">
              {t('services.title')}
            </motion.h1>
            <motion.div variants={fadeUpItem} className="section-line mb-6" />
            <motion.p variants={fadeUpItem} className="text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICES LIST ══ */}
      <section className="max-w-7xl mx-auto px-4 space-y-32">
        {services.map((s, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>

              {/* Image */}
              <motion.div
                variants={isEven ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative ${!isEven ? 'lg:order-2' : ''}`}
              >
                <motion.div
                  className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>

                {/* Icon badge */}
                <motion.div
                  className={cn(`absolute -bottom-5 ${isEven ? '-right-5' : '-left-5'} ${s.bg} p-5 rounded-2xl shadow-xl border border-sky-400/10`)}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                >
                  <s.icon className={cn('w-8 h-8', s.color)} />
                </motion.div>

                {/* Number */}
                <motion.div
                  className={`absolute -top-4 ${isEven ? '-left-4' : '-right-4'} w-12 h-12 bg-slate-900 dark:bg-zinc-800 rounded-full flex items-center justify-center text-sky-400 font-black text-sm shadow-lg border border-sky-400/20`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                >
                  0{idx + 1}
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={!isEven ? 'lg:order-1' : ''}
              >
                <motion.div variants={fadeUpItem} className={cn('text-[10px] font-black uppercase tracking-[0.2em] mb-3', s.color)}>
                  Service 0{idx + 1}
                </motion.div>
                <motion.h2 variants={fadeUpItem} className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">
                  {s.title}
                </motion.h2>
                <motion.p variants={fadeUpItem} className="text-zinc-500 dark:text-slate-400 leading-relaxed mb-6">
                  {s.desc}
                </motion.p>
                <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
                  {s.details.map((d, i) => (
                    <motion.li key={i} variants={fadeUpItem} className="flex items-center gap-3">
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                        <CheckCircle2 className={cn('w-5 h-5 flex-shrink-0', s.color)} />
                      </motion.div>
                      <span className="text-zinc-700 dark:text-slate-300 font-medium">{d}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUpItem}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/quote" className="btn-glow inline-flex items-center gap-2 bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg shadow-sky-400/20">
                      Demander un Devis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section className="mt-32 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-indigo-400/5" />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="w-14 h-14 mx-auto mb-6 relative z-10"
          >
            <Shield className="w-14 h-14 text-sky-400" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight italic relative z-10">
            "La technologie de demain, intégrée dès aujourd'hui pour votre sécurité et votre performance."
          </h2>
          <div className="mt-8 text-sky-400 font-black tracking-widest uppercase text-sm relative z-10">
            Philosophie Global IT
          </div>
        </motion.div>
      </section>
    </div>
  );
}
