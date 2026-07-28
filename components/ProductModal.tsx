"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Package } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/categories";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const categoryName = getCategoryBySlug(product.category)?.name ?? product.category;

  useEffect(() => {
    setActiveImg(0);
  }, [product]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((i) => (i + 1) % product.images.length);
      if (e.key === "ArrowLeft")
        setActiveImg((i) => (i - 1 + product.images.length) % product.images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, product.images.length]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy-800 shadow-md transition-colors hover:bg-white"
        >
          <X size={20} />
        </button>

        {/* Ảnh chính — giữ đúng tỉ lệ, không crop */}
        <div className="relative w-full bg-navy-950">
          <Image
            src={product.images[activeImg].src}
            alt={product.images[activeImg].alt ?? product.name}
            width={900}
            height={600}
            className="h-auto max-h-[60vh] w-full object-contain"
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImg((i) => (i - 1 + product.images.length) % product.images.length)
                }
                aria-label="Ảnh trước"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % product.images.length)}
                aria-label="Ảnh sau"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-950/60 px-3 py-1 text-xs font-semibold text-white">
            {activeImg + 1} / {product.images.length}
          </span>
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto px-6 pt-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  idx === activeImg ? "border-navy-600" : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? `${product.name} - ảnh ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Nội dung */}
        <div className="p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
            {categoryName}
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold text-navy-900 sm:text-3xl">
            {product.name}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-navy-500">
            <span className="flex items-center gap-1.5">
              <Package size={16} className="text-navy-400" />
              Đơn vị tính: {product.unit}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-navy-700">{product.summary}</p>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-navy-400">
            Thông số / đặc điểm nổi bật
          </h3>
          <ul className="mt-3 space-y-2.5">
            {product.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-navy-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-extrabold text-navy-900">Liên hệ báo giá</p>
            <a href="/lien-he" className="btn-primary">
              Nhận báo giá sản phẩm này
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
