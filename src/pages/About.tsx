import { motion } from 'motion/react';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: 'Précision', desc: 'Chaque pixel et chaque ligne de code sont optimisés pour la perfection.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Nous explorons sans cesse les nouvelles frontières technologiques.' },
    { icon: Users, title: 'Collaboration', desc: 'Votre vision combinée à notre expertise pour un résultat unique.' },
    { icon: ShieldCheck, title: 'Fiabilité', desc: 'Des solutions robustes sur lesquelles vous pouvez compter à 100%.' },
  ];

  return (
    <div className="pt-32 pb-32 space-y-32">
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
            >
              {t('about.description')} Chez Global IT, nous ne nous contentons pas de créer des sites web ; nous bâtissons des écosystèmes digitaux qui racontent votre histoire et propulsent vos ambitions vers de nouveaux sommets.
            </motion.p>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-sm text-blue-600">{t('about.mission')}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-l-4 border-blue-600 pl-6 text-lg">
                "{t('about.missionText')}"
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=2670" 
                alt="Our Creative Workspace" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-sky-400 p-12 rounded-[2rem] text-slate-900 shadow-xl hidden md:block">
              <div className="text-4xl font-black mb-1 italic">10+</div>
              <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Years of excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 text-zinc-900 dark:text-white">
            <h2 className="text-4xl font-bold mb-4">Nos Valeurs Fondamentales</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 mx-auto flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-xl group-hover:shadow-blue-500/30">
                  <v.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
