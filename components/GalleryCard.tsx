import { Eye } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function GalleryCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const cover = project.images[0];

  return (
    <button
      onClick={onClick}
      className="group overflow-hidden rounded-2xl border border-navy-100 bg-white text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt ?? project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/40 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-md">
            <Eye size={16} />
            Xem chi tiết
          </span>
        </div>
        {project.images.length > 1 && (
          <span className="absolute right-2 top-2 rounded-full bg-navy-950/60 px-2.5 py-1 text-[11px] font-semibold text-white">
            +{project.images.length} ảnh
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
          {project.category}
        </p>
        <p className="mt-1 text-sm font-semibold text-navy-800">{project.title}</p>
        <p className="mt-0.5 text-xs text-navy-400">{project.location}</p>
      </div>
    </button>
  );
}