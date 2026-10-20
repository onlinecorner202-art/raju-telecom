export interface ServiceItem {
  id: string;
  title: string;
  category: 'offline' | 'online' | 'bank';
  icon: string;
  description: string;
  tags?: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  placeholderText: string;
}

export const TELECOM_INFO = {
  name: 'রাজু টেলিকম',
  nameEn: 'Raju Telecom',
  tagline: 'প্রিন্ট মিডিয়া & অনলাইন সার্ভিস',
  phone: '01747600806',
  phoneFormatted: '01747-600806',
  phoneInternational: '+8801747600806',
  whatsappUrl: 'https://wa.me/8801747600806',
  address: 'মুন্সিবাজার, রাজনগর, মৌলভীবাজার',
  addressDivision: 'সিলেট বিভাগ, বাংলাদেশ',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Munshibazar+Rajnagar+Moulvibazar',
  hours: 'প্রতিদিন — সকাল ৮:০০টা থেকে রাত ১০:০০টা (গ্রাহকের প্রয়োজন অনুযায়ী)',
  director: {
    name: 'রাজু দেব',
    role: 'পরিচালক',
    organization: 'রাজু টেলিকম',
    serviceType: 'প্রিন্ট মিডিয়া & অনলাইন সার্ভিস',
    experienceText: 'দীর্ঘদিনের অভিজ্ঞতা ও সুনামের সাথে মুন্সিবাজারে ডিজিটাল প্রিন্টিং, আইটি ও অনলাইন সেবা প্রদান করে আসছি।',
    bio: 'রাজু টেলিকম — প্রিন্ট মিডিয়া & অনলাইন সার্ভিস। গ্রাহকের প্রয়োজন অনুযায়ী মানসম্মত ডিজিটাল প্রিন্ট ও অনলাইন সেবা দেওয়াই আমাদের লক্ষ্য।',
    image: 'assets/director.jpg',
  },
  topNotice: '✓ আপনার সেবাই আমাদের অঙ্গীকার',
  heroEyebrow: 'বিশ্বস্ত সেবা • আধুনিক প্রযুক্তি • যত্নসহকারে কাজ',
  heroTitle: 'সকল প্রকার ডিজিটাল প্রিন্ট ও অনলাইনের কাজ করা হয়।',
  heroSubtitle: 'প্রিন্টিং, ডিজাইন, অনলাইন আবেদন, ডকুমেন্ট সেবা ও মোবাইল ব্যাংকিং—আপনার প্রয়োজনীয় সেবা এক জায়গায়।',
  disclaimer: 'নোট: সরকারি/অনলাইন সেবার নিয়ম, সরকারি ফি ও সময়সীমা সংশ্লিষ্ট কর্তৃপক্ষের নির্দেশনা অনুযায়ী পরিবর্তিত হতে পারে।'
};

export const OFFLINE_SERVICES: ServiceItem[] = [
  { id: 'off-1', title: 'কালার প্রিন্ট', category: 'offline', icon: '🖨️', description: 'উচ্চমানের ফটো পেপার ও আর্ট পেপারে ডিজিটাল কালার প্রিন্ট।', tags: ['কালার', 'প্রিন্ট', 'color'], popular: true },
  { id: 'off-2', title: 'সাদা-কালো প্রিন্ট', category: 'offline', icon: '📄', description: 'দ্রুত ও অত্যন্ত পরিষ্কার ব্ল্যাক অ্যান্ড হোয়াইট প্রিন্ট।', tags: ['সাদা-কালো', 'bw'] },
  { id: 'off-3', title: 'ফটোকপি', category: 'offline', icon: '📑', description: 'লিগ্যাল ও এ-ফোর সাইজে স্পষ্ট ডকুমেন্ট কপি সেবা।', tags: ['ফটোকপি', 'কপি', 'photocopy'], popular: true },
  { id: 'off-4', title: 'স্ক্যান', category: 'offline', icon: '🔍', description: 'এইচডি রেজোলিউশনে যেকোনো ডকুমেন্ট স্ক্যান ও পিডিএফ/ইমেল।', tags: ['স্ক্যান', 'scan', 'pdf'] },
  { id: 'off-5', title: 'লেমিনেশন', category: 'offline', icon: '🛡️', description: 'সার্টিফিকেট, আইডি ও গুরুত্বপূর্ণ ডকুমেন্ট সুরক্ষিত করার টেকসই লেমিনেশন।', tags: ['লেমিনেশন', 'lamination'] },
  { id: 'off-6', title: 'ব্যানার প্রিন্ট', category: 'offline', icon: '🖼️', description: 'বিভিন্ন সাইজের পিভিসি ও ভিনাইল ডিজিটাল ব্যানার।', tags: ['ব্যানার', 'banner'] },
  { id: 'off-7', title: 'পোস্টার প্রিন্ট', category: 'offline', icon: '📣', description: 'সভা, সমাবেশ, বিজ্ঞাপন ও প্রচারমূলক মাল্টিকালার পোস্টার।', tags: ['পোস্টার', 'poster'] },
  { id: 'off-8', title: 'লিফলেট / হ্যান্ডবিল', category: 'offline', icon: '📰', description: 'ব্যবসায়িক প্রচারপত্র ও হ্যান্ডবিল আকর্ষণীয় ডিজাইন ও প্রিন্ট।', tags: ['লিফলেট', 'হ্যান্ডবিল', 'leaflet'] },
  { id: 'off-9', title: 'আইডি কার্ড', category: 'offline', icon: '💳', description: 'স্কুল, কলেজ, মাদ্রাসা ও প্রতিষ্ঠানের পিভিসি আইডি কার্ড।', tags: ['আইডি', 'id card'], popular: true },
  { id: 'off-10', title: 'ক্যাশ মেমো', category: 'offline', icon: '📒', description: 'ব্যবসায়িক রসিদ, চালান বহি ও কাস্টমাইজড ক্যাশ মেমো প্রিন্ট।', tags: ['ক্যাশ মেমো', 'memo'] },
  { id: 'off-11', title: 'মগ প্রিন্ট', category: 'offline', icon: '☕', description: 'ছবি ও নাম দিয়ে উপহারের জন্য আকর্ষণীয় কাস্টম সিরামিক মগ প্রিন্ট।', tags: ['মগ প্রিন্ট', 'mug'], popular: true },
  { id: 'off-12', title: 'টি-শার্ট প্রিন্ট', category: 'offline', icon: '👕', description: 'কাস্টম ডিজাইন, ছবি বা লোগো দিয়ে টি-শার্ট ডিজিটাল প্রিন্ট।', tags: ['টি-শার্ট', 'tshirt'] },
  { id: 'off-13', title: 'ক্রেস্ট / ট্রফি', category: 'offline', icon: '🏆', description: 'প্রতিযোগিতা ও সম্মাননা সামগ্রী, মেটাল ও ক্রিস্টাল ক্রেস্ট কাস্টমাইজেশন।', tags: ['ক্রেস্ট', 'ট্রফি', 'crest'] },
  { id: 'off-14', title: 'রাবার স্ট্যাম্প', category: 'offline', icon: '🔖', description: 'অফিসিয়াল গোল সিল, সাধারণ সিল ও আধুনিক অটোমেটিক ফ্লাশ স্ট্যাম্প।', tags: ['সিল', 'স্ট্যাম্প', 'seal', 'stamp'] },
  { id: 'off-15', title: 'খাম / অফিসিয়াল প্রিন্ট', category: 'offline', icon: '💌', description: 'অফিসিয়াল লেটারহেড, প্যাড ও ব্র্যান্ডেড খাম প্রিন্টিং।', tags: ['খাম', 'অফিসিয়াল', 'envelope'] },
  { id: 'off-16', title: 'ডিজাইন সার্ভিস', category: 'offline', icon: '✏️', description: 'বিজ্ঞাপন, কার্ড, কভার পেজ ও সোশ্যাল মিডিয়ার ডিজিটাল গ্রাফিক্স ডিজাইন।', tags: ['ডিজাইন', 'গ্রাফিক্স', 'design'], popular: true },
];

