"use client";

import { Phone, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HOTLINE_DISPLAY = "0938 978 138";
const HOTLINE_TEL = "0938978138";

function ContactBubble({
  href,
  label,
  className,
  children,
  external,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <div className="group relative flex items-center">
      {/* Tooltip số điện thoại */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        {HOTLINE_DISPLAY}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
        className={className}
      >
        {children}
      </a>
    </div>
  );
}

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Lên đầu trang"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-soft transition-transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <ContactBubble
        href="https://zalo.me/0938978138"
        label="Chat Zalo"
        external
        className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full bg-white shadow-soft transition-transform hover:scale-110"
      >
        <Image src="/images/icons/zalo.png" alt="Chat Zalo" width={52} height={52} className="h-full w-full object-cover" />
      </ContactBubble>

      <ContactBubble
        href={`tel:${HOTLINE_TEL}`}
        label="Gọi điện"
        className="flex h-[52px] w-[52px] animate-pulse items-center justify-center rounded-full bg-navy-700 p-3.5 text-white shadow-soft transition-transform hover:scale-110"
      >
        <Phone size={22} />
      </ContactBubble>
    </div>
  );
}
