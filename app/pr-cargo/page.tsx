import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Info,
  MessageCircle,
  PackageCheck,
  Ship,
  Truck,
} from "lucide-react";
import IconTruck from "@/app/assets/images/icon-truck-custom.png";
import IconTransport from "@/app/assets/images/icon-transport.png";
import IconTax from "@/app/assets/images/icon-tax.png";
import IconWarehouse from "@/app/assets/images/icon-warehouse.png";
import Mascot from "@/app/assets/images/mascot-laptop.png";
import { CARGO_URL, LINE_URL, PHONE } from "@/app/utils/site";
import Platform1 from "@/app/assets/images/platform-1.png";
import Platform2 from "@/app/assets/images/platform-2.png";
import Platform3 from "@/app/assets/images/platform-3.png";
import Platform4 from "@/app/assets/images/platform-4.png";
import Platform5 from "@/app/assets/images/platform-5.png";
import Platform6 from "@/app/assets/images/platform-6.png";
import Platform7 from "@/app/assets/images/platform-7.png";
import Platform8 from "@/app/assets/images/platform-8.png";
import Platform9 from "@/app/assets/images/platform-9.png";
import Platform10 from "@/app/assets/images/platform-10.png";

const platforms = [
  { image: Platform1, name: "Alibaba" },
  { image: Platform2, name: "Taobao" },
  { image: Platform3, name: "Tmall" },
  { image: Platform4, name: "1688" },
  { image: Platform5, name: "Yiwugo" },
  { image: Platform6, name: "Vipshop" },
  { image: Platform7, name: "Banggood" },
  { image: Platform8, name: "AliExpress" },
  { image: Platform9, name: "JD.com" },
  { image: Platform10, name: "Pinduoduo" },
];
const services = [
  {
    image: IconTruck,
    title: "ขนส่งทางรถ",
    text: "รวดเร็วทันใจ เหมาะกับสินค้าด่วน ใช้เวลาเพียง 3–5 วัน",
  },
  {
    image: IconTransport,
    title: "ขนส่งทางเรือ",
    text: "ประหยัดต้นทุน เหมาะกับสินค้าจำนวนมาก ปิดตู้เหมา (FCL) หรือฝากส่ง (LCL)",
  },
  {
    image: IconTax,
    title: "พิธีการศุลกากร",
    text: "ดูแลเอกสารนำเข้า–ส่งออก และเคลียร์ภาษีอย่างถูกต้องครบถ้วน",
  },
  {
    image: IconWarehouse,
    title: "โกดังพักสินค้า",
    text: "มีจุดรับสินค้าขนาดใหญ่ทั้งที่กวางโจวและกรุงเทพฯ พร้อมระบบจัดการสต็อก",
  },
];
const shippingRates = [
  {
    mode: "sea",
    title: "ขนส่งทางเรือ",
    subtitle: "ประหยัดต้นทุน · 12–15 วัน",
    icon: Ship,
    rows: [
      { type: "ทั่วไป", volume: "4,000", weight: "20" },
      { type: "มอก.", volume: "4,900", weight: "45" },
      { type: "พิเศษ", volume: "7,000", weight: "70" },
      { type: "อย.", volume: "6,000", weight: "45" },
    ],
  },
  {
    mode: "road",
    title: "ขนส่งทางรถ",
    subtitle: "รวดเร็วทันใจ · 3–5 วัน",
    icon: Truck,
    rows: [
      { type: "ทั่วไป", volume: "6,000", weight: "30" },
      { type: "มอก.", volume: "7,000", weight: "55" },
      { type: "พิเศษ", volume: "8,300", weight: "75" },
      { type: "อย.", volume: "8,000", weight: "55" },
    ],
  },
];
const steps = [
  {
    title: "สมัครสมาชิก",
    text: "รับรหัสลูกค้า (Mark) ประจำตัวฟรี! สำหรับนำไปเขียนจ่าหน้าซองพัสดุ",
  },
  {
    title: "สั่งสินค้า & ส่งเข้าโกดัง",
    text: "ช้อปจากเว็บจีนได้ทุกเว็บ ระบุที่อยู่โกดังและรหัสลูกค้าให้ถูกต้อง แล้วแจ้ง Tracking ในระบบ",
  },
  {
    title: "รอรับของหน้าบ้าน",
    text: "ชำระค่าขนส่งเมื่อของถึงไทย ทีมงานจัดส่งให้ถึงมือ รวดเร็ว ปลอดภัย",
  },
];

