"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Mascot from "@/app/assets/images/mascot-pr-travel-map.png";
import { TRAVEL_URL } from "@/app/utils/site";

export default function PrTravelRedirectPage() {
  useEffect(() => {
    window.location.replace(TRAVEL_URL);
  }, []);
  return (
    <section className="redirect-page site-container">
      <Image
        src={Mascot}
        alt="มาสคอต PR Travel พร้อมออกเดินทาง"
        width={230}
        height={230}
        priority
      />
      <h1>
        พบกันที่เว็บไซต์
        <br />
        <span className="text-brand">PR Global Travel</span>
      </h1>
      <p>
        <Loader2 className="animate-spin" size={17} />
        กำลังพาคุณไปยังเว็บไซต์ท่องเที่ยวของเรา
      </p>
      <a href={TRAVEL_URL} className="button button-primary">
        ไปเว็บไซต์ PR Travel
        <ArrowUpRight size={18} />
      </a>
      <small>หากระบบไม่พาไปอัตโนมัติ สามารถกดปุ่มด้านบนได้เลย</small>
    </section>
  );
}
