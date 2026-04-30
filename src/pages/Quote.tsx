import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Laptop, Layers, Users, Calendar, Banknote, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export default function Quote() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { icon: Laptop, label: 'Web Site' },
    { icon: Layers, label: 'Web App' },
    { icon: Users, label: 'E-commerce' },
    { icon: FileText, label: 'Branding' },
  ];

  const budgets = ['< 5k€', '5k€ - 15k€', '15k€ - 50k€', '> 50k€'];

  if (submitted) {
    return (
      <div className="pt-40 pb-40 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-6 max-w-md"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white shadow-2xl shadow-green-500/30">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Demande Envoyée !</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Merci pour votre confiance. Un expert Global IT reviendra vers vous sous 24 heures maximum.</p>
          <button onClick={() => setSubmitted(false)} className="bg-zinc-100 dark:bg-zinc-800 px-8 py-3 rounded-full font-bold">Retour</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            {t('quote.title')}
          </motion.h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            {t('quote.subtitle')}
          </p>
        </div>

        {/* Form Stepper Wrapper */}
        <div className="bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl p-8 md:p-16">
          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-3 rounded-full bg-zinc-100 dark:bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: step >= s ? '100%' : '0%' }}
                  className="h-full bg-sky-400"
                />
              </div>
            ))}
          </div>

          <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); if (step === 3) setSubmitted(true); else setStep(step + 1); }}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3 uppercase tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-sky-400 text-slate-900 flex items-center justify-center text-sm font-black">1</span>
                  Quel est votre projet ?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectTypes.map((type) => (
                    <div key={type.label} className="cursor-pointer group">
                      <input type="radio" name="projectType" id={type.label} className="hidden peer" />
                      <label 
                        htmlFor={type.label}
                        className="flex flex-col items-center gap-4 p-10 rounded-[2.5rem] border-2 border-zinc-100 dark:border-white/5 peer-checked:border-sky-400 peer-checked:bg-sky-400/10 transition-all hover:border-sky-400/50"
                      >
                        <type.icon className="w-10 h-10 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                        <span className="font-black text-zinc-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">{type.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3 uppercase tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-sky-400 text-slate-900 flex items-center justify-center text-sm font-black">2</span>
                  Budget & Timeline
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgets.map((b) => (
                    <div key={b} className="cursor-pointer group">
                      <input type="radio" name="budget" id={b} className="hidden peer" />
                      <label 
                        htmlFor={b}
                        className="flex items-center gap-4 p-8 rounded-2xl border-2 border-zinc-100 dark:border-white/5 peer-checked:border-sky-400 peer-checked:bg-sky-400/10 transition-all font-black text-sm uppercase tracking-widest text-zinc-700 dark:text-slate-300"
                      >
                        <Banknote className="w-6 h-6 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                        {b}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-sky-400 uppercase tracking-widest ml-4">Launch Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    <input type="date" className="w-full pl-16 pr-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3 uppercase tracking-tight">
                  <span className="w-10 h-10 rounded-full bg-sky-400 text-slate-900 flex items-center justify-center text-sm font-black">3</span>
                  Final Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" required className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold" />
                  <input type="email" placeholder="Professional Email" required className="w-full px-6 py-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none font-bold" />
                </div>
                <textarea rows={4} placeholder="Your vision..." className="w-full px-6 py-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 outline-none resize-none font-medium" />
              </motion.div>
            )}

            <div className="flex justify-between gap-4 pt-12 border-t border-zinc-100 dark:border-white/10">
              <button 
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                className={cn("px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all", step === 1 ? "opacity-0 invisible" : "bg-zinc-100 dark:bg-white/5")}
              >
                Back
              </button>
              <button 
                type="submit"
                className="bg-sky-400 text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-sky-400/20 hover:scale-105 transition-transform"
              >
                {step === 3 ? 'Send experience request' : 'Next Step'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
