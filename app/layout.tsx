import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "PR Global Group | บริการขนส่งนำเข้าสินค้าจีน–ไทย และท่องเที่ยวครบวงจร",
  description:
    "PR Global Group ให้บริการขนส่งนำเข้าสินค้าจีน–ไทยครบวงจร ดูแลตั้งแต่ต้นทางถึงปลายทาง พร้อมบริการท่องเที่ยวและทัวร์ดูงาน มืออาชีพ โปร่งใส ปรึกษาฟรี",
  keywords: [
    "ขนส่งจีน-ไทย",
    "นำเข้าสินค้าจากจีน",
    "ขนส่งจีนไทย",
    "ชิปปิ้งจีน",
    "บริการนำเข้าสินค้าจากจีน",
    "cargo จีนไทย",
    "shipping จีน",
    "ขนส่งสินค้าจากจีนมาไทย",
    "นำเข้าจีนครบวงจร",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSansThai.variable} ${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
