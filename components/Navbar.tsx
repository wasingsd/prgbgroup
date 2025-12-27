"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/pr-cargo', label: 'PR-Cargo' },
    { href: '/pr-travel', label: 'PR-Travel' },
    { href: '/contact', label: 'ติดต่อเรา' },
  ];

  const isHome = pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-bold text-xl">PR</div>
          <div className={`font-bold text-xl tracking-tight leading-tight ${isScrolled || !isHome ? 'text-[#1F2937]' : 'text-white drop-shadow-md'}`}>
            PR GLOBAL <br /><span className="text-sm font-normal">GROUP</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold hover:text-primary transition-colors ${pathname === item.href ? 'text-primary' :
                (isScrolled || !isHome ? 'text-[#1F2937]' : 'text-white drop-shadow-sm')
                }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-medium transition-all shadow-md text-sm">
            ขอใบเสนอราคา
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled || !isHome ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left font-medium py-2 border-b border-gray-100 ${pathname === item.href ? 'text-primary' : 'text-[#1F2937]'}`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-primary text-white w-full py-3 rounded-lg font-bold">
              ขอใบเสนอราคา
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
