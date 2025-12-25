import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, Users, Ship, Plane, FileText, ShieldCheck, TrendingUp, Monitor, Star, Quote, Phone, Warehouse, Truck, ClipboardCheck } from 'lucide-react';

export default function Home() {
  return (
    <>
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

        <div className="relative z-10 container mx-auto px-4 text-center mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm mb-4 border border-white/30">
            One-stop Service: Logistics & Travel
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            เชื่อมต่อโลกธุรกิจ <br className="md:hidden" /> และการเดินทางของคุณ
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            กลุ่มบริษัทให้บริการขนส่งนำเข้าสินค้าจีน–ไทย และบริการท่องเที่ยว/ดูงานแบบครบวงจร
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl mx-auto">
            <Link
              href="/pr-cargo"
              className="group relative w-full sm:w-1/2 bg-white hover:bg-gray-50 p-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left flex items-center justify-between overflow-hidden border-l-4 border-[#E53935]"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Ship className="text-[#E53935]" size={24} />
                  <span className="font-bold text-xl text-gray-900">PR CARGO</span>
                </div>
                <p className="text-sm text-gray-600">บริการนำเข้าสินค้าจีน-ไทย</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>

            <Link
              href="/pr-travel"
              className="group relative w-full sm:w-1/2 bg-[#E53935] hover:bg-[#d32f2f] p-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left flex items-center justify-between text-white border-l-4 border-white/30"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Plane className="text-white" size={24} />
                  <span className="font-bold text-xl">PR TRAVEL</span>
                </div>
                <p className="text-sm text-white/90">บริการทัวร์และดูงานครบวงจร</p>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:bg-white group-hover:text-[#E53935] transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Service Highlights Section (New) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              บริการขนส่งนำเข้าสินค้า <span className="text-[#E53935]">จีน-ไทย</span> ครบวงจร
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              นำเข้าง่ายขึ้น สำหรับพ่อค้าแม่ค้าออนไลน์และ SME พร้อมทีมงานที่ปรึกษามืออาชีพ ดูแลทุกขั้นตอน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group">
              <div className="w-40 h-40 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E53935] transition-colors duration-300">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Truck size={48} className="text-[#E53935] group-hover:text-white transition-colors absolute top-10 left-8" />
                  <Ship size={56} className="text-[#E53935] group-hover:text-white transition-colors absolute bottom-8 right-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">ขนส่งด่วนทางรถ/เรือ</h3>
              <p className="text-gray-500">รอส่งด่วน ปิดตู้ทุกวัน ของถึงไว</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group">
              <div className="w-40 h-40 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E53935] transition-colors duration-300">
                <ClipboardCheck size={72} className="text-[#E53935] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">เคลียร์ภาษีแบบเหมา</h3>
              <p className="text-gray-500">จบเบ็ดเสร็จ ไม่ต้องปวดหัวเรื่องเอกสาร</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center group">
              <div className="w-40 h-40 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E53935] transition-colors duration-300">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Warehouse size={64} className="text-[#E53935] group-hover:text-white transition-colors" />
                  <div className="absolute top-8 right-6 bg-white rounded-full p-1 shadow-md border border-gray-100 w-8 h-8 flex items-center justify-center text-xs">🇨🇳</div>
                  <div className="absolute bottom-8 left-6 bg-white rounded-full p-1 shadow-md border border-gray-100 w-8 h-8 flex items-center justify-center text-xs">🇹🇭</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">มีโกดัง 2 ประเทศ</h3>
              <p className="text-gray-500">ตรวจรับของ ปลอดภัย ก่อนส่งถึงมือคุณ</p>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-white rounded-2xl shadow-md max-w-4xl mx-auto py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 border border-gray-100">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 fill-green-500 text-white" size={32} />
              <span className="text-xl font-bold">เร็ว ปลอดภัย</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 fill-green-500 text-white" size={32} />
              <span className="text-xl font-bold">ราคาคุ้ม</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 fill-green-500 text-white" size={32} />
              <span className="text-xl font-bold">พร้อมเคลียร์ภาษีให้ จบ!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">ทำไมต้องเลือก <span className="text-[#E53935]">PR Global Group</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              เรามุ่งมั่นที่จะเป็นพาร์ทเนอร์ที่ดีที่สุดสำหรับธุรกิจและการเดินทางของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E53935] transition-colors">
                <Monitor className="text-[#E53935] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ระบบติดตาม Real-time</h3>
              <p className="text-gray-500 text-sm">เช็คสถานะสินค้าได้ตลอด 24 ชม. ไม่ต้องคอยถาม</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E53935] transition-colors">
                <ShieldCheck className="text-[#E53935] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">รับประกันสินค้า</h3>
              <p className="text-gray-500 text-sm">มีประกันสินค้าระหว่างขนส่ง อุ่นใจ ปลอดภัย 100%</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E53935] transition-colors">
                <TrendingUp className="text-[#E53935] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ราคาพาร์ทเนอร์</h3>
              <p className="text-gray-500 text-sm">เรทค่าขนส่งพิเศษ สำหรับ SME และร้านค้าออนไลน์</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E53935] transition-colors">
                <Users className="text-[#E53935] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ทีมงานมืออาชีพ</h3>
              <p className="text-gray-500 text-sm">ดูแลโดยทีมงานผู้เชี่ยวชาญ ประสบการณ์กว่า 10 ปี</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">10+</div>
              <div className="text-gray-400">ปีประสบการณ์</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">50k+</div>
              <div className="text-gray-400">ลูกค้าที่ไว้วางใจ</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">1M+</div>
              <div className="text-gray-400">ชิ้นงานนำเข้า</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#E53935] mb-2">100%</div>
              <div className="text-gray-400">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">เสียงตอบรับจาก <span className="text-[#E53935]">ลูกค้าของเรา</span></h2>
            <p className="text-gray-600">ความพึงพอใจของลูกค้า คือความสำเร็จของเรา</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                <Quote className="absolute top-6 right-6 text-gray-100" size={60} />
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 relative z-10">
                  "ประทับใจบริการมากครับ ของถึงไวตามกำหนด ทีมงานแจ้งสถานะตลอด ไม่ต้องคอยตามเลย ราคาดีที่สุดเท่าที่เคยใช้มาครับ"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="w-full h-full bg-slate-300"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">คุณสมชาย ใจดี</p>
                    <p className="text-xs text-gray-500">เจ้าของธุรกิจเสื้อผ้า</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#E53935] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">พร้อมยกระดับธุรกิจของคุณหรือยัง?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">ปรึกษาเราวันนี้ เพื่อรับข้อเสนอและบริการที่ดีที่สุดสำหรับการนำเข้าและการเดินทางของคุณ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#E53935] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
              ติดต่อเราทันที <ArrowRight size={20} />
            </Link>
            <Link href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> 096-897-8719
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
