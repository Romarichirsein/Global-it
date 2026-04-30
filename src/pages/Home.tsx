import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Code, Palette, Search, Shield, Smartphone, Star, Zap, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import {
  staggerContainer,
  fadeUpItem,
  fadeInItem,
  slideInLeft,
  slideInRight,
  usePageScrollProgress,
  useParallax,
} from '../lib/animations';

/* ── Animated counter ── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref as any, offset: ['start 0.9', 'start 0.4'] });
  const count = useTransform(scrollYProgress, [0, 1], [0, target]);
  const rounded = useTransform(count, (v) => Math.round(v));
  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </div>
  );
}

/* ── Floating particle ── */
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-sky-400/20 animate-drift"
      style={style}
    />
  );
}

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const scrollProgress = usePageScrollProgress();
  const heroScroll = useParallax(heroRef, 0.25);

  const whyUs = [
    'Expertise professionnelle',
    'Intervention rapide',
    'Solutions modernes & sécurisées',
    'Accompagnement personnalisé',
  ];

  const services = [
    { icon: Search,      title: t('services.items.video.title'),       desc: t('services.items.video.desc'),       color: 'text-sky-400',    bg: 'bg-sky-400/10',    img: '/service-video.png' },
    { icon: Code,        title: t('services.items.maintenance.title'),  desc: t('services.items.maintenance.desc'), color: 'text-indigo-400', bg: 'bg-indigo-400/10', img: '/service-maintenance.png' },
    { icon: Palette,     title: t('services.items.web.title'),          desc: t('services.items.web.desc'),         color: 'text-teal-400',   bg: 'bg-teal-400/10',   img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
    { icon: Smartphone,  title: t('services.items.network.title'),      desc: t('services.items.network.desc'),     color: 'text-rose-400',   bg: 'bg-rose-400/10',   img: '/service-network.png' },
    { icon: Shield,      title: t('services.items.electric.title'),     desc: t('services.items.electric.desc'),    color: 'text-amber-400',  bg: 'bg-amber-400/10',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <>
      {/* ─── Scroll Progress Bar ─── */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
      />

      <div className="space-y-0 pb-0 overflow-hidden">

        {/* ══════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">

          {/* Parallax background */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroScroll }}>
            <img src="/hero.png" alt="Global IT Hero" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-900/80 to-slate-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </motion.div>

          {/* Floating particles */}
          <div className="particles-container z-0">
            {[...Array(12)].map((_, i) => (
              <Particle
                key={i}
                style={{
                  width: `${6 + Math.random() * 12}px`,
                  height: `${6 + Math.random() * 12}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${60 + Math.random() * 40}%`,
                  animationDuration: `${8 + Math.random() * 12}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.4 + Math.random() * 0.4,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
            <div className="max-w-3xl">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 backdrop-blur-sm text-sky-400 text-[10px] font-black mb-8 uppercase tracking-[0.2em]"
              >
                <Star className="w-3 h-3 fill-current animate-pulse" />
                Solutions Informatiques & Technologiques
              </motion.div>

              {/* Title — word by word reveal */}
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter"
                >
                  La technologie au service de votre{' '}
                  <span className="text-gradient">sécurité</span>{' '}
                  et de votre{' '}
                  <span className="text-gradient">performance</span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
              >
                Vidéo surveillance, maintenance informatique, développement web, réseaux et installation électrique — tout ce dont vous avez besoin.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/quote"
                    className="btn-glow bg-sky-400 text-slate-900 px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-sky-400/30 flex items-center gap-2"
                  >
                    Obtenir un Devis <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/services"
                    className="border border-white/20 bg-white/5 backdrop-blur-sm hover:border-sky-400/60 hover:bg-sky-400/10 text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300"
                  >
                    Nos Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                {whyUs.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="text-white text-xs font-semibold">{reason}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent z-10" />
        </section>

        {/* ══════════════════════════════════════
            MARQUEE SERVICES STRIP
        ══════════════════════════════════════ */}
        <section className="bg-sky-400 py-5 overflow-hidden relative z-10">
          <div className="animate-marquee whitespace-nowrap select-none">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="inline-flex items-center">
                {['Vidéo Surveillance', 'Maintenance & Réparation', 'Développement Web', 'Réseaux & Systèmes', 'Installation Électrique'].map((s) => (
                  <span key={s} className="inline-flex items-center gap-4 mx-8 text-slate-900 font-black uppercase tracking-[0.15em] text-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-900/40 inline-block" />
                    {s}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            STATS SECTION
        ══════════════════════════════════════ */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-[#0f172a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12"
            >
              {[
                { label: 'Projets Terminés', target: 150, suffix: '+' },
                { label: 'Clients Satisfaits', target: 80, suffix: '+' },
                { label: "Années d'Expérience", target: 10, suffix: '' },
                { label: 'Villes Couvertes', target: 5, suffix: '+' },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeUpItem} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-sky-400 tracking-tighter mb-2">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[11px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICES GRID
        ══════════════════════════════════════ */}
        <section className="py-32 max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
              Nos Services
            </motion.div>
            <motion.h2 variants={fadeUpItem} className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase mb-4">
              {t('services.title')}
            </motion.h2>
            <motion.div variants={fadeUpItem} className="section-line mb-4" />
            <motion.p variants={fadeUpItem} className="text-zinc-500 dark:text-slate-400 text-lg leading-relaxed">
              {t('services.subtitle')}
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                variants={fadeInItem}
                className="premium-card group overflow-hidden"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <motion.div
                    className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', s.bg)}
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <s.icon className={cn('w-6 h-6', s.color)} />
                  </motion.div>
                  <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2 group-hover:text-sky-400 transition-colors duration-300 uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sky-400 font-black text-[10px] uppercase tracking-widest"
                  >
                    <span>En savoir plus</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: idx * 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════ */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pourquoi Nous ?</div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-tight">
                  Des experts à votre <span className="text-gradient">service</span>
                </h2>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {whyUs.map((reason, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUpItem}
                      className="flex items-center gap-4 p-4 bg-white/5 border border-white/8 rounded-2xl hover:border-sky-400/30 hover:bg-white/8 transition-all duration-300"
                    >
                      <motion.div
                        className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-slate-900" />
                      </motion.div>
                      <span className="text-white font-semibold">{reason}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact"
                      className="btn-glow bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 shadow-xl shadow-sky-400/20"
                    >
                      Nous Contacter <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right — team image with float */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src="/team.png" alt="Notre équipe" className="w-full rounded-[2rem] shadow-2xl shadow-sky-400/10" />
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-sky-400/20" />
                </motion.div>

                {/* Floating card — phone */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-sky-400 p-6 rounded-2xl text-slate-900 shadow-xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="text-lg font-black">678 404 649</div>
                      <div className="text-[9px] uppercase font-black tracking-widest opacity-70">Disponible 24h/24</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card — projects */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl shadow-xl"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="text-2xl font-black text-sky-400">150+</div>
                  <div className="text-[9px] uppercase tracking-widest text-zinc-500 dark:text-slate-400 font-bold">Projets réalisés</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════ */}
        <section className="py-32 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-400/10"
          >
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/8 blur-[130px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 mx-auto mb-8 relative z-10"
            >
              <Zap className="w-16 h-16 text-sky-400" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter relative z-10 max-w-4xl mx-auto uppercase leading-tight mb-6">
              Prêt à démarrer votre <span className="text-gradient">projet</span> ?
            </h2>
            <p className="text-zinc-500 dark:text-slate-400 text-lg max-w-xl mx-auto relative z-10 mb-10">
              Contactez-nous dès aujourd'hui et obtenez une réponse sous 24h.
            </p>

            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/quote"
                  className="btn-glow animate-pulse-glow bg-sky-400 text-slate-900 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-3 shadow-xl shadow-sky-400/20"
                >
                  Demander un Devis <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.me/237678404649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-sky-400 text-sky-400 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
}
