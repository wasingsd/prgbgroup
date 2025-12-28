import { Plane, ChevronRight, MapPin, Camera } from 'lucide-react';
import Image from 'next/image';

export default function PrTravelPage() {
    return (
        <div>
            {/* Travel Hero */}
            <div className="bg-gradient-to-r from-footer-start to-footer-end text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/travel-mascot.png"
                        alt="Travel China Banner"
                        fill
                        priority
                        className="object-cover object-center opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 mb-6 text-primary font-bold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                        <Plane size={24} className="text-white" /> <span className="text-white tracking-wide">PR TRAVEL</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                        เปิดประสบการณ์ใหม่ <br className="hidden md:block" /> ทุกการเดินทาง
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                        บริการจัดกรุ๊ปทัวร์ส่วนตัว ทัวร์ดูงาน และเส้นทางท่องเที่ยว Unseen ในจีน <br className="hidden md:block" /> ดูแลดุจญาติมิตร โดยทีมงานมืออาชีพ
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-white text-lg px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1">
                        ออกแบบทริปของคุณ
                    </button>
                </div>
            </div>

            {/* Campaign Banners Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group">
                            <Image
                                src="/travel-banner-1.jpg"
                                alt="Premium Travel Thai-China"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group">
                            <Image
                                src="/travel-banner-2.jpg"
                                alt="Design Your Dream Trip"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Types */}
            <section className="py-20 bg-white relative">
                <div className="absolute top-10 right-0 md:right-20 w-32 md:w-48 opacity-100 z-10 pointer-events-none hidden lg:block">
                    <Image src="/mascot-business.png" alt="Business Mascot" width={200} height={300} className="w-full h-auto" />
                </div>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2937]">รูปแบบการเดินทาง</h2>
                    <p className="text-center text-[#1F2937]/70 mb-16 max-w-2xl mx-auto text-lg">เราออกแบบการเดินทางได้ตามความต้องการ ไม่ว่าจะเป็นทริปธุรกิจหรือพักผ่อน</p>

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
                            <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary/20 transition-all">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <MapPin size={20} className="mb-1" />
                                    </div>
                                </div>
                                <div className="p-6 bg-white relative">
                                    <h3 className="text-xl font-bold mb-2 text-[#1F2937] group-hover:text-primary transition-colors">{tour.title}</h3>
                                    <p className="text-[#1F2937]/70 mb-4 text-sm h-10 leading-relaxed">{tour.desc}</p>
                                    <div className="flex items-center text-primary font-bold text-sm cursor-pointer hover:underline gap-1">
                                        ดูรายละเอียด <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery / Celebration */}
            <section className="py-20 bg-gradient-to-b from-soft-bg to-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                <Image
                                    src="/mascot-chinese.png"
                                    alt="Travel Mascot"
                                    width={600}
                                    height={600}
                                    className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                                MEMORABLE MOMENTS
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
                                เก็บความทรงจำ <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                                    สุดประทับใจ
                                </span>
                            </h2>
                            <p className="text-lg text-[#1F2937]/70 mb-8 leading-relaxed">
                                ทุกรอยยิ้มและความสุขของคุณ คือความภูมิใจของเรา <br />
                                เราพร้อมดูแลและสร้างสรรค์ทริปที่ดีที่สุดสำหรับคุณ
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden aspect-video relative group shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 1" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity flex items-center justify-center">
                                        <Camera className="text-white opacity-80" size={24} />
                                    </div>
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-video relative group shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1528127269324-f2b7a15055b6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery 2" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity flex items-center justify-center">
                                        <Camera className="text-white opacity-80" size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
