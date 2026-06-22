import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Đội ngũ kỹ sư, công nhân nhiều năm kinh nghiệm thực tiễn",
  "Vật tư, thiết bị có đầy đủ giấy chứng nhận CO, CQ",
  "Đã triển khai hàng trăm công trình trên toàn quốc",
  "Quy trình giám sát thi công chặt chẽ, minh bạch",
];

export default function AboutPreview() {
  return (
    <section className="section-py bg-soft-gradient">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/images/logo3.png"
              alt="Long Nhật Minh - Thi công điện công nghiệp"
              width={560}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-soft sm:block">
            <p className="text-3xl font-extrabold text-gold-400">10+</p>
            <p className="text-xs text-navy-200">năm kinh nghiệm</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Về Long Nhật Minh</span>
          <h2 className="section-title">
            Đối tác tin cậy trong lĩnh vực điện công nghiệp
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed">
            Trải qua nhiều năm hoạt động, chúng tôi tích lũy kinh nghiệm thực
            tiễn từ nhiều công trình lớn nhỏ trên cả nước, trở thành đối tác
            đáng tin cậy của các nhà đầu tư trong và ngoài nước trong lĩnh vực
            thiết kế, thi công đường dây và trạm biến áp đến 35KV cùng hệ
            thống điện nhà xưởng.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-navy-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-navy-600" />
                {h}
              </li>
            ))}
          </ul>

          <Link href="/gioi-thieu" className="btn-primary mt-9">
            Tìm hiểu về chúng tôi
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutIllustration() {
  return (
    <svg viewBox="0 0 560 420" className="h-full w-full">
      <rect width="560" height="420" fill="#dbe7ff" />
      <rect x="0" y="280" width="560" height="140" fill="#bcd3ff" />
      {/* Building / nha xuong */}
      <rect x="60" y="160" width="200" height="160" fill="#1a35a8" rx="6" />
      <polygon points="50,160 270,160 160,100" fill="#142566" />
      <rect x="90" y="200" width="40" height="40" fill="#fde685" opacity="0.85" />
      <rect x="150" y="200" width="40" height="40" fill="#fde685" opacity="0.85" />
      <rect x="210" y="200" width="30" height="40" fill="#fde685" opacity="0.6" />
      <rect x="140" y="260" width="50" height="60" fill="#0c1840" />

      {/* Transformer station */}
      <rect x="320" y="200" width="180" height="120" rx="8" fill="#1f52ef" />
      <rect x="340" y="220" width="50" height="70" rx="4" fill="#0c1840" />
      <rect x="410" y="220" width="50" height="70" rx="4" fill="#0c1840" />
      <line x1="365" y1="160" x2="365" y2="200" stroke="#fde685" strokeWidth="4" />
      <line x1="435" y1="160" x2="435" y2="200" stroke="#fde685" strokeWidth="4" />
      <circle cx="365" cy="150" r="8" fill="#f7bd24" />
      <circle cx="435" cy="150" r="8" fill="#f7bd24" />

      {/* power pole */}
      <line x1="500" y1="90" x2="500" y2="300" stroke="#142566" strokeWidth="6" />
      <line x1="465" y1="110" x2="535" y2="110" stroke="#142566" strokeWidth="5" />
      <line x1="475" y1="140" x2="525" y2="140" stroke="#142566" strokeWidth="5" />
      <path d="M260 130 C 350 70, 420 70, 500 110" stroke="#3470fa" strokeWidth="2" fill="none" />
    </svg>
  );
}
