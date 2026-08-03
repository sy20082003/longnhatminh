import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    lines: [
      "1146/51/29 Quang Trung, Phường Thông Tây Hội, TP. Hồ Chí Minh",
    ],
  },
  {
    icon: Phone,
    title: "Điện thoại",
    lines: ["0901 835 103 (Mr. Long)", "Hotline: 0938 978 138"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["longnhatminh.info@gmail.com"],
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    lines: ["Thứ 2 - Thứ 7: 7:30 - 17:30", "Hỗ trợ khẩn cấp 24/7"],
  },
];

export default function LienHePage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Kết nối với Long Nhật Minh"
        desc="Gửi yêu cầu để được kỹ sư khảo sát, tư vấn giải pháp và báo giá miễn phí cho công trình của bạn."
        image="/images/website.png"
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-navy-900">
              Thông tin liên hệ
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-500">
              Quý khách có thể liên hệ trực tiếp qua điện thoại, email hoặc
              điền thông tin vào biểu mẫu, đội ngũ LONG NHAT MINH TECHNICAL COMPANY LIMITED
              sẽ phản hồi trong thời gian sớm nhất.
            </p>

            <div className="mt-8 space-y-5">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{c.title}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-navy-500">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://zalo.me/0938978138"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 w-full sm:w-auto"
            >
              Chat qua Zalo
            </a>
          </div>

          <div className="rounded-3xl border border-navy-100 bg-soft-gradient p-7 shadow-card sm:p-9 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-navy-900">
              Gửi yêu cầu tư vấn
            </h2>
            <p className="mt-2 text-sm text-navy-500">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-navy-100">
            <iframe
              title="Bản đồ Long Nhật Minh"
              src="https://www.google.com/maps/place/C%C3%94NG+TY+TNHH+K%E1%BB%B8+THU%E1%BA%ACT+LONG+NH%E1%BA%ACT+MINH/@10.8436855,106.6413688,17z/data=!4m6!3m5!1s0x67ff70db6ca431ad:0xeeef9e3369af7aec!8m2!3d10.8436802!4d106.6439437!16s%2Fg%2F11z944yx48?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
              className="h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
