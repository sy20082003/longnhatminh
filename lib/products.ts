import type { CategorySlug } from "@/lib/categories";

export type ProductImage = {
  src: string;
  alt?: string;
};

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  unit: string; // đơn vị tính, vd: "Bộ", "Cái", "Mét", "Tấn"
  summary: string; // mô tả ngắn hiển thị ở card
  details: string[]; // thông số kỹ thuật / đặc điểm nổi bật
  images: ProductImage[];
};

/**
 * HƯỚNG DẪN THÊM SẢN PHẨM MỚI:
 * 1. Tạo thư mục ảnh tại: public/images/san-pham/<id-san-pham>/
 * 2. Copy đoạn object mẫu bên dưới, đổi id (không dấu, không trùng), tên, mô tả, thông số và đường dẫn ảnh.
 *    category phải là một trong các slug khai báo tại lib/categories.ts (vd: "vat-tu-tram-bien-ap").
 * 3. Sản phẩm sẽ tự động xuất hiện trong đúng danh mục trên trang /san-pham, không cần sửa code nào khác.
 */
export const products: Product[] = [
  {
    id: "bulong-thep-ma-kem-tbt",
    name: "Bulông thép mạ kẽm nhúng nóng cho trạm biến áp",
    category: "vat-tu-tram-bien-ap",
    unit: "Bộ",
    summary:
      "Bulông mạ kẽm nhúng nóng đạt tiêu chuẩn kỹ thuật, chống ăn mòn cao, dùng cho kết cấu trạm biến áp trung và cao thế.",
    details: [
      "Chất liệu thép cường độ cao, mạ kẽm nhúng nóng theo tiêu chuẩn TCVN/ASTM",
      "Chống ăn mòn, phù hợp lắp đặt ngoài trời trong thời gian dài",
      "Đa dạng quy cách theo yêu cầu thiết kế công trình",
      "Có sẵn hàng, giao nhanh theo tiến độ thi công",
    ],
    images: [
      {
        src: "/images/san-pham/bulong-thep-ma-kem-tbt/anh-1.jpg",
        alt: "Bulông thép mạ kẽm nhúng nóng",
      },
    ],
  },
  {
    id: "coc-tiep-dia-chong-set",
    name: "Cọc tiếp địa chống sét",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Cây",
    summary:
      "Cọc tiếp địa mạ đồng/mạ kẽm dùng cho hệ thống tiếp địa chống sét trạm biến áp và đường dây tải điện.",
    details: [
      "Vật liệu thép mạ đồng hoặc mạ kẽm, dẫn điện tốt, độ bền cao",
      "Đảm bảo điện trở tiếp địa đạt tiêu chuẩn ngành điện",
      "Nhiều chiều dài và đường kính theo yêu cầu công trình",
      "Kèm phụ kiện đấu nối, kẹp cáp đồng bộ",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/coc_tiep_dia_01.jpg",
        alt: "Cọc tiếp địa chống sét",
      },
    ],
  },
  {
    id: "cap-dong-tran",
    name: "Cáp đồng trần",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Mét",
    summary:
      "Cáp đồng trần dùng để liên kết hệ thống tiếp địa, dẫn sét xuống đất an toàn cho trạm biến áp và công trình điện.",
    details: [
      "Chất liệu đồng nguyên chất, độ dẫn điện cao",
      "Khả năng chịu dòng sét và dòng sự cố tốt",
      "Đa dạng tiết diện theo yêu cầu thiết kế hệ thống tiếp địa",
      "Độ bền cao, chống ăn mòn trong môi trường chôn đất",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/cap_dong_tran.jpg",
        alt: "Cáp đồng trần",
      },
    ],
  },
  {
    id: "kep-khung-han",
    name: "Kẹp khung hàn",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Cái",
    summary:
      "Kẹp khung hàn dùng để cố định khuôn hàn hóa nhiệt trong quá trình thi công mối nối tiếp địa.",
    details: [
      "Kết cấu chắc chắn, giữ chặt khuôn hàn trong lúc hàn",
      "Thao tác nhanh, thuận tiện khi thi công ngoài công trường",
      "Tương thích với các loại khuôn hàn hóa nhiệt phổ biến",
      "Độ bền cao, tái sử dụng nhiều lần",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/kep_khung_han.jpg",
        alt: "Kẹp khung hàn",
      },
    ],
  },
  {
    id: "khuon-han-goldweld",
    name: "Khuôn hàn Goldweld",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Bộ",
    summary:
      "Khuôn hàn hóa nhiệt Goldweld dùng để tạo mối hàn giữa cáp đồng, cọc tiếp địa và các phụ kiện hệ thống tiếp địa - chống sét.",
    details: [
      "Chất liệu graphite chịu nhiệt cao, tuổi thọ dài",
      "Đa dạng khuôn theo từng kiểu mối nối (T, thẳng, chữ thập...)",
      "Đảm bảo mối hàn đạt độ dẫn điện và độ bền cơ học cao",
      "Phù hợp thi công hệ thống tiếp địa trạm biến áp, đường dây tải điện",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/khung_han_goldweld.jpg",
        alt: "Khuôn hàn Goldweld",
      },
    ],
  },
  {
    id: "dong-thanh-cai",
    name: "Đồng thanh cái",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Cây",
    summary:
      "Đồng thanh cái (thanh cái tiếp địa) dùng làm điểm đấu nối trung tâm cho hệ thống tiếp địa - chống sét công trình.",
    details: [
      "Chất liệu đồng nguyên chất, dẫn điện tốt, chống oxy hóa",
      "Khoan sẵn lỗ bắt vít, thuận tiện đấu nối nhiều dây tiếp địa",
      "Đa dạng kích thước theo yêu cầu công trình",
      "Lắp đặt trong tủ điện, phòng kỹ thuật hoặc trạm biến áp",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/dong_thanh_cai.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_1.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_2.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_3.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_4.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_5.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_6.jpg",
        alt: "Đồng thanh cái",
      },
      {
        src: "/images/san_pham/vttd/dong_thanh_cai_7.jpg",
        alt: "Đồng thanh cái",
      },
    ],
  },
  {
    id: "thuoc-han-goldweld",
    name: "Thuốc hàn Goldweld",
    category: "vat-tu-tiep-dia-chong-set",
    unit: "Gói",
    summary:
      "Thuốc hàn hóa nhiệt Goldweld dùng kèm khuôn hàn để tạo mối hàn tiếp địa bền vững, dẫn điện tốt.",
    details: [
      "Phản ứng nhiệt nhôm tạo mối hàn đồng chắc chắn, không cần nguồn điện",
      "Đa dạng trọng lượng theo tiết diện cáp và loại mối nối",
      "Mối hàn chịu được dòng sự cố và điều kiện môi trường khắc nghiệt",
      "Thi công nhanh, phù hợp công trình tiếp địa - chống sét ngoài trời",
    ],
    images: [
      {
        src: "/images/san_pham/vttd/thuoc_han_goldweld.jpg",
        alt: "Thuốc hàn Goldweld",
      },
    ],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

// Sản phẩm liên quan: cùng danh mục, không bao gồm chính nó, tối đa `limit` sản phẩm
export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
