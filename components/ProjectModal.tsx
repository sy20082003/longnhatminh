"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Gauge, Calendar } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [project]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, project.images.length]);

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

        {/* Main image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
          <Image
            src={project.images[activeImg].src}
            alt={project.images[activeImg].alt ?? project.title}
            fill
            className="object-cover"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImg((i) => (i - 1 + project.images.length) % project.images.length)
                }
                aria-label="Ảnh trước"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % project.images.length)}
                aria-label="Ảnh sau"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-md transition-colors hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-950/60 px-3 py-1 text-xs font-semibold text-white">
            {activeImg + 1} / {project.images.length}
          </span>
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto px-6 pt-4">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  idx === activeImg ? "border-navy-600" : "border-transparent opacity-70"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? `${project.title} - ảnh ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
            {project.category}
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold text-navy-900 sm:text-3xl">
            {project.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-navy-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-navy-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Gauge size={16} className="text-navy-400" />
              {project.capacity}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-navy-400" />
              {project.year}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-navy-700">{project.summary}</p>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-navy-400">
            Hạng mục thực hiện
          </h3>
          <ul className="mt-3 space-y-2.5">
            {project.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-navy-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {d}
              </li>
            ))}
          </ul>

          <a href="/lien-he" className="btn-primary mt-7">
            Tư vấn công trình tương tự
          </a>
        </div>
      </div>
    </div>
  );
}
