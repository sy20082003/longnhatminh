import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, Package } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { products, getProductById, getRelatedProducts } from "@/lib/products";

type Props = {
  params: { slug: string; productId: string };
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.category, productId: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductById(params.productId);
  if (!product || product.category !== params.slug) return {};

  const category = getCategoryBySlug(product.category);
  const description = product.summary;

  return {
    title: product.name,
    description,
    alternates: {
      canonical: `/san-pham/${product.category}/${product.id}`,
    },
    openGraph: {
      title: product.name,
      description,
      type: "website",
      images: product.images[0] ? [{ url: product.images[0].src }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
    },
    keywords: [product.name, category?.name ?? "", "Long Nhật Minh"].filter(Boolean),
  };
}

export default function SanPhamChiTietPage({ params }: Props) {
  const product = getProductById(params.productId);
  if (!product || product.category !== params.slug) notFound();

  const category = getCategoryBySlug(product.category);
  if (!category) notFound();

  const related = getRelatedProducts(product);

  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-navy-400">
          <Link href="/san-pham" className="font-medium text-navy-600 hover:text-navy-900">
            Sản phẩm
          </Link>
          <ChevronRight size={14} />
          <Link
            href={`/san-pham/${category.slug}`}
            className="font-medium text-navy-600 hover:text-navy-900"
          >
            {category.name}
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-gold-600">{product.name}</span>
        </div>

        {/* Chi tiết sản phẩm */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} productName={product.name} />

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              {category.name}
            </span>
            <h1 className="mt-1.5 text-2xl font-extrabold text-navy-900 sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-navy-500">
              <span className="flex items-center gap-1.5">
                <Package size={16} className="text-navy-400" />
                Đơn vị tính: {product.unit}
              </span>
            </div>

            <p className="mt-5 leading-relaxed text-navy-700">{product.summary}</p>

            <h2 className="mt-6 text-sm font-bold uppercase tracking-wider text-navy-400">
              Thông số / đặc điểm nổi bật
            </h2>
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

        {/* Sản phẩm liên quan */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-extrabold text-navy-900 sm:text-2xl">
              Sản phẩm liên quan
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
