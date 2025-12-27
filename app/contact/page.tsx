import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-soft-bg min-h-screen">
            <div className="bg-primary text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">ติดต่อเรา</h1>
                    <p className="text-white/90">ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือคุณ</p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 mb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 bg-text-primary text-white p-10">
                        <h3 className="text-xl font-bold mb-8">ข้อมูลติดต่อ</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">ที่อยู่บริษัท</p>
                                    <p className="text-white/70 text-sm">กรุงเทพมหานคร, ประเทศไทย</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">โทรศัพท์</p>
                                    <p className="text-white/70 text-sm">096-897-8719 (สายด่วน)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">อีเมล</p>
                                    <p className="text-white/70 text-sm">support@prgbgroup.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">เวลาทำการ</p>
                                    <p className="text-white/70 text-sm">จันทร์ - ศุกร์: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="font-bold mb-4">ช่องทาง Social</p>
                            <div className="flex gap-4">
                                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" title="TikTok">
                                    <Globe size={18} />
                                </a>
                                {/* Add Line/Facebook if available */}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-2/3 p-10">
                        <h3 className="text-2xl font-bold text-[#1F2937] mb-6">ส่งข้อความถึงเรา</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1F2937] mb-2">ชื่อ - นามสกุล</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937]" placeholder="ระบุชื่อของคุณ" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1F2937] mb-2">เบอร์โทรศัพท์</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937]" placeholder="ระบุเบอร์โทรศัพท์" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#1F2937] mb-2">หัวข้อเรื่อง</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-[#1F2937]">
                                    <option>สอบถามบริการขนส่ง (Cargo)</option>
                                    <option>สอบถามบริการทัวร์ (Travel)</option>
                                    <option>อื่นๆ</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#1F2937] mb-2">ข้อความ</label>
                                <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937]" placeholder="รายละเอียดที่คุณต้องการสอบถาม..."></textarea>
                            </div>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-hover transition-colors">ส่งข้อความ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
