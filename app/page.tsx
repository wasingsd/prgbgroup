import Image from "next/image";
import Link from "next/link";
import TikTokPost from "@/components/TikTokPost";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Languages,
  MapPin,
  MessageCircle,
  Monitor,
  PackageCheck,
  Phone,
  Plane,
  ShieldCheck,
  Ship,
  Ticket,
  TrendingUp,
  Truck,
} from "lucide-react";
import Mascot from "@/app/assets/images/mascot-telescope-box.png";
import MascotLaptop from "@/app/assets/images/mascot-laptop.png";
import IconTransport from "@/app/assets/images/icon-transport.png";
import IconTax from "@/app/assets/images/icon-tax.png";
import IconWarehouse from "@/app/assets/images/icon-warehouse.png";
import TravelScene from "@/app/assets/images/home-banner-main.jpg";
import { LINE_URL, PHONE, TIKTOK_URL, TRAVEL_URL } from "@/app/utils/site";

const cargoServices = [
  {
    image: IconTransport,
    title: "ขนส่งด่วน ทางรถ / เรือ",
    text: "บริการขนส่งสินค้าจากจีนมาไทย มีทั้งทางรถ (3–5 วัน) และทางเรือ (12–15 วัน) ปิดตู้ทุกวัน",
  },
  {
    image: IconTax,
    title: "เคลียร์ภาษี แบบเหมา",
    text: "หมดกังวลเรื่องภาษีนำเข้า ด้วยบริการเคลียร์ภาษีแบบเหมาจ่าย กิโล / คิว จบในราคาเดียว",
  },
  {
    image: IconWarehouse,
    title: "โกดังพักสินค้า 2 ประเทศ",
    text: "มีจุดรับสินค้าขนาดใหญ่ทั้งที่กวางโจวและกรุงเทพฯ พร้อมระบบติดตามสินค้า",
  },
];
const advantages = [
  {
    icon: Monitor,
    title: "ระบบติดตาม Real-time 24 ชม.",
    text: "รู้สถานะสินค้าของคุณทุกขั้นตอน ผ่านระบบออนไลน์",
  },
  {
    icon: TrendingUp,
    title: "ราคาที่คุ้มค่า สำหรับ SME",
    text: "เราเข้าใจธุรกิจคุณ ด้วยเรทราคาพิเศษที่ช่วยลดต้นทุนและเพิ่มกำไร",
  },
  {
    icon: ShieldCheck,
    title: "รับประกันสินค้า ปลอดภัย 100%",
    text: "ดูแลสินค้าของคุณเหมือนของเราเอง",
  },
];
const travelServices = [
  {
    icon: Ticket,
    title: "ทัวร์ดูงานแสดงสินค้า",
    text: "บริการพาทัวร์งานแฟร์ระดับโลก พร้อมให้คำแนะนำตลอดทริป",
  },
  {
    icon: Languages,
    title: "ล่ามเจรจาธุรกิจ",
    text: "สื่อสารอย่างมั่นใจ ด้วยล่ามมืออาชีพช่วยเจรจาการค้าให้คุณได้เปรียบที่สุด",
  },
  {
    icon: Plane,
    title: "จองตั๋วและที่พัก",
    text: "บริการจองตั๋วเครื่องบินและโรงแรมที่พัก ครบจบในที่เดียว",
  },
  {
    icon: Globe,
    title: "จัดทริป Private Group",
    text: "ออกแบบโปรแกรมท่องเที่ยวสำหรับครอบครัวหรือกลุ่มเพื่อนตามใจคุณ",
  },
];
const videos = [
  { id: "7545742823274892551", type: "video" },
  { id: "7448006782632381714", type: "photo" },
  { id: "7582104724971801874", type: "video" },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <h1>
              เชื่อมต่อโลกธุรกิจ
              <br />
              <span>และการเดินทาง</span>
              <br />
              ของคุณ
            </h1>
            <p>
              จากสินค้าที่คุณเลือก สู่โอกาสที่คุณมองหา
              <br className="desktop-break" />
              บริการนำเข้าจีน–ไทย และท่องเที่ยว / ดูงานครบวงจร
              <br className="desktop-break" />
              ดูแลทุกขั้นตอน ไปด้วยกันกับ PR Global Group
            </p>
            <div className="hero-actions">
              <Link href="/pr-cargo" className="button button-primary">
                บริการ PR Cargo
                <ArrowRight size={18} />
              </Link>
              <a
                href={TRAVEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline"
              >
                ไปเว็บไซต์ PR Travel
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="hero-reassurance">
              <ShieldCheck size={18} />
              <span>โปร่งใส ใส่ใจ พร้อมให้คำปรึกษา</span>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                คุยกับทีมงาน
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-destination">
              <span>
                <MapPin size={17} />
                CHINA
              </span>
              <span className="route-line" aria-hidden="true">
                <Truck size={22} />
              </span>
              <span>
                THAILAND
                <MapPin size={17} />
              </span>
            </div>
            <div className="hero-art">
              <Image
                src={Mascot}
                alt="มาสคอตอัลปากา PR Cargo หมวกแดง มองหาโอกาสใหม่จากกล่องพัสดุ"
                width={520}
                height={520}
                priority
                sizes="(max-width: 760px) 90vw, 42vw"
              />
            </div>
            <div className="hero-art-caption">
              <span>
                <PackageCheck size={21} />
                จากต้นทาง ถึงมือคุณ
              </span>
              <span>PR CARGO</span>
            </div>
          </div>
        </div>
        <div className="site-container">
          <div className="service-ribbon">
            <span>
              <Truck />
              ขนส่งทางรถ<span>3–5 วัน</span>
            </span>
            <span>
              <Ship />
              ขนส่งทางเรือ<span>12–15 วัน</span>
            </span>
            <span>
              <ShieldCheck />
              ดูแลพิธีการศุลกากร
            </span>
            <span>
              <Plane />
              ท่องเที่ยวและดูงาน
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="site-container">
          <div className="section-heading heading-split">
            <div>
              <h2>
                ทุกเรื่องนำเข้า
                <br />
                <span className="text-brand">ให้ PR Cargo ดูแล</span>
              </h2>
              <p>
                บริการขนส่งนำเข้าสินค้าจีน–ไทย ครบวงจร
                <br />
                สำหรับพ่อค้าแม่ค้าออนไลน์และธุรกิจทุกขนาด
              </p>
            </div>
            <Link href="/pr-cargo" className="text-link">
              ดูบริการและอัตราค่าขนส่ง
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="cargo-services">
            {cargoServices.map(({ image, title, text }) => (
              <article key={title} className="cargo-service">
                <div className="service-art">
                  <Image
                    src={image}
                    alt=""
                    width={190}
                    height={160}
                    sizes="190px"
                  />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link
                  href="/pr-cargo"
                  className="service-more"
                  aria-label={`รายละเอียด${title}`}
                >
                  <ArrowUpRight size={20} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad section-soft">
        <div className="site-container confidence-grid">
          <div className="confidence-art">
            <Image
              src={MascotLaptop}
              alt="มาสคอต PR Cargo พร้อมดูแลและติดตามสินค้าของคุณ"
              width={430}
              height={430}
              sizes="(max-width: 760px) 80vw, 34vw"
            />
            <div className="confidence-caption">
              ดูแลใส่ใจ ทุกขั้นตอนการนำเข้า
            </div>
          </div>
          <div className="confidence-copy">
            <h2>
              มากกว่าการขนส่ง
              <br />
              คือความใส่ใจในธุรกิจคุณ
            </h2>
            <p className="section-intro">ทำไมต้องนำเข้ากับ PR Cargo?</p>
            <div className="advantage-list">
              {advantages.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon size={24} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/pr-cargo/#rates" className="text-link">
              ดูอัตราค่าบริการ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="travel" className="section-pad travel-section">
        <div className="site-container">
          <div className="travel-intro">
            <div>
              <h2>
                เปิดโลกธุรกิจ
                <br />
                และการเดินทางกับ <span className="text-brand">PR Travel</span>
              </h2>
              <p>
                บริการท่องเที่ยวและดูงาน โดยทีมงานมืออาชีพ
                <br />
                ที่เข้าใจทุกความต้องการของคุณ
              </p>
            </div>
            <a
              href={TRAVEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              ดูโปรแกรมทัวร์ทั้งหมด
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="travel-layout">
            <div className="travel-picture">
              <Image
                src={TravelScene}
                alt="เส้นทางขนส่งจีน–ไทยและประสบการณ์ท่องเที่ยวประเทศจีน"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
              <div className="travel-picture-caption">
                <MapPin size={20} />
                <span>
                  China & Beyond
                  <small>
                    เชี่ยวชาญเส้นทางจีน เข้าถึงแหล่งค้าส่ง
                    <br />
                    และสถานที่ท่องเที่ยว Unseen
                  </small>
                </span>
              </div>
            </div>
            <div className="travel-service-list">
              {travelServices.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon size={23} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="travel-promise">
            <div>
              <h3>เพื่อนคู่คิดในการเดินทางและธุรกิจ</h3>
              <p>
                ทีมงานมีความเชี่ยวชาญในพื้นที่จริง พร้อมดูแลคุณตลอดการเดินทาง
              </p>
            </div>
            <ul>
              {[
                "ประสบการณ์จริง · เชี่ยวชาญเส้นทางจีน",
                "บริการ VIP · ดูแลตลอดทริป",
                "Business Matching · ต่อยอดธุรกิจ",
                "Custom Program · ออกแบบได้ตามใจ",
              ].map((text) => (
                <li key={text}>
                  <Check size={16} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="travel-close">
            <p>มีไอเดียทริปในใจ แต่ยังไม่รู้จะเริ่มอย่างไร?</p>
            <a
              className="text-link"
              href={TRAVEL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ให้ทีมงาน PRGB ช่วยออกแบบทริปให้คุณ
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="updates" className="section-pad section-soft">
        <div className="site-container">
          <div className="section-heading heading-split">
            <div>
              <h2>
                อัปเดตบรรยากาศจริง
                <br />
                <span className="text-brand">ผ่าน TikTok ของเรา</span>
              </h2>
              <p>ชมผลงาน การขนส่งจริง และประสบการณ์จากลูกค้า</p>
            </div>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              ดูวิดีโอทั้งหมด
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="social-grid">
            {videos.map(({ id, type }) => (
              <TikTokPost key={id} id={id} type={type} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="site-container contact-banner-inner">
          <div>
            <h2>พร้อมยกระดับธุรกิจของคุณหรือยัง?</h2>
            <p>
              ปรึกษาเราเรื่องการนำเข้าและการเดินทาง ให้ทุกก้าวของคุณง่ายขึ้น
            </p>
          </div>
          <div className="banner-actions">
            <Link href="/contact" className="button button-white">
              ติดต่อทีมงาน
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${PHONE}`} className="banner-phone">
              <Phone size={18} />
              {PHONE}
            </a>
          </div>
          <MessageCircle
            className="banner-decoration"
            size={155}
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
}
