import { motion } from 'motion/react';
import { Code, Palette, Search, Smartphone, Rocket, Shield, BarChart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Search, title: t('services.items.video.title'), desc: t('services.items.video.desc') },
    { icon: Code, title: t('services.items.maintenance.title'), desc: t('services.items.maintenance.desc') },
    { icon: Palette, title: t('services.items.web.title'), desc: t('services.items.web.desc') },
    { icon: Smartphone, title: t('services.items.network.title'), desc: t('services.items.network.desc') },
    { icon: Shield, title: t('services.items.electric.title'), desc: t('services.items.electric.desc') }
  ];

  return (
    <div className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
        >
          {t('services.title')}
        </motion.h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {t('services.subtitle')} Nous combinons créativité et technologie pour bâtir le futur de votre entreprise.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-[2.5rem] hover:border-blue-600 dark:hover:border-blue-600 transition-all hover:shadow-2xl group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-sky-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-400 transition-colors">
                <s.icon className="w-8 h-8 text-sky-400 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                {s.desc}
              </p>
              <div className="mt-auto">
                <button className="text-sky-400 font-black uppercase tracking-widest text-[10px] border-b-2 border-sky-400/20 hover:border-sky-400 transition-all pb-1">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="mt-32 max-w-5xl mx-auto px-4">
        <div className="bg-zinc-900 dark:bg-blue-600/10 border border-zinc-800 dark:border-blue-600/20 rounded-[3rem] p-12 md:p-20 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-medium text-white dark:text-white leading-tight italic">
            "La technologie de demain, intégrée dès aujourd'hui dans votre flux de travail pour une efficacité décuplée."
          </h2>
          <div className="mt-8 text-blue-500 font-bold tracking-widest uppercase text-sm">Philosophie Global IT</div>
        </div>
      </section>
    </div>
  );
}
