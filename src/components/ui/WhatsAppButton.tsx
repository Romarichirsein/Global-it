import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '237678404649';
  const message = 'Bonjour Global IT, j\'aimerais en savoir plus sur vos services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        delay: 1.5 // Appear after some time
      }}
      className="fixed bottom-8 right-8 z-[100] group"
    >
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-40 transition-opacity" />
      
      {/* Label on hover */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <div className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">Contact Direct</div>
        <div className="text-[9px] text-green-500 font-bold uppercase tracking-widest">En ligne (WhatsApp)</div>
      </div>

      {/* Button */}
      <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 border-4 border-white dark:border-zinc-950 overflow-hidden">
        <MessageCircle className="w-8 h-8 relative z-10" />
        {/* Shine effect */}
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 group-hover:left-[100%] transition-all duration-1000" />
      </div>
    </motion.a>
  );
}
