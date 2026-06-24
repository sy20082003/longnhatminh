"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sun, Cog, Building2, Ship } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: Building2,
    title: "Sản xuất Kết cấu thép & Phụ kiện Lưới điện",
    desc: "Chuyên sản xuất kết cấu thép mạ kẽm nhúng nóng, phụ kiện lưới điện và thiết bị cơ khí điện phục vụ các công trình đường dây và trạm biến áp.",
    href: "/dich-vu/ket-cau-thep-phu-kien-luoi-dien",
    points: [
      "Sản xuất bulông, ốc vít, phụ kiện treo, néo và nối cho đường dây điện",
      "Gia công kết cấu thép mạ kẽm nhúng nóng cho cột điện và trạm biến áp",
      "Sản xuất tủ điện, thang máng cáp và phụ kiện đấu nối"
    ],
  },
  {
    icon: Cog,
    title: "Phân phối Vật tư & Thiết bị Đường dây và Trạm điện đến 220kV",
    desc: "Cung cấp đầy đủ vật tư, thiết bị cho các công trình đường dây và trạm điện đến 220kV.",
    href: "/dich-vu/vat-tu-thiet-bi-duong-day-tram-dien",
    points: [
      "Dây dẫn, cáp điện, sứ cách điện, chống sét, thiết bị đóng cắt",
      "Kết cấu thép và vật tư trạm biến áp",
      "Phân phối từ thương hiệu uy tín trong và ngoài nước"
    ],
  },
  {
    icon: Sun,
    title: "Cung cấp & Lắp đặt Điện mặt trời",
    desc: "Giải pháp điện mặt trời áp mái cho hộ gia đình, doanh nghiệp và nhà xưởng.",
    href: "/dich-vu/dien-mat-troi",
    points: [
      "Thiết kế và thi công hệ thống điện mặt trời",
      "Cung cấp pin, inverter, khung giá đỡ",
      "Bảo trì và giám sát vận hành"
    ],
  },
  {
    icon: Ship,
    title: "Nhập khẩu & Phân phối Trực tiếp",
    desc: "Nhập khẩu thiết bị trạm biến áp và giải pháp năng lượng từ các thương hiệu quốc tế.",
    href: "/dich-vu/nhap-khau-phan-phoi",
    points: [
      "Thiết bị Taikai, Heng Ming...",
      "Ắc quy Ni-Cd, tủ nạp ACU đến 110kV",
      "CO, CQ, hỗ trợ kỹ thuật từ nhà sản xuất"
    ],
  }
];

export default function ServicesOverview() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">

        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lĩnh vực hoạt động</span>
          <h2 className="section-title">Dịch vụ chuyên sâu của chúng tôi</h2>
          <p className="mt-4 text-navy-500">
            Long Nhật Minh cung cấp giải pháp trọn gói từ thiết kế, cung ứng thiết bị đến sản xuất và thi công.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-14">

          {/* Navigation buttons */}
          <button className="prev-btn absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow">
            <ChevronLeft />
          </button>
          <button className="next-btn absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((s) => (
              <SwiperSlide key={s.title}>
                <Link
                  href={s.href}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-navy-100 bg-soft-gradient p-8 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-gradient group-hover:text-navy-900">
                    <s.icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-navy-900">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-navy-500">{s.desc}</p>

                  <span className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-navy-700 group-hover:text-navy-900">
                    Xem chi tiết
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}