export default function PrCargoPage() {
  return (
    <>
      <section className="cargo-hero">
        <div className="site-container cargo-hero-grid">
          <div>
            <h1>
              นำเข้าจีน–ไทย
              <br />
              <span className="text-brand">ครบ จบ ในที่เดียว</span>
            </h1>
            <p>
              บริการนำเข้า–ส่งออกแบบครบวงจร ขนส่งทางรถและทางเรือ
              <br className="desktop-break" />
              พร้อมเคลียร์ภาษีและเดินพิธีการศุลกากร
              <br className="desktop-break" />
              รวดเร็ว ปลอดภัย ตรวจสอบสถานะได้ 24 ชม.
            </p>
            <div className="hero-actions">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                ขอเรทราคาขนส่ง
                <MessageCircle size={18} />
              </a>
              <a href="#rates" className="button button-outline">
                ดูอัตราค่าขนส่ง
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="cargo-route">
              <span>กวางโจว</span>
              <span aria-hidden="true">————————</span>
              <Truck size={20} />
              <span aria-hidden="true">————</span>
              <span>กรุงเทพฯ</span>
            </div>
          </div>
          <div className="cargo-hero-art">
            <Image
              src={IconTruck}
              alt="รถขนส่ง PR Cargo สำหรับบริการนำเข้าสินค้าจีน–ไทย"
              width={490}
              height={420}
              priority
              sizes="(max-width: 760px) 85vw, 40vw"
            />
            <span>
              <PackageCheck size={19} />
              ดูแลตั้งแต่ต้นทาง ถึงปลายทาง
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="site-container">
          <div className="section-heading">
            <h2>
              บริการที่พร้อมดูแล
              <br />
              <span className="text-brand">ทุกขั้นตอนการนำเข้า</span>
            </h2>
            <p>เลือกวิธีขนส่งให้เหมาะกับสินค้า ที่เหลือให้เราช่วยดูแล</p>
          </div>
          <div className="cargo-services cargo-services-four">
            {services.map(({ image, title, text }) => (
              <article className="cargo-service" key={title}>
                <div className="service-art">
                  <Image
                    src={image}
                    alt=""
                    width={180}
                    height={150}
                    sizes="180px"
                  />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rates" className="section-pad section-soft">
        <div className="site-container">
          <div className="section-heading heading-split">
            <div>
              <h2>อัตราค่าขนส่งสินค้า</h2>
              <p>ราคาโปร่งใส ชัดเจน เลือกได้ตามงบประมาณและความเร็วที่ต้องการ</p>
            </div>
            <a
              href={LINE_URL}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ขอใบเสนอราคาสำหรับสินค้าของคุณ
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="rates-grid">
            {shippingRates.map(
              ({ mode, title, subtitle, icon: Icon, rows }) => (
                <article className={`rate-card rate-${mode}`} key={mode}>
                  <header>
                    <Icon size={30} />
                    <div>
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                  </header>
                  <div
                    className="table-scroll"
                    role="region"
                    aria-label={`ตารางอัตรา${title}`}
                    tabIndex={0}
                  >
                    <table>
                      <caption className="sr-only">
                        อัตราค่าบริการ{title}
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">ประเภทสินค้า</th>
                          <th scope="col">฿/ปริมาตร</th>
                          <th scope="col">฿/กิโล</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr key={row.type}>
                            <th scope="row">{row.type}</th>
                            <td>{row.volume}</td>
                            <td>{row.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              ),
            )}
          </div>
          <div className="rate-note">
            <Info size={20} />
            <p>
              <strong>หมายเหตุ:</strong>{" "}
              ราคาอาจเปลี่ยนแปลงตามสภาวะตลาดและน้ำหนักจริงของสินค้า
              <br />
              สอบถามข้อมูลเพิ่มเติมและขอใบเสนอราคาได้ที่{" "}
              <a href={`tel:${PHONE}`}>{PHONE}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container process-grid">
          <div className="process-intro">
            <h2>
              เริ่มนำเข้าได้ง่าย ๆ<br />
              <span className="text-brand">สมัคร · สั่ง · รอรับ</span>
            </h2>
            <p>
              ขั้นตอนสั่งของกับ PR Cargo
              <br />
              ที่เหลือเราจัดการให้
            </p>
            <Image
              src={Mascot}
              alt="มาสคอต PR Cargo ช่วยแนะนำการสมัครสมาชิกและสั่งซื้อสินค้า"
              width={300}
              height={300}
              sizes="(max-width: 760px) 220px, 300px"
            />
          </div>
          <div>
            <ol className="process-steps">
              {steps.map(({ title, text }, index) => (
                <li key={title}>
                  <span className="step-number">{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href={CARGO_URL}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              สมัครสมาชิก / เข้าสู่ระบบ
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="site-container">
          <div className="section-heading text-center">
            <h2>รองรับทุกแพลตฟอร์มชั้นนำจากจีน</h2>
            <p>สั่งได้ทุกเว็บ นำเข้าด่วนทันใจ ครบ จบ ในที่เดียว</p>
          </div>
          <div className="platform-grid">
            {platforms.map(({ image, name }) => (
              <div key={name}>
                <Image
                  src={image}
                  alt={name}
                  width={180}
                  height={85}
                  sizes="(max-width: 760px) 35vw, 15vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-banner">
        <div className="site-container contact-banner-inner">
          <div>
            <h2>เรื่องนำเข้า คุยกับเราได้เลย</h2>
            <p>
              แจ้งประเภทสินค้าและวิธีขนส่งที่ต้องการ เพื่อขอคำแนะนำจากทีมงาน
            </p>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-white"
          >
            ปรึกษาผ่าน LINE
            <MessageCircle size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
