import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  Gauge,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const stats = [
  { value: "10+", label: "năm kinh nghiệm" },
  { value: "150+", label: "công trình đã triển khai" },
  { value: "30+", label: "kỹ sư & kỹ thuật viên" },
];

const highlights = [
  "Đội ngũ kỹ sư, công nhân nhiều năm kinh nghiệm thực tiễn",
  "Vật tư, thiết bị có đầy đủ giấy chứng nhận CO, CQ",
  "Đã triển khai hàng trăm công trình trên toàn quốc",
  "Quy trình giám sát thi công chặt chẽ, minh bạch",
];

const values = [
  {
    icon: ShieldCheck,
    title: "An toàn",
    desc: "Tuân thủ nghiêm ngặt quy chuẩn an toàn điện trong mọi khâu khảo sát, thi công và bàn giao công trình.",
  },
  {
    icon: Gem,
    title: "Chất lượng",
    desc: "Vật tư, thiết bị chính hãng, đầy đủ chứng từ CO/CQ, được kiểm định trước khi đưa vào công trình.",
  },
  {
    icon: Gauge,
    title: "Hiệu quả",
    desc: "Tối ưu phương án kỹ thuật và tiến độ thi công, giúp khách hàng tiết kiệm chi phí đầu tư lâu dài.",
  },
  {
    icon: Leaf,
    title: "Bền vững",
    desc: "Hướng đến các giải pháp năng lượng thân thiện môi trường, đồng hành lâu dài cùng đối tác.",
  },
];

export default function GioiThieuPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Về Long Nhật Minh"
        desc="Công ty TNHH Kỹ thuật Long Nhật Minh — đối tác tin cậy trong cung cấp vật tư, thiết bị điện, thiết kế và thi công đường dây, trạm biến áp cùng hệ thống điện mặt trời."
        image="/images/website.png"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/gt.jpg"
                alt="Long Nhật Minh - Kỹ thuật điện công nghiệp"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 justify-between gap-2 rounded-2xl bg-navy-900 px-4 py-5 text-center text-white shadow-soft sm:px-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-gold-400 sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-navy-200 sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">Câu chuyện của chúng tôi</span>
            <h2 className="section-title">
              Đối tác tin cậy trong lĩnh vực điện công nghiệp
            </h2>
            <p className="mt-5 leading-relaxed text-navy-500">
              Trải qua nhiều năm hoạt động, Long Nhật Minh tích lũy kinh
              nghiệm thực tiễn từ nhiều công trình lớn nhỏ trên cả nước, trở
              thành đối tác đáng tin cậy của các nhà đầu tư trong và ngoài
              nước trong lĩnh vực cung cấp vật tư, thiết bị điện, thiết kế,
              thi công đường dây và trạm biến áp lên đến 220kV cùng hệ thống
              điện mặt trời áp mái.
            </p>

            <ul className="mt-7 space-y-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-navy-700"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-navy-600"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-py bg-soft-gradient">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Giá trị cốt lõi</span>
            <h2 className="section-title">An toàn - Chất lượng - Hiệu quả - Bền vững</h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-4xl rounded-3xl bg-navy-950 px-8 py-14 text-center shadow-soft sm:px-14">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Sẵn sàng đồng hành cùng công trình của bạn
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-300 sm:text-base">
            Liên hệ ngay để được kỹ sư Long Nhật Minh khảo sát, tư vấn giải
            pháp và báo giá miễn phí.
          </p>
          <Link href="/lien-he" className="btn-gold mx-auto mt-8 w-fit">
            Liên hệ với chúng tôi
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