export const ONLINE_SERVICES: ServiceItem[] = [
  { id: 'on-1', title: 'NID আবেদন ও সংশোধন', category: 'online', icon: '🪪', description: 'নতুন জাতীয় পরিচয়পত্র আবেদন, ভোটার এলাকা পরিবর্তন ও ভুল সংশোধন সহায়তা।', tags: ['nid', 'এনআইডি', 'জাতীয় পরিচয়পত্র'], popular: true },
  { id: 'on-2', title: 'জন্ম নিবন্ধন', category: 'online', icon: '👶', description: 'অনলাইন জন্ম নিবন্ধন আবেদন, ইংরেজি সংশোধন ও অনলাইন কপি ডাউনলোড।', tags: ['জন্ম নিবন্ধন', 'birth certificate'], popular: true },
  { id: 'on-3', title: 'পাসপোর্ট আবেদন', category: 'online', icon: '🛂', description: 'ই-পাসপোর্ট অনলাইন আবেদন ফরম পূরণ, স্লিপ প্রিন্ট ও ফি পরিশোধে গাইডলাইন।', tags: ['পাসপোর্ট', 'passport', 'ই-পাসপোর্ট'], popular: true },
  { id: 'on-4', title: 'পুলিশ ক্লিয়ারেন্স', category: 'online', icon: '👮', description: 'বিদেশে গমনের জন্য দ্রুত পুলিশ ক্লিয়ারেন্স সার্টিফিকেটের অনলাইন আবেদন।', tags: ['পুলিশ ক্লিয়ারেন্স', 'police clearance'] },
  { id: 'on-5', title: 'ড্রাইভিং লাইসেন্স', category: 'online', icon: '🚗', description: 'বিআরটিএ লার্নার ড্রাইভিং লাইসেন্স ও স্মার্ট কার্ড ড্রাইভিং লাইসেন্স আবেদন।', tags: ['ড্রাইভিং লাইসেন্স', 'driving license', 'brta'] },
  { id: 'on-6', title: 'ভোটার সংক্রান্ত সেবা', category: 'online', icon: '🗳️', description: 'ভোটার তথ্য যাচাই, ভোটার নম্বর অনুসন্ধান ও ভোটার তালিকা সংশ্লিষ্ট সেবা।', tags: ['ভোটার', 'voter'] },
  { id: 'on-7', title: 'শিক্ষা সংক্রান্ত আবেদন', category: 'online', icon: '🎓', description: 'একাদশ শ্রেণি, ডিগ্রি ও অনার্স কলেজ ভর্তি, বোর্ড চ্যালেঞ্জ ও পরীক্ষার ফরম পূরণ।', tags: ['শিক্ষা', 'ভর্তি', 'education', 'admission'], popular: true },
  { id: 'on-8', title: 'চাকরির আবেদন', category: 'online', icon: '💼', description: 'সরকারি ও বেসরকারি বিভিন্ন চাকরির অনলাইন অ্যাপ্লিকেশন ফরম নির্ভুলভাবে পূরণ।', tags: ['চাকরি', 'job', 'নিয়োগ'], popular: true },
  { id: 'on-9', title: 'বয়স্ক / বিধবা / প্রতিবন্ধী ভাতা', category: 'online', icon: '💰', description: 'সমাজসেবা অধিদপ্তরের সামাজিক নিরাপত্তা বেষ্টনীর অনলাইন ভাতা আবেদন।', tags: ['ভাতা', 'বয়স্ক ভাতা', 'বিধবা ভাতা'] },
  { id: 'on-10', title: 'সরকারি-বেসরকারি আবেদন', category: 'online', icon: '🏛️', description: 'বিভিন্ন সরকারি পোর্টাল, প্রত্যয়ন পত্র ও ডিজিটাল নাগরিক সেবা আবেদন।', tags: ['সরকারি আবেদন', 'citizen'] },
  { id: 'on-11', title: 'অনলাইন ফরম পূরণ', category: 'online', icon: '📋', description: 'যেকোনো ধরনের ডিজিটাল ডাটা এন্ট্রি ও অনলাইন আবেদন ফর্ম নির্ভুল পূরণ।', tags: ['ফরম পূরণ', 'form fillup'] },
  { id: 'on-12', title: 'ডকুমেন্ট ডাউনলোড', category: 'online', icon: '📥', description: 'সরকারি গেজেট, রেজাল্ট শিট, প্রবেশপত্র ও অনলাইন কপি ডাউনলোড ও প্রিন্ট।', tags: ['ডাউনলোড', 'download', 'admit card'] },
];

