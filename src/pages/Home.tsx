import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, Search, Smartphone, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Home() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden dark:gradient-bg">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-sky-400/20 text-sky-400 text-[10px] font-black mb-8 uppercase tracking-[0.2em]">
                <Star className="w-3 h-3 fill-current" />
                High-End Digital Agency
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white leading-[0.9] mb-8 tracking-tighter">
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
                {t('home.heroSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="bg-sky-400 hover:bg-sky-300 text-slate-900 px-8 py-5 rounded-full text-sm font-black uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 flex items-center gap-2"
                >
                  {t('home.ctaQuote')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="glass border-white/10 dark:border-white/5 hover:border-sky-400/50 text-zinc-900 dark:text-white px-8 py-5 rounded-full text-sm font-black uppercase tracking-widest transition-all"
                >
                  {t('home.ctaServices')}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative p-4"
            >
              <div className="aspect-square glass rounded-[3rem] p-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-transparent" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="Modern Agency Dashboard" 
                  className="w-full h-full object-cover rounded-[2rem] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-12 left-12 glass p-4 rounded-2xl shadow-2xl">
                  <span className="text-sky-400 text-3xl font-black italic">A+</span>
                </div>
              </div>

              {/* Floating Glass Card */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl max-w-[200px] border-white/20">
                <div className="flex items-center gap-2 text-sky-400 font-black text-xs mb-2 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> SEO Ready
                </div>
                <p className="text-[10px] text-zinc-500 dark:text-slate-400 font-bold">Lighthouse Score: 98%+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/30 dark:bg-black/20 backdrop-blur-md py-20 border-y border-zinc-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-12">
          {[
            { label: t('home.stats.projects'), value: '150+', color: 'text-sky-400' },
            { label: t('home.stats.clients'), value: '80+', color: 'text-white' },
            { label: t('home.stats.years'), value: '10', color: 'text-sky-400' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={cn("text-5xl md:text-7xl font-black mb-2 tracking-tighter", stat.color)}>{stat.value}</div>
              <div className="text-zinc-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="badge glass border-sky-400/20 text-sky-400 px-4 py-1.5 rounded-full inline-block text-[10px] font-black uppercase tracking-[0.2em] mb-4">What we do</div>
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
            { icon: Search, title: t('services.items.video.title'), desc: t('services.items.video.desc'), color: 'text-sky-400', bg: 'bg-sky-400/10' },
            { icon: Code, title: t('services.items.maintenance.title'), desc: t('services.items.maintenance.desc'), color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
            { icon: Palette, title: t('services.items.web.title'), desc: t('services.items.web.desc'), color: 'text-teal-400', bg: 'bg-teal-400/10' },
            { icon: Smartphone, title: t('services.items.network.title'), desc: t('services.items.network.desc'), color: 'text-rose-400', bg: 'bg-rose-400/10' },
            { icon: CheckCircle2, title: t('services.items.electric.title'), desc: t('services.items.electric.desc'), color: 'text-amber-400', bg: 'bg-amber-400/10' }
          ].map((s, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="group glass-card hover:-translate-y-2"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", s.bg)}>
                <s.icon className={cn("w-7 h-7", s.color)} />
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 group-hover:text-sky-400 transition-colors uppercase tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                {s.desc}
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-sky-400 font-black text-[10px] uppercase tracking-widest">
                En savoir plus <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden border-sky-400/20 shadow-2xl shadow-sky-400/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter relative z-10 max-w-4xl mx-auto uppercase leading-tight">
            Prêt à révolutionner votre <span className="text-sky-400">vision digitale</span> ?
          </h2>
          <div className="relative z-10 pt-4">
            <Link 
              to="/quote" 
              className="bg-sky-400 text-slate-900 px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:scale-110 transition-transform inline-flex items-center gap-3 shadow-xl shadow-sky-400/20"
            >
              Démarrer l'expérience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
