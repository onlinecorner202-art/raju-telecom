import React, { useState } from 'react';
import { ImageOff, Sparkles, User, Award, Coffee, Shirt, Stamp, FileText } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  type?: 'logo' | 'director' | 'mug' | 'crest' | 'tshirt' | 'banner' | 'stamp' | 'print' | 'general';
  className?: string;
  caption?: string;
  badgeText?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  type = 'general',
  className = '',
  caption,
  badgeText
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If source fails or if the image is missing, render an authentic, rich placeholder
  if (error || !src) {
    if (type === 'logo') {
      return (
        <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#071b45] to-[#0d2f73] text-white rounded-2xl shadow-md border-2 border-amber-400/30 overflow-hidden ${className}`}>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-red-600/20 rounded-full blur-xl pointer-events-none" />
          <div className="text-center p-2">
            <span className="block text-2xl font-black text-amber-400 tracking-wider">RT</span>
            <span className="block text-[9px] font-bold text-slate-200 tracking-tight leading-tight">রাজু টেলিকম</span>
          </div>
        </div>
      );
    }

    if (type === 'director') {
      return (
        <div className={`relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0b2559] via-[#071b45] to-[#04122e] text-white rounded-2xl overflow-hidden border border-white/10 ${className}`}>
          {/* Subtle geometric backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center p-6 text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-400/20 to-red-500/20 border-2 border-amber-400/40 flex items-center justify-center mb-4 shadow-inner">
              <User className="w-14 h-14 text-amber-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">রাজু দেব</h4>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-600/90 text-white tracking-wide mb-3">
              পরিচালক, রাজু টেলিকম
            </span>
            <p className="text-xs text-blue-200/80 max-w-xs leading-relaxed">
              মুন্সিবাজার, রাজনগর, মৌলভীবাজার
            </p>
            <div className="mt-4 text-[11px] text-amber-300/80 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <span>📷</span>
              <span>assets/director.jpg ছবি যোগ করতে পারেন</span>
            </div>
          </div>
        </div>
      );
    }

    // Gallery item fallbacks
    const getGalleryIcon = () => {
      switch (type) {
        case 'mug': return <Coffee className="w-10 h-10 text-amber-400" />;
        case 'crest': return <Award className="w-10 h-10 text-amber-400" />;
        case 'tshirt': return <Shirt className="w-10 h-10 text-blue-400" />;
        case 'stamp': return <Stamp className="w-10 h-10 text-emerald-400" />;
        case 'banner': return <Sparkles className="w-10 h-10 text-purple-400" />;
        case 'print': return <FileText className="w-10 h-10 text-red-400" />;
        default: return <ImageOff className="w-8 h-8 text-slate-400" />;
      }
    };

    return (
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/50 border border-slate-200/80 rounded-xl overflow-hidden p-6 text-center group transition-all duration-200 ${className}`}>
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-3 group-hover:scale-105 transition-transform">
          {getGalleryIcon()}
        </div>
        <span className="font-bold text-slate-800 text-sm leading-snug mb-1">{alt || 'কাজের নমুনা'}</span>
        {badgeText && (
          <span className="text-[11px] font-medium text-slate-500">
            {badgeText}
          </span>
        )}
        {caption && (
          <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium truncate">
            {caption}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-300 text-xs">
          লোড হচ্ছে...
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 py-2.5 px-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-xs font-semibold">
          {caption}
        </div>
      )}
    </div>
  );
};
