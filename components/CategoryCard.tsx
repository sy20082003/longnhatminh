import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/categories";

export default function CategoryCard({
  category,
  coverImage,
  productCount,
}: {
  category: Category;
  coverImage?: string;
  productCount: number;
}) {
  const Icon = category.icon;
  const displayImage = category.image ?? coverImage;

  return (
    <Link
      href={`/san-pham/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
            <Icon size={48} className="text-gold-400" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold text-navy-900">
          {category.name}
          <span className="mt-1 block h-0.5 w-10 bg-gold-500" />
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">
          {category.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-navy-400">
            {productCount > 0 ? `${productCount} sản phẩm` : "Đang cập nhật"}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
