
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-footer-start to-footer-end text-white/90 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white/10 backdrop-blur rounded flex items-center justify-center text-white font-bold border border-white/20">PR</div>
                            <div className="font-bold text-lg text-white">PR GLOBAL GROUP</div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-white/70">
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
                                <MapPin size={18} className="text-white min-w-[18px]" />
                                <span>กรุงเทพมหานคร, ประเทศไทย</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-white" />
                                <span>096-897-8719</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-white" />
                                <span>support@prgbgroup.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                <span>LINE: @prcargo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                <span>Facebook: PR Cargo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
                    <p>&copy; 2024 PR Global Group Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

