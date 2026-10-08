import {
  Coins,
  Ban,
  TrendingUp,
  ShoppingBag,
  PackageCheck,
  Users,
  Wallet,
  Handshake,
  Magnet,
  Briefcase,
  FileCheck2,
  Crown,
  RefreshCw,
  BadgeCheck,
  FileSignature,
  Sparkles,
  Gift,
  Brain,
  MessageSquareQuote,
  HeartHandshake,
  Smile,
  PartyPopper,
  Star,
  Gem,
  Landmark,
  Heart,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  brand: "Therapy Aura Rezeki",
  brandShort: "AURA REZEKI",
  subBrand: "QUEEN AURA",
  tagline: "Rezeki paling tinggi adalah TAUHID",
  ownerName: "Umma Yunita",
  ownerNickname: "Umma Amadea",
  whatsapp: "087881912019",
  whatsappIntl: "6287881912019",
  email: "info@aurarezeki.id",
  address:
    "Pondok Pucung Indah II, Jl. Tarumanegara A22/1, Pondok Pucung, Pondok Aren, Tangerang Selatan 15229",
  addressShort: "Pondok Pucung, Pondok Aren, Tangerang Selatan 15229",
  location: "Tangerang Selatan, Banten",
  hours: "Setiap Hari · 08.00 – 21.00 WIB",
};

