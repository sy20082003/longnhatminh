"use client";

import { ShieldCheck, Phone, Ship, BatteryCharging, Zap, FileCheck } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

// Thay đổi thành Quy trình Nhập khẩu & Phân phối trực tiếp
const importSteps = [
  {
    number: "01",
    title: "Tiếp nhận & Trao đổi kỹ thuật",
    desc: "Xác định rõ thông số kỹ thuật, chủng loại thiết bị theo yêu cầu của dự án trạm biến áp và lưới điện.",
  },
  {
    number: "02",
    title: "Đặt hàng Nhà sản xuất quốc tế",
    desc: "Làm việc trực tiếp với các hãng đối tác lớn (Taikai, Heng Ming...) để đặt hàng theo cấu hình chuẩn xác.",
  },
  {
    number: "03",
    title: "Thông quan & Kiểm định",
    desc: "Thực hiện các thủ tục hải quan và kiểm định chất lượng, chuẩn bị đầy đủ hồ sơ Test Report, CO, CQ.",
  },
  {
    number: "04",
    title: "Bàn giao & Hỗ trợ kỹ thuật",
    desc: "Vận chuyển thiết bị an toàn đến công trình, phối hợp cùng chuyên gia của hãng để hỗ trợ kỹ thuật trực tiếp.",
  },
];

// Thay đổi thành Cam kết chất lượng & Tiêu chuẩn thiết bị nhập khẩu
const commitmentSteps = [
  {
    number: "01",
    title: "Hồ sơ CO, CQ gốc",
    desc: "Đảm bảo 100% thiết bị bàn giao có đầy đủ chứng nhận xuất xứ và chất lượng rõ ràng từ nhà sản xuất.",
  },
  {
    number: "02",
    title: "Test Report chính hãng",
    desc: "Cung cấp đầy đủ kết quả thử nghiệm (Test Report) từ phòng thí nghiệm đạt chuẩn của hãng.",
  },
  {
    number: "03",
    title: "Bảo hành tiêu chuẩn hãng",
    desc: "Áp dụng chính sách bảo hành chính thức từ nhà sản xuất, hỗ trợ thay thế linh kiện nhanh chóng.",
  },
  {
    number: "04",
    title: "Chuyên gia đồng hành",
    desc: "Hỗ trợ giám sát lắp đặt, cấu hình hệ thống tủ nạp, ắc quy đạt tiêu chuẩn vận hành an toàn.",
  },
];

// Cập nhật 4 đặc điểm cốt lõi bám sát nội dung yêu cầu của bạn
const features = [
  {
    icon: Ship,
    title: "Thiết bị trạm uy tín",
    desc: "Nhập khẩu trực tiếp thiết bị trạm biến áp từ các thương hiệu uy tín hàng đầu quốc tế như Taikai, Heng Ming...",
  },
  {
    icon: BatteryCharging,
    title: "Ắc quy & Tủ nạp chuyên dụng",
    desc: "Cung cấp hệ thống Ắc quy kiềm (Ni-Cd) và Tủ nạp (ACU) chuyên dụng, đáp ứng hoàn hảo cho các trạm đến 110kV.",
  },
  {
    icon: Zap,
    title: "Tụ bù & Thiết bị đóng cắt",
    desc: "Phân phối giàn Tụ bù trung thế, cao thế cùng các thiết bị đóng cắt, bảo vệ tối ưu cho hệ thống lưới điện.",
  },
  {
    icon: FileCheck,
    title: "Cam kết hồ sơ CO, CQ",
    desc: "Cam kết đầy đủ chứng chỉ CO, CQ, Test Report nghiêm ngặt và dịch vụ hỗ trợ kỹ thuật trực tiếp từ nhà sản xuất.",
  },
];

export default function NhapKhauPhanPhoiPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ thương mại"
        title="Nhập khẩu & Phân phối trực tiếp"
        desc="Long Nhật Minh cung cấp giải pháp cung ứng thiết bị điện cao thế, trung thế chuyên dụng từ các hãng quốc tế, bảo đảm đầy đủ pháp lý kỹ thuật và vận hành an toàn cho hệ thống."
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

      {/* IMPORT & SUPPLY PROCESS SECTION */}
      <ServiceProcess
        eyebrow="Quy trình cung ứng"
        title="Quy trình nhập khẩu và phân phối thiết bị"
        steps={importSteps}
      />

      {/* QUALITY & COMMITMENT SECTION */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Tiêu chuẩn kỹ thuật</span>
            <h2 className="section-title">Cam kết chất lượng & Hồ sơ thiết bị</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitmentSteps.map((s, idx) => (
              <div
                key={s.title}
                className="relative rounded-2xl bg-soft-gradient p-7"
              >
                <span className="text-4xl font-extrabold text-navy-200">
                  {s.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
                {idx < commitmentSteps.length - 1 && (
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
                Cần tư vấn thiết bị trạm và hệ thống tủ nạp ắc quy?
              </h3>
              <p className="mt-2 text-navy-300">
                Hãy liên hệ ngay với Long Nhật Minh để nhận catalog chi tiết và báo giá thiết bị ưu đãi từ hãng.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá thiết bị
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