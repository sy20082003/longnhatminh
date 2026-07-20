import {
  Sun,
  Cable,
  CircuitBoard,
  Layers,
  Zap,
  Building2,
  GaugeCircle,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type CategorySlug =
  | "he-thong-dien-mat-troi"
  | "day-cap-dien"
  | "thiet-bi-dien"
  | "thang-mang-cap"
  | "vat-tu-tiep-dia-chong-set"
  | "ket-cau-thep-phu-kien-luoi-dien"
  | "vat-tu-tram-bien-ap"
  | "thiet-bi-chieu-sang";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: LucideIcon; // dùng làm ảnh đại diện khi danh mục chưa có sản phẩm/ảnh thật
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
  },
  {
    slug: "day-cap-dien",
    name: "Dây cáp điện",
    description:
      "Phân phối dây cáp điện các loại: hạ thế, trung thế, cáp điều khiển, cáp chống cháy.",
    icon: Cable,
  },
  {
    slug: "thiet-bi-dien",
    name: "Thiết bị điện",
    description:
      "Cung cấp thiết bị điện chính hãng: MCB, MCCB, ACB, Contactor, Relay, SPD...",
    icon: CircuitBoard,
  },
  {
    slug: "thang-mang-cap",
    name: "Thang máng cáp",
    description:
      "Sản xuất và cung cấp thang máng cáp sắt, mạ kẽm, inox, sơn tĩnh điện.",
    icon: Layers,
  },
  {
    slug: "vat-tu-tiep-dia-chong-set",
    name: "Vật tư tiếp địa - chống sét",
    description:
      "Cọc tiếp địa, dây đồng, kẹp tiếp địa, thuốc hàn hóa nhiệt và phụ kiện.",
    icon: Zap,
  },
  {
    slug: "ket-cau-thep-phu-kien-luoi-dien",
    name: "Kết cấu thép & phụ kiện lưới điện",
    description:
      "Gia công kết cấu thép, phụ kiện đường dây và trạm biến áp đến 220kV.",
    icon: Building2,
  },
  {
    slug: "vat-tu-tram-bien-ap",
    name: "Vật tư trạm biến áp",
    description:
      "Cung cấp vật tư, thiết bị cho trạm biến áp và hệ thống điện công nghiệp.",
    icon: GaugeCircle,
  },
  {
    slug: "thiet-bi-chieu-sang",
    name: "Thiết bị chiếu sáng",
    description:
      "Đèn đường LED, đèn pha, đèn nhà xưởng và thiết bị chiếu sáng công nghiệp.",
    icon: Lightbulb,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}
