import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { OFFLINE_SERVICES, ONLINE_SERVICES, ServiceItem, TELECOM_INFO } from '../data/telecomData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'offline' | 'online'>('all');

  // Filtered services based on search and tab
  const filteredOffline = useMemo(() => {
    if (!searchQuery.trim()) return OFFLINE_SERVICES;
    const q = searchQuery.toLowerCase();
    return OFFLINE_SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredOnline = useMemo(() => {
    if (!searchQuery.trim()) return ONLINE_SERVICES;
    const q = searchQuery.toLowerCase();
    return ONLINE_SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalResults = (activeTab === 'online' ? 0 : filteredOffline.length) + (activeTab === 'offline' ? 0 : filteredOnline.length);

  return (
    <div className="space-y-16 py-8">
      {/* Live Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 -mt-8 relative z-20">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="সেবা খুঁজুন (যেমন: পাসপোর্ট, জন্ম নিবন্ধন, কালার প্রিন্ট, মগ...)"
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#071b45] focus:border-transparent text-sm sm:text-base text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-600"
                >
                  ক্লিয়ার
                </button>
              )}
            </div>

            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-white text-[#071b45] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                সব সেবা ({OFFLINE_SERVICES.length + ONLINE_SERVICES.length})
              </button>
              <button
                onClick={() => setActiveTab('offline')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'offline'
                    ? 'bg-white text-[#e21d2a] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                প্রিন্টিং / অফলাইন ({OFFLINE_SERVICES.length})
              </button>
              <button
                onClick={() => setActiveTab('online')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'online'
                    ? 'bg-white text-[#0d2f73] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                অনলাইন সার্ভিস ({ONLINE_SERVICES.length})
              </button>
            </div>

          </div>

          {searchQuery && (
            <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
              <span>
                "<strong>{searchQuery}</strong>" দিয়ে খোঁজা হয়েছে — {totalResults}টি সেবা পাওয়া গেছে
              </span>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 1: Offline / Printing Services */}
      {(activeTab === 'all' || activeTab === 'offline') && (
        <section id="offline" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Section Head */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#e21d2a] font-black text-sm tracking-widest uppercase">
                PRINT MEDIA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071b45] mt-1 mb-3">
                অফলাইন / প্রিন্টিং সার্ভিস
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                দৈনন্দিন প্রয়োজনীয় সকল ধরনের প্রিন্ট ও ডিজিটাল মিডিয়া সেবা
              </p>
            </div>

            {/* Services Grid */}
            {filteredOffline.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredOffline.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(9,30,66,0.04)] hover:shadow-[0_12px_30px_rgba(9,30,66,0.10)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl p-2.5 bg-slate-50 group-hover:bg-red-50 rounded-xl transition-colors">
                          {service.icon}
                        </div>
                        {service.popular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-100 text-[#e21d2a]">
                            জনপ্রিয়
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#071b45] group-hover:text-[#e21d2a] transition-colors mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#e21d2a]">
                      <span>বিস্তারিত / তথ্য</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500">প্রিন্টিং সার্ভিসে এই নামে কোনো ফলাফল পাওয়া যায়নি।</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 2: Online Services */}
      {(activeTab === 'all' || activeTab === 'online') && (
        <section id="online" className="scroll-mt-24 bg-gradient-to-b from-[#f9fbff] to-[#f2f6ff] py-14 rounded-3xl border border-blue-100/60 my-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Section Head */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#0d2f73] font-black text-sm tracking-widest uppercase">
                ONLINE SERVICE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071b45] mt-1 mb-3">
                অনলাইন সার্ভিস
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                বিভিন্ন সরকারি ও বেসরকারি অনলাইন সেবায় নির্ভুল ও বিশ্বস্ত সহায়তা
              </p>
            </div>

            {/* Services Grid */}
            {filteredOnline.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredOnline.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="group bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_16px_rgba(9,30,66,0.04)] hover:shadow-[0_12px_30px_rgba(9,30,66,0.10)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl p-2.5 bg-blue-50/70 group-hover:bg-blue-100/70 rounded-xl transition-colors">
                          {service.icon}
                        </div>
                        {service.popular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-[#0d2f73]">
                            প্রয়োজনীয়
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0d2f73] group-hover:text-blue-800 transition-colors mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                      <span>আবেদন সহায়তা</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500">অনলাইন সার্ভিসে কোনো ফলাফল মেলেনি।</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
