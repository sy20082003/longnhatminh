export type ProjectImage = {
  src: string;
  alt?: string;
};

export type Project = {
  id: string;
  title: string;
  category: "Trạm biến áp" | "Điện nhà xưởng" | "Điện mặt trời";
  location: string;
  capacity: string;
  year: string;
  summary: string;
  details: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "tvpn-mba-110kv-phan-thiet",
    title: "Thay van phòng nổ MBA 110KV Phan Thiết",
    category: "Trạm biến áp",
    location: "Phan Thiết, Bình Thuận",
    capacity: "110 KV",
    year: "2024",
    summary:
      "Thực hiện thay thế van phòng nổ máy biến áp 110KV tại trạm Phan Thiết, đảm bảo an toàn vận hành và kéo dài tuổi thọ thiết bị.",
    details: [
      "Khảo sát hiện trạng, đánh giá tình trạng van phòng nổ cần thay thế",
      "Lên phương án thi công đảm bảo an toàn trong môi trường điện áp cao 110KV",
      "Thay thế van phòng nổ đúng chủng loại, đúng thông số kỹ thuật theo yêu cầu",
      "Kiểm tra, thử nghiệm sau lắp đặt, bàn giao và nghiệm thu với đơn vị quản lý vận hành",
    ],
    images: [
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-8.jpg", alt: "Thay van phòng nổ MBA 110KV Phan Thiết" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-2.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-3.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-4.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-5.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-6.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-7.jpg" },
      { src: "/images/tvpn-mba-110kv-phan-thiet/anh-1.jpg" },
    ],
  },
  {
    id: "cc-thep-ma-kem-bulong-tbt-ba-queo",
    title: "Cung cấp thép mạ kẽm bulong TBT Ba Quẹo",
    category: "Trạm biến áp",
    location: "Ba Quẹo, TP. Hồ Chí Minh",
    capacity: "—",
    year: "2024",
    summary:
      "Cung cấp và lắp đặt hệ thống thép mạ kẽm, bulong cho trạm biến áp trung thế Ba Quẹo, đảm bảo độ bền và chống ăn mòn lâu dài.",
    details: [
      "Tư vấn lựa chọn chủng loại thép mạ kẽm và bulong phù hợp tiêu chuẩn kỹ thuật trạm biến áp",
      "Cung cấp vật tư đúng quy cách, đạt tiêu chuẩn chống ăn mòn trong môi trường ngoài trời",
      "Lắp đặt và siết chặt đúng momen lực theo yêu cầu kỹ thuật của từng vị trí",
      "Nghiệm thu vật tư và công tác lắp đặt trước khi bàn giao công trình",
    ],
    images: [
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-2.jpg", alt: "Cung cấp thép mạ kẽm bulong TBT Ba Quẹo" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-1.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-3.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-4.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-5.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-6.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-7.jpg" },
      { src: "/images/cc-thep-ma-kem-bulong-tbt-ba-queo/anh-8.jpg" },
    ],
  },
  {
    id: "cc-tiep-dia-chong-set-tba-220kv-vinh-loc",
    title: "Cung cấp tiếp địa chống sét TBA 220KV Vĩnh Lộc",
    category: "Trạm biến áp",
    location: "Vĩnh Lộc, TP. Hồ Chí Minh",
    capacity: "220 KV",
    year: "2024",
    summary:
      "Cung cấp và thi công hệ thống tiếp địa chống sét cho trạm biến áp 220KV Vĩnh Lộc, bảo vệ thiết bị và an toàn vận hành toàn trạm.",
    details: [
      "Khảo sát điện trở suất đất, thiết kế hệ thống tiếp địa đạt yêu cầu điện trở tiếp địa theo tiêu chuẩn 220KV",
      "Cung cấp cọc tiếp địa, dây đồng trần, phụ kiện đấu nối đúng quy cách kỹ thuật",
      "Thi công chôn cọc, hàn hóa nhiệt các mối nối tiếp địa đảm bảo độ bền và dẫn điện tốt",
      "Đo kiểm điện trở tiếp địa sau thi công, lập biên bản nghiệm thu đạt yêu cầu kỹ thuật",
    ],
    images: [
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-1.jpg", alt: "Tiếp địa chống sét TBA 220KV Vĩnh Lộc" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-2.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-3.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-4.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-5.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-6.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-7.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-8.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-9.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-10.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-11.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-12.jpg" },
    ],
  },
  {
    id: "mat-troi-tram-bien-ap-110kv",
    title: "Điện mặt trời áp mái trạm biến áp 110KV",
    category: "Điện mặt trời",
    location: "TP. Hồ Chí Minh",
    capacity: "110 KV",
    year: "2024",
    summary:
      "Thi công hệ thống điện mặt trời áp mái tại khu vực trạm biến áp 110KV, cung cấp điện năng tự dùng cho hệ thống chiếu sáng và thiết bị phụ trợ trong trạm.",
    details: [
      "Khảo sát mái nhà trạm, đánh giá kết cấu chịu lực và hướng lắp đặt tấm pin tối ưu",
      "Thiết kế hệ thống điện mặt trời phù hợp nhu cầu tự dùng của trạm biến áp",
      "Lắp đặt tấm pin năng lượng mặt trời, inverter hòa lưới và tủ điện bảo vệ đúng tiêu chuẩn",
      "Đấu nối, kiểm tra vận hành và bàn giao hệ thống kèm hướng dẫn theo dõi qua ứng dụng",
    ],
    images: [
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-1.jpg", alt: "Điện mặt trời áp mái trạm biến áp 110KV" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-2.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-3.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-4.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-5.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-7.jpg" },
    ],
  },
];
ss