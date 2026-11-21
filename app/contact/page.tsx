"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Clock,
  Info,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Mascot from "@/app/assets/images/mascot-laptop.png";
import {
  EMAIL,
  LINE_URL,
  PHONE,
  TIKTOK_URL,
  TRAVEL_URL,
} from "@/app/utils/site";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyRpA7MOE9ECwDKrUWjO7HAmOTC8QI-ILJyW-PiEdd6A-RuW3xJu87oTXZy4ENn-H7d/exec";
const topics = [
  "สอบถามบริการขนส่ง (Cargo)",
  "สอบถามบริการทัวร์ (Travel)",
  "เสนอขายสินค้า/บริการ",
  "อื่นๆ",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: topics[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [attempted, setAttempted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (status !== "loading") setStatus("idle");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setAttempted(true);
    const missing = (["name", "phone", "message"] as const).find(
      (key) => !formData[key].trim(),
    );
    if (missing) {
      setStatus("error");
      setErrorMessage(
        "กรุณากรอกชื่อ เบอร์โทรศัพท์ และข้อความให้ครบถ้วน โดยไม่ใช้เฉพาะช่องว่าง",
      );
      document.getElementById(`contact-${missing}`)?.focus();
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      // Preserve the existing Apps Script payload. An opaque response does not
      // confirm receipt, so retain the message and give honest dispatch feedback.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          topic: formData.topic,
          message: formData.message.trim(),
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "ส่งข้อความไม่สำเร็จ กรุณาลองอีกครั้ง หรือติดต่อเราผ่าน LINE ข้อมูลที่กรอกยังอยู่ครบ",
      );
    }
  };

  return (
    <>
      <section className="contact-page-heading">
        <div className="site-container">
          <h1>
            ทุกคำถาม
            <br />
            <span className="text-brand">เราพร้อมดูแล</span>
          </h1>
          <p>
            ติดต่อ PR Global Group เพื่อปรึกษาเรื่องนำเข้าสินค้า
            <br className="desktop-break" />
            การท่องเที่ยว และทัวร์ดูงานแบบครบวงจร
          </p>
        </div>
      </section>
      <section className="contact-page-body">
        <div className="site-container contact-grid">
          <aside className="contact-info">
            <h2>คุยกับทีมงานของเรา</h2>
            <p>
              เลือกช่องทางที่สะดวก
              <br />
              ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือคุณ
            </p>
            <a
              className="button button-primary"
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />
              LINE: @prcargo
              <ArrowUpRight size={17} />
            </a>
            <dl className="contact-details">
              <div>
                <dt>
                  <Phone size={19} />
                  โทรศัพท์
                </dt>
                <dd>
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
                  <small>สายด่วน</small>
                </dd>
              </div>
              <div>
                <dt>
                  <Mail size={19} />
                  อีเมล
                </dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <MapPin size={19} />
                  ที่อยู่บริษัท
                </dt>
                <dd>กรุงเทพมหานคร, ประเทศไทย</dd>
              </div>
              <div>
                <dt>
                  <Clock size={19} />
                  เวลาทำการ
                </dt>
                <dd>จันทร์–ศุกร์: 09:00–18:00</dd>
              </div>
            </dl>
            <div className="contact-social">
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                ติดตามบน TikTok
                <ArrowUpRight size={15} />
              </a>
              <a href={TRAVEL_URL} target="_blank" rel="noopener noreferrer">
                ไปเว็บไซต์ PR Travel
                <ArrowUpRight size={15} />
              </a>
            </div>
            <Image
              className="contact-mascot"
              src={Mascot}
              alt="มาสคอต PR Cargo พร้อมตอบคำถามของคุณ"
              width={220}
              height={220}
              sizes="220px"
            />
          </aside>
          <div className="contact-form-panel">
            <h2>ส่งข้อความถึงเรา</h2>
            <p>เล่ารายละเอียดที่คุณต้องการสอบถาม แล้วให้เราช่วยดูแลต่อ</p>
            <p className="form-required-note">ช่องที่มี * จำเป็นต้องกรอก</p>
            <form onSubmit={handleSubmit} aria-busy={status === "loading"}>
              <fieldset disabled={status === "loading"}>
                <legend className="sr-only">ข้อมูลสำหรับติดต่อกลับ</legend>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      ชื่อ–นามสกุล <span>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ระบุชื่อของคุณ"
                      aria-invalid={
                        attempted && !formData.name.trim() ? true : undefined
                      }
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-phone">
                      เบอร์โทรศัพท์ <span>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="เบอร์ที่สะดวกให้ติดต่อกลับ"
                      aria-invalid={
                        attempted && !formData.phone.trim() ? true : undefined
                      }
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-topic">หัวข้อเรื่อง</label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                  >
                    {topics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">
                    ข้อความ <span>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="เช่น ประเภทสินค้า ปริมาณ หรือรายละเอียดบริการที่สนใจ…"
                    aria-invalid={
                      attempted && !formData.message.trim() ? true : undefined
                    }
                  />
                </div>
                {status === "error" && (
                  <div className="form-notice notice-error" role="alert">
                    <AlertCircle size={21} />
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div aria-live="polite" aria-atomic="true">
                  {status === "sent" && (
                    <div className="form-notice notice-info">
                      <Info size={21} />
                      <p>
                        <strong>ส่งคำขอผ่านแบบฟอร์มแล้ว</strong>
                        <br />
                        ระบบยังยืนยันการรับข้อความไม่ได้
                        หากต้องการยืนยันหรือติดต่อด่วน กรุณาทัก LINE: @prcargo
                        โดยข้อมูลที่กรอกยังอยู่ครบ
                      </p>
                    </div>
                  )}
                </div>
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="button button-primary"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        กำลังส่งข้อมูล…
                      </>
                    ) : (
                      <>
                        {status === "sent"
                          ? "ส่งข้อความอีกครั้ง"
                          : "ส่งข้อความ"}
                        <Send size={17} />
                      </>
                    )}
                  </button>
                  <span>
                    หรือติดต่อโดยตรงผ่าน{" "}
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINE
                      <ArrowUpRight size={13} />
                    </a>
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
