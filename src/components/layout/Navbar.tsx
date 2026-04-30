import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Languages, Menu, X, ChevronRight, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
        scrolled 
          ? "py-3 glass border-b border-zinc-200/50 dark:border-white/10" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src="/logo.png" alt="Global IT" className="h-16 w-auto object-contain" />
            </motion.div>
            <div className="hidden sm:block">
               <div className="text-lg font-black tracking-tighter text-zinc-900 dark:text-white leading-none uppercase">Global IT</div>
               <div className="text-[8px] font-black tracking-[0.2em] text-sky-400 uppercase leading-none mt-1">Solutions Pro</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                    location.pathname === item.path
                      ? "text-sky-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-sky-400"
                  )}
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-sky-400/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-zinc-200 dark:bg-white/10 mx-2" />

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <Languages className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-sky-400 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <Link to="/quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow ml-4 bg-sky-400 text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-sky-400/20"
                >
                  {t('nav.quote')}
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-sky-400 text-slate-900"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all",
                    location.pathname === item.path
                      ? "bg-sky-400/10 text-sky-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5"
                  )}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-sky-400 text-slate-900 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg">
                    {t('nav.quote')}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
