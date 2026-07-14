import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const baseUrl = "https://www.longnhatminh.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Long Nhật Minh | Cung cấp & Thi công Trạm biến áp, Điện nhà xưởng",
    template: "%s | Long Nhật Minh",
  },
  description:
    "Long Nhật Minh chuyên cung cấp và thi công trạm biến áp lên đến 220kV và hệ thống điện mặt trời, khu công nghiệp. Đội ngũ kỹ sư giàu kinh nghiệm, thi công an toàn, đúng tiến độ.",
  keywords: [
    "cung cấp trạm biến áp",
    "thi công trạm biến áp",
    "điện nhà xưởng",
    "trạm biến áp 110kV đến 220kV",
    "hệ thống điện mặt trời",
    "Long Nhật Minh",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: baseUrl,
    siteName: "Long Nhật Minh",
    title: "Long Nhật Minh | Cung cấp & Thi công Trạm biến áp, Điện nhà xưởng",
    description:
      "Long Nhật Minh chuyên cung cấp và thi công trạm biến áp lên đến 220kV và hệ thống điện mặt trời, khu công nghiệp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Nhật Minh | Cung cấp & Thi công Trạm biến áp, Điện nhà xưởng",
    description:
      "Long Nhật Minh chuyên cung cấp và thi công trạm biến áp lên đến 220kV và hệ thống điện mặt trời, khu công nghiệp.",
  },
  verification: {
    // Dán mã xác minh từ Google Search Console vào đây nếu có, ví dụ:
    // google: "abcdefg12345",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased bg-white text-navy-900">
        {/* ĐOẠN SCHEMA ĐÃ ĐƯỢC ĐƯA VÀO ĐÂY ĐỂ GOOGLE CÓ THỂ ĐỌC ĐƯỢC */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Long Nhật Minh",
              "url": "https://www.longnhatminh.com.vn",
              "logo": "https://www.longnhatminh.com.vn/images/logoweb.png",
            }),
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}