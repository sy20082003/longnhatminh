"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import GalleryCard from "@/components/GalleryCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/projects";

const categories = ["Tất cả", "Trạm biến áp", "Điện nhà xưởng"] as const;

export default function ThuVienAnhPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Tất cả");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "Tất cả"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <>
      <PageHero
        eyebrow="Thư viện"
        title="Hình ảnh công trình tiêu biểu"
        desc="Bấm vào từng công trình để xem chi tiết thông tin, hạng mục thực hiện và thêm hình ảnh minh họa."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <GalleryCard
                key={project.id}
                project={project}
                onClick={() => setSelectedId(project.id)}
              />
            ))}
          </div>
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
