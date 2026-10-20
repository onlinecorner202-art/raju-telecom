import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, FileImage, Upload, HelpCircle, Sparkles } from 'lucide-react';

interface AssetStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetStatusModal: React.FC<AssetStatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const assetsList = [
    { name: 'assets/logo.png', role: 'রাজু টেলিকম লোগো (Header & Brand)', status: 'fallback', desc: 'লোগো ছবি দিলে হেডারে সুন্দরভাবে ফুটে উঠবে।' },
    { name: 'assets/director.jpg', role: 'পরিচালক রাজু দেব এর ছবি (Director Portrait)', status: 'fallback', desc: 'পরিচালকের নিজস্ব ছবি প্রোফাইল সেকশনে প্রদর্শিত হবে।' },
    { name: 'assets/gallery_demo_1.jpg', role: 'গ্যালারি ১ — ডিজিটাল প্রিন্ট ডেমো', status: 'fallback', desc: 'দোকানের ডিজিটাল কালার প্রিন্ট কাজের ছবি।' },
    { name: 'assets/gallery_demo_2.jpg', role: 'গ্যালারি ২ — মগ প্রিন্ট ডেমো', status: 'fallback', desc: 'কাস্টম মগ প্রিন্টিং কাজের ছবি।' },
    { name: 'assets/gallery_demo_3.jpg', role: 'গ্যালারি ৩ — ক্রেস্ট ও ট্রফি ডেমো', status: 'fallback', desc: 'সম্মাননা ক্রেস্ট ও ট্রফি কাজের ছবি।' },
    { name: 'assets/gallery_demo_4.jpg', role: 'গ্যালারি ৪ — টি-শার্ট প্রিন্ট ডেমো', status: 'fallback', desc: 'কাস্টমাইজড টি-শার্ট প্রিন্ট কাজের ছবি।' },
    { name: 'assets/gallery_demo_5.jpg', role: 'গ্যালারি ৫ — ব্যানার ও পোস্টার ডেমো', status: 'fallback', desc: 'ডিজিটাল ব্যানার ও পোস্টার প্রিন্ট কাজের ছবি।' },
    { name: 'assets/gallery_demo_6.jpg', role: 'গ্যালারি ৬ — রাবার স্ট্যাম্প ডেমো', status: 'fallback', desc: 'অফিসিয়াল সিল ও ফ্লাশ স্ট্যাম্প কাজের ছবি।' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#071b45] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-300">
              <FileImage className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">ছবি ও অ্যাসেট ফাইল স্ট্যাটাস</h3>
              <p className="text-xs text-blue-200 mt-0.5">
                আপনার আপলোড করা index.html-এ থাকা ছবির ফাইলগুলোর বর্তমান অবস্থা
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700 text-sm">
          {/* Status Alert */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <b className="block text-sm font-bold text-amber-950">
                বর্তমানে আসল ছবির ফাইলগুলো যুক্ত করা হয়নি
              </b>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                আপনার মূল এইচটিএমএল ফাইলে উল্লেখিত ৮টি ছবির ফাইল (লোগো, পরিচালকের ছবি ও ৬টি গ্যালারির ছবি) এখনো প্রজেক্টে আসেনি। ওয়েবসাইটটি যাতে চমৎকার দেখায়, সেজন্য আমরা সুন্দর আধুনিক <strong>ফলব্যাক ভেক্টর ও ব্যাজ ডিজাইন</strong> যুক্ত করে দিয়েছি।
              </p>
            </div>
          </div>

          {/* List of Files */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm flex items-center justify-between">
              <span>প্রয়োজনীয় ছবির তালিকা ও পথ (Path)</span>
              <span className="text-xs text-slate-500 font-normal">মোট ৮টি ফাইল</span>
            </h4>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
              {assetsList.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {item.name}
                      </span>
                      <span className="text-xs font-semibold text-slate-700">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 self-start sm:self-center shrink-0">
                    ফলব্যাক ভেক্টর সক্রিয়
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions on how to add */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-900 space-y-2">
            <h5 className="font-bold text-xs uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>কিভাবে ছবি যোগ করবেন?</span>
            </h5>
            <p className="text-xs text-blue-800/90 leading-relaxed">
              আপনি আপনার লোগো, ছবি বা কাজের নমুনাগুলো পরবর্তীতে প্রদান করলে তা সরাসরি <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-[11px]">public/assets/</code> ফোল্ডারে যুক্ত করে দেওয়া হবে এবং সাথে সাথেই ওয়েবসাইটে প্রদর্শিত হবে।
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#071b45] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            বুঝেছি, বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
