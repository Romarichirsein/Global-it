import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  staggerContainer, 
  fadeUpItem, 
  slideInLeft, 
  slideInRight,
  usePageScrollProgress 
} from '../lib/animations';

export default function Contact() {
  const { t } = useLanguage();
  const scrollProgress = usePageScrollProgress();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '678 404 649 / 620 726 398',
      desc: 'Disponible pour vos urgences 24/7',
      color: 'text-sky-400',
      bg: 'bg-sky-400/10'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'globali19188@gmail.com',
      desc: 'Réponse sous 24h maximum',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'A votre service : Votre ville',
      desc: 'Cameroun, Afrique',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lundi - Samedi : 08h - 18h',
      desc: 'Assistance technique H24',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    }
  ];

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress }} />
      
      <div className="pt-32 pb-32 overflow-hidden">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 mb-24 text-center relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
              Contactez-nous
            </motion.div>
            <motion.h1
              variants={fadeUpItem}
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.div variants={fadeUpItem} className="section-line mb-6" />
            <motion.p variants={fadeUpItem} className="text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Une question ? Un projet ? Notre équipe d'experts est prête à vous accompagner dans votre transformation technologique.
            </motion.p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Side: Contact Info */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Coordonnées</h2>
                <p className="text-zinc-500 dark:text-slate-400">Retrouvez-nous ou contactez-nous directement via ces canaux.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-sky-400/30 transition-all duration-300 group"
                  >
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform", info.bg)}>
                      <info.icon className={cn("w-6 h-6", info.color)} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1">{info.title}</div>
                      <div className="text-lg font-black text-zinc-900 dark:text-white break-all">{info.value}</div>
                      <div className="text-xs text-zinc-500 dark:text-slate-500 font-medium">{info.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Socials card */}
              <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl shadow-sky-400/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 blur-3xl" />
                <h3 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sky-400" />
                  Réseaux Sociaux
                </h3>
                <div className="flex gap-4">
                  {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                    <motion.a 
                      key={s}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition-all duration-300"
                    >
                      <span className="sr-only">{s}</span>
                      <MessageSquare className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="premium-card p-10 md:p-16">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-8">Envoyez un message</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-2">Nom complet</label>
                      <input 
                        type="text" 
                        placeholder="Jean Dupont"
                        className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 outline-none focus:border-sky-400 transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-2">Email professionnel</label>
                      <input 
                        type="email" 
                        placeholder="jean@entreprise.com"
                        className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 outline-none focus:border-sky-400 transition-all font-bold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-2">Objet du message</label>
                    <input 
                      type="text" 
                      placeholder="Demande d'information"
                      className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 outline-none focus:border-sky-400 transition-all font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-2">Votre message</label>
                    <textarea 
                      rows={6} 
                      placeholder="Décrivez votre besoin..."
                      className="w-full px-6 py-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 outline-none focus:border-sky-400 transition-all font-medium resize-none"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow w-full bg-sky-400 text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl shadow-sky-400/20 group"
                  >
                    <span>Envoyer le message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>

                  <p className="text-center text-xs text-zinc-500 dark:text-slate-500 font-medium">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </div>

              {/* Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 h-80 rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative group"
              >
                <img 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                   className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                   alt="Location Map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-900/80 backdrop-blur-md text-white p-6 rounded-3xl border border-sky-400/30 flex items-center gap-4 shadow-2xl">
                    <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center text-slate-900 animate-pulse">
                       <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-black uppercase tracking-widest">Global IT Headquarters</div>
                      <div className="text-xs opacity-70">A votre service — Cameroun</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
