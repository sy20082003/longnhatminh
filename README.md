# Long Nhật Minh — Website (Next.js)

Website giới thiệu doanh nghiệp xây dựng theo phong cách hiện đại, tông màu
**xanh dương & vàng nhạt**, lấy cảm hứng nội dung từ lĩnh vực thiết kế – thi
công trạm biến áp và điện nhà xưởng. Toàn bộ giao diện, nội dung và hình ảnh
minh họa (SVG) đều được xây dựng mới, không sao chép từ bất kỳ website nào.

## Công nghệ sử dụng

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — hệ màu tùy biến `navy` (xanh dương) & `gold` (vàng nhạt)
- **lucide-react** — bộ icon
- Hình minh họa: SVG tự vẽ (không dùng ảnh ngoài)

## Cấu trúc thư mục

```
app/
  layout.tsx              # Layout gốc, font, metadata SEO
  page.tsx                # Trang chủ
  globals.css             # Style toàn cục + Tailwind
  gioi-thieu/page.tsx      # Trang Giới thiệu
  dich-vu/
    tram-bien-ap/page.tsx     # Dịch vụ: Trạm biến áp
    dien-nha-xuong/page.tsx   # Dịch vụ: Điện nhà xưởng
  thu-vien-anh/page.tsx    # Thư viện ảnh (SVG minh họa)
  lien-he/page.tsx         # Liên hệ + form

components/
  Header.tsx, Footer.tsx, Logo.tsx, PageHero.tsx
  Hero.tsx, ServicesOverview.tsx, AboutPreview.tsx
  WhyChooseUs.tsx, PartnersAndCta.tsx
  ServiceProcess.tsx, GalleryCard.tsx
  ContactForm.tsx, FloatingContact.tsx
```

## Cài đặt & chạy thử

Yêu cầu: Node.js >= 18.

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Tùy chỉnh nhanh

- **Màu sắc:** chỉnh trong `tailwind.config.ts` (bảng màu `navy` và `gold`).
- **Thông tin liên hệ:** sửa trực tiếp trong `components/Footer.tsx`,
  `components/Header.tsx`, `app/lien-he/page.tsx`.
- **Logo:** chỉnh sửa SVG trong `components/Logo.tsx`.
- **Hình ảnh thật:** thay các SVG minh họa bằng ảnh thật của công ty bằng cách
  đặt file vào `public/images/` và dùng component `next/image`.

## Ghi chú

Form liên hệ hiện tại chỉ mô phỏng việc gửi (chưa kết nối backend/email thật).
Để form hoạt động thực tế, bạn có thể tích hợp thêm API route Next.js
(`app/api/contact/route.ts`) hoặc dịch vụ gửi email như Resend, EmailJS...
