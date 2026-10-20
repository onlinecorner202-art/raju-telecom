import React from 'react';
import { X, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem, TELECOM_INFO } from '../data/telecomData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const encodedMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি রাজু টেলিকম থেকে "${service.title}" সেবাটি সম্পর্কে জানতে চাই।`
  );
  const whatsappLink = `${TELECOM_INFO.whatsappUrl}?text=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#071b45] to-[#0d2f73] p-6 text-white flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="text-3xl p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {service.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                {service.category === 'offline' ? 'প্রিন্ট মিডিয়া / অফলাইন' : service.category === 'online' ? 'অনলাইন সার্ভিস' : 'মোবাইল ব্যাংকিং'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">সেবার বিবরণ</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {service.description}
            </p>
          </div>

          {/* Quick Service Checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">কেন রাজু টেলিকমে আসবেন?</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>অভিজ্ঞ হাতে প্রুফ রিডিং ও নির্ভুল সম্পাদন</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>উচ্চমানের আধুনিক প্রিন্টার ও অরিজিনাল কালার ইঙ্ক</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>গ্রাহকবান্ধব ও সাশ্রয়ী সার্ভিস চার্জ</span>
              </li>
            </ul>
          </div>

          {/* Notice */}
          <div className="text-[11px] text-slate-500 bg-amber-50 border border-amber-200/80 p-3 rounded-xl leading-relaxed">
            💡 প্রয়োজনীয় মূল কাগজপত্র ও মোবাইল ফোন সাথে নিয়ে আসার জন্য অনুরোধ করা হচ্ছে।
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে জানতে চান</span>
            </a>

            <a
              href={`tel:${TELECOM_INFO.phone}`}
              className="py-3 px-4 rounded-xl bg-[#e21d2a] hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>সরাসরি কল দিন</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
