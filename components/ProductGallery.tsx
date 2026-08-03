"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { ProductImage } from "@/lib/products";

export default function ProductGallery({
  images,
  productName,
}: {
  images: ProductImage[];
  productName: string;
}) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div>
      {/* Ảnh chính — khung vuông đúng theo tỉ lệ ảnh sản phẩm, không còn viền thừa */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
        <Image
          src={images[activeImg].src}
          alt={images[activeImg].alt ?? productName}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveImg((i) => (i + 1) % images.length)}
              aria-label="Ảnh sau"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-950/60 px-3 py-1 text-xs font-semibold text-white">
              {activeImg + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                idx === activeImg ? "border-navy-600" : "border-transparent opacity-70"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `${productName} - ảnh ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
