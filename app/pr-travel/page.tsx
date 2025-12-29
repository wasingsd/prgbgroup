import { Plane, ChevronRight, MapPin, Camera, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/path';
import ServicePremium from '@/app/assets/images/service-premium.jpg';
import ServiceDesign from '@/app/assets/images/service-design.jpg';
import ServiceFactory from '@/app/assets/images/service-factory-new.jpg';
import ServiceCar from '@/app/assets/images/service-car-new.jpg';

export default function PrTravelPage() {
    return (
        <div>
            {/* Travel Hero */}
            <div className="bg-gradient-to-r from-footer-start to-footer-end text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={getImagePath("/travel-mascot.png")}
                        alt="Travel China Banner"
                        fill
                        priority
                        className="object-cover object-center opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="container mx-auto px-8 relative z-10 text-center">
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



            {/* Tour Types */}
            <section className="py-20 bg-white relative">
                <div className="absolute top-10 right-0 md:right-20 w-32 md:w-48 opacity-100 z-10 pointer-events-none hidden lg:block">
                    <Image src={getImagePath("/mascot-business.png")} alt="Business Mascot" width={200} height={300} className="w-full h-auto" />
                </div>
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2937]">รูปแบบการเดินทาง</h2>
                    <p className="text-center text-[#1F2937]/70 mb-12 max-w-2xl mx-auto text-lg">เราออกแบบการเดินทางได้ตามความต้องการ ไม่ว่าจะเป็นทริปธุรกิจหรือพักผ่อน</p>



                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                img: ServicePremium,
                                title: "Premium Package",
                                desc: "เที่ยวจีนระดับพรีเมียม เส้นทางยอดนิยม ปักกิ่ง เซี่ยงไฮ้ กวางโจว ดูแลครบจบทุกขั้นตอน",
                                isLocal: false // Imported assets don't need getImagePath
                            },
                            {
                                img: ServiceDesign,
                                title: "Design Your Trip",
                                desc: "ออกแบบทริปในฝันของคุณ ไม่ว่าจะเป็นครอบครัว เพื่อน หรือดูงานองค์กร ตามงบประมาณที่คุณต้องการ",
                                isLocal: false
                            },
                            {
                                img: ServiceFactory,
                                title: "Factory Tour & Business",
                                desc: "เหมาะสำหรับเจ้าของแบรนด์และนักธุรกิจ พาเยี่ยมชมโรงงานจริง ดูกระบวนการผลิต พบปะซัพพลายเออร์ พร้อมศึกษาต้นทุนและมาตรฐานสินค้า",
                                isLocal: false
                            },
                            {
                                img: ServiceCar,
                                title: "Car Booking Service",
                                desc: "บริการรถพร้อมคนขับ (เก๋ง/ตู้/SUV) สำหรับเดินทางในจีน รับ-ส่งสนามบิน และดูแลตลอดทริปธุรกิจหรือท่องเที่ยว",
                                isLocal: false
                            },
                        ].map((tour, idx) => (
                            <div key={idx} className="group rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:border-primary/20 transition-all flex flex-col md:flex-row bg-white hover:shadow-2xl">
                                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative shrink-0">
                                    <Image
                                        src={tour.img}
                                        alt={tour.title}
                                        width={800}
                                        height={600}
                                        placeholder="blur"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute bottom-4 left-4 md:bottom-auto md:top-6 md:left-6 text-white">
                                        <MapPin size={32} className="mb-1 drop-shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1F2937] group-hover:text-primary transition-colors">{tour.title}</h3>
                                    <p className="text-[#1F2937]/70 mb-8 text-lg leading-relaxed">{tour.desc}</p>
                                    <div className="flex items-center text-primary font-bold text-lg cursor-pointer hover:underline gap-2 group/btn">
                                        ดูรายละเอียด <ChevronRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Destinations (Bento Grid) */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin className="text-red-500 fill-red-100" size={32} />
                        <h2 className="text-3xl font-bold text-[#1F2937]">สถานที่ท่องเที่ยวยอดนิยม</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-4">
                            <div className="relative h-64 md:h-1/2 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop"
                                    alt="Guangzhou"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">กวางโจว</span>
                            </div>
                            <div className="relative h-64 md:h-1/2 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop"
                                    alt="Chengdu"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">เฉิงตู</span>
                            </div>
                        </div>

                        {/* Col 2 - Tall */}
                        <div className="relative h-64 md:h-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?q=80&w=2070&auto=format&fit=crop"
                                alt="Shanghai"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <span className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-md">เซี่ยงไฮ้</span>
                        </div>

                        {/* Col 3 & 4 */}
                        <div className="md:col-span-2 flex flex-col gap-4">
                            <div className="relative h-64 md:h-1/2 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Beijing"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <span className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-md">ปักกิ่ง</span>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 h-full md:h-1/2">
                                <div className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop"
                                        alt="Chongqing"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">ฉงชิ่ง</span>
                                </div>
                                <div className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504229986326-f4c0ce3b7080?q=80&w=1974&auto=format&fit=crop"
                                        alt="Kunming"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">คุนหมิง</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-b from-soft-bg to-white">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16 relative">
                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-20 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-6">
                            ทำไมต้องเดินทางกับ <span className="text-primary">PR TRAVEL</span>
                        </h2>
                        <p className="text-lg text-[#1F2937]/70 font-light">
                            ให้คุณมั่นใจในทุกการเดินทาง ด้วยมาตรฐานบริการระดับมืออาชีพ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="w-16 h-16 mx-auto bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Plane size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">บริการครบวงจร</h3>
                            <p className="text-[#1F2937]/70 text-sm leading-relaxed">
                                ดูแลครบจบในที่เดียว ทั้งตั๋วเครื่องบิน ที่พัก วีซ่า และไกด์นำเที่ยว ไม่ต้องติดต่อหลายที่ให้วุ่นวาย
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-orange-100 transition-colors"></div>
                            <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">ยืดหยุ่นได้ดั่งใจ</h3>
                            <p className="text-[#1F2937]/70 text-sm leading-relaxed">
                                ออกแบบโปรแกรมทัวร์ได้ตามความต้องการ ปรับเปลี่ยนแผนได้ ยืดหยุ่นสูง เพื่อทริปในฝันของคุณ
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors"></div>
                            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Camera size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">ดูแลดุจคนพิเศษ</h3>
                            <p className="text-[#1F2937]/70 text-sm leading-relaxed">
                                ทีมงานมืออาชีพพร้อมดูแลอำนวยความสะดวกตลอดทริป ปรึกษาได้ตลอด 24 ชม. อุ่นใจทุกการเดินทาง
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-green-100 transition-colors"></div>
                            <div className="w-16 h-16 mx-auto bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">ปลอดภัย มั่นใจ</h3>
                            <p className="text-[#1F2937]/70 text-sm leading-relaxed">
                                ชำระเงินปลอดภัย มีใบอนุญาตประกอบธุรกิจนำเที่ยวถูกต้อง เชื่อถือได้ 100%
                            </p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}
