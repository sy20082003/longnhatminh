"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  {
    label: "Dịch vụ",
    children: [
      { 
        href: "/dich-vu/ket-cau-thep-phu-kien-luoi-dien", 
        label: "Sản xuất Kết cấu thép & Phụ kiện Lưới điện" 
      },
      { 
        href: "/dich-vu/vat-tu-thiet-bi-duong-day-tram-dien", 
        label: "Phân phối Vật tư & Thiết bị Đường dây 220kV" 
      },
      { 
        href: "/dich-vu/dien-mat-troi", 
        label: "Điện mặt trời áp mái" 
      },
      { 
        href: "/dich-vu/nhap-khau-phan-phoi", 
        label: "Nhập khẩu & Phân phối trực tiếp" 
      },
    ],
  },
  { href: "/thu-vien-anh", label: "Thư viện ảnh" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-600">
                  {link.label}
                  <ChevronDown size={15} />
                </button>
                {serviceOpen && (
                  <div className="absolute left-0 top-full w-80 rounded-2xl border border-navy-100 bg-white p-2 shadow-soft">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-600"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:0938978138"
            className="flex items-center gap-2 text-sm font-bold text-navy-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient">
              <Phone size={16} className="text-navy-900" />
            </span>
            0938 978 138
          </a>
          <Link href="/lien-he" className="btn-primary">
            Nhận báo giá
          </Link>
        </div>

        <button
          className="rounded-full p-2 text-navy-800 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Mở menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-400">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-50"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/lien-he" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Nhận báo giá
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}