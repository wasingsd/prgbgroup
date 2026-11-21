"use client";

import { useEffect } from "react";
import Image from "next/image";
import LogoTravel from "@/app/assets/images/logo-travel-new.png";
import MascotMap from "@/app/assets/images/mascot-pr-travel-map.png";
import { ExternalLink, Loader2 } from "lucide-react";

const TARGET_URL = "https://prgb-travel-group.vercel.app";

export default function PrTravelRedirectPage() {
  useEffect(() => {
    // Instant redirect to dedicated PR Global Travel portal
    window.location.replace(TARGET_URL);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#073B4C] via-[#087F80] to-[#005653] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#39B7B0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C6A453]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-center relative z-10 flex flex-col items-center">
        {/* Brand Logo */}
        <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/30 p-2 shadow-xl mb-6 flex items-center justify-center overflow-hidden">
          <Image
            src={LogoTravel}
            alt="PR Global Travel Logo"
            className="w-full h-full object-cover scale-110"
            priority
          />
        </div>

        {/* Mascot */}
        <div className="w-24 h-24 mb-4 animate-bounce-slow">
          <Image
            src={MascotMap}
            alt="PR Travel Mascot"
            width={120}
            height={120}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
          PR Global Travel
        </h1>
        <p className="text-sm text-white/80 mb-6 font-light">
          กำลังนำท่านไปยังระบบค้นหาและจองโปรแกรมทัวร์...
        </p>

        {/* Loading Spinner */}
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium mb-8">
          <Loader2 className="w-5 h-5 animate-spin text-[#39B7B0]" />
          <span>กำลังเปลี่ยนหน้าไปยัง <span className="font-bold underline text-white">prgb-travel-group.vercel.app</span></span>
        </div>

        {/* Manual Redirect Button */}
        <a
          href={TARGET_URL}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold py-3.5 px-6 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
        >
          <span>คลิกที่นี่ หากไม่เปลี่ยนหน้าอัตโนมัติ</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Meta refresh fallback */}
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${TARGET_URL}`} />
      </noscript>
    </div>
  );
}
