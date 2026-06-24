import { Sun, Zap, ShieldCheck, TrendingDown, Phone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

const designSteps = [
  {
    number: "01",
    title: "Khảo sát mái & định hướng",
    desc: "Đánh giá diện tích mái, hướng đặt tấm pin, bóng che và kết cấu mái để tính toán vị trí lắp đặt tối ưu.",
  },
  {
    number: "02",
    title: "Tính toán công suất",
    desc: "Dựa trên nhu cầu tiêu thụ điện thực tế, tính toán số lượng tấm pin và inverter phù hợp, tối ưu chi phí hoàn vốn.",
  },
  {
    number: "03",
    title: "Thiết kế hệ thống",
    desc: "Lập sơ đồ đấu nối tấm pin, inverter, tủ điện hòa lưới và hệ thống bảo vệ đảm bảo chuẩn kỹ thuật.",
  },
  {
    number: "04",
    title: "Dự toán & tư vấn",
    desc: "Cung cấp báo giá chi tiết, thời gian hoàn vốn dự kiến và các phương án lựa chọn phù hợp từng nhu cầu.",
  },
];

const constructionSteps = [
  {
    number: "01",
    title: "Lắp khung & giá đỡ",
    desc: "Thi công hệ thống khung nhôm, giá đỡ chịu lực, chống gió — đảm bảo không ảnh hưởng kết cấu mái gốc.",
  },
  {
    number: "02",
    title: "Lắp đặt tấm pin & inverter",
    desc: "Lắp tấm pin đúng góc nghiêng, đấu nối dây DC, lắp inverter hòa lưới và tủ điện bảo vệ.",
  },
  {
    number: "03",
    title: "Đấu nối & kiểm tra hệ thống",
    desc: "Đấu nối hòa lưới điện quốc gia, kiểm tra toàn bộ thông số vận hành, đo công suất phát thực tế.",
  },
  {
    number: "04",
    title: "Bàn giao & hỗ trợ thủ tục",
    desc: "Bàn giao hệ thống, hướng dẫn theo dõi qua app, hỗ trợ thủ tục đăng ký bán điện dư lên lưới EVN.",
  },
];

const features = [
  {
    icon: TrendingDown,
    title: "Giảm chi phí điện năng",
    desc: "Tiết kiệm 50–80% hóa đơn tiền điện mỗi tháng, hoàn vốn nhanh trong 4–6 năm tùy công suất.",
  },
  {
    icon: Zap,
    title: "Hòa lưới & bán điện dư",
    desc: "Hệ thống hòa lưới tự động, lượng điện dư phát lên lưới EVN được ghi nhận và thanh toán theo quy định.",
  },
  {
    icon: ShieldCheck,
    title: "Thiết bị chính hãng",
    desc: "Sử dụng tấm pin và inverter từ các thương hiệu uy tín, bảo hành dài hạn, tuổi thọ 25–30 năm.",
  },
  {
    icon: Sun,
    title: "Thân thiện môi trường",
    desc: "Giảm phát thải CO₂, góp phần sử dụng năng lượng sạch và bền vững cho doanh nghiệp, hộ gia đình.",
  },
];

export default function DienMatTroiPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Cung cấp & lắp điện hệ thống điện mặt trời"
        desc="Giải pháp năng lượng mặt trời trọn gói cho hộ gia đình, nhà xưởng và doanh nghiệp — tiết kiệm chi phí điện, hoàn vốn nhanh và thân thiện với môi trường."
      />

      {/* Features */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-navy-100 p-7 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-5 text-base font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design process */}
      <ServiceProcess
        eyebrow="Quy trình thiết kế"
        title="Thiết kế hệ thống điện mặt trời tối ưu"
        steps={designSteps}
      />

      {/* Construction process */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Quy trình thi công</span>
            <h2 className="section-title">Thi công chuyên nghiệp, chất lượng</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {constructionSteps.map((s, idx) => (
              <div key={s.title} className="relative rounded-2xl bg-soft-gradient p-7">
                <span className="text-4xl font-extrabold text-navy-200">{s.number}</span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
                {idx < constructionSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-navy-200 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy-900 px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Muốn lắp điện mặt trời cho công trình của bạn?
              </h3>
              <p className="mt-2 text-navy-300">
                Liên hệ ngay để được khảo sát mái miễn phí và nhận báo giá chi tiết.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:0938978138"
                className="btn-outline bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/40"
              >
                <Phone size={18} />
                Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
