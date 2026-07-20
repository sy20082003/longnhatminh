import { ShieldCheck, LayoutGrid, Truck, Headset } from "lucide-react";
import PageHero from "@/components/PageHero";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Sản phẩm chính hãng",
    desc: "Cam kết 100% chính hãng",
  },
  {
    icon: LayoutGrid,
    title: "Đa dạng chủng loại",
    desc: "Đáp ứng mọi nhu cầu dự án",
  },
  {
    icon: Truck,
    title: "Giao hàng toàn quốc",
    desc: "Nhanh chóng - Đúng tiến độ",
  },
  {
    icon: Headset,
    title: "Hỗ trợ kỹ thuật 24/7",
    desc: "Đồng hành cùng khách hàng",
  },
];

export default function SanPhamPage() {
  return (
    <>
      <PageHero
        eyebrow="Sản phẩm"
        title="Danh mục sản phẩm"
        desc="Vật tư, thiết bị điện do Long Nhật Minh sản xuất, phân phối và nhập khẩu. Chọn một danh mục để xem các sản phẩm cụ thể, hoặc liên hệ để được báo giá theo nhu cầu công trình."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          {/* Lưới danh mục */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const productsInCategory = products.filter((p) => p.category === cat.slug);
              return (
                <CategoryCard
                  key={cat.slug}
                  category={cat}
                  coverImage={productsInCategory[0]?.images[0]?.src}
                  productCount={productsInCategory.length}
                />
              );
            })}
          </div>

          {/* Thanh điểm nổi bật */}
          <div className="mt-14 grid grid-cols-1 gap-6 rounded-3xl bg-navy-950 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                  <h.icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{h.title}</p>
                  <p className="mt-0.5 text-xs text-navy-300">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
