"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { CARGO_URL, LINE_URL, PHONE, TRAVEL_URL } from "@/app/utils/site";

const links = [
  { href: "/", label: "หน้าแรก", external: false },
  { href: "/pr-cargo", label: "PR Cargo", external: false },
  { href: TRAVEL_URL, label: "PR Travel", external: true },
  { href: "/contact", label: "ติดต่อเรา", external: false },
];

export default function Navbar() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        ข้ามไปยังเนื้อหา
      </a>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>เชื่อมต่อธุรกิจและการเดินทาง จีน–ไทย</span>
          <div>
            <a href={`tel:${PHONE}`}>
              <Phone size={13} /> {PHONE}
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={13} /> LINE: @prcargo
            </a>
          </div>
        </div>
      </div>
      <div className="site-container nav-inner">
        <Link
          href="/"
          aria-label="PR Global Group หน้าแรก"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
        </Link>
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {links.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {label}
                <ArrowUpRight size={14} />
                <span className="sr-only"> เปิดเว็บไซต์ใหม่</span>
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? "active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ),
          )}
        </nav>
        <div className="nav-actions">
          <a
            className="login-link"
            href={CARGO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            เข้าสู่ระบบ / สมัครสมาชิก
            <ArrowUpRight size={14} />
          </a>
          <a
            className="button button-primary button-small"
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            ขอใบเสนอราคา
          </a>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="เมนูหลักบนมือถือ"
        hidden={!open}
      >
        <div className="site-container">
          {links.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {label}
                <ArrowUpRight size={16} />
                <span className="sr-only"> เปิดเว็บไซต์ใหม่</span>
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ),
          )}
          <div className="mobile-actions">
            <a
              className="button button-primary"
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ขอใบเสนอราคา
              <MessageCircle size={17} />
            </a>
            <a
              className="button button-outline"
              href={CARGO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              เข้าสู่ระบบ / สมัครสมาชิก
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
