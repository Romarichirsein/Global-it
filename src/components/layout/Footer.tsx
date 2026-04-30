import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Global IT" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/projects" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('services.items.video.title')}</Link></li>
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('services.items.maintenance.title')}</Link></li>
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('services.items.web.title')}</Link></li>
              <li><Link to="/services" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 text-sm transition-colors">{t('services.items.network.title')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-zinc-500 dark:text-zinc-400 text-sm">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-zinc-500 dark:text-zinc-400 text-sm">{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-zinc-500 dark:text-zinc-400 text-sm">{t('contact.info.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
          <p>© 2026 Global IT. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
