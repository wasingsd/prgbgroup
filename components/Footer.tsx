
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#E53935] rounded flex items-center justify-center text-white font-bold">PR</div>
                            <div className="font-bold text-lg text-white">PR GLOBAL GROUP</div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            กลุ่มบริษัทให้บริการขนส่งนำเข้าสินค้าจีน–ไทย และบริการท่องเที่ยว/ดูงานแบบครบวงจร
                            มุ่งมั่นให้บริการด้วยความโปร่งใส รวดเร็ว และเป็นกันเอง
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">บริการหลัก</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/pr-cargo" className="hover:text-white transition-colors text-left">PR CARGO นำเข้าสินค้า</Link></li>
                            <li><Link href="/pr-travel" className="hover:text-white transition-colors text-left">PR TRAVEL ท่องเที่ยว</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">บริการ Sourcing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">ตรวจสอบสถานะพัสดุ</a></li>
                        </ul>
                    </div>

                    {/* Quick Links 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ข้อมูลบริษัท</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors text-left">หน้าแรก</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">รีวิวจากลูกค้า</a></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors text-left">ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ติดต่อเรา</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#E53935] min-w-[18px]" />
                                <span>กรุงเทพมหานคร, ประเทศไทย</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#E53935]" />
                                <span>096-897-8719</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#E53935]" />
                                <span>support@prgbgroup.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    <p>&copy; 2024 PR Global Group Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

