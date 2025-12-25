import { Ship, Truck, Anchor, FileText, Box } from 'lucide-react';

export default function PrCargoPage() {
    return (
        <div className="pt-20">
            {/* Cargo Hero */}
            <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Cargo Container" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-[#E53935] font-bold">
                        <Ship size={24} /> <span>PR CARGO</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">บริการนำเข้า-ส่งออก <br />จีน-ไทย ครบวงจร</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mb-8">
                        ผู้เชี่ยวชาญด้านโลจิสติกส์ บริการขนส่งทางบก ทางเรือ พร้อมเคลียร์ภาษีและเดินพิธีการศุลกากร รวดเร็ว ปลอดภัย ตรวจสอบสถานะได้ 24 ชม.
                    </p>
                    <button className="bg-[#E53935] hover:bg-[#c62828] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                        ขอเรทราคาขนส่ง
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">บริการของเรา</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Truck size={32} />, title: "ขนส่งทางรถ", desc: "รวดเร็วทันใจ เหมาะกับสินค้าด่วน ใช้เวลาเพียง 3-5 วัน" },
                            { icon: <Anchor size={32} />, title: "ขนส่งทางเรือ", desc: "ประหยัดต้นทุน เหมาะกับสินค้าจำนวนมาก ปิดตู้เหมา (FCL) หรือฝากส่ง (LCL)" },
                            { icon: <FileText size={32} />, title: "พิธีการศุลกากร", desc: "ดูแลเอกสารนำเข้า-ส่งออก และเคลียร์ภาษีอย่างถูกต้องครบถ้วน" },
                            { icon: <Box size={32} />, title: "Sourcing", desc: "บริการหาแหล่งสินค้า ตรวจสอบโรงงาน และสั่งซื้อสินค้าจากจีน" },
                        ].map((service, idx) => (
                            <div key={idx} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all hover:border-[#E53935]/30 group">
                                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center text-[#E53935] mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">ขั้นตอนการใช้บริการ</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-1/2"></div>
                        {[
                            { step: "01", title: "สมัครสมาชิก", desc: "รับรหัสลูกค้า (Mark) สำหรับระบุข้างกล่อง" },
                            { step: "02", title: "สั่งสินค้า", desc: "ส่งสินค้าเข้าโกดังจีน พร้อมแจ้ง Tracking" },
                            { step: "03", title: "รอรับของ", desc: "ชำระค่าขนส่ง และรอรับสินค้าที่หน้าบ้าน" },
                        ].map((proc, idx) => (
                            <div key={idx} className="relative z-10 bg-white p-8 rounded-xl shadow-md w-full md:w-1/3 mx-4 text-center mb-8 md:mb-0 border-t-4 border-[#E53935]">
                                <div className="text-4xl font-bold text-gray-100 mb-4">{proc.step}</div>
                                <h3 className="text-xl font-bold mb-2">{proc.title}</h3>
                                <p className="text-gray-500">{proc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
