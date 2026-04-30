import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfos = [
    { icon: Phone, title: 'Téléphone', value: t('contact.info.phone'), desc: 'Contactez-nous' },
    { icon: Mail, title: 'Email', value: t('contact.info.email'), desc: 'Écrivez-nous' },
    { icon: MapPin, title: 'Adresse', value: t('contact.info.address'), desc: 'A votre service' },
  ];

  return (
    <div className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight"
            >
              {t('contact.title')}
            </motion.h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
              {t('contact.subtitle')} Nous transformons vos idées en réalité numérique. Parlez-nous de votre prochain grand projet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-zinc-800 rounded-xl flex flex-shrink-0 items-center justify-center text-blue-600">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">{info.title}</h3>
                    <p className="text-zinc-900 dark:text-white font-medium">{info.value}</p>
                    <p className="text-sm text-zinc-500">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200" />
                  ))}
                </div>
                <div className="text-sm font-bold text-zinc-900 dark:text-white">+500 Clients Satisfaits</div>
              </div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Rejoignez l'élite digitale</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-white ml-2">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-white ml-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 dark:text-white ml-2">Sujet</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:border-blue-600 transition-all outline-none">
                  <option>Nouveau Projet</option>
                  <option>Demande d'information</option>
                  <option>Support Technique</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 dark:text-white ml-2">{t('contact.form.message')}</label>
                <textarea 
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 focus:border-blue-600 transition-all outline-none resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30"
              >
                {t('contact.form.send')}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 h-[400px]">
        <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/2.35,48.85,12/1200x600?access_token=pk.placeholder')] bg-cover" />
          <div className="relative z-10 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-red-500 rounded-full animate-ping absolute -top-1 -right-1" />
            <MapPin className="text-blue-600 w-8 h-8" />
            <div>
              <div className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-[10px]">Localisation</div>
              <div className="text-zinc-600 dark:text-zinc-400">{t('contact.info.address')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
