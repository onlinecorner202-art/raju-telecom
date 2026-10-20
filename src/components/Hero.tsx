import React from 'react';
import { Phone, MessageCircle, CheckCircle, Sparkles, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { TELECOM_INFO } from '../data/telecomData';

interface HeroProps {
  onSearchFocus?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#071b45] via-[#0d2b68] to-[#1d4b9a] text-white overflow-hidden py-12 md:py-20">
      {/* Background radial highlight & subtle geometric elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subhead, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{TELECOM_INFO.heroEyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15] text-white">
              সকল প্রকার <span className="text-[#ffd21c] drop-shadow-sm">ডিজিটাল প্রিন্ট</span><br className="hidden sm:inline" />
              ও অনলাইনের কাজ করা হয়।
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl font-normal">
              {TELECOM_INFO.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`tel:${TELECOM_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e21d2a] hover:bg-[#c81420] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-950/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>📞 এখনই কল করুন</span>
              </a>

              <a
                href={TELECOM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#071b45] font-bold text-sm sm:text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>💬 WhatsApp-এ মেসেজ দিন</span>
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
              <div>
                <b className="block text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">৩২+</b>
                <span className="text-blue-200">সেবা সমাহার</span>
              </div>
              <div>
                <b className="block text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">১০০%</b>
                <span className="text-blue-200">নির্ভুল সেবা</span>
              </div>
              <div>
                <b className="block text-xl sm:text-2xl font-bold text-amber-300">মুন্সিবাজার</b>
                <span className="text-blue-200">রাজনগর, মৌলভীবাজার</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>আমাদের সেবার বৈশিষ্ট্য</span>
                </h3>
                <span className="text-[11px] px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 font-bold">
                  বিশ্বস্ত
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">অভিজ্ঞ ও যত্নশীল সেবা</h4>
                    <p className="text-xs text-blue-100/80 mt-0.5 leading-relaxed">
                      প্রতিটি কাজের গুরুত্ব অনুধাবন করে সতর্কতার সাথে প্রুফ রিডিং ও প্রিন্ট।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors">
                  <div className="p-2 rounded-xl bg-blue-400/20 text-blue-300 shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">আধুনিক মেশিন ও প্রযুক্তি</h4>
                    <p className="text-xs text-blue-100/80 mt-0.5 leading-relaxed">
                      উচ্চগতির আধুনিক ডিজিটাল প্রিন্টার, স্ক্যানার ও ফটো কোয়ালিটি যন্ত্রপাতি।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors">
                  <div className="p-2 rounded-xl bg-emerald-400/20 text-emerald-300 shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">দ্রুত ও নির্ভুল কাজ</h4>
                    <p className="text-xs text-blue-100/80 mt-0.5 leading-relaxed">
                      সরকারি পোর্টাল ও ডকুমেন্ট আবেদন যথাসময়ে নির্ভুলভাবে সম্পাদন।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors">
                  <div className="p-2 rounded-xl bg-red-400/20 text-red-300 shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">গ্রাহক সন্তুষ্টিকে সর্বোচ্চ গুরুত্ব</h4>
                    <p className="text-xs text-blue-100/80 mt-0.5 leading-relaxed">
                      গ্রাহকের সন্তুষ্টি ও আস্থা রক্ষা করাই আমাদের প্রথম ও প্রধান ব্রত।
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                <span>দোকান খোলা: প্রতিদিন সকাল ৮:০০ - রাত ১০:০০</span>
                <span className="font-bold text-amber-300">মুন্সিবাজার</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
