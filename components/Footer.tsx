import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";
import {
  CARGO_URL,
  EMAIL,
  LINE_URL,
  PHONE,
  TIKTOK_URL,
  TRAVEL_URL,
} from "@/app/utils/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="PR Global Group หน้าแรก">
              <BrandLogo />
            </Link>
            <p>
              กลุ่มบริษัทให้บริการขนส่งนำเข้าสินค้าจีน–ไทย
              <br />
              และบริการท่องเที่ยว / ดูงานแบบครบวงจร
              <br />
              โปร่งใส รวดเร็ว และเป็นกันเอง
            </p>
          </div>
          <div>
            <h2>บริการของเรา</h2>
            <Link href="/pr-cargo">PR Cargo · นำเข้าสินค้า</Link>
            <a href={TRAVEL_URL} target="_blank" rel="noopener noreferrer">
              PR Travel · ท่องเที่ยว
              <ArrowUpRight size={14} />
            </a>
            <Link href="/#travel">ทัวร์ดูงานและเจรจาธุรกิจ</Link>
            <a href={CARGO_URL} target="_blank" rel="noopener noreferrer">
              ตรวจสอบสถานะพัสดุ
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div>
            <h2>รู้จัก PR Global</h2>
            <Link href="/">หน้าแรก</Link>
            <Link href="/#about">เกี่ยวกับเรา</Link>
            <Link href="/#updates">อัปเดตและประสบการณ์จริง</Link>
            <Link href="/contact">ติดต่อเรา</Link>
          </div>
          <div>
            <h2>ติดต่อเรา</h2>
            <a href={`tel:${PHONE}`}>
              <Phone size={16} />
              {PHONE}
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              LINE: @prcargo
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={16} />
              {EMAIL}
            </a>
            <p className="footer-location">
              <MapPin size={16} />
              กรุงเทพมหานคร, ประเทศไทย
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PR Global Group. All rights reserved.
          </span>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
            ติดตามเราบน TikTok
            <ArrowUpRight size={14} />
          </a>
          <span className="footer-motto">
            ธุรกิจของคุณ การเดินทางของเรา<span aria-hidden="true">.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
