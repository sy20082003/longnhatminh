"use client";

import { Cable, ShieldAlert, Wrench, Phone, Layers, Library, CheckCircle2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

// Đổi từ quy trình thiết kế sang Quy trình cung ứng vật tư
const supplySteps = [
  {
    number: "01",
    title: "Tiếp nhận & Tư vấn",
    desc: "Khảo sát hồ sơ kỹ thuật, bản vẽ thiết kế đường dây/trạm biến áp và tư vấn chủng loại vật tư phù hợp.",
  },
  {
    number: "02",
    title: "Báo giá & Thương thảo",
    desc: "Cung cấp bảng dự toán chi phí tối ưu, cam kết tiến độ và chính sách chiết khấu tốt nhất cho dự án.",
  },
  {
    number: "03",
    title: "Kiểm định chất lượng",
    desc: "Chuẩn bị đầy đủ hồ sơ nguồn gốc, chứng nhận CO, CQ và thực hiện thử nghiệm nghiệm thu nghiệm ngặt.",
  },
  {
    number: "04",
    title: "Vận chuyển tận nơi",
    desc: "Bàn giao vật tư, thiết bị an toàn đến tận chân công trình theo đúng tiến độ cam kết của dự án.",
  },
];

// Đổi từ quy trình thi công sang Tiêu chuẩn kỹ thuật bàn giao
const qualitySteps = [
  {
    number: "01",
    title: "Đầy đủ CO, CQ",
    desc: "100% thiết bị, vật tư có đầy đủ chứng nhận xuất xứ và chứng chỉ chất lượng từ nhà sản xuất.",
  },
  {
    number: "02",
    title: "Thử nghiệm khắt khe",
    desc: "Hỗ trợ thí nghiệm, đo đạc các thông số kỹ thuật đạt chuẩn trước khi đấu nối vào lưới điện quốc gia.",
  },
  {
    number: "03",
    title: "Đóng gói tiêu chuẩn",
    desc: "Vật tư được bảo quản và đóng gói đúng quy chuẩn chống va đập, bảo vệ tối đa trong quá trình vận chuyển.",
  },
  {
    number: "04",
    title: "Hỗ trợ kỹ thuật",
    desc: "Đội ngũ kỹ sư giàu kinh nghiệm luôn sẵn sàng đồng hành, hỗ trợ kỹ thuật trong suốt quá trình lắp đặt.",
  },
];

// Cập nhật các đặc điểm cốt lõi dựa trên nội dung bạn yêu cầu
const features = [
  {
    icon: Cable,
    title: "Thiết bị chính hãng",
    desc: "Cung cấp dây dẫn, cáp điện, sứ cách điện, chống sét, thiết bị đóng cắt và máy biến áp đến 220kV.",
  },
  {
    icon: Layers,
    title: "Phụ kiện đồng bộ",
    desc: "Phân phối kết cấu thép mạ kẽm nhúng nóng, phụ kiện lưới điện và toàn bộ vật tư thi công trạm biến áp.",
  },
  {
    icon: CheckCircle2,
    title: "Đối tác uy tín",
    desc: "Là đối tác phân phối chính thức của các thương hiệu thiết bị điện lớn, uy tín trong và ngoài nước.",
  },
  {
    icon: ShieldAlert,
    title: "Cam kết an toàn",
    desc: "Tất cả sản phẩm đều đạt tiêu chuẩn kỹ thuật khắt khe của ngành điện, đảm bảo vận hành lưới điện an toàn.",
  },
];

export default function VatTuTramDienPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Phân phối vật tư thiết bị cho đường dây và trạm biến áp"
        desc="Long Nhật Minh chuyên cung cấp trọn gói giải pháp vật tư, thiết bị điện chất lượng cao cho các công trình đường dây và trạm biến áp, đảm bảo tiêu chuẩn vận hành an toàn và tối ưu chi phí."
        image="/images/website.png"
      />

      {/* CORE FEATURES SECTION */}
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

      {/* SUPPLY PROCESS SECTION */}
      <ServiceProcess
        eyebrow="Quy trình cung ứng"
        title="Quy trình phân phối và cung cấp chuyên nghiệp"
        steps={supplySteps}
      />

      {/* QUALITY ASSURANCE SECTION */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Cam kết chất lượng</span>
            <h2 className="section-title">Tiêu chuẩn kỹ thuật & Bàn giao vật tư</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map((s, idx) => (
              <div key={s.title} className="relative rounded-2xl bg-soft-gradient p-7">
                <span className="text-4xl font-extrabold text-navy-200">{s.number}</span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
                {idx < qualitySteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-navy-200 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy-900 px-8 py-12 text-center sm:flex-row sm:text-left sm:px-12">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Bạn đang tìm nhà cung cấp vật tư cho dự án lưới điện?
              </h3>
              <p className="mt-2 text-navy-300">
                Hãy liên hệ ngay để nhận catalog sản phẩm và bảng báo giá với mức chiết khấu tốt nhất.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá vật tư
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