export function waLink(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${SITE.whatsappIntl}${text}`;
}

export type Benefit = {
  icon: LucideIcon;
  text: string;
};

export const BENEFIT_GROUPS: {
  title: string;
  subtitle: string;
  accent: string;
  items: Benefit[];
}[] = [
  {
    title: "Rezeki & Keuangan",
    subtitle: "Pintu rezeki dibuka lebar-lebar",
    accent: "from-amber-400 via-yellow-500 to-amber-600",
    items: [
      { icon: Coins, text: "Lunas semua hutang" },
      { icon: Ban, text: "Jauh dari akad riba" },
      { icon: Wallet, text: "Uang datang dari mana saja" },
      { icon: Handshake, text: "Piutang dibayar tanpa drama" },
      { icon: Magnet, text: "Menjadi magnet rezeki" },
      { icon: RefreshCw, text: "Perputaran uang bagus" },
      { icon: Sparkles, text: "Cahaya rezekinya menyala" },
      { icon: Gift, text: "Banyak menerima hadiah" },
      { icon: Gem, text: "Harta benda berlimpah" },
    ],
  },
  {
    title: "Usaha & Karir",
    subtitle: "Lancar, laris, dan dipercaya",
    accent: "from-rose-400 via-orange-500 to-amber-500",
    items: [
      { icon: TrendingUp, text: "Lancar usaha" },
      { icon: ShoppingBag, text: "Jualan apa saja laris" },
      { icon: PackageCheck, text: "Dapat pesanan terus menerus" },
      { icon: Users, text: "Pelanggan semakin banyak" },
      { icon: Briefcase, text: "Bekerja di mana saja hoki" },
      { icon: FileCheck2, text: "Melamar kerja pasti diterima" },
      { icon: Crown, text: "Disayang pimpinan perusahaan" },
      { icon: BadgeCheck, text: "Dipercaya banyak orang" },
      { icon: FileSignature, text: "Proposal selalu disetujui" },
    ],
  },
  {
    title: "Aura & Kehidupan",
    subtitle: "Wajah cerah, hati mulia, derajat tinggi",
    accent: "from-teal-400 via-emerald-500 to-green-600",
    items: [
      { icon: Star, text: "Undian apa pun menang" },
      { icon: Brain, text: "Keputusan selalu tepat" },
      { icon: MessageSquareQuote, text: "Nasihatnya selalu benar" },
      { icon: Heart, text: "Disukai semua orang" },
      { icon: Users, text: "Temannya banyak" },
      { icon: Smile, text: "Selalu ceria bahagia" },
      { icon: PartyPopper, text: "Kehadirannya menyenangkan" },
      { icon: HeartHandshake, text: "Selalu dirindukan" },
      { icon: Landmark, text: "Mulia derajat tinggi" },
      { icon: Crown, text: "Hidup mulia terhormat" },
      { icon: HeartHandshake, text: "Sedekah selalu terbaik" },
    ],
  },
];

export const STEPS = [
  {
    no: "01",
    title: "Konsultasi Awal",
    desc: "Ceritakan kondisi keuangan, usaha, dan hajat hidup Anda. Kami rahasiakan sepenuhnya.",
    icon: MessageSquareQuote,
  },
  {
    no: "02",
    title: "Diagnosis Spiritual",
    desc: "Dibaca aura rezeki Anda dan dipetakan titik-titik penyumbat aliran berkah.",
    icon: Sparkles,
  },
  {
    no: "03",
    title: "Terapi Aura Rezeki",
    desc: "Proses ritual tauhid, doa, dan energi pembuka pintu rezeki dilakukan oleh praktisi.",
    icon: Crown,
  },
  {
    no: "04",
    title: "Berkah Mengalir",
    desc: "Anda menerima amalan harian + panduan menjaga aura rezeki agar berkelanjutan.",
    icon: TrendingUp,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ibu Sari Wulandari",
    role: "Pemilik Toko Kue, Bandung",
    quote:
      "Setelah therapy, pesanan kue naik drastis. Bulan pertama saja sudah lunas 2 hutang. Alhamdulillah, rezeki mengalir dari arah yang tidak disangka.",
    rating: 5,
    initials: "SW",
  },
  {
    name: "Hamba Allah, Pak Rahmat",
    role: "Kontraktor, Surabaya",
    quote:
      "Proyek yang macet sekian lama tiba-tiba cair. Pembeli datang sendiri, proposal diterima. Saya hanya ikuti amalan yang diberikan, hasilnya nyata.",
    rating: 5,
    initials: "PR",
  },
  {
    name: "Nadia Azzahra",
    role: "Online Shop, Jakarta",
    quote:
      "Jualan online saya dulu sepi, sekarang chat masuk tiap hari sampai repot packing. Aura-nya berubah, pelanggan jadi betah balik lagi.",
    rating: 5,
    initials: "NA",
  },
  {
    name: "Keluarga Bpk. Hendra",
    role: "Karyawan Swasta, Semarang",
    quote:
      "Hutang piutang yang macet bertahun-tahun dibayar lunas tanpa saya minta. Ini semua berkat izin Allah, terapi aura rezeki benar-benar bekerja.",
    rating: 5,
    initials: "BH",
  },
];

export const PACKAGES = [
  {
    name: "Paket Awal",
    price: "Rp 350.000",
    period: "/sesi",
    desc: "Cocok untuk mencoba & membuka aura rezeki dasar.",
    features: [
      "Konsultasi awal (30 menit)",
      "Terapi aura rezeki 1×",
      "Amalan harian dasar",
      "Garansi konsultasi via WA 7 hari",
    ],
    popular: false,
    cta: "Pilih Paket Awal",
  },
  {
    name: "Paket Pelarisan",
    price: "Rp 750.000",
    period: "/sesi",
    desc: "Paling diminati untuk pelarisan usaha & dagang.",
    features: [
      "Konsultasi mendalam (60 menit)",
      "Terapi aura rezeki khusus pelarisan",
      "Ritual pembuka pintu rezeki 3×",
      "Amalan harian + wirid pelarisan",
      "Garansi konsultasi via WA 30 hari",
    ],
    popular: true,
    cta: "Pilih Paket Pelarisan",
  },
  {
    name: "Paket Royal",
    price: "Rp 1.500.000",
    period: "/sesi",
    desc: "Terapi penuh untuk transformasi total.",
    features: [
      "Konsultasi mendalam & diagnosis aura",
      "Terapi aura rezeki intensif 5×",
      "Ritual tauhid & pembersih hijab spiritual",
      "Amalan personal + bimbingan 60 hari",
      "Garansi konsultasi WA 24/7",
    ],
    popular: false,
    cta: "Pilih Paket Royal",
  },
];

export const FAQS = [
  {
    q: "Apakah Therapy Aura Rezeki ini sesuai syariat Islam?",
    a: "Terapi ini berlandaskan tauhid — keyakinan bahwa Allah satu-satunya sumber rezeki. Tidak ada unsur syirik, tidak memanggil jin, dan tidak menggunakan sarana yang dilarang agama. Inti terapi adalah doa, wirid, dan memperbaiki aura diri melalui kebersihan hati.",
  },
  {
    q: "Berapa lama hasilnya terasa?",
    a: "Banyak klien merasakan perubahan dalam 3–7 hari pertama berupa kelancaran transaksi dan kedatangan pelanggan. Untuk transformasi penuh, hasil terus berakumulasi seiring Anda menjalankan amalan harian yang diberikan.",
  },
  {
    q: "Apakah terapi ini bisa jarak jauh?",
    a: "Bisa. Terapi aura dapat dilakukan secara jarak jauh karena energi rezeki bekerja melalui dimensi spiritual. Konsultasi cukup via WhatsApp / video call, dan ritual dilakukan oleh praktisi untuk Anda.",
  },
  {
    q: "Apakah ada garansi?",
    a: "Setiap paket memiliki masa konsultasi pendamping via WhatsApp. Jika dalam masa tersebut rezeki belum mengalir optimal, kami bantu evaluasi dan ulangi ritual tanpa biaya tambahan.",
  },
  {
    q: "Bagaimana cara pendaftarannya?",
    a: "Klik tombol Konsultasi & Pendaftaran untuk terhubung ke WhatsApp kami. Tim akan memandu Anda memilih paket dan menjadwalkan sesi terapi.",
  },
  {
    q: "Apakah rahasia saya terjaga?",
    a: "100% terjaga. Seluruh konsultasi dan data Anda dirahasiakan. Kami menjaga amanah sebagai bagian dari adab spiritual.",
  },
];

export const STATS = [
  { value: "2.500+", label: "Klien Terbantu" },
  { value: "98%", label: "Tingkat Kepuasan" },
  { value: "29", label: "Manfaat Rezeki" },
  { value: "8 th", label: "Pengalaman" },
];
