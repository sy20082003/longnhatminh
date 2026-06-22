import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="absolute -right-20 -top-20 h-[500px] w-[500px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="100" fill="url(#heroCircle)" />
          <defs>
            <radialGradient id="heroCircle">
              <stop offset="0%" stopColor="#fde685" />
              <stop offset="100%" stopColor="#fde685" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:py-32">
        <div className="animate-fade-up">
          <span className="eyebrow bg-gold-400/20 text-gold-300">
            Uy tín hơn 10 năm trong ngành điện
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Giải pháp{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              trạm biến áp
            </span>{" "}
            &amp; điện công nghiệp an toàn, bền vững
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            <strong>CTY TNHH KỸ THUẬT LONG NHẬT MINH</strong> đồng hành cùng nhà xưởng, khu công nghiệp và khu
            dân cư trong thiết kế – thi công đường dây, trạm biến áp đến 35KV
            và hệ thống điện nhà xưởng đạt chuẩn kỹ thuật cao.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/lien-he" className="btn-gold">
              Nhận tư vấn miễn phí
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Tìm hiểu thêm
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">150+</p>
              <p className="mt-1 text-xs text-navy-200 sm:text-sm">Công trình hoàn thành</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">35KV</p>
              <p className="mt-1 text-xs text-navy-200 sm:text-sm">Công suất tối đa</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">100%</p>
              <p className="mt-1 text-xs text-navy-200 sm:text-sm">Đạt chuẩn CO, CQ</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="animate-float rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <HeroIllustration />
          </div>

          <div className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy-700">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">An toàn tuyệt đối</p>
              <p className="text-xs text-navy-400">Đúng quy chuẩn Điện lực</p>
            </div>
          </div>

          <div className="absolute -right-6 top-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <Zap size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Vận hành ổn định</p>
              <p className="text-xs text-navy-400">Hiệu suất tối ưu</p>
            </div>
          </div>

          <div className="absolute -bottom-10 right-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy-700">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Đúng tiến độ</p>
              <p className="text-xs text-navy-400">Bàn giao đúng hẹn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 w-full bg-soft-gradient [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
}

function HeroIllustration() {
  return (
   <div className="h-full w-full rounded-2xl overflow-hidden">
  <img 
    src="/images/hero.jpg" // Hoặc đường dẫn đến ảnh khác của bạn (ví dụ: /images/tram-bien-ap.png)
    alt="Hình ảnh minh họa"
    className="h-full w-full object-cover" // Giúp ảnh tự động lấp đầy khung hình và bo góc đẹp mắt
  />
</div>
  );
}
