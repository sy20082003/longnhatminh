"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products } from "@/lib/products";

const categories = [
  "Tất cả",
  "Vật tư & Thiết bị trạm biến áp",
  "Phụ kiện đường dây",
  "Vật tư & Thiết bị điện mặt trời",
  "Vật tư tiếp địa chống sét",
] as const;
const PER_PAGE = 9;

export default function SanPhamPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Tất cả");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const selectedProduct = products.find((p) => p.id === selectedId) ?? null;

  function handleCategory(cat: (typeof categories)[number]) {
    setActiveCategory(cat);
    setPage(0);
  }

  return (
    <>
      <PageHero
        eyebrow="Sản phẩm"
        title="Danh mục sản phẩm"
        desc="Vật tư, thiết bị điện do Long Nhật Minh sản xuất, phân phối và nhập khẩu. Liên hệ để được báo giá chi tiết theo nhu cầu công trình."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Bộ lọc danh mục */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white"
                    : "bg-navy-50 text-navy-600 hover:bg-navy-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Lưới sản phẩm */}
          {paginated.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedId(product.id)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-navy-400">
              Chưa có sản phẩm trong danh mục này.
            </p>
          )}

          {/* Điều hướng trang */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm transition-all hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Trang trước"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx)}
                    className={`rounded-full transition-all ${
                      idx === page
                        ? "h-2.5 w-6 bg-navy-900"
                        : "h-2.5 w-2.5 bg-navy-200 hover:bg-navy-400"
                    }`}
                    aria-label={`Trang ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page === totalPages - 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm transition-all hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Trang sau"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <p className="mt-3 text-center text-xs text-navy-400">
              Trang {page + 1} / {totalPages} &nbsp;·&nbsp; {filtered.length} sản phẩm
            </p>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
