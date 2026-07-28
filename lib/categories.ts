import {
  Sun,
  Zap,
  Building2,
  GaugeCircle,
  type LucideIcon,
} from "lucide-react";

export type CategorySlug =
  | "he-thong-dien-mat-troi"
  | "vat-tu-tiep-dia-chong-set"
  | "ket-cau-thep-phu-kien-luoi-dien"
  | "vat-tu-tram-bien-ap";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: LucideIcon; // dùng làm ảnh đại diện khi danh mục chưa có sản phẩm/ảnh thật và cũng chưa có "image"
  image?: string; // đường dẫn ảnh thật (ưu tiên hiển thị thay icon khi danh mục chưa có sản phẩm)
};

/**
 * HƯỚNG DẪN THÊM/SỬA DANH MỤC:
 * Thêm object mới vào mảng bên dưới. slug phải viết không dấu, không trùng,
 * và phải khớp với giá trị "category" tương ứng của sản phẩm trong lib/products.ts.
 */
export const categories: Category[] = [
  {
    slug: "he-thong-dien-mat-troi",
    name: "Hệ thống điện mặt trời",
    description:
      "Cung cấp vật tư và giải pháp điện mặt trời áp mái, hòa lưới, độc lập và lưu trữ.",
    icon: Sun,
    image: "/images/cover_htdmt.png",
  },
  {
    slug: "vat-tu-tiep-dia-chong-set",
    name: "Vật tư tiếp địa - chống sét",
    description:
      "Cọc tiếp địa, dây đồng, kẹp tiếp địa, thuốc hàn hóa nhiệt và phụ kiện.",
    icon: Zap,
    image: "/images/cover_vttd.jpg",
  },
  {
    slug: "ket-cau-thep-phu-kien-luoi-dien",
    name: "Kết cấu thép & phụ kiện lưới điện",
    description:
      "Gia công kết cấu thép, phụ kiện đường dây và trạm biến áp đến 220kV.",
    icon: Building2,
    image: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-1.jpg",
  },
  {
    slug: "vat-tu-tram-bien-ap",
    name: "Vật tư trạm biến áp",
    description:
      "Cung cấp vật tư, thiết bị cho trạm biến áp và hệ thống điện công nghiệp.",
    icon: GaugeCircle,
    image: "/images/tba-110kv-vinh-loc/anh-1.jpg",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}
