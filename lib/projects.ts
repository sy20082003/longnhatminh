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
    id: "cc-thep-ma-kem-bulong-tbt-ba-queo",
    title: "Cung cấp thép mạ kẽm bulong, trạm biến áp Bà Quẹo",
    category: "Trạm biến áp",
    location: "Ba Quẹo, TP. Hồ Chí Minh",
    capacity: "—",
    year: "2024",
    summary:
      "Cung cấp và lắp đặt hệ thống thép mạ kẽm, bulong cho trạm biến áp trung thế Bà Quẹo, đảm bảo độ bền và chống ăn mòn lâu dài.",
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
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-9.jpg", alt: "Tiếp địa chống sét TBA 220KV Vĩnh Lộc" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-2.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-3.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-4.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-5.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-6.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-7.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-8.jpg" },
      { src: "/images/cc-tiep-dia-chong-set-tba-220kv-vinh-loc/anh-1.jpg" },
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
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-7.jpg", alt: "Điện mặt trời áp mái trạm biến áp 110KV" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-2.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-3.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-4.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-5.jpg" },
      { src: "/images/mat-troi-tram-bien-ap-110kv/anh-1.jpg" },
    ],
  },
  {
  id: "goi-sua-chua-110kv-tba-110kv-binh-thuan",
  title: "Cung cấp toàn bộ vật tư gói sửa chữa lớn đường dây 110kV và Trạm biến áp 110kV Bình Thuận",
  category: "Trạm biến áp",
  location: "Bình Thuận",
  capacity: "110 kV", // Cấp điện áp của đường dây và trạm biến áp
  year: "2024",
  summary:
    "Cung cấp đồng bộ và đầy đủ toàn bộ vật tư, thiết bị phục vụ cho gói thầu sửa chữa lớn hệ thống đường dây tải điện 110kV và Trạm biến áp 110kV tại tỉnh Bình Thuận, đảm bảo vận hành an toàn, liên tục.",
  details: [
    "Khảo sát hiện trạng, lập danh mục và khối lượng vật tư thiết bị cần thay thế, sửa chữa",
    "Cung cấp vật tư đường dây 110kV: dây dẫn, cách điện, phụ kiện định vị, chống sét van...",
    "Cung cấp thiết bị trạm biến áp 110kV: máy biến áp, máy cắt, dao cách ly, hệ thống tủ điều khiển bảo vệ",
    "Vận chuyển toàn bộ vật tư đến công trường, phối hợp kiểm tra chất lượng, nghiệm thu và bàn giao đưa vào sử dụng",
  ],
  images: [
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-1.jpg", alt: "Vật tư thiết bị sửa chữa lớn trạm biến áp 110kV Bình Thuận" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-2.jpg", alt: "Cung cấp vật tư cách điện và phụ kiện đường dây 110kV" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-3.jpg", alt: "Thiết bị đóng cắt và bảo vệ cho trạm biến áp 110kV" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-4.jpg", alt: "Quá trình vận chuyển và tập kết vật tư tại công trình Bình Thuận" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-5.jpg", alt: "Kiểm tra kỹ thuật vật tư thiết bị điện trước khi lắp đặt" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-6.jpg", alt: "Hệ thống đường dây 110kV sau khi được thay thế vật tư mới" },
    { src: "/images/goi-sua-chua-100kv-tba-110kv-binh-thuan/anh-7.jpg", alt: "Toàn cảnh trạm biến áp 110kV Bình Thuận hoàn thành sửa chữa lớn" },
  ],
},
{
  id: "cai-tao-tba-110kv-vinh-loc",
  title: "Thực hiện cung cấp hàng hóa và dịch vụ lắp đặt Hệ thống tiếp địa, chiếu sáng, điều hòa và thông gió của công trình Cải tạo Trạm Biến Áp 110kV Vĩnh Lộc",
  category: "Trạm biến áp",
  location: "TP. Hồ Chí Minh", // Trạm Vĩnh Lộc thuộc khu vực TP.HCM
  capacity: "110 kV",
  year: "2026",
  summary:
    "Cung cấp đồng bộ thiết bị và triển khai thi công lắp đặt trọn gói hệ thống tiếp địa an toàn, hệ thống chiếu sáng sản xuất, cùng hệ thống điều hòa không khí và thông gió (HVAC) cho công trình Cải tạo Trạm Biến Áp 110kV Vĩnh Lộc.",
  details: [
    "Thi công đào rãnh, đóng cọc và hàn hóa nhiệt hệ thống tiếp địa an toàn cho trạm biến áp",
    "Lắp đặt hệ thống chiếu sáng nội bộ, chiếu sáng bảo vệ ngoài trời và trong nhà trạm",
    "Cung cấp và lắp đặt hệ thống điều hòa không khí, kiểm soát nhiệt độ độ ẩm cho phòng thiết bị điều khiển",
    "Triển khai hệ thống thông gió, đảm bảo lưu thông không khí và làm mát tự nhiên cho các phòng chức năng",
  ],
  images: [
    { src: "/images/tba-110kv-vinh-loc/anh-1.jpg", alt: "Thi công lắp đặt hệ thống tiếp địa Trạm biến áp 110kV Vĩnh Lộc" },
    { src: "/images/tba-110kv-vinh-loc/anh-2.jpg", alt: "Hệ thống chiếu sáng bảo vệ và chiếu sáng vận hành tại trạm" },
    { src: "/images/tba-110kv-vinh-loc/anh-3.jpg", alt: "Lắp đặt điều hòa không khí cho phòng tủ bảng điều khiển bảo vệ" },
    { src: "/images/tba-110kv-vinh-loc/anh-4.jpg", alt: "Hệ thống thông gió làm mát nhà trạm biến áp 110kV" },
    { src: "/images/tba-110kv-vinh-loc/anh-5.jpg", alt: "Nghiệm thu lắp đặt vật tư thiết bị hạng mục phụ trợ" },
  ],
},
{
  id: "cc-van-xa-loc-dau-thay-bo-mba-phan-thiet",
  title: "Cung cấp van xả áp, lọc dầu máy biến áp, thay bo điều khiển máy biến áp, trạm biến áp 110kV Phan Thiết",
  category: "Trạm biến áp",
  location: "Bình Thuận", // Phan Thiết thuộc tỉnh Bình Thuận
  capacity: "110 kV",
  year: "2025",
  summary:
    "Cung cấp vật tư thiết bị chính hãng và thực hiện dịch vụ thay thế hệ thống van xả áp, lọc dầu máy biến áp cùng bo mạch điều khiển cho máy biến áp lực tại Trạm Biến Áp 110kV Phan Thiết.",
  details: [
    "Cung cấp và thay thế van xả áp lực lớn, đảm bảo an toàn cho vỏ và kết cấu máy biến áp khi có sự cố",
    "Thực hiện lọc dầu tuần hoàn, khử ẩm và cung cấp lõi lọc dầu chính hãng cho máy biến áp 110kV",
    "Khảo sát, tháo dỡ bo mạch cũ và lắp đặt bo điều khiển máy biến áp thế hệ mới",
    "Cấu hình, kiểm tra các chức năng bảo vệ, đo lường và nghiệm thu bàn giao hệ thống vận hành ổn định",
  ],
  images: [
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-1.png", alt: "Cung cấp vật tư van xả áp và lọc dầu máy biến áp 110kV Phan Thiết" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-2.png", alt: "Quá trình thay thế van xả áp an toàn cho máy biến áp" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-3.png", alt: "Hệ thống thiết bị lọc dầu máy biến áp lực đang vận hành" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-4.png", alt: "Lắp đặt và đấu nối bo điều khiển mới cho máy biến áp" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-5.png", alt: "Kiểm tra thông số kỹ thuật bo mạch điều khiển máy biến áp 110kV" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-6.png", alt: "Vật tư lọc dầu máy biến áp chính hãng được cung cấp tại trạm" },
    { src: "/images/cc-van-xa-loc-dau-thay-bo-mba/anh-7.png", alt: "Hoàn thành công tác bảo dưỡng và nghiệm thu máy biến áp TBA 110kV Phan Thiết" },
  ],
},
];