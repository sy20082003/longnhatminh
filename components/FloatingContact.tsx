"use client";

import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

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
      <a
        href="https://zalo.me/0938978138"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gold-gradient p-3.5 text-navy-900 shadow-soft transition-transform hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:0938978138"
        aria-label="Gọi điện"
        className="flex h-[52px] w-[52px] animate-pulse items-center justify-center rounded-full bg-navy-700 p-3.5 text-white shadow-soft transition-transform hover:scale-110"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
