"use client";

import { ShieldCheck, Ruler, Settings2, Phone, Hammer, Cpu, ShieldAlert, Layers } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceProcess from "@/components/ServiceProcess";

// Thay đổi thành Quy trình sản xuất cơ khí bám sát nhà xưởng
const productionSteps = [
  {
    number: "01",
    title: "Tiếp nhận bản vẽ & Kỹ thuật",
    desc: "Bóc tách bản vẽ kỹ thuật chi tiết, kiểm tra các thông số độ bền, dung sai và lên phương án gia công tối ưu.",
  },
  {
    number: "02",
    title: "Cắt & Gia công thô (CNC)",
    desc: "Sử dụng hệ thống máy cắt CNC, máy đột dập hiện đại để tạo hình phôi thép với độ chính xác tuyệt đối.",
  },
  {
    number: "03",
    title: "Hàn tự động & Lắp ráp",
    desc: "Tiến hành hàn liên kết bằng công nghệ hàn tự động, đảm bảo mối hàn ngấu đều, chịu tải và chịu lực cao.",
  },
  {
    number: "04",
    title: "Mạ kẽm nhúng nóng",
    desc: "Xử lý bề mặt và mạ kẽm nhúng nóng theo tiêu chuẩn quốc tế để bảo vệ kết cấu chống ăn mòn tuyệt đối.",
  },
];

// Thay đổi thành Tiêu chuẩn kiểm soát chất lượng đầu ra
const qualitySteps = [
  {
    number: "01",
    title: "Kiểm định nguyên liệu",
    desc: "100% phôi thép đầu vào có đầy đủ chứng chỉ chất lượng, mác thép đạt chuẩn kỹ thuật ngành điện.",
  },
  {
    number: "02",
    title: "Đo đạc độ dày lớp mạ",
    desc: "Kiểm tra nghiệm ngặt độ dày lớp mạ kẽm nhúng nóng bằng thiết bị chuyên dụng, đảm bảo tuổi thọ công trình.",
  },
  {
    number: "03",
    title: "Thử nghiệm chịu tải",
    desc: "Thực hiện test thử nghiệm phá hủy/không phá hủy đối với bulông, phụ kiện néo nối trước khi xuất xưởng.",
  },
  {
    number: "04",
    title: "Đóng gói & Chứng chỉ",
    desc: "Phân loại, đóng gói theo kiện tiêu chuẩn và cấp chứng chỉ xuất xưởng (CO, CQ nhà máy) kèm theo.",
  },
];

// Cập nhật 4 đặc điểm cốt lõi dựa trên nội dung bạn cung cấp
const features = [
  {
    icon: Hammer,
    title: "Phụ kiện đường dây",
    desc: "Sản xuất bulông, ốc vít, phụ kiện treo, néo, nối chất lượng cao cho hệ thống đường dây truyền tải điện.",
  },
  {
    icon: Layers,
    title: "Kết cấu thép mạ kẽm",
    desc: "Gia công kết cấu thép mạ kẽm nhúng nóng tiêu chuẩn cho cột điện, trạm biến áp và các công trình ngoài trời.",
  },
  {
    icon: Settings2,
    title: "Tủ điện & Thang máng cáp",
    desc: "Sản xuất tủ bảng điện, hệ thống thang máng cáp đa dạng kích thước cùng các phụ kiện đấu nối đồng bộ.",
  },
  {
    icon: Cpu,
    title: "Máy móc hiện đại",
    desc: "Hệ thống nhà xưởng sở hữu dây chuyền công nghệ tiên tiến: máy cắt plasma/laser CNC, máy hàn tự động.",
  },
];

export default function KetCauThepPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ sản xuất"
        title="Sản xuất Kết cấu thép & Phụ kiện Lưới điện"
        desc="Long Nhật Minh là đơn vị cơ khí chính xác chuyên cung cấp các giải pháp kết cấu thép và phụ kiện lưới điện hơp chuẩn, đáp ứng các tiêu chuẩn kỹ thuật khắt khe của ngành điện lực."
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

      {/* PRODUCTION PROCESS SECTION */}
      <ServiceProcess
        eyebrow="Quy trình công nghệ"
        title="Quy trình sản xuất cơ khí chính xác"
        steps={productionSteps}
      />

      {/* QUALITY CONTROL SECTION */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Quản lý chất lượng</span>
            <h2 className="section-title">Tiêu chuẩn kiểm tra & Xuất xưởng sản phẩm</h2>
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
                Cần gia công kết cấu thép & phụ kiện lưới điện theo yêu cầu?
              </h3>
              <p className="mt-2 text-navy-300">
                Gửi ngay bản vẽ thiết kế để nhận tư vấn kỹ thuật và báo giá tối ưu công suất sản xuất từ nhà máy.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá sản xuất
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