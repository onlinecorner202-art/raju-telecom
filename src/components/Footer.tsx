import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS, TELECOM_INFO } from '../data/telecomData';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* FAQ Accordion Section */}
      <section className="bg-white py-14 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-[#071b45] font-black text-xs uppercase tracking-widest">
              HELP & QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071b45] mt-1">
              সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              মুন্সিবাজার রাজু টেলিকমের সেবা ও কাজের বিষয়ে সচরাচর জানতে চাওয়া কিছু তথ্য
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#04132f] text-[#aebbd0] text-sm py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
            
            {/* Col 1: Brand */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-2xl font-black text-white">
                {TELECOM_INFO.name}
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-red-600 text-white text-xs font-bold">
                {TELECOM_INFO.tagline}
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                মুন্সিবাজার, রাজনগর, মৌলভীবাজার। সকল প্রকার ডিজিটাল প্রিন্ট, ব্যানার, মগ প্রিন্ট, সরকারি-বেসরকারি অনলাইন আবেদন ও মোবাইল ব্যাংকিং সেবা।
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3">দ্রুত লিঙ্ক</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#offline" className="hover:text-amber-400 transition-colors">অফলাইন প্রিন্টিং সেবা</a></li>
                <li><a href="#online" className="hover:text-amber-400 transition-colors">অনলাইন আবেদন সেবা</a></li>
                <li><a href="#bank" className="hover:text-amber-400 transition-colors">বিকাশ ও নগদ ব্যাংকিং</a></li>
                <li><a href="#director" className="hover:text-amber-400 transition-colors">পরিচালকের তথ্য</a></li>
                <li><a href="#gallery" className="hover:text-amber-400 transition-colors">কাজের গ্যালারি</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">সরাসরি যোগাযোগ</a></li>
              </ul>
            </div>

            {/* Col 3: Contact Summary */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3">যোগাযোগ</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>মুন্সিবাজার, রাজনগর, মৌলভীবাজার</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <a href={`tel:${TELECOM_INFO.phone}`} className="tabular-nums hover:text-white">
                    {TELECOM_INFO.phoneFormatted}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={TELECOM_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp চ্যাট
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left text-slate-400">
            <div>
              © 2026 {TELECOM_INFO.name} | {TELECOM_INFO.tagline}
              <span className="block sm:inline sm:ml-2 text-slate-500">
                মুন্সিবাজার, রাজনগর, মৌলভীবাজার
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <span>আপনার সেবাই আমাদের অঙ্গীকার</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
