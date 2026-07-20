export type ProductImage = {
  src: string;
  alt?: string;
};

export type Product = {
  id: string;
  name: string;
  category:
    | "Thiết bị trạm biến áp"
    | "Phụ kiện đường dây"
    | "Kết cấu thép mạ kẽm"
    | "Thiết bị điện mặt trời";
  unit: string; // đơn vị tính, vd: "Bộ", "Cái", "Mét", "Tấn"
  summary: string; // mô tả ngắn hiển thị ở card
  details: string[]; // thông số kỹ thuật / đặc điểm nổi bật
  images: ProductImage[];
};

/**
 * HƯỚNG DẪN THÊM SẢN PHẨM MỚI:
 * 1. Tạo thư mục ảnh tại: public/images/san-pham/<id-san-pham>/
 * 2. Copy đoạn object mẫu bên dưới, đổi id (không dấu, không trùng), tên, danh mục, mô tả, thông số và đường dẫn ảnh.
 * 3. Sản phẩm sẽ tự động xuất hiện trên trang /san-pham, không cần sửa code nào khác.
 */
export const products: Product[] = [
  {
    id: "bulong-thep-ma-kem-tbt",
    name: "Bulông thép mạ kẽm nhúng nóng cho trạm biến áp",
    category: "Thiết bị trạm biến áp",
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
    category: "Phụ kiện đường dây",
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
        src: "/images/san-pham/coc-tiep-dia-chong-set/anh-1.jpg",
        alt: "Cọc tiếp địa chống sét",
      },
    ],
  },
];
