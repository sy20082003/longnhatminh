"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import GalleryCard from "@/components/GalleryCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/projects";

const categories = ["Tất cả", "Trạm biến áp", "Điện nhà xưởng", "Điện mặt trời"] as const;
const PER_PAGE = 6;

// Phân tích trường "year": có thể là ngày đầy đủ "dd/mm/yyyy" hoặc chỉ năm "yyyy"
function parseProjectDate(year: string) {
  const fullDateMatch = year.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (fullDateMatch) {
    const [, d, m, y] = fullDateMatch;
    return {
      hasFullDate: true,
      year: Number(y),
      time: new Date(Number(y), Number(m) - 1, Number(d)).getTime(),
    };
  }
  return { hasFullDate: false, year: Number(year), time: 0 };
}

// Ưu tiên: 1) có ngày/tháng/năm đầy đủ (mới nhất trước) 2) năm hiện tại 3) các năm quá khứ (mới đến cũ)
function sortProjectsByPriority<T extends { year: string }>(items: T[]): T[] {
  const currentYear = new Date().getFullYear();

  return items.slice().sort((a, b) => {
    const infoA = parseProjectDate(a.year);
    const infoB = parseProjectDate(b.year);

    const groupOf = (info: ReturnType<typeof parseProjectDate>) =>
      info.hasFullDate ? 0 : info.year === currentYear ? 1 : 2;

    const groupA = groupOf(infoA);
    const groupB = groupOf(infoB);

    if (groupA !== groupB) return groupA - groupB;
    if (groupA === 0) return infoB.time - infoA.time; // ngày đầy đủ: mới nhất lên đầu
    return infoB.year - infoA.year; // năm hiện tại / quá khứ: mới đến cũ
  });
}

export default function ThuVienAnhPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Tất cả");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered = sortProjectsByPriority(
    activeCategory === "Tất cả"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  // Reset về trang đầu khi đổi category
  function handleCategory(cat: (typeof categories)[number]) {
    setActiveCategory(cat);
    setPage(0);
  }

  return (
    <>
      <PageHero
        eyebrow="Thư viện"
        title="Hình ảnh công trình tiêu biểu"
        desc="Bấm vào từng công trình để xem chi tiết thông tin, hạng mục thực hiện và thêm hình ảnh minh họa."
        image="/images/website.png"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Filter category */}
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

          {/* Grid 6 dự án */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((project) => (
              <GalleryCard
                key={project.id}
                project={project}
                onClick={() => setSelectedId(project.id)}
              />
            ))}
          </div>

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

              {/* Dots */}
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

          {/* Số trang */}
          {totalPages > 1 && (
            <p className="mt-3 text-center text-xs text-navy-400">
              Trang {page + 1} / {totalPages} &nbsp;·&nbsp; {filtered.length} công trình
            </p>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
