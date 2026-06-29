import { CheckCircle2, Award, Users, Wrench } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const commitments = [
  "Vật tư, thiết bị có nguồn gốc xuất xứ rõ ràng, đầy đủ giấy chứng nhận CO, CQ",
  "Thi công đúng bản vẽ kỹ thuật, giám sát chặt chẽ trong suốt quá trình",
  "Tuân thủ quy định, được sự phê duyệt của ngành Điện lực trước khi đấu nối",
  "Đội ngũ kỹ sư, công nhân có nhiều năm kinh nghiệm thực tiễn tại các công trình lớn nhỏ",
];

const partners = [
  { name: "Chấn Hưng", logo: "/images/logo-nhan-hang/chan-hung-logo.png" },
  { name: "ACIT", logo: "/images/logo-nhan-hang/acit-logo.png" },
  { name: "PCCC5", logo: "/images/logo-nhan-hang/pccc5-logo.png" },
  { name: "SPower", logo: "/images/logo-nhan-hang/spower-logo.png" },
  { name: "EVN PECC2", logo: "/images/logo-nhan-hang/evn-pecc2-logo.png" },
  { name: "Vinaincon", logo: "/images/logo-nhan-hang/vinaincon-logo.png" },
  { name: "EVN PECC1", logo: "/images/logo-nhan-hang/evn-pecc1-logo.png" },
];

export default function GioiThieuPage() {
  return (
    <>
      <PageHero
        eyebrow="Về chúng tôi"
        title="Long Nhật Minh"
        desc="Đối tác đáng tin cậy trong lĩnh vực thiết kế, thi công trạm biến áp và điện nhà xưởng trên toàn quốc."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Cột trái: nội dung */}
            <div>
              <span className="eyebrow">Câu chuyện của chúng tôi</span>
              <h2 className="section-title">
                Hơn một thập kỷ đồng hành cùng các công trình điện
              </h2>
              <p className="mt-5 leading-relaxed text-navy-500">
                Công ty TNHH Kỹ Thuật Long Nhật Minh là đơn vị chuyên cung cấp vật tư,
                thiết bị điện phục vụ thi công xây lắp điện công trình. Công ty sản xuất và phân phối vật tư,
                phụ kiện lưới điện, kết cấu thép cho đường dây và trạm điện đến 110kV,
                đồng thời cung cấp và lắp đặt hệ thống điện mặt trời. Với nhiều năm hoạt động,
                Long Nhật Minh đã cung cấp các sản phẩm chất lượng cho nhiều công ty xây lắp điện,
                đơn vị thiết bị điện và các điện lực trên toàn quốc.
              </p>
              <p className="mt-4 leading-relaxed text-navy-500">
                Với phương châm &ldquo;Uy tín – Tiến độ – Giá cả hợp lý&rdquo;, Công ty TNHH Kỹ Thuật Long Nhật Minh
                luôn cam kết mang đến sản phẩm và dịch vụ chất lượng, đáp ứng tốt nhu cầu của khách hàng.
                Chúng tôi mong muốn được đồng hành, hợp tác lâu dài và xây dựng niềm tin bền vững cùng Quý khách hàng.
              </p>
              <Link href="/lien-he" className="btn-primary mt-8">
                Liên hệ với chúng tôi
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Cột phải: ảnh + badge nổi */}
            <div className="relative pb-6 pl-0 pr-6 pt-0">
              {/* Ảnh chính */}
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/images/gioi-thieu.jpg"
                  alt="Long Nhật Minh - Thi công điện công nghiệp"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Badge 10+ năm - góc dưới trái */}
              <div className="absolute -bottom-2 -left-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Award size={18} />
                </span>
                <div>
                  <p className="text-base font-extrabold text-navy-900">10+</p>
                  <p className="text-xs text-navy-400">Năm kinh nghiệm</p>
                </div>
              </div>

              {/* Badge 150+ công trình - góc trên phải */}
              <div className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Wrench size={18} />
                </span>
                <div>
                  <p className="text-base font-extrabold text-navy-900">150+</p>
                  <p className="text-xs text-navy-400">Công trình hoàn thành</p>
                </div>
              </div>

              {/* Badge 30+ kỹ sư - góc dưới phải */}
              <div className="absolute -bottom-2 right-4 flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/20 text-gold-400">
                  <Users size={18} />
                </span>
                <div>
                  <p className="text-base font-extrabold text-white">30+</p>
                  <p className="text-xs text-navy-300">Kỹ sư lành nghề</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-soft-gradient">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Cam kết chất lượng</span>
            <h2 className="section-title">Tiêu chuẩn chúng tôi luôn tuân thủ</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {commitments.map((c) => (
              <div
                key={c}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-card"
              >
                <CheckCircle2 size={24} className="mt-0.5 shrink-0 text-navy-600" />
                <p className="text-sm leading-relaxed text-navy-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Khách hàng tiêu biểu</span>
            <h2 className="section-title">Một số doanh nghiệp đã hợp tác</h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-24 w-48 items-center justify-center rounded-2xl border border-navy-100 bg-soft-gradient p-4 transition-all duration-300 hover:scale-105 hover:shadow-card"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
