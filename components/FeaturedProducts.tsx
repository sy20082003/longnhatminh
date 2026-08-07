import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const MAX_HOME_PRODUCTS = 8;

// Thêm id sản phẩm vào đây để ẩn khỏi trang chủ (sản phẩm vẫn hiển thị bình thường ở /san-pham)
const HIDDEN_ON_HOME: string[] = ["bulong-thep-ma-kem-tbt"];

export default function FeaturedProducts() {
  const featured = products
    .filter((p) => !HIDDEN_ON_HOME.includes(p.id))
    .slice(0, MAX_HOME_PRODUCTS);

  return (
    <section className="section-py bg-soft-gradient">
      <div className="container-px mx-auto max-w-7xl">
        {/* TITLE */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Sản phẩm</span>
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          <p className="mt-4 text-navy-500">
            Vật tư, thiết bị điện do Long Nhật Minh sản xuất, phân phối và
            nhập khẩu, đáp ứng đa dạng nhu cầu công trình.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/san-pham" className="btn-primary">
            Xem tất cả sản phẩm
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
