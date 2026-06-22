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
              src="/images/logo3d.png"
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