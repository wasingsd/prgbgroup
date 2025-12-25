import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "PR Global Group | บริการขนส่งนำเข้าสินค้าจีน–ไทย และท่องเที่ยวครบวงจร",
  description: "PR Global Group ให้บริการขนส่งนำเข้าสินค้าจีน–ไทยครบวงจร ดูแลตั้งแต่ต้นทางถึงปลายทาง พร้อมบริการท่องเที่ยวและทัวร์ดูงาน มืออาชีพ โปร่งใส ปรึกษาฟรี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
