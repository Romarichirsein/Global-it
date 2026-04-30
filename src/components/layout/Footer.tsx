import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img 
                whileHover={{ rotate: 10, scale: 1.1 }}
                src="/logo.png" 
                alt="Global IT" 
                className="h-16 w-auto object-contain" 
              />
              <div>
                <div className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">Global IT</div>
                <div className="text-[9px] font-black tracking-[0.2em] text-sky-400 uppercase leading-none mt-1.5">Excellence Digital</div>
              </div>
            </Link>
            <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              La technologie de demain, intégrée dès aujourd'hui pour votre sécurité et votre performance au Cameroun et partout ailleurs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-current`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Navigation</h3>
            <ul className="space-y-4">
              {['Accueil', 'À Propos', 'Services', 'Réalisations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace('à ', '').replace('é', 'e')}`} 
                    className="group text-sm font-bold text-zinc-600 dark:text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Expertises</h3>
            <ul className="space-y-4">
              {[
                'Vidéosurveillance',
                'Maintenance Informatique',
                'Développement Web',
                'Réseaux & Systèmes',
                'Installation Électrique'
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="group text-sm font-bold text-zinc-600 dark:text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Appelez-nous</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white">678 404 649 / 620 726 398</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Email</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white break-all">globali19188@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Bureaux</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white">A votre service — Cameroun</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <ShieldCheck className="w-5 h-5 text-sky-400" />
             <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} GLOBAL IT. TOUS DROITS RÉSERVÉS.
             </p>
          </div>
          
          <div className="flex items-center gap-8">
            {['Confidentialité', 'Conditions', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-bold text-zinc-400 hover:text-sky-400 uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
               <Globe className="w-3 h-3 text-zinc-400" />
               <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Français (CM)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
