import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Ship, Plane, ShieldCheck, TrendingUp, Monitor, Phone, Warehouse, Truck, ClipboardCheck, Ticket, Languages, Globe, Map } from 'lucide-react';

import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494412574643-35d324688b33?q=80&w=2080&auto=format&fit=crop"
            alt="Logistics and Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white/10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 max-w-6xl text-center mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm mb-4 border border-white/30">
            One-stop Service: Logistics & Travel
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            เชื่อมต่อโลกธุรกิจ <br className="md:hidden" /> และการเดินทางของคุณ
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            กลุ่มบริษัทให้บริการขนส่งนำเข้าสินค้าจีน–ไทย และบริการท่องเที่ยว/ดูงานแบบครบวงจร
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl mx-auto">
            <Link
              href="/pr-cargo"
              className="group relative w-full sm:w-1/2 bg-white hover:bg-gray-50 p-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left flex items-center justify-between overflow-hidden border-l-4 border-primary"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Ship className="text-primary" size={24} />
                  <span className="font-bold text-xl text-[#1F2937]">PR CARGO</span>
                </div>
                <p className="text-sm text-[#1F2937]">บริการนำเข้าสินค้าจีน-ไทย</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowRight size={20} color="black" />
              </div>
            </Link>

            <Link
              href="/pr-travel"
              className="group relative w-full sm:w-1/2 bg-primary hover:bg-primary-hover p-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left flex items-center justify-between text-white border-l-4 border-white/30"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Plane className="text-white" size={24} />
                  <span className="font-bold text-xl">PR TRAVEL</span>
                </div>
                <p className="text-sm text-white/90">บริการทัวร์และดูงานครบวงจร</p>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION 2: PR CARGO - HIGHLIGHTS */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-8 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-primary text-sm font-bold mb-4">
              IMPORT SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-4">
              บริการขนส่งนำเข้าสินค้า <span className="text-primary whitespace-nowrap">PR CARGO</span>
            </h2>
            <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
              บริการนำเข้าสินค้าจีน-ไทย ครบวงจร อันดับ 1 สำหรับพ่อค้าแม่ค้าออนไลน์และธุรกิจทุกขนาด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-16">
            {/* Cargo Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="/prgbgroup/icon-transport.png" alt="Transport Icon" width={150} height={150} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1F2937]">ขนส่งด่วน ทางรถ/เรือ</h3>
              <p className="text-[#1F2937] opacity-80">
                บริการขนส่งสินค้าจากจีนมาไทย มีทั้งทางรถ (3-5 วัน) และทางเรือ (12-15 วัน) ปิดตู้ทุกวัน
              </p>
            </div>

            {/* Cargo Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="/prgbgroup/icon-tax.png" alt="Tax Icon" width={150} height={150} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1F2937]">เคลียร์ภาษี แบบเหมา</h3>
              <p className="text-[#1F2937] opacity-80">
                หมดกังวลเรื่องภาษีนำเข้า ด้วยบริการเคลียร์ภาษีแบบเหมาจ่าย กิโล/คิว จบในราคาเดียว
              </p>
            </div>

            {/* Cargo Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="/prgbgroup/icon-warehouse.png" alt="Warehouse Icon" width={150} height={150} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#1F2937]">โกดังพักสินค้า 2 ประเทศ</h3>
              <p className="text-[#1F2937] opacity-80">
                มีจุดรับสินค้าขนาดใหญ่ทั้งที่กวางโจวและกรุงเทพฯ พร้อมระบบติดตามสินค้า
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PR CARGO - WHY CHOOSE (CONFIDENCE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-auto">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-[#1F2937]">
                ทำไมต้องนำเข้ากับ <span className="text-primary whitespace-nowrap">PR CARGO?</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center text-primary">
                    <Monitor size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-[#1F2937]">ระบบติดตาม Real-time 24 ชม.</h4>
                    <p className="text-[#1F2937] opacity-80">รู้สถานะสินค้าของคุณทุกขั้นตอน ผ่านระบบออนไลน์ที่ทันสมัยที่สุด</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center text-primary">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-[#1F2937]">ราคาที่คุ้มค่า สำหรับ SME</h4>
                    <p className="text-[#1F2937] opacity-80">เราเข้าใจธุรกิจคุณ ด้วยเรทราคาพิเศษที่ช่วยลดต้นทุนและเพิ่มกำไร</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center text-primary">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-[#1F2937]">รับประกันสินค้า ปลอดภัย 100%</h4>
                    <p className="text-[#1F2937] opacity-80">ดูแลสินค้าของคุณเหมือนของเราเอง</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/pr-cargo" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                  ดูอัตราค่าบริการ
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="PR Cargo Warehouse"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium text-lg">"ดูแลใส่ใจ ทุกขั้นตอนการนำเข้า"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PR TRAVEL - HIGHLIGHTS */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative BG pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-8 md:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur text-primary border border-primary text-sm font-bold mb-4">
              TRAVEL & BUSINESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              บริการท่องเที่ยวและดูงาน <span className="text-primary">PR TRAVEL</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              เปิดโลกธุรกิจและประสบการณ์ใหม่ ด้วยบริการมืออาชีพที่เข้าใจทุกความต้องการของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {/* Travel Service 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group text-center">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Ticket size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">ทัวร์ดูงานแสดงสินค้า</h3>
              <p className="text-white/90 text-sm">บริการพาทัวร์งานแฟร์ระดับโลก พร้อมให้คำแนะนำตลอดทริป</p>
            </div>

            {/* Travel Service 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group text-center">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Languages size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">ล่ามเจรจาธุรกิจ</h3>
              <p className="text-white/90 text-sm">สื่อสารอย่างมั่นใจ ด้วยล่ามมืออาชีพช่วยเจรจาการค้าให้คุณได้เปรียบที่สุด</p>
            </div>

            {/* Travel Service 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group text-center">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Plane size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">จองตั๋วและที่พัก</h3>
              <p className="text-white/90 text-sm">บริการจองตั๋วเครื่องบินและโรงแรมที่พัก ครบจบในที่เดียว ไม่ต้องยุ่งยาก</p>
            </div>

            {/* Travel Service 4 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group text-center">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">จัดทริป Private Group</h3>
              <p className="text-white/90 text-sm">ออกแบบโปรแกรมท่องเที่ยวตามใจคุณ สำหรับครอบครัวหรือกลุ่มเพื่อน</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PR TRAVEL - WHY CHOOSE (EXPERIENCE) */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-8 md:px-6 max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mx-auto">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                alt="PR Travel Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Map size={24} className="text-primary" />
                  <span className="font-bold text-lg">China & Beyond</span>
                </div>
                <p className="text-sm opacity-90 max-w-xs">เชี่ยวชาญเส้นทางจีน เข้าถึงแหล่งค้าส่งและสถานที่ท่องเที่ยว Unseen</p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-[#1F2937]">
                เดินทางอย่างมืออาชีพกับ <span className="text-primary">PR TRAVEL</span>
              </h3>
              <p className="text-[#1F2937] mb-8 leading-relaxed">
                เราไม่ได้เป็นแค่บริษัททัวร์ แต่เป็นเพื่อนคู่คิดในการเดินทางและธุรกิจของคุณ ทีมงานของเรามีความเชี่ยวชาญในพื้นที่จริง พร้อมดูแลอำนวยความสะดวกให้คุณตลอดการเดินทาง
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-[#1F2937] text-lg">ประสบการณ์จริง</h5>
                    <p className="text-sm text-[#1F2937]">ทีมงานเชี่ยวชาญเส้นทางจีน</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-[#1F2937] text-lg">บริการ VIP</h5>
                    <p className="text-sm text-[#1F2937]">ดูแลดุจคนพิเศษตลอดทริป</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-[#1F2937] text-lg">Business Matching</h5>
                    <p className="text-sm text-[#1F2937]">ต่อยอดธุรกิจได้จริง</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-[#1F2937] text-lg">Custom Program</h5>
                    <p className="text-sm text-[#1F2937]">จัดโปรแกรมได้ตามใจคุณ</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/pr-travel" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                  ดูโปรแกรมทัวร์
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto px-8 md:px-6 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">พร้อมยกระดับธุรกิจของคุณหรือยัง?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">ปรึกษาเราวันนี้ เพื่อรับข้อเสนอและบริการที่ดีที่สุดสำหรับการนำเข้าและการเดินทางของคุณ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
              ติดต่อเราทันที <ArrowRight size={20} />
            </Link>
            <Link href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> 096-897-8719
            </Link>
          </div>
        </div>
      </section>

      {/* RTB Section - TikTok Embed */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-8 md:px-6 max-w-6xl">
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              REAL REVIEWS & EXPERIENCES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
              อัปเดตบรรยากาศจริง <span className="text-primary">ผ่าน TikTok</span>
            </h2>
            <p className="text-[#1F2937] max-w-2xl mx-auto mb-10">
              ชมคลิปวิดีโอผลงาน การขนส่งจริง และรีวิวจากลูกค้าตัวจริงบน TikTok ของเรา
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {/* TikTok Video 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 relative group flex items-center justify-center">
              <blockquote className="tiktok-embed"
                cite="https://www.tiktok.com/@korkame19/video/7545742823274892551"
                data-video-id="7545742823274892551"
                style={{ maxWidth: "100%", minWidth: "300px", width: "100%" }}>
                <section>
                  <a target="_blank" title="@korkame19" href="https://www.tiktok.com/@korkame19">@korkame19</a>
                </section>
              </blockquote>
            </div>

            {/* TikTok Video 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 relative group flex items-center justify-center">
              <blockquote className="tiktok-embed"
                cite="https://www.tiktok.com/@korkame19/photo/7448006782632381714"
                data-video-id="7448006782632381714"
                style={{ maxWidth: "100%", minWidth: "300px", width: "100%" }}>
                <section>
                  <a target="_blank" title="@korkame19" href="https://www.tiktok.com/@korkame19">@korkame19</a>
                </section>
              </blockquote>
            </div>

            {/* TikTok Video 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 relative group flex items-center justify-center">
              <blockquote className="tiktok-embed"
                cite="https://www.tiktok.com/@korkame19/video/7582104724971801874"
                data-video-id="7582104724971801874"
                style={{ maxWidth: "100%", minWidth: "300px", width: "100%" }}>
                <section>
                  <a target="_blank" title="@korkame19" href="https://www.tiktok.com/@korkame19">@korkame19</a>
                </section>
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="https://www.tiktok.com/@korkame19" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1F2937] border-b-2 border-primary pb-0.5 hover:text-primary transition-colors font-bold">
              ดูวิดีโอทั้งหมดบน TikTok <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Keyword Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container mx-auto px-8 md:px-6 max-w-6xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Top Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
            </div>

            <div className="mb-10 relative inline-block group">
              {/* Badge with Gradient & Shadow */}
              <span className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg shadow-red-100 uppercase transform group-hover:scale-105 transition-all duration-300 ring-4 ring-white">
                PR GLOBAL GROUP
              </span>
              {/* Glow underlying effect */}
              <div className="absolute -inset-1 bg-red-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-[#1F2937] leading-normal mb-4">
              หากคุณมีไอเดียทริปในใจ <span className="text-[#1F2937] font-normal">แต่ยังไม่รู้จะเริ่มอย่างไร</span>
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed">
              ให้ทีมงาน PRGB ช่วยออกแบบทริปให้คุณได้
            </p>

            {/* Bottom Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-sm"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
