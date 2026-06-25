import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const partners = [
  { name: "Chấn Hưng", logo: "/images/logo-nhan-hang/chan-hung-logo.png" },
  { name: "ACIT", logo: "/images/logo-nhan-hang/acit-logo.png" },
  { name: "PCCC5", logo: "/images/logo-nhan-hang/pccc5-logo.png" },
  { name: "SPower", logo: "/images/logo-nhan-hang/spower-logo.png" },
  { name: "EVN PECC2", logo: "/images/logo-nhan-hang/evn-pecc2-logo.png" },
  { name: "Vinaincon", logo: "/images/logo-nhan-hang/vinaincon-logo.png" },
  { name: "EVN PECC1", logo: "/images/logo-nhan-hang/evn-pecc1-logo.png" },
];

export default function PartnersAndCta() {
  return (
    <>
      <section className="bg-white py-14">
        <div className="container-px mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-navy-400">
            Được tin tưởng bởi nhiều doanh nghiệp
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="relative h-16 w-40 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-8 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-navy-400/20 blur-3xl" />

            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              Sẵn sàng khởi động dự án điện của bạn?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-navy-100">
              Liên hệ ngay để được kỹ sư Long Nhật Minh khảo sát, tư vấn
              giải pháp và báo giá miễn phí trong 24 giờ.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/lien-he" className="btn-gold">
                Yêu cầu báo giá
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:0938978138"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone size={18} />
                0938 978 138
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
