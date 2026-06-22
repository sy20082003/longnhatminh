import { Cable, Gauge, ShieldAlert, Wrench, Phone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

const designSteps = [
  {
    number: "01",
    title: "Khảo sát mặt bằng",
    desc: "Đánh giá quy mô nhà xưởng, số lượng máy móc thiết bị và nhu cầu sử dụng điện thực tế.",
  },
  {
    number: "02",
    title: "Tính toán tải điện",
    desc: "Tính toán chính xác công suất, tiết diện dây dẫn đảm bảo kỹ thuật và hiệu quả vận hành.",
  },
  {
    number: "03",
    title: "Thiết kế sơ đồ điện",
    desc: "Lập sơ đồ hệ thống điện chiếu sáng, động lực và phân phối tải tối ưu cho nhà xưởng.",
  },
  {
    number: "04",
    title: "Dự toán & tư vấn",
    desc: "Đưa ra phương án thi công cùng dự toán chi phí hợp lý nhất cho khách hàng lựa chọn.",
  },
];

const constructionSteps = [
  {
    number: "01",
    title: "Lắp đặt tủ điện",
    desc: "Lắp đặt hệ thống tủ điện tổng, tủ điện phân phối đạt chuẩn an toàn kỹ thuật điện.",
  },
  {
    number: "02",
    title: "Đi dây & lắp thiết bị",
    desc: "Triển khai hệ thống dây dẫn, ổ cắm, đèn chiếu sáng và các thiết bị điện trong nhà xưởng.",
  },
  {
    number: "03",
    title: "Kiểm tra vận hành thử",
    desc: "Kiểm tra toàn bộ hệ thống, vận hành thử trước khi đưa vào sử dụng chính thức.",
  },
  {
    number: "04",
    title: "Bàn giao & bảo trì",
    desc: "Bàn giao công trình, hướng dẫn sử dụng và hỗ trợ bảo trì định kỳ sau lắp đặt.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "Tính toán tải chính xác",
    desc: "Đảm bảo tính kỹ thuật cho đường dây và hiệu quả hoạt động lâu dài của nhà xưởng.",
  },
  {
    icon: Cable,
    title: "Hệ thống đồng bộ",
    desc: "Thiết kế hệ thống điện đồng bộ giúp máy móc, thiết bị vận hành ổn định, tăng năng suất.",
  },
  {
    icon: Wrench,
    title: "Thợ thi công lành nghề",
    desc: "Đội ngũ thợ điện có nhiều kinh nghiệm thực tiễn, thi công gọn gàng, đúng kỹ thuật.",
  },
  {
    icon: ShieldAlert,
    title: "An toàn phòng cháy",
    desc: "Tuân thủ nghiêm ngặt quy chuẩn an toàn điện, giảm thiểu rủi ro cháy nổ trong sản xuất.",
  },
];

export default function DienNhaXuongPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Thiết kế & Thi công Điện nhà xưởng"
        desc="Dịch vụ trọn gói thiết kế và thi công hệ thống điện công trình, giúp khách hàng an tâm với chất lượng tốt và chi phí hợp lý."
      />

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

      <ServiceProcess
        eyebrow="Quy trình thiết kế"
        title="Thiết kế điện nhà xưởng tối ưu"
        steps={designSteps}
      />

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

      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy-900 px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Cần thi công điện cho nhà xưởng của bạn?
              </h3>
              <p className="mt-2 text-navy-300">
                Liên hệ ngay để được khảo sát và tư vấn giải pháp tối ưu chi phí.
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
