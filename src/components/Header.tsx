import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, CheckCircle2, Info } from 'lucide-react';
import { TELECOM_INFO } from '../data/telecomData';
import { FallbackImage } from './FallbackImage';

interface HeaderProps {
  activeSection: string;
  onOpenAssetModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenAssetModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'হোম' },
    { id: 'offline', label: 'অফলাইন সার্ভিস' },
    { id: 'online', label: 'অনলাইন সার্ভিস' },
    { id: 'bank', label: 'মোবাইল ব্যাংকিং' },
    { id: 'director', label: 'পরিচালকের তথ্য' },
    { id: 'gallery', label: 'গ্যালারি' },
    { id: 'contact', label: 'যোগাযোগ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm transition-all duration-200">
      {/* Top Banner */}
      <div className="bg-[#071b45] text-[#dbe7ff] text-xs sm:text-[13px] py-1.5 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{TELECOM_INFO.topNotice}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{TELECOM_INFO.address}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>প্রতিদিন — গ্রাহকের প্রয়োজন অনুযায়ী</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Brand Row */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 sm:gap-4 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform group-hover:scale-105">
              <FallbackImage
                src="/assets/logo.png"
                alt="রাজু টেলিকম লোগো"
                type="logo"
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#071b45] tracking-tight leading-none">
                {TELECOM_INFO.name}
              </div>
              <div className="inline-block mt-1 sm:mt-1.5 px-2.5 sm:px-3 py-0.5 rounded-md bg-gradient-to-r from-[#e21d2a] to-[#f04750] text-white text-xs sm:text-sm font-bold shadow-sm">
                {TELECOM_INFO.tagline}
              </div>
            </div>
          </a>

          {/* Action Pills for Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAssetModal}
              title="ছবির ফাইল ও স্ট্যাটাস দেখুন"
              className="px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Info className="w-4 h-4 text-blue-600" />
              <span>ছবি/অ্যাসেট স্ট্যাটাস</span>
            </button>

            <a
              href={`tel:${TELECOM_INFO.phone}`}
              className="px-3.5 py-2 border border-slate-200 hover:border-red-300 rounded-xl bg-slate-50/70 hover:bg-red-50/40 transition-colors flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#e21d2a] flex items-center justify-center font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 font-medium">Call Now</span>
                <span className="text-sm font-bold text-[#071b45] tabular-nums">{TELECOM_INFO.phoneFormatted}</span>
              </div>
            </a>

            <a
              href={TELECOM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 border border-slate-200 hover:border-emerald-300 rounded-xl bg-slate-50/70 hover:bg-emerald-50/40 transition-colors flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 font-medium">WhatsApp</span>
                <span className="text-sm font-bold text-emerald-700 tabular-nums">{TELECOM_INFO.phoneFormatted}</span>
              </div>
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${TELECOM_INFO.phone}`}
              className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={TELECOM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav className="bg-[#071b45] text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-3 text-sm font-semibold tracking-wide border-r border-white/10 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#e21d2a] text-white shadow-inner'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.id === 'home' && <span className="text-amber-400">⌂</span>}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="text-xs text-amber-300/90 font-medium tracking-wide flex items-center gap-1.5 shrink-0 pl-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>মুন্সিবাজার, রাজনগর</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071b45] text-white border-b border-slate-700 py-3 px-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col divide-y divide-white/10 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#e21d2a] text-white' : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/15 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssetModal();
              }}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-white/10 text-amber-300 flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              <span>ছবি ও অ্যাসেট স্ট্যাটাস (Image Info)</span>
            </button>
            <div className="text-center text-xs text-slate-300 py-1">
              📍 মুন্সিবাজার, রাজনগর, মৌলভীবাজার
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
