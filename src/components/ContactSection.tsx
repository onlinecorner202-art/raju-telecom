import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Building2, ExternalLink, Copy, Check, Send, AlertTriangle } from 'lucide-react';
import { TELECOM_INFO } from '../data/telecomData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [selectedService, setSelectedService] = useState('সাধারণ অনুসন্ধান');
  const [message, setMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(TELECOM_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `আসসালামু আলাইকুম।\nনাম: ${customerName || 'গ্রাহক'}\nসেবা: ${selectedService}\nবার্তা: ${message || 'আমি সেবাটি সম্পর্কে বিস্তারিত জানতে চাই।'}`;
    const url = `${TELECOM_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#071b45] text-white py-16 md:py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headline, CTAs, Fast WhatsApp Message Box (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#ffd21c] font-black text-sm tracking-widest uppercase">
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              আপনার প্রয়োজনীয় সেবার জন্য যোগাযোগ করুন
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              কাজের বিষয়ে জানতে বা সেবা নিতে সরাসরি ফোন কিংবা WhatsApp-এ যোগাযোগ করুন। আমরা গ্রাহকের প্রয়োজন অনুযায়ী দ্রুততম সময়ে মানসম্মত সেবা প্রদান করি।
            </p>

            {/* Direct Big Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${TELECOM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e21d2a] hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span className="tabular-nums">📞 {TELECOM_INFO.phoneFormatted}</span>
              </a>

              <a
                href={TELECOM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#071b45] font-bold text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>💬 WhatsApp</span>
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-blue-200 border border-white/15 text-xs font-semibold transition-colors"
                title="নম্বর কপি করুন"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'কপি হয়েছে!' : 'নম্বর কপি'}</span>
              </button>
            </div>

            {/* Direct WhatsApp Quick Message Form */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 mt-6">
              <h3 className="text-base font-bold text-amber-300 mb-1 flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>সরাসরি হোয়াটসঅ্যাপে বার্তা পাঠান</span>
              </h3>
              <p className="text-xs text-blue-200/80 mb-4">
                ফরমটি পূরণ করে এক ক্লিকেই আমাদের হোয়াটসঅ্যাপে পাঠিয়ে দিন
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1">আপনার নাম (ঐচ্ছিক)</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="আপনার নাম লিখুন"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-300/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1">কোন সেবা সম্পর্কে জানতে চান?</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b245c] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="সাধারণ অনুসন্ধান">সাধারণ অনুসন্ধান / কথা বলতে চাই</option>
                    <option value="ডিজিটাল কালার প্রিন্ট">ডিজিটাল কালার প্রিন্ট</option>
                    <option value="ফটোকপি ও স্ক্যান">ফটোকপি ও স্ক্যান</option>
                    <option value="মগ ও টি-শার্ট প্রিন্ট">মগ ও টি-শার্ট প্রিন্ট</option>
                    <option value="ব্যানার ও পোস্টার প্রিন্ট">ব্যানার ও পোস্টার প্রিন্ট</option>
                    <option value="পাসপোর্ট আবেদন সহায়তা">পাসপোর্ট আবেদন সহায়তা</option>
                    <option value="জাতীয় পরিচয়পত্র (NID) সংক্রান্ত">জাতীয় পরিচয়পত্র (NID) সংক্রান্ত</option>
                    <option value="জন্ম নিবন্ধন আবেদন">জন্ম নিবন্ধন আবেদন</option>
                    <option value="চাকরি বা ভর্তি ফরম পূরণ">চাকরি বা ভর্তি ফরম পূরণ</option>
                    <option value="মোবাইল ব্যাংকিং (বিকাশ/নগদ/রকেট)">মোবাইল ব্যাংকিং (বিকাশ/নগদ/রকেট)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-blue-200 mb-1">আপনার বার্তা বা প্রশ্ন</label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="যেমন: কত টাকা ফি লাগবে? কতক্ষণ সময় লাগবে?"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-300/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে পাঠান (Send via WhatsApp)</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Contact Card Details, Address, Notice (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                যোগাযোগের বিস্তারিত তথ্য
              </h3>

              {/* Item 1: Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-base">ঠিকানা</b>
                  <span className="text-blue-200 text-sm leading-relaxed block">
                    {TELECOM_INFO.address}
                  </span>
                  <a
                    href={TELECOM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 mt-1.5 font-semibold"
                  >
                    <span>গুগল ম্যাপে লোকেশন দেখুন</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Item 2: Mobile */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-400/20 text-red-300 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-base">মোবাইল নম্বর</b>
                  <a
                    href={`tel:${TELECOM_INFO.phone}`}
                    className="text-white hover:text-amber-300 font-bold text-lg tabular-nums tracking-wide block transition-colors"
                  >
                    {TELECOM_INFO.phoneFormatted}
                  </a>
                  <span className="text-xs text-blue-200">সরাসরি ফোন ও WhatsApp প্রযোজ্য</span>
                </div>
              </div>

              {/* Item 3: Organization */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-base">প্রতিষ্ঠান</b>
                  <span className="text-blue-200 text-sm block">
                    {TELECOM_INFO.name} — {TELECOM_INFO.tagline}
                  </span>
                  <span className="text-xs text-slate-300">পরিচালক: {TELECOM_INFO.director.name}</span>
                </div>
              </div>

              {/* Notice Box */}
              <div className="rounded-2xl p-4 bg-amber-400/10 border-l-4 border-amber-400 text-amber-100 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{TELECOM_INFO.disclaimer}</span>
              </div>
            </div>

            {/* Quick Map Preview Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-blue-300 block">উপজেলা ও জেলা</span>
                <b className="text-sm text-white">রাজনগর, মৌলভীবাজার (মুন্সিবাজার কেন্দ্রস্থল)</b>
              </div>
              <a
                href={TELECOM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>দিকনির্দেশনা</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
