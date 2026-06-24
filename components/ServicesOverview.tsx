import Link from "next/link";
import { ArrowUpRight, Gauge, Factory, Sun, Cog } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Thiết kế & Thi công Trạm biến áp",
    desc: "Khảo sát, thiết kế và thi công trạm biến áp công suất đến 35KV cho nhà xưởng, khu dân cư, khu công nghiệp và cao ốc, đảm bảo chuẩn kỹ thuật và an toàn vận hành.",
    href: "/dich-vu/tram-bien-ap",
    points: ["Khảo sát & tư vấn vị trí lắp đặt", "Thiết kế tối ưu công suất", "Thi công đúng bản vẽ kỹ thuật"],
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
    title: "Thi công Điện mặt trời áp mái",
    desc: "Tư vấn, thiết kế và thi công hệ thống điện mặt trời áp mái cho hộ gia đình, nhà xưởng và doanh nghiệp — giảm chi phí điện năng, hoàn vốn nhanh và thân thiện với môi trường.",
    href: "/dich-vu/dien-mat-troi",
    points: ["Khảo sát mái & tính toán công suất phù hợp", "Lắp đặt tấm pin, inverter đúng tiêu chuẩn", "Hỗ trợ thủ tục đấu nối lên lưới điện quốc gia"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Lĩnh vực hoạt động</span>
          <h2 className="section-title">Dịch vụ chuyên sâu của chúng tôi</h2>
          <p className="mt-4 text-navy-500">
            Từ khảo sát, thiết kế đến thi công và bàn giao — Long Nhật Minh
            đảm nhận trọn vẹn quy trình với tiêu chuẩn kỹ thuật khắt khe.
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