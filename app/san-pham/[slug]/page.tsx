import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function DanhMucSanPhamPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category.slug);

  return (
    <>
      <PageHero
        eyebrow="Sản phẩm"
        title={category.name}
        desc={category.description}
        image="/images/website.png"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-navy-400">
            <Link href="/san-pham" className="font-medium text-navy-600 hover:text-navy-900">
              Sản phẩm
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-gold-600">{category.name}</span>
          </div>

          <CategoryProductGrid products={categoryProducts} />
        </div>
      </section>
    </>
  );
}
