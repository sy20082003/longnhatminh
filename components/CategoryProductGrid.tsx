"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

const PER_PAGE = 12;

// Chuẩn hóa chuỗi: bỏ dấu tiếng Việt, chữ thường, để tìm không dấu vẫn ra kết quả
function stripDiacritics(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

export default function CategoryProductGrid({ products }: { products: Product[] }) {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const normalizedQuery = stripDiacritics(query.trim());
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const filtered = queryWords.length
    ? products.filter((p) => {
        const haystack = stripDiacritics(`${p.name} ${p.summary}`);
        return queryWords.every((w) => haystack.includes(w));
      })
    : products;

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(0);
  }

  return (
    <>
      {/* Thanh tìm kiếm trong danh mục */}
      <div className="mx-auto max-w-xl">
        <div className="relative">
          <Search
            size={20}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Tìm kiếm sản phẩm trong danh mục này..."
            className="w-full rounded-full border border-navy-200 bg-white py-3.5 pl-12 pr-11 text-sm font-medium text-navy-800 shadow-sm outline-none transition-colors placeholder:text-navy-400 focus:border-navy-400"
          />
          {query && (
            <button
              onClick={() => handleQueryChange("")}
              aria-label="Xóa tìm kiếm"
              className="absolute right-3.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy-400 transition-colors hover:bg-navy-50 hover:text-navy-700"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Lưới sản phẩm */}
      {paginated.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-navy-400">
          {normalizedQuery
            ? `Không tìm thấy sản phẩm phù hợp với "${query}".`
            : "Danh mục này chưa có sản phẩm, vui lòng liên hệ để được tư vấn trực tiếp."}
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
    </>
  );
}
