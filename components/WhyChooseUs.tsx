import { Zap, Target, TrendingUp, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Nhanh chóng",
    desc: "Đội ngũ kỹ sư giàu kinh nghiệm tư vấn và lựa chọn phương án thi công phù hợp nhất trong thời gian ngắn.",
  },
  {
    icon: Target,
    title: "Chính xác",
    desc: "Khảo sát và cung cấp thông tin kỹ thuật chính xác cho khách hàng dựa trên am hiểu chuyên sâu về ngành điện.",
  },
  {
    icon: TrendingUp,
    title: "Hiệu quả",
    desc: "Tư vấn lựa chọn công suất trạm biến áp phù hợp với nhu cầu thực tế, tối ưu chi phí đầu tư lâu dài.",
  },
  {
    icon: Sparkles,
    title: "Luôn cải tiến",
    desc: "Không ngừng cập nhật thiết bị, công nghệ thi công mới nhằm nâng cao chất lượng và độ an toàn công trình.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-navy-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#fde685" strokeWidth="0.1" />
          ))}
        </svg>
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-gold-400/15 text-gold-300">Lý do lựa chọn</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vì sao khách hàng tin chọn Long Nhật Minh
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-navy-900">
                <r.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
