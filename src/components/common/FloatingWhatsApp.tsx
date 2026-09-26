import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/brandConfig';
import { playWhatsAppHoverSound, playWhatsAppClickSound } from '../../lib/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleMouseEnter = () => {
    playWhatsAppHoverSound();
  };

  const handleClick = () => {
    playWhatsAppClickSound();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0c0f17] dark:bg-[#0c0f17] light:bg-white text-white dark:text-white light:text-[#0F172A] border border-[#1f2638] dark:border-[#1f2638] light:border-[#E2E8F0] px-3.5 py-2.5 rounded-xl shadow-2xl shadow-black/80 dark:shadow-black/80 light:shadow-slate-400/20 animate-fade-in text-xs max-w-xs transition-colors">
          <span className="font-medium">Need custom printing assistance? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#7F869A] hover:text-white dark:hover:text-white light:hover:text-[#0F172A] p-0.5 rounded transition-colors ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Action Button with Hover and Click Sound Effects */}
      <a
        href={getWhatsAppUrl('Hello ARS Creation, I would like to enquire about your printing services.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 group relative focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#050505] dark:border-[#050505] light:border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
