import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Languages, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-zinc-200/50 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Global IT" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-sky-400",
                  location.pathname === item.path 
                    ? "text-sky-400" 
                    : "text-zinc-600 dark:text-slate-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-white/10" />
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                title="Switch Language"
              >
                <Languages className="w-5 h-5 text-zinc-600 dark:text-slate-400" />
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                title="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-zinc-600" />
                ) : (
                  <Sun className="w-5 h-5 text-sky-400" />
                )}
              </button>
              
              <Link
                to="/quote"
                className="bg-sky-400 hover:bg-sky-300 text-slate-900 px-6 py-2.5 rounded-full text-xs font-black uppercase transition-all shadow-lg shadow-sky-400/20 flex items-center gap-2"
              >
                {t('nav.quote')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-900 dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-zinc-900 dark:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-4">
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                >
                  <Languages className="w-5 h-5" />
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-sky-400 text-slate-900 text-center py-3 rounded-xl font-black uppercase tracking-widest text-sm"
                >
                  {t('nav.quote')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
