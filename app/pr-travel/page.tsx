import { Plane, ChevronRight } from 'lucide-react';

export default function PrTravelPage() {
    return (
        <div className="pt-20">
            {/* Travel Hero */}
            <div className="bg-gradient-to-r from-footer-start to-footer-end text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1547980846-953e5d070b49?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Travel China" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <Plane size={24} className="text-white" /> <span className="text-white">PR TRAVEL</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">เปิดประสบการณ์ใหม่ <br />ทุกการเดินทาง</h1>
                    <p className="text-xl text-white/80 max-w-2xl mb-8">
                        บริการจัดกรุ๊ปทัวร์ส่วนตัว ทัวร์ดูงาน และเส้นทางท่องเที่ยว Unseen ในจีน ดูแลดุจญาติมิตร โดยทีมงานมืออาชีพ
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors">
                        ออกแบบทริปของคุณ
                    </button>
                </div>
            </div>

            {/* Tour Types */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6 text-[#1F2937]">รูปแบบการเดินทาง</h2>
                    <p className="text-center text-[#1F2937] mb-12 max-w-2xl mx-auto">เราออกแบบการเดินทางได้ตามความต้องการ ไม่ว่าจะเป็นทริปธุรกิจหรือพักผ่อน</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1565620852783-c24c2c161358?q=80&w=2070&auto=format&fit=crop",
                                title: "Business Tour",
                                desc: "ทัวร์ดูงาน เยี่ยมชมโรงงาน (Factory Visit) พร้อมล่ามเจรจาธุรกิจ"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
                                title: "Private Group",
                                desc: "กรุ๊ปเหมาส่วนตัว ครอบครัว หรือองค์กร กำหนดเส้นทางและงบประมาณเองได้"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=2071&auto=format&fit=crop",
                                title: "Unseen Route",
                                desc: "เส้นทางพิเศษ ธรรมชาติและวัฒนธรรม ที่ทัวร์ทั่วไปเข้าไม่ถึง"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
                                title: "Car Rental",
                                desc: "บริการรถเช่าพร้อมคนขับ และรถรับ-ส่งสนามบิน สะดวก สบาย ปลอดภัย"
                            },
                        ].map((tour, idx) => (
                            <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <div className="p-6 bg-white relative">
                                    <h3 className="text-xl font-bold mb-2 text-[#1F2937]">{tour.title}</h3>
                                    <p className="text-[#1F2937] mb-4 text-sm h-10">{tour.desc}</p>
                                    <div className="flex items-center text-primary font-medium text-sm cursor-pointer hover:underline">
                                        ดูรายละเอียด <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery / Reviews */}
            <section className="py-20 bg-soft-bg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-[#1F2937]">บรรยากาศการเดินทาง</h2>
                        <button className="text-primary font-bold border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">ดูทั้งหมด</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                                <img
                                    src={`https://images.unsplash.com/photo-${item === 1 ? '1527631746610-bca00a040d60' : item === 2 ? '1528127269324-f2b7a15055b6' : item === 3 ? '1543053654-2098d5d992d9' : '1504609773096-104ff10a61d7'}?q=80&w=800&auto=format&fit=crop`}
                                    alt="Gallery"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
