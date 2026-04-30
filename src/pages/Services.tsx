import { motion } from 'motion/react';
import { Search, Code, Palette, Smartphone, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t('services.items.video.title'),
      desc: t('services.items.video.desc'),
      image: '/service-video.png',
      details: [
        'Installation de caméras intérieures et extérieures',
        'Systèmes de surveillance HD & 4K',
        'Accès à distance via smartphone',
        'Maintenance et dépannage rapide',
        'Solutions adaptées aux entreprises et domiciles',
      ],
      color: 'text-sky-400',
      bg: 'bg-sky-400/10',
    },
    {
      icon: Code,
      title: t('services.items.maintenance.title'),
      desc: t('services.items.maintenance.desc'),
      image: '/service-maintenance.png',
      details: [
        'Réparation de PC, laptops, MacBook',
        'Remplacement de pièces et composants',
        'Diagnostic et dépannage téléphones',
        'Maintenance préventive et curative',
        'Récupération de données',
      ],
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10',
    },
    {
      icon: Palette,
      title: t('services.items.web.title'),
      desc: t('services.items.web.desc'),
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      details: [
        'Création de sites web professionnels',
        'Applications web sur mesure',
        'Applications mobiles Android & iOS',
        'Solutions e-commerce',
        'Maintenance et hébergement',
      ],
      color: 'text-teal-400',
      bg: 'bg-teal-400/10',
    },
    {
      icon: Smartphone,
      title: t('services.items.network.title'),
      desc: t('services.items.network.desc'),
      image: '/service-network.png',
      details: [
        'Installation de réseaux câblés et Wi-Fi',
        'Configuration de routeurs et switches',
        'Administration de serveurs',
        'Sécurisation des réseaux',
        'Audit et optimisation des infrastructures',
      ],
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
    },
    {
      icon: Shield,
      title: t('services.items.electric.title'),
      desc: t('services.items.electric.desc'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      details: [
        "Installation électrique aux normes",
        "Dépannage et réparation électrique",
        "Mise en conformité des installations",
        "Installation de tableaux électriques",
        "Câblage et raccordements",
      ],
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]"
        >
          Ce Que Nous Faisons
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter"
        >
          {t('services.title')}
        </motion.h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {t('services.subtitle')}
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 space-y-24">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-5 ${idx % 2 === 1 ? '-right-5' : '-left-5'} ${s.bg} p-6 rounded-2xl border ${s.color.replace('text', 'border')}/20`}>
                <s.icon className={`w-10 h-10 ${s.color}`} />
              </div>
            </div>

            {/* Content */}
            <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
              <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${s.color}`}>Service</div>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">{s.title}</h2>
              <p className="text-zinc-500 dark:text-slate-400 leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${s.color}`} />
                    <span className="text-zinc-700 dark:text-slate-300 font-medium">{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Demander un Devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Trust Quote */}
      <section className="mt-32 max-w-5xl mx-auto px-4">
        <div className="bg-slate-900 dark:bg-sky-400/10 border border-slate-800 dark:border-sky-400/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent" />
          <Shield className="w-16 h-16 text-sky-400 mx-auto mb-6 relative z-10" />
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight italic relative z-10">
            "La technologie de demain, intégrée dès aujourd'hui pour votre sécurité et votre performance."
          </h2>
          <div className="mt-8 text-sky-400 font-black tracking-widest uppercase text-sm relative z-10">Philosophie Global IT</div>
        </div>
      </section>
    </div>
  );
}