export const BANKING_SERVICES: ServiceItem[] = [
  { id: 'bnk-1', title: 'মোবাইল রিচার্জ', category: 'bank', icon: '📱', description: 'গ্রামীণফোন, রবি, এয়ারটেল, বাংলালিংক ও টেলিটকে যেকোনো প্যাকেজ রিচার্জ।', tags: ['রিচার্জ', 'recharge', 'flexiload'], popular: true },
  { id: 'bnk-2', title: 'বিদ্যুৎ ও গ্যাস বিল পরিশোধ', category: 'bank', icon: '💸', description: 'পল্লী বিদ্যুৎ, প্রিপেইড মিটার টোকেন ও গ্যাস-পানির বিল তাৎক্ষণিক পরিশোধ।', tags: ['বিল', 'বিদ্যুৎ বিল', 'bill'], popular: true },
  { id: 'bnk-3', title: 'টাকা পাঠানো ও উত্তোলন (Cash In/Out)', category: 'bank', icon: '💳', description: 'বিকাশ, নগদ ও রকেট একাউন্টে নির্ভরযোগ্য ক্যাশ ইন ও ক্যাশ আউট সেবা।', tags: ['বিকাশ', 'নগদ', 'রকেট', 'bkash', 'nagad', 'cash out'], popular: true },
  { id: 'bnk-4', title: 'অন্যান্য MFS ও ব্যাংক সেবা', category: 'bank', icon: '🔐', description: 'উপায়, সেলফিন ও ব্যাংকিং অ্যাকাউন্টে ফান্ড ট্রান্সফার সহায়তা।', tags: ['mfs', 'upay', 'bank'] },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g-1', title: 'ডিজিটাল প্রিন্ট — ডেমো', category: 'প্রিন্ট মিডিয়া', image: 'assets/gallery_demo_1.jpg', placeholderText: 'উচ্চমানের ফটো প্রিন্ট ও ডকুমেন্ট' },
  { id: 'g-2', title: 'মগ প্রিন্ট — ডেমো', category: 'কাস্টম উপহার', image: 'assets/gallery_demo_2.jpg', placeholderText: 'ছবি ও লোগো সম্বলিত সিরামিক মগ' },
  { id: 'g-3', title: 'ক্রেস্ট ও ট্রফি — ডেমো', category: 'সম্মাননা সামগ্রী', image: 'assets/gallery_demo_3.jpg', placeholderText: 'মেটাল ও অ্যাক্রিলিক ক্রেস্ট' },
  { id: 'g-4', title: 'টি-শার্ট প্রিন্ট — ডেমো', category: 'পোশাক প্রিন্ট', image: 'assets/gallery_demo_4.jpg', placeholderText: 'কাস্টম টি-শার্ট ডিজিটাল প্রিন্ট' },
  { id: 'g-5', title: 'ব্যানার ও পোস্টার — ডেমো', category: 'বিজ্ঞাপন ও প্রচার', image: 'assets/gallery_demo_5.jpg', placeholderText: 'পিভিসি ব্যানার ও পোস্টার' },
  { id: 'g-6', title: 'রাবার স্ট্যাম্প — ডেমো', category: 'অফিসিয়াল সামগ্রী', image: 'assets/gallery_demo_6.jpg', placeholderText: 'অফিসিয়াল সিল ও ফ্লাশ স্ট্যাম্প' },
];

export const FAQ_ITEMS = [
  {
    q: 'রাজু টেলিকমের সঠিক ঠিকানা কোথায়?',
    a: 'আমাদের দোকান মৌলভীবাজার জেলার রাজনগর উপজেলার ঐতিহ্যবাহী মুন্সিবাজারে অবস্থিত।'
  },
  {
    q: 'পাসপোর্ট ও এনআইডি সংশোধনের জন্য কি কি কাগজপত্র প্রয়োজন?',
    a: 'প্রয়োজনীয় কাগজপত্র সেবার ধরণ অনুযায়ী আলাদা হতে পারে। সাধারণ আবেদনের ক্ষেত্রে পুরাতন এনআইডি, জন্ম সনদ, শিক্ষাগত যোগ্যতার সনদ ও নাগরিক সনদ সঙ্গে নিয়ে আসলে আমরা যাচাই করে নির্ভুল আবেদন সম্পন্ন করে দেই।'
  },
  {
    q: 'মগ বা টি-শার্ট কাস্টম প্রিন্ট করাতে কত সময় লাগে?',
    a: 'সাধারণত দ্রুততম সময়ে (একই দিন বা পরের দিন) মানসম্মত প্রিন্ট ডেলিভারি দেওয়া হয়। বেশি পরিমাণের অর্ডারের ক্ষেত্রে পূর্বে যোগাযোগ করার পরামর্শ দেওয়া হচ্ছে।'
  },
  {
    q: 'দোকান খোলা থাকার সময়সূচি কি?',
    a: 'প্রতিদিন সকাল ৮:০০টা থেকে রাত ১০:০০টা পর্যন্ত খোলা থাকে। বিশেষ প্রয়োজনে ফোন বা হোয়াটসঅ্যাপে আগে জানিয়ে আসতে পারেন।'
  }
];
