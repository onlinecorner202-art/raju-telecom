import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { TELECOM_INFO } from '../data/telecomData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col items-center gap-2.5">
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="উপরে যান"
          title="পৃষ্ঠার শুরুতে যান"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200/80 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${TELECOM_INFO.phone}`}
        aria-label="ফোন কল করুন"
        title={`কল করুন: ${TELECOM_INFO.phoneFormatted}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e21d2a] hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-bold py-1 px-2.5 rounded-lg shadow-md pointer-events-none">
          কল করুন ({TELECOM_INFO.phoneFormatted})
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={TELECOM_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp-এ মেসেজ দিন"
        title="WhatsApp চ্যাট শুরু করুন"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#16a05a] hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-bold py-1 px-2.5 rounded-lg shadow-md pointer-events-none">
          WhatsApp-এ চ্যাট করুন
        </span>
      </a>
    </div>
  );
};
