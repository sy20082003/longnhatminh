import { CheckCircle2, Award, Users, Wrench } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Năm kinh nghiệm" },
  { icon: Wrench, value: "150+", label: "Công trình hoàn thành" },
  { icon: Users, value: "30+", label: "Kỹ sư lành nghề" },
];

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
        desc="Đối tác đáng tin cậy trong lĩnh vực cung cấp, thi công trạm biến áp và hệ thống điện mặt trời trên toàn quốc."
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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

            {/* Khu vực ảnh và khối thông số được căn chỉnh theo image_037f21.jpg */}
            <div className="relative mt-8 pb-12 lg:mt-0">
              <div className="rounded-3xl shadow-soft overflow-hidden">
                <Image
                  src="/images/gt.jpg"
                  alt="Long Nhật Minh - Thi công điện công nghiệp"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Cụm thông số gom chung đặt tại góc dưới bên phải của ảnh */}
              <div className="absolute -bottom-2 right-4 flex flex-col gap-3 rounded-2xl bg-navy-900 p-4 shadow-lg min-w-[200px]">
                {stats.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400">
                        <IconComponent size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold text-white">{item.value}</p>
                        <p className="text-[11px] text-navy-300 whitespace-nowrap">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
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