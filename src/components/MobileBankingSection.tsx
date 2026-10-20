import React from 'react';
import { Smartphone, Zap, Send, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BANKING_SERVICES, ServiceItem, TELECOM_INFO } from '../data/telecomData';

interface MobileBankingSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const MobileBankingSection: React.FC<MobileBankingSectionProps> = ({ onSelectService }) => {
  return (
    <section id="bank" className="scroll-mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#159447] font-black text-sm tracking-widest uppercase">
            MOBILE BANKING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071b45] mt-1 mb-3">
            মোবাইল ব্যাংকিং সার্ভিস
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            জনপ্রিয় মোবাইল ফাইন্যান্সিয়াল সেবায় বিশ্বস্ত ও দ্রুত ক্যাশ ইন, ক্যাশ আউট ও রিচার্জ সহায়তা
          </p>
        </div>

        {/* Banking Wrap Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_12px_40px_rgba(9,30,66,0.06)]">
          
          {/* Bank Partner Logos / Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 pb-8 border-b border-slate-100">
            <div className="px-5 py-2.5 rounded-xl bg-pink-50 border border-pink-200/80 text-[#d21f4a] font-extrabold text-lg sm:text-xl tracking-tight shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d21f4a]"></span>
              <span>bKash বিকাশ</span>
            </div>

            <div className="px-5 py-2.5 rounded-xl bg-orange-50 border border-orange-200/80 text-[#e33a21] font-extrabold text-lg sm:text-xl tracking-tight shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e33a21]"></span>
              <span>নগদ Nagad</span>
            </div>

            <div className="px-5 py-2.5 rounded-xl bg-purple-50 border border-purple-200/80 text-[#6b277f] font-extrabold text-lg sm:text-xl tracking-tight shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6b277f]"></span>
              <span>Rocket রকেট</span>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm tracking-tight flex items-center gap-2">
              <span>উপায় / সেলফিন</span>
            </div>
          </div>

          {/* 4 Banking Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BANKING_SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group p-5 rounded-2xl bg-gradient-to-b from-white to-emerald-50/20 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#126c3a] group-hover:text-emerald-800 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>সেবা নিন</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Banner / Instructions */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  নিরাপদ ও তাৎক্ষণিক লেনদেন সুবিধা
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  মুন্সিবাজার রাজু টেলিকমে প্রতিটি ক্যাশ ইন ও রিচার্জে সঠিক নম্বর যাচাইপূর্বক রশিদ বা এসএমএস কনফার্মেশন প্রদান করা হয়।
                </p>
              </div>
            </div>

            <a
              href={`tel:${TELECOM_INFO.phone}`}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-sm flex items-center gap-2"
            >
              <span>জরুরি রিচার্জ / তথ্য</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
