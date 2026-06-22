export type ProjectImage = {
  variant: number;
  paletteIndex: number;
};

export type Project = {
  id: string;
  title: string;
  category: "Trạm biến áp" | "Điện nhà xưởng";
  location: string;
  capacity: string;
  year: string;
  summary: string;
  details: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "tba-khu-cong-nghiep",
    title: "Trạm biến áp khu công nghiệp",
    category: "Trạm biến áp",
    location: "Tân Uyên, Bình Dương",
    capacity: "560 KVA",
    year: "2024",
    summary:
      "Trạm biến áp treo phục vụ cụm nhà máy sản xuất trong khu công nghiệp, đảm bảo cấp điện ổn định cho dây chuyền sản xuất liên tục.",
    details: [
      "Khảo sát và lựa chọn vị trí lắp đặt tối ưu, đảm bảo khoảng cách an toàn theo quy định ngành Điện lực",
      "Thiết kế trạm biến áp treo công suất 560 KVA, phù hợp tải tiêu thụ của nhà máy",
      "Thi công đường dây trung thế đấu nối vào lưới điện khu vực",
      "Hoàn tất hồ sơ pháp lý, được Điện lực phê duyệt đấu nối trước khi đóng điện",
    ],
    images: [
      { variant: 0, paletteIndex: 0 },
      { variant: 2, paletteIndex: 1 },
      { variant: 0, paletteIndex: 2 },
      { variant: 1, paletteIndex: 3 },
    ],
  },
  {
    id: "duong-day-trung-the",
    title: "Thi công đường dây trung thế",
    category: "Trạm biến áp",
    location: "Bến Cát, Bình Dương",
    capacity: "22 KV",
    year: "2023",
    summary:
      "Tuyến đường dây trung thế kéo dài hơn 800m phục vụ cấp điện cho khu dân cư và các hộ sản xuất nhỏ lẻ lân cận.",
    details: [
      "Khảo sát tuyến đường dây, xác định vị trí cột điện phù hợp địa hình",
      "Dựng cột bê tông ly tâm, căng dây theo đúng tiêu chuẩn kỹ thuật ngành điện",
      "Lắp đặt thiết bị bảo vệ chống sét, cầu dao phân đoạn trên tuyến",
      "Nghiệm thu, đo kiểm cách điện trước khi đóng điện vận hành",
    ],
    images: [
      { variant: 1, paletteIndex: 1 },
      { variant: 1, paletteIndex: 0 },
      { variant: 0, paletteIndex: 3 },
    ],
  },
  {
    id: "tu-dien-tong",
    title: "Lắp đặt tủ điện tổng",
    category: "Điện nhà xưởng",
    location: "Thuận An, Bình Dương",
    capacity: "400A",
    year: "2024",
    summary:
      "Tủ điện tổng phân phối cho nhà xưởng sản xuất gỗ, tích hợp hệ thống bảo vệ quá tải và chống giật an toàn.",
    details: [
      "Thiết kế sơ đồ tủ điện tổng theo công suất thực tế của nhà xưởng",
      "Lắp đặt aptomat tổng, aptomat nhánh đạt chuẩn an toàn điện",
      "Bố trí hệ thống tiếp địa, chống sét lan truyền cho toàn bộ tủ điện",
      "Dán nhãn, đánh số mạch rõ ràng, thuận tiện cho bảo trì sau này",
    ],
    images: [
      { variant: 2, paletteIndex: 2 },
      { variant: 2, paletteIndex: 0 },
      { variant: 0, paletteIndex: 1 },
    ],
  },
  {
    id: "tba-treo-35kv",
    title: "Trạm biến áp treo 35KV",
    category: "Trạm biến áp",
    location: "Tân Uyên, Bình Dương",
    capacity: "750 KVA",
    year: "2023",
    summary:
      "Trạm biến áp treo công suất lớn phục vụ cụm nhà máy chế biến nông sản, vận hành liên tục 24/7.",
    details: [
      "Tính toán phụ tải, lựa chọn máy biến áp công suất 750 KVA phù hợp nhu cầu sản xuất",
      "Thi công móng trụ, lắp đặt máy biến áp và hệ thống chống sét van",
      "Đấu nối đường dây 35KV vào lưới điện khu vực theo đúng quy trình",
      "Bàn giao kèm hồ sơ kỹ thuật, hướng dẫn vận hành cho đội ngũ kỹ thuật nhà máy",
    ],
    images: [
      { variant: 0, paletteIndex: 3 },
      { variant: 0, paletteIndex: 0 },
      { variant: 1, paletteIndex: 2 },
      { variant: 2, paletteIndex: 1 },
    ],
  },
  {
    id: "chieu-sang-xuong",
    title: "Hệ thống điện chiếu sáng xưởng",
    category: "Điện nhà xưởng",
    location: "Dĩ An, Bình Dương",
    capacity: "200 bộ đèn LED",
    year: "2024",
    summary:
      "Cải tạo hệ thống chiếu sáng nhà xưởng may mặc, chuyển đổi sang đèn LED tiết kiệm điện, nâng cao độ sáng làm việc.",
    details: [
      "Khảo sát độ rọi hiện trạng, tính toán bố trí đèn phù hợp tiêu chuẩn chiếu sáng công nghiệp",
      "Lắp đặt 200 bộ đèn LED highbay, đi dây âm trần gọn gàng",
      "Phân chia mạch chiếu sáng theo khu vực, lắp công tắc điều khiển độc lập",
      "Tiết kiệm khoảng 35% điện năng tiêu thụ so với hệ thống đèn cũ",
    ],
    images: [
      { variant: 1, paletteIndex: 0 },
      { variant: 2, paletteIndex: 3 },
      { variant: 1, paletteIndex: 1 },
    ],
  },
  {
    id: "dau-noi-tba",
    title: "Đấu nối trạm biến áp",
    category: "Trạm biến áp",
    location: "Tân Uyên, Bình Dương",
    capacity: "320 KVA",
    year: "2023",
    summary:
      "Thực hiện thủ tục và thi công đấu nối trạm biến áp mới vào lưới điện quốc gia cho nhà máy sản xuất thức ăn chăn nuôi.",
    details: [
      "Lập hồ sơ thiết kế trình ngành Điện lực phê duyệt phương án đấu nối",
      "Thi công lắp đặt thiết bị đóng cắt, đo đếm theo yêu cầu kỹ thuật",
      "Phối hợp với Điện lực thực hiện đấu nối, đóng điện thử nghiệm",
      "Kiểm tra, hiệu chỉnh thông số bảo vệ trước khi đưa vào vận hành chính thức",
    ],
    images: [
      { variant: 0, paletteIndex: 1 },
      { variant: 1, paletteIndex: 3 },
      { variant: 0, paletteIndex: 2 },
    ],
  },
  {
    id: "tu-dien-phan-phoi",
    title: "Tủ điện phân phối nhà xưởng",
    category: "Điện nhà xưởng",
    location: "Bến Cát, Bình Dương",
    capacity: "250A",
    year: "2024",
    summary:
      "Hệ thống tủ điện phân phối cho xưởng cơ khí, đảm bảo cấp điện riêng biệt cho từng khu vực máy móc sản xuất.",
    details: [
      "Thiết kế tủ điện phân phối theo từng khu vực sản xuất riêng biệt",
      "Lắp đặt thiết bị đo lường giám sát dòng điện, điện áp theo thời gian thực",
      "Đảm bảo khả năng mở rộng tải khi nhà xưởng tăng quy mô sản xuất",
      "Kiểm tra cách điện, đo điện trở tiếp địa trước khi bàn giao",
    ],
    images: [
      { variant: 2, paletteIndex: 1 },
      { variant: 2, paletteIndex: 2 },
      { variant: 0, paletteIndex: 0 },
    ],
  },
  {
    id: "nghiem-thu-cong-trinh",
    title: "Nghiệm thu công trình",
    category: "Trạm biến áp",
    location: "Thuận An, Bình Dương",
    capacity: "—",
    year: "2024",
    summary:
      "Quy trình kiểm tra, đo kiểm và nghiệm thu trước khi bàn giao trạm biến áp cho khách hàng đưa vào sử dụng.",
    details: [
      "Đo điện trở tiếp địa, kiểm tra cách điện toàn bộ hệ thống",
      "Kiểm tra thông số bảo vệ rơ-le, cầu dao phụ tải theo thiết kế",
      "Lập biên bản nghiệm thu cùng đại diện khách hàng và đơn vị giám sát",
      "Bàn giao hồ sơ hoàn công, hướng dẫn vận hành và bảo trì định kỳ",
    ],
    images: [
      { variant: 1, paletteIndex: 2 },
      { variant: 0, paletteIndex: 3 },
      { variant: 1, paletteIndex: 0 },
    ],
  },
  {
    id: "day-dan-xuong",
    title: "Thi công hệ thống dây dẫn",
    category: "Điện nhà xưởng",
    location: "Dĩ An, Bình Dương",
    capacity: "1.200m dây",
    year: "2023",
    summary:
      "Triển khai hệ thống dây dẫn động lực và chiếu sáng cho nhà xưởng sản xuất bao bì, đảm bảo an toàn và thẩm mỹ.",
    details: [
      "Đi dây trong máng cáp, ống luồn dây đúng tiêu chuẩn chống cháy",
      "Phân màu dây theo pha, đánh số đầu dây thuận tiện kiểm tra bảo trì",
      "Lắp đặt hệ thống tiếp địa an toàn cho toàn bộ tuyến dây dẫn",
      "Kiểm tra thông mạch, đo cách điện từng tuyến trước khi đóng điện",
    ],
    images: [
      { variant: 2, paletteIndex: 0 },
      { variant: 1, paletteIndex: 1 },
      { variant: 2, paletteIndex: 3 },
    ],
  },
];
