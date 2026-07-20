import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-navy-300">
            Đơn vị cung cấp và phân phối,thiết kế, thi công trạm biến áp và hệ thống điện mặt trời,
            khu công nghiệp với đội ngũ kỹ sư nhiều năm kinh nghiệm thực tiễn,
            cam kết an toàn và đúng tiến độ.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 transition-colors hover:bg-gold-500 hover:text-navy-900"
          >
            <Facebook size={18} />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
            Liên kết
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-base text-navy-300 hover:text-white">
                Trang chủ
              </Link>
            </li>
            <li>
                <Link href="/gioi-thieu" className="text-base text-navy-300 hover:text-white">
                  Giới thiệu
              </Link>
            </li>
            <li>
              <Link href="/thu-vien-anh" className="text-base text-navy-300 hover:text-white">
                Thư viện ảnh
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="text-base text-navy-300 hover:text-white">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
            Dịch vụ
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/dich-vu/san-xuat" className="text-base text-navy-300 hover:text-white">
                Sản xuất Kết cấu thép & Phụ kiện Lưới điện
              </Link>
            </li>
            <li>
              <Link href="/dich-vu/phan-phoi" className="text-base text-navy-300 hover:text-white">
               Phân phối vật tư thiết bị cho đường dây và trạm biến áp
              </Link>
            </li>
            <li>
              <Link href="/dich-vu/dien-mat-troi" className="text-base text-navy-300 hover:text-white">
                Cung cấp & lắp đặt hệ thống điện mặt trời
              </Link>
            </li>
            <li>
              <Link href="/dich-vu/nhap-khau" className="text-base text-navy-300 hover:text-white">
                Nhập khẩu & Phân phối trực tiếp
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400">
            Liên hệ
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-navy-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
              <span>
                1146/51/29 Quang Trung, Phường Thông Tây Hội, TP. Hồ Chí Minh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold-400" />
              <a href="tel:0938978138" className="hover:text-white">
                0938 978 138
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold-400" />
              <a href="mailto:longnhatminh.info@gmail.com" className="hover:text-white">
                longnhatminh.info@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Long Nhật Minh. Bản quyền thuộc về
            Công ty TNHH Kỹ thuật Long Nhật Minh.
          </p>
          <p>LONG NHẬT MINH cam kết Uy tín - Giá cả - Tiến độ - Chất lượng trên từng dự án⚡</p>
        </div>
      </div>
    </footer>
  );
}
  