import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Laptop, 
  Layers, 
  Users, 
  Calendar, 
  Banknote, 
  CheckCircle, 
  ArrowRight, 
  ChevronLeft,
  Zap,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { 
  staggerContainer, 
  fadeUpItem, 
  usePageScrollProgress 
} from '../lib/animations';

export default function Quote() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const scrollProgress = usePageScrollProgress();

  const projectTypes = [
    { icon: Laptop, label: 'Site Web', desc: 'Vitrine ou Blog' },
    { icon: Layers, label: 'App Web', desc: 'Gestion ou SaaS' },
    { icon: Users, label: 'E-commerce', desc: 'Vente en ligne' },
    { icon: FileText, label: 'Installation', desc: 'CCTV & Réseaux' },
  ];

  const budgets = [
    '< 100 000 FCFA', 
    '100k - 500k FCFA', 
    '500k - 2M FCFA', 
    '> 2 000 000 FCFA'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center space-y-8 max-w-lg px-4"
        >
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white shadow-2xl shadow-green-500/40 relative">
             <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
             <CheckCircle className="w-16 h-16 relative z-10" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Demande Reçue !</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">Merci pour votre confiance. Nos experts analysent votre besoin et reviendront vers vous sous <span className="text-sky-400 font-black">24 heures</span>.</p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSubmitted(false)} 
            className="bg-slate-900 dark:bg-zinc-100 text-white dark:text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs"
          >
            Retour au site
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress }} />
      
      <div className="pt-32 pb-32 overflow-hidden">
        <section className="max-w-5xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em]"
            >
              Configurateur de projet
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter"
            >
              {t('quote.title')}
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.3 }} className="h-2 bg-sky-400 mx-auto rounded-full" />
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium pt-4">
              {t('quote.subtitle')}
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Form Progress Bar */}
            <div className="flex items-center justify-between gap-4 mb-16 relative">
               {/* Line bg */}
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-100 dark:bg-white/5 -z-10" />
               
               {[1, 2, 3].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        backgroundColor: step >= s ? '#38bdf8' : '#f4f4f5',
                        scale: step === s ? 1.2 : 1,
                        color: step >= s ? '#0f172a' : '#71717a'
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10 shadow-lg border-4 border-white dark:border-zinc-950"
                    >
                      {step > s ? <CheckCircle className="w-6 h-6" /> : s}
                    </motion.div>
                    <span className={cn("text-[9px] font-black uppercase tracking-widest", step >= s ? "text-sky-400" : "text-zinc-400")}>
                      {s === 1 ? 'Projet' : s === 2 ? 'Budget' : 'Détails'}
                    </span>
                  </div>
               ))}
            </div>

            <div className="premium-card p-10 md:p-20 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />

              <form className="relative z-10" onSubmit={(e) => { e.preventDefault(); if (step === 3) setSubmitted(true); else setStep(step + 1); }}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Quel est votre projet ?</h2>
                        <p className="text-zinc-500 dark:text-slate-400">Sélectionnez la catégorie qui correspond le mieux à votre besoin.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {projectTypes.map((type) => (
                          <div key={type.label} className="cursor-pointer group relative">
                            <input type="radio" name="projectType" id={type.label} className="hidden peer" required />
                            <label 
                              htmlFor={type.label}
                              className="flex items-center gap-6 p-8 rounded-3xl border-2 border-zinc-100 dark:border-white/5 peer-checked:border-sky-400 peer-checked:bg-sky-400/5 transition-all hover:border-sky-400/40 bg-white dark:bg-zinc-900 group-hover:shadow-xl group-hover:shadow-sky-400/10"
                            >
                              <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-sky-400 group-hover:text-slate-900">
                                <type.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <span className="font-black text-zinc-900 dark:text-white uppercase tracking-tight block">{type.label}</span>
                                <span className="text-xs text-zinc-500 dark:text-slate-500 font-medium uppercase tracking-widest">{type.desc}</span>
                              </div>
                              
                              <div className="ml-auto w-6 h-6 rounded-full border-2 border-zinc-200 dark:border-white/10 peer-checked:border-sky-400 peer-checked:bg-sky-400 flex items-center justify-center transition-all">
                                 <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Budget & Timeline</h2>
                        <p className="text-zinc-500 dark:text-slate-400">Ces informations nous aident à calibrer la meilleure solution pour vous.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {budgets.map((b) => (
                          <div key={b} className="cursor-pointer group">
                            <input type="radio" name="budget" id={b} className="hidden peer" required />
                            <label 
                              htmlFor={b}
                              className="flex items-center gap-4 p-8 rounded-2xl border-2 border-zinc-100 dark:border-white/5 peer-checked:border-sky-400 peer-checked:bg-sky-400 text-sm font-black uppercase tracking-widest text-zinc-700 dark:text-slate-300 peer-checked:text-slate-900 transition-all"
                            >
                              <Banknote className="w-6 h-6 flex-shrink-0" />
                              {b}
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4 max-w-sm">
                        <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-4">Date souhaitée</label>
                        <div className="relative">
                          <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                          <input 
                            type="date" 
                            className="w-full pl-16 pr-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold focus:border-sky-400 transition-all" 
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <div className="space-y-4">
                        <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Finalisation</h2>
                        <p className="text-zinc-500 dark:text-slate-400">Comment pouvons-nous vous recontacter ?</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-4">Nom complet</label>
                           <input type="text" placeholder="Ex: Marc Atangana" required className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold focus:border-sky-400 transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-4">Email de contact</label>
                           <input type="email" placeholder="Ex: marc@gmail.com" required className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold focus:border-sky-400 transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-4">Description libre</label>
                        <textarea rows={4} placeholder="Parlez-nous un peu plus de votre vision..." className="w-full px-6 py-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none resize-none font-medium focus:border-sky-400 transition-all" />
                      </div>

                      <div className="p-6 bg-sky-400/5 rounded-2xl border border-sky-400/20 flex items-center gap-4">
                         <ShieldCheck className="w-6 h-6 text-sky-400" />
                         <span className="text-xs text-zinc-600 dark:text-slate-400 font-medium italic">Vos données sont sécurisées et traitées sous 24h par nos experts au Cameroun.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer buttons */}
                <div className="flex justify-between gap-4 pt-16 mt-16 border-t border-zinc-100 dark:border-white/10">
                  <motion.button 
                    type="button"
                    whileHover={{ x: -5 }}
                    onClick={() => setStep(Math.max(1, step - 1))}
                    className={cn(
                      "px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 bg-zinc-100 dark:bg-white/5", 
                      step === 1 ? "opacity-0 invisible pointer-events-none" : ""
                    )}
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </motion.button>
                  
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glow bg-sky-400 text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-sky-400/20 flex items-center gap-3 group"
                  >
                    {step === 3 ? (
                      <>Lancer l'expérience <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /></>
                    ) : (
                      <>Suivant <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Feature badges */}
        <section className="mt-20 max-w-5xl mx-auto px-4">
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Rapidité', desc: 'Réponse en 24h' },
                { icon: ShieldCheck, title: 'Fiabilité', desc: 'Expertise certifiée' },
                { icon: Banknote, title: 'Transparence', desc: 'Prix en FCFA' },
              ].map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="w-12 h-12 bg-sky-400/10 rounded-full flex items-center justify-center text-sky-400 mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div className="font-black text-sm uppercase tracking-tighter text-zinc-900 dark:text-white mb-1">{f.title}</div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 uppercase tracking-widest font-bold">{f.desc}</div>
                </motion.div>
              ))}
           </div>
        </section>
      </div>
    </>
  );
}
