import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Code, Palette, Search, Shield, Smartphone, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Home() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const whyUs = [
    'Expertise professionnelle',
    'Intervention rapide',
    'Solutions modernes & sécurisées',
    'Accompagnement personnalisé',
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Global IT Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-8 uppercase tracking-[0.2em]"
            >
              <Star className="w-3 h-3 fill-current" />
              Solutions Informatiques & Technologiques
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-8 tracking-tighter"
            >
              La technologie au service de votre{' '}
              <span className="text-sky-400">sécurité</span> et de votre{' '}
              <span className="text-sky-400">performance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
            >
              Vidéo surveillance, maintenance informatique, développement web, réseaux et installation électrique — tout ce dont vous avez besoin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/quote"
                className="bg-sky-400 hover:bg-sky-300 text-slate-900 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 flex items-center gap-2"
              >
                Obtenir un Devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-white/20 bg-white/10 backdrop-blur-sm hover:border-sky-400/50 text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all"
              >
                Nos Services
              </Link>
            </motion.div>

            {/* Why us badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {whyUs.map((reason, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span className="text-white text-xs font-semibold">{reason}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sky-400 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-12">
          {[
            { label: 'Projets Terminés', value: '150+' },
            { label: 'Clients Satisfaits', value: '80+' },
            { label: "Années d'Expérience", value: '10' },
            { label: 'Villes Couvertes', value: '5+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black mb-2 text-slate-900 tracking-tighter">{stat.value}</div>
              <div className="text-slate-900/70 font-bold uppercase tracking-[0.15em] text-[11px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="badge glass border-sky-400/20 text-sky-400 px-4 py-1.5 rounded-full inline-block text-[10px] font-black uppercase tracking-[0.2em] mb-4">Nos Services</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">{t('services.title')}</h2>
          <p className="text-zinc-500 dark:text-slate-400 text-lg leading-relaxed">{t('services.subtitle')}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: Search, title: t('services.items.video.title'), desc: t('services.items.video.desc'), color: 'text-sky-400', bg: 'bg-sky-400/10', img: '/service-video.png' },
            { icon: Code, title: t('services.items.maintenance.title'), desc: t('services.items.maintenance.desc'), color: 'text-indigo-400', bg: 'bg-indigo-400/10', img: '/service-maintenance.png' },
            { icon: Palette, title: t('services.items.web.title'), desc: t('services.items.web.desc'), color: 'text-teal-400', bg: 'bg-teal-400/10', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
            { icon: Smartphone, title: t('services.items.network.title'), desc: t('services.items.network.desc'), color: 'text-rose-400', bg: 'bg-rose-400/10', img: '/service-network.png' },
            { icon: Shield, title: t('services.items.electric.title'), desc: t('services.items.electric.desc'), color: 'text-amber-400', bg: 'bg-amber-400/10', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800' },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group glass-card overflow-hidden p-0"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", s.bg)}>
                  <s.icon className={cn("w-6 h-6", s.color)} />
                </div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2 group-hover:text-sky-400 transition-colors uppercase tracking-tight">{s.title}</h3>
                <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sky-400 font-black text-[10px] uppercase tracking-widest">
                  En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-900 dark:bg-black/40 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pourquoi Nous ?</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Des experts à votre <span className="text-sky-400">service</span>
              </h2>
              <div className="space-y-4">
                {whyUs.map((reason, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-white font-semibold">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform">
                  Nous Contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/team.png" alt="Notre équipe" className="w-full rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-sky-400 p-8 rounded-2xl text-slate-900 shadow-xl">
                <div className="text-3xl font-black italic">678 404 649</div>
                <div className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-1">Disponibles 24h/24</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden border-sky-400/20 shadow-2xl shadow-sky-400/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <Zap className="w-12 h-12 text-sky-400 mx-auto relative z-10" />
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter relative z-10 max-w-4xl mx-auto uppercase leading-tight">
            Prêt à démarrer votre <span className="text-sky-400">projet</span> ?
          </h2>
          <p className="text-zinc-500 dark:text-slate-400 text-lg max-w-xl mx-auto relative z-10">
            Contactez-nous dès aujourd'hui et obtenez une réponse sous 24h.
          </p>
          <div className="relative z-10 pt-4 flex flex-wrap gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-sky-400 text-slate-900 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-110 transition-transform inline-flex items-center gap-3 shadow-xl shadow-sky-400/20"
            >
              Demander un Devis
            </Link>
            <a
              href="https://wa.me/237678404649"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-sky-400 text-sky-400 dark:text-sky-400 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-sky-400 hover:text-slate-900 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
