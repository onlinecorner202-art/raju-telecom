import React, { useState } from 'react';
import { Eye, MessageCircle, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, TELECOM_INFO } from '../data/telecomData';
import { FallbackImage } from './FallbackImage';

interface GallerySectionProps {
  onOpenAssetModal: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenAssetModal }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const getTypeFromId = (id: string): 'print' | 'mug' | 'crest' | 'tshirt' | 'banner' | 'stamp' => {
    switch (id) {
      case 'g-1': return 'print';
      case 'g-2': return 'mug';
      case 'g-3': return 'crest';
      case 'g-4': return 'tshirt';
      case 'g-5': return 'banner';
      case 'g-6': return 'stamp';
      default: return 'print';
    }
  };

  return (
    <section id="gallery" className="scroll-mt-24 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#e21d2a] font-black text-sm tracking-widest uppercase">
            OUR WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071b45] mt-1 mb-3">
            কাজের ছবি / গ্যালারি
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            আপনার কাজের ছবি যোগ করার জন্য গ্যালারি প্রস্তুত রাখা হয়েছে
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90"
            >
              <FallbackImage
                src={item.image}
                alt={item.title}
                type={getTypeFromId(item.id)}
                badgeText={item.placeholderText}
                className="w-full h-full"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {item.placeholderText}
                </p>

                <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>ক্লিক করে বড় দেখুন</span>
                  </span>
                  <span className="text-[11px] text-slate-400">রাজু টেলিকম</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice & Upload helper card */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                আপনার দোকানের আসল কাজের ছবি যোগ করতে চান?
              </p>
              <p className="text-xs text-slate-500">
                ছবিগুলো <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-[11px]">public/assets/</code> ফোল্ডারে রাখলে স্বয়ংক্রিয়ভাবে প্রদর্শিত হবে।
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAssetModal}
            className="shrink-0 px-4 py-2 rounded-xl bg-[#071b45] hover:bg-blue-900 text-white text-xs font-bold transition-colors"
          >
            ফাইলের তালিকা দেখুন
          </button>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                  {activeItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Image Preview */}
            <div className="p-6 bg-slate-50 flex items-center justify-center">
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <FallbackImage
                  src={activeItem.image}
                  alt={activeItem.title}
                  type={getTypeFromId(activeItem.id)}
                  badgeText={activeItem.placeholderText}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Modal Footer with Direct Inquiry */}
            <div className="p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                মুন্সিবাজার, রাজনগর — রাজু টেলিকম
              </span>
              <a
                href={`${TELECOM_INFO.whatsappUrl}?text=${encodeURIComponent(`আসসালামু আলাইকুম, আমি রাজু টেলিকম থেকে "${activeItem.title}" সংক্রান্ত কাজ সম্পর্কে জানতে চাই।`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>এই সেবার জন্য WhatsApp-এ কথা বলুন</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
