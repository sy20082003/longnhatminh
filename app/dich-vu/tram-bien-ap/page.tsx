import { ShieldCheck, Ruler, Settings2, HardHat, Phone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

const designSteps = [
  {
    number: "01",
    title: "Khảo sát vị trí",
    desc: "Đánh giá vị trí lắp đặt, chất lượng nguồn điện và yêu cầu an toàn cho người vận hành.",
  },
  {
    number: "02",
    title: "Lựa chọn công suất",
    desc: "Tư vấn loại trạm và công suất phù hợp với nhu cầu sử dụng thực tế của khách hàng.",
  },
  {
    number: "03",
    title: "Lập bản vẽ thiết kế",
    desc: "Hoàn thiện bản vẽ kỹ thuật, dự toán chi phí để khách hàng lựa chọn phương án tối ưu.",
  },
  {
    number: "04",
    title: "Trình duyệt hồ sơ",
    desc: "Hỗ trợ trình hồ sơ thiết kế lên ngành Điện lực để được phê duyệt trước khi thi công.",
  },
];

const constructionSteps = [
  {
    number: "01",
    title: "Chuẩn bị vật tư",
    desc: "Toàn bộ vật tư, thiết bị đưa vào thi công đảm bảo nguồn gốc rõ ràng, đầy đủ CO, CQ.",
  },
  {
    number: "02",
    title: "Thi công theo bản vẽ",
    desc: "Triển khai đúng bản vẽ kỹ thuật đã được phê duyệt, đảm bảo tiến độ cam kết.",
  },
  {
    number: "03",
    title: "Giám sát & nghiệm thu",
    desc: "Theo dõi, kiểm tra kỹ thuật thường xuyên trong suốt quá trình thi công, nghiệm thu từng hạng mục.",
  },
  {
    number: "04",
    title: "Đấu nối & bàn giao",
    desc: "Hoàn tất thủ tục phê duyệt đấu nối lưới điện, bàn giao và hướng dẫn vận hành cho khách hàng.",
  },
];

const features = [
  {
    icon: Ruler,
    title: "Thiết kế chuẩn kỹ thuật",
    desc: "Đảm bảo tiêu chí về vị trí, chất lượng điện cung cấp và độ an toàn cho người vận hành.",
  },
  {
    icon: Settings2,
    title: "Tùy chỉnh theo nhu cầu",
    desc: "Lựa chọn tính năng, kích thước trạm biến áp phù hợp với mục đích sử dụng của từng công trình.",
  },
  {
    icon: HardHat,
    title: "Đội ngũ kỹ sư bằng cấp",
    desc: "Kỹ sư có chuyên môn, đã thực hiện nhiều dự án lớn nhỏ, đáp ứng mọi yêu cầu kỹ thuật.",
  },
  {
    icon: ShieldCheck,
    title: "An toàn & hợp chuẩn",
    desc: "Vật tư lắp đặt có đầy đủ giấy chứng nhận, được ngành Điện lực phê duyệt trước khi lên lưới.",
  },
];

export default function TramBienApPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Thiết kế & Thi công Trạm biến áp"
        desc="Giải pháp trạm biến áp công suất đến 35KV cho nhà xưởng, khu dân cư, khu công nghiệp và cao ốc, đảm bảo độ chính xác và yêu cầu kỹ thuật cao."
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
        title="Thiết kế trạm biến áp bài bản"
        steps={designSteps}
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Quy trình thi công</span>
            <h2 className="section-title">Thi công an toàn, đúng tiến độ</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {constructionSteps.map((s, idx) => (
              <div
                key={s.title}
                className="relative rounded-2xl bg-soft-gradient p-7"
              >
                <span className="text-4xl font-extrabold text-navy-200">
                  {s.number}
                </span>
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
                Cần tư vấn về trạm biến áp cho công trình của bạn?
              </h3>
              <p className="mt-2 text-navy-300">
                Đội ngũ kỹ sư Long Nhật Minh sẵn sàng khảo sát và báo giá miễn phí.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá
                <ArrowRight size={18} />
              </Link>
              <a href="tel:0938978138" className="btn-outline bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/40">
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
