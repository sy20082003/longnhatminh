"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Sun,
  Cog,
  Building2,
  Ship,
  ChevronLeft,  // Thêm icon mũi tên trái
  ChevronRight, // Thêm icon mũi tên phải
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: Building2,
    title: "Sản xuất Kết cấu thép & Phụ kiện Lưới điện",
    desc: "Chuyên sản xuất kết cấu thép mạ kẽm nhúng nóng, phụ kiện lưới điện và thiết bị cơ khí điện.",
    href: "/dich-vu/ket-cau-thep-phu-kien-luoi-dien",
    points: [
      "Bulông, ốc vít, phụ kiện treo, néo và nối",
      "Kết cấu thép mạ kẽm nhúng nóng cho cột điện",
      "Tủ điện, thang máng cáp và phụ kiện đấu nối",
    ],
  },
  {
    icon: Cog,
    title: "Phân phối Vật tư & Thiết bị Đường dây 220kV",
    desc: "Cung cấp vật tư, thiết bị cho đường dây và trạm biến áp đến 220kV.",
    href: "/dich-vu/vat-tu-thiet-bi-duong-day-tram-dien",
    points: [
      "Dây dẫn, cáp điện, sứ cách điện, chống sét",
      "Thiết bị đóng cắt & máy biến áp",
      "Phụ kiện lưới điện và trạm biến áp",
    ],
  },
  {
    icon: Sun,
    title: "Điện mặt trời áp mái",
    desc: "Thi công hệ thống điện mặt trời cho nhà xưởng và doanh nghiệp.",
    href: "/dich-vu/dien-mat-troi",
    points: [
      "Thiết kế & thi công trọn gói",
      "Pin năng lượng, inverter, khung giá đỡ",
      "Bảo trì & giám sát hệ thống",
    ],
  },
  {
    icon: Ship,
    title: "Nhập khẩu & Phân phối trực tiếp",
    desc: "Nhập khẩu thiết bị điện và trạm biến áp từ các hãng quốc tế.",
    href: "/dich-vu/nhap-khau-phan-phoi",
    points: [
      "Thiết bị Taikai, Heng Ming...",
      "Ắc quy Ni-Cd & tủ nạp ACU 110kV",
      "CO, CQ và hỗ trợ kỹ thuật hãng",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">

        {/* TITLE */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lĩnh vực hoạt động</span>
          <h2 className="section-title">Dịch vụ chuyên sâu của chúng tôi</h2>
          <p className="mt-4 text-navy-500">
            Long Nhật Minh cung cấp giải pháp trọn gói từ thiết kế, cung ứng thiết bị đến sản xuất và thi công.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-14 px-4 md:px-8"> {/* Thêm padding hai bên để nút không đè lên content quá nhiều */}

          {/* NAV BUTTONS */}
          <button className="prev-btn absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-navy-100 bg-white p-3 text-navy-900 shadow-lg transition hover:bg-navy-900 hover:text-white active:scale-95 disabled:opacity-40 md:-left-4">
            <ChevronLeft size={24} />
          </button>

          <button className="next-btn absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-navy-100 bg-white p-3 text-navy-900 shadow-lg transition hover:bg-navy-900 hover:text-white active:scale-95 disabled:opacity-40 md:-right-4">
            <ChevronRight size={24} />
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
              <SwiperSlide key={s.title} className="h-auto">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-soft-gradient p-8 transition hover:-translate-y-1 hover:shadow-soft"
                >

                  {/* ICON */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                    <s.icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-xl font-bold text-navy-900">
                    {s.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-sm text-navy-500">
                    {s.desc}
                  </p>

                  {/* POINTS */}
                  <ul className="mt-6 flex-1 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-navy-700"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {p}
                      </td>
                    ))}
                  </ul>

                  {/* FOOTER */}
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-navy-700">
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