import { Ship, Truck, Anchor, FileText, Box } from 'lucide-react';

export default function PrCargoPage() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div>
            {/* Cargo Hero */}
            <div className="bg-gradient-to-r from-footer-start to-footer-end text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Cargo Container" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <Ship size={24} className="text-white" /> <span className="text-white">PR CARGO</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">บริการนำเข้า-ส่งออก <br />จีน-ไทย ครบวงจร</h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        ผู้เชี่ยวชาญด้านโลจิสติกส์ บริการขนส่งทางบก ทางเรือ พร้อมเคลียร์ภาษีและเดินพิธีการศุลกากร รวดเร็ว ปลอดภัย ตรวจสอบสถานะได้ 24 ชม.
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors">
                        ขอเรทราคาขนส่ง
                    </button>
                </div>
            </div>

            {/* Services Grid */}




            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2937]">บริการของเรา</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1: Truck */}
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-primary/30 group flex flex-col items-center text-center h-full">
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                <img src={`${prefix}/icon-truck-custom.png`} alt="Truck Icon" width={130} height={130} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">ขนส่งทางรถ</h3>
                            <p className="text-[#1F2937]">รวดเร็วทันใจ เหมาะกับสินค้าด่วน ใช้เวลาเพียง 3-5 วัน</p>
                        </div>

                        {/* Service 2: Ship */}
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-primary/30 group flex flex-col items-center text-center h-full">
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                <img src={`${prefix}/icon-transport.png`} alt="Transport Icon" width={130} height={130} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">ขนส่งทางเรือ</h3>
                            <p className="text-[#1F2937]">ประหยัดต้นทุน เหมาะกับสินค้าจำนวนมาก ปิดตู้เหมา (FCL) หรือฝากส่ง (LCL)</p>
                        </div>

                        {/* Service 3: Customs */}
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-primary/30 group flex flex-col items-center text-center h-full">
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                <img src={`${prefix}/icon-tax.png`} alt="Tax Icon" width={130} height={130} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">พิธีการศุลกากร</h3>
                            <p className="text-[#1F2937]">ดูแลเอกสารนำเข้า-ส่งออก และเคลียร์ภาษีอย่างถูกต้องครบถ้วน</p>
                        </div>

                        {/* Service 4: Warehouse */}
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-primary/30 group flex flex-col items-center text-center h-full">
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                <img src={`${prefix}/icon-warehouse.png`} alt="Warehouse Icon" width={130} height={130} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">โกดังพักสินค้า</h3>
                            <p className="text-[#1F2937]">มีจุดรับสินค้าขนาดใหญ่ทั้งที่กวางโจวและกรุงเทพฯ พร้อมระบบจัดการสต็อก</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tables */}
            <section className="py-20 bg-soft-bg">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-primary text-sm font-bold mb-4">
                            ตารางค่าบริการ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                            อัตราค่าขนส่งสินค้า
                        </h2>
                        <p className="text-[#1F2937] max-w-2xl mx-auto">
                            ราคาโปร่งใส ชัดเจน สามารถเลือกวิธีการขนส่งได้ตามงบประมาณและความเร็วที่ต้องการ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Shipping by Sea Table */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            {/* Table Header */}
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <Ship size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">ประเภทการขนส่ง ทางเรือ</h3>
                                    <p className="text-white/90 text-sm">ประหยัด | 12-15 วัน</p>
                                </div>
                            </div>

                            {/* Table Body */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="text-left py-4 px-6 font-bold text-[#1F2937]">ประเภทสินค้า</th>
                                            <th className="text-right py-4 px-6 font-bold text-[#1F2937]">฿/ปริมาตร</th>
                                            <th className="text-right py-4 px-6 font-bold text-[#1F2937]">฿/กิโล</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { type: "ทั่วไป", volume: "4,000", weight: "20" },
                                            { type: "มอก.", volume: "4,900", weight: "45" },
                                            { type: "พิเศษ", volume: "7,000", weight: "70" },
                                            { type: "อย.", volume: "6,000", weight: "45" },
                                        ].map((item, idx) => (
                                            <tr key={idx} className="border-b border-gray-100 hover:bg-cyan-50/30 transition-colors">
                                                <td className="py-4 px-6 font-medium text-[#1F2937]">{item.type}</td>
                                                <td className="py-4 px-6 text-right text-[#1F2937] font-semibold">{item.volume}</td>
                                                <td className="py-4 px-6 text-right text-[#1F2937] font-semibold">{item.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Shipping by Truck Table */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            {/* Table Header */}
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <Truck size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">ประเภทการขนส่ง ทางรถ</h3>
                                    <p className="text-white/90 text-sm">รวดเร็ว | 3-5 วัน</p>
                                </div>
                            </div>

                            {/* Table Body */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="text-left py-4 px-6 font-bold text-[#1F2937]">ประเภทสินค้า</th>
                                            <th className="text-right py-4 px-6 font-bold text-[#1F2937]">฿/ปริมาตร</th>
                                            <th className="text-right py-4 px-6 font-bold text-[#1F2937]">฿/กิโล</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { type: "ทั่วไป", volume: "6,000", weight: "30" },
                                            { type: "มอก.", volume: "7,000", weight: "55" },
                                            { type: "พิเศษ", volume: "8,300", weight: "75" },
                                            { type: "อย.", volume: "8,000", weight: "55" },
                                        ].map((item, idx) => (
                                            <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                                                <td className="py-4 px-6 font-medium text-[#1F2937]">{item.type}</td>
                                                <td className="py-4 px-6 text-right text-[#1F2937] font-semibold">{item.volume}</td>
                                                <td className="py-4 px-6 text-right text-[#1F2937] font-semibold">{item.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                        <p className="text-[#1F2937] mb-2">
                            <span className="font-bold">หมายเหตุ:</span> ราคาอาจเปลี่ยนแปลงตามสภาวะตลาดและน้ำหนักจริงของสินค้า
                        </p>
                        <p className="text-sm text-[#1F2937]/80">
                            สอบถามข้อมูลเพิ่มเติมและขอใบเสนอราคาได้ที่ <span className="font-bold text-primary">096-897-8719</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Redesigned */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-6">
                            ขั้นตอนสั่งของกับ <span className="text-primary">PR CARGO</span>
                        </h2>
                        <p className="text-xl text-[#1F2937]/70">
                            ง่ายมาก! แค่ <span className="text-primary font-bold">"สมัคร-สั่ง-รอรับ"</span> ที่เหลือเราจัดการให้
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left: Hero Image (Truck) */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                            {/* Detailed Decorative Background */}
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110 animate-pulse"></div>

                            <div className="relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                                <img
                                    src={`${prefix}/icon-truck-custom.png`} alt="PR Cargo Truck Delivery"
                                    className="w-full max-w-sm lg:max-w-md object-contain"
                                />
                                {/* Floating Badges */}
                                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-bold text-[#1F2937]">รอบออกทุกวัน</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce delay-700">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-bold text-[#1F2937]">ถึงไทยไวมาก</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Vertical Steps */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative ml-4 md:ml-0">
                                {/* Connecting Line */}
                                <div className="absolute left-8 md:left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full"></div>

                                {/* Step 1 */}
                                <div className="relative flex items-start gap-6 mb-10 group">
                                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold text-primary">01</span>
                                    </div>
                                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-primary/30 transition-all cursor-default">
                                        <h3 className="text-xl font-bold text-[#1F2937] mb-2">สมัครสมาชิก</h3>
                                        <p className="text-[#1F2937]/80">รับ <span className="text-primary font-bold">รหัสลูกค้า (Mark)</span> ประจำตัวฟรี! สำหรับนำไปเขียนจ่าหน้าซองพัสดุ</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-start gap-6 mb-10 group">
                                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold text-primary">02</span>
                                    </div>
                                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-primary/30 transition-all cursor-default">
                                        <h3 className="text-xl font-bold text-[#1F2937] mb-2">สั่งสินค้า & ส่งเข้าโกดัง</h3>
                                        <p className="text-[#1F2937]/80">ช้อปจากเว็บจีนได้ทุกเว็บ ระบุที่อยู่โกดังและรหัสลูกค้าให้ถูกต้อง แล้วแจ้ง Tracking ในระบบ</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10 w-16 h-16 bg-primary text-white border-4 border-white ring-4 ring-primary/20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold">03</span>
                                    </div>
                                    <div className="flex-1 bg-gradient-to-r from-primary to-primary-hover p-6 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-all cursor-default text-white">
                                        <h3 className="text-xl font-bold mb-2">รอรับของหน้าบ้าน</h3>
                                        <p className="text-white/90">ชำระค่าขนส่งเมื่อของถึงไทย ทีมงานจัดส่งให้ถึงมือ รวดเร็ว ปลอดภัย</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Showcase (Sliding) */}
            <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">รองรับทุกแพลตฟอร์มชั้นนำจากจีน</h2>
                </div>

                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Container */}
                    <div className="animate-marquee gap-16 px-4 items-center">
                        {/* Original Set */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <div key={`set1-${num}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110">
                                <img
                                    src={`${prefix}/platform-${num}.png`}
                                    alt={`Platform ${num}`}
                                    className="h-20 md:h-28 w-auto object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate Set for Infinite Loop */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <div key={`set2-${num}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110">
                                <img
                                    src={`${prefix}/platform-${num}.png`}
                                    alt={`Platform ${num}`}
                                    className="h-20 md:h-28 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl md:text-4xl font-bold text-[#1F2937]">
                        สั่งได้ทุกเว็บ นำเข้าด่วนทันใจ <span className="text-primary">ครบ จบ ในที่เดียว</span>
                    </h3>
                </div>
            </section>
        </div >
    );
}
