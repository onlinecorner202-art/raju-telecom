import React from 'react';
import { Phone, MessageCircle, MapPin, Building, Briefcase, Award, CheckCircle } from 'lucide-react';
import { TELECOM_INFO } from '../data/telecomData';
import { FallbackImage } from './FallbackImage';

export const DirectorSection: React.FC = () => {
  const { director, phoneFormatted, phone, whatsappUrl } = TELECOM_INFO;

  return (
    <section id="director" className="scroll-mt-24 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#e21d2a] font-black text-sm tracking-widest uppercase">
            OUR DIRECTOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071b45] mt-1 mb-3">
            পরিচালকের তথ্য
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            গ্রাহকের আস্থা ও বিশ্বস্ততায় পরিচালিত মুন্সিবাজারের জনপ্রিয় ডিজিটাল সেবা কেন্দ্র
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-[0_16px_50px_rgba(9,30,66,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            
            {/* Left Photo Container (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#071b45] to-[#0d2f73] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden">
              <div className="w-full flex-1 flex items-center justify-center min-h-[300px]">
                <FallbackImage
                  src={director.image}
                  alt={director.name}
                  type="director"
                  className="w-full max-w-[280px] h-[340px] shadow-lg rounded-2xl"
                />
              </div>

              <div className="w-full mt-4 pt-3 border-t border-white/15 flex items-center justify-around text-xs text-blue-200">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>যাচাইকৃত প্রোফাইল</span>
                </span>
                <span>মুন্সিবাজার</span>
              </div>
            </div>

            {/* Right Info Container (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-[#e21d2a] font-black text-sm uppercase tracking-wider mb-1">
                  {director.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071b45] mb-3">
                  {director.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {director.bio}
                </p>
              </div>

              {/* Facts Grid (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  <span className="block text-xs text-slate-500 font-medium mb-0.5">প্রতিষ্ঠান</span>
                  <b className="text-sm sm:text-base text-[#071b45]">{director.organization}</b>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  <span className="block text-xs text-slate-500 font-medium mb-0.5">সেবা ধরন</span>
                  <b className="text-sm sm:text-base text-[#071b45]">{director.serviceType}</b>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  <span className="block text-xs text-slate-500 font-medium mb-0.5">ঠিকানা</span>
                  <b className="text-sm sm:text-base text-[#071b45]">{TELECOM_INFO.address}</b>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  <span className="block text-xs text-slate-500 font-medium mb-0.5">যোগাযোগ নম্বর</span>
                  <b className="text-sm sm:text-base text-[#071b45] tabular-nums">{phoneFormatted}</b>
                </div>
              </div>

              {/* Direct Actions to contact Director */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${phone}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#e21d2a] hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>পরিচালককে কল দিন</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>পরিচালকের WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
