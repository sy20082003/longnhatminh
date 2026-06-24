import Link from "next/link";
import { ArrowUpRight, Gauge, Factory, Sun, Cog, Building2, Ship } from "lucide-react";

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
  desc: "Cung cấp đầy đủ vật tư, thiết bị cho các công trình đường dây và trạm điện đến 220kV, đáp ứng tiêu chuẩn kỹ thuật, chất lượng và tiến độ dự án.",
  href: "/dich-vu/vat-tu-thiet-bi-duong-day-tram-dien",
  points: ["Dây dẫn, cáp điện, sứ cách điện, chống sét, thiết bị đóng cắt, máy biến áp", "Kết cấu thép, phụ kiện lưới điện và vật tư thi công trạm biến áp", "Đối tác phân phối của các thương hiệu uy tín trong và ngoài nước"],
},
  {
    icon: Sun,
    title: "Cung cấp và lắp đặt Hệ thống Điện mặt trời",
    desc: "Tư vấn, thiết kế và thi công hệ thống điện mặt trời áp mái cho hộ gia đình, doanh nghiệp và nhà xưởng, tối ưu chi phí điện năng và nâng cao hiệu quả đầu tư.",
    href: "/dich-vu/dien-mat-troi",
    points: ["Thiết kế và thi công hệ thống điện mặt trời áp mái", "Cung cấp tấm pin, inverter, khung giá đỡ và hệ thống giám sát", "Bảo trì, bảo hành và giám sát vận hành sau lắp đặt"],
  },
  {
icon: Ship,
title: "Nhập khẩu & Phân phối Trực tiếp",
desc: "Nhập khẩu và phân phối trực tiếp thiết bị điện, thiết bị trạm biến áp và giải pháp lưu trữ năng lượng từ các thương hiệu uy tín trong và ngoài nước, đảm bảo chất lượng và nguồn gốc rõ ràng.",
href: "/dich-vu/nhap-khau-phan-phoi",
points: [
"Thiết bị trạm biến áp từ các thương hiệu uy tín như Taikai, Heng Ming...",
"Cung cấp hệ thống ắc quy kiềm (Ni-Cd) và tủ nạp ACU cho trạm đến 110kV",
"Đầy đủ CO, CQ, Test Report và hỗ trợ kỹ thuật trực tiếp từ nhà sản xuất"
],
}

];

export default function ServicesOverview() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lĩnh vực hoạt động</span>
          <h2 className="section-title">Dịch vụ chuyên sâu của chúng tôi</h2>
          <p className="mt-4 text-navy-500">
            Long Nhật Minh cung cấp giải pháp trọn gói từ thiết kế, cung ứng thiết bị đến sản xuất và thi công, 
            phục vụ toàn diện cho hệ thống điện mặt trời, trạm biến áp và lưới điện.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-soft-gradient p-8 transition-all hover:-translate-y-1 hover:shadow-soft sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-gradient group-hover:text-navy-900">
                <s.icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900 sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">{s.desc}</p>

              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-navy-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-navy-700 group-hover:text-navy-900">
                Xem chi tiết
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}