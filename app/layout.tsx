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

const baseUrl = "https://longnhatminh-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Long Nhật Minh | Thiết kế & Thi công Trạm biến áp, Điện nhà xưởng",
    template: "%s | Long Nhật Minh",
  },
  description:
    "Long Nhật Minh chuyên thiết kế, thi công trạm biến áp đến 35KV và hệ thống điện nhà xưởng, khu công nghiệp. Đội ngũ kỹ sư giàu kinh nghiệm, thi công an toàn, đúng tiến độ.",
  keywords: [
    "thiết kế trạm biến áp",
    "thi công trạm biến áp",
    "điện nhà xưởng",
    "trạm biến áp 35kv",
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
    title: "Long Nhật Minh | Thiết kế & Thi công Trạm biến áp, Điện nhà xưởng",
    description:
      "Long Nhật Minh chuyên thiết kế, thi công trạm biến áp đến 35KV và hệ thống điện nhà xưởng, khu công nghiệp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Nhật Minh | Thiết kế & Thi công Trạm biến áp, Điện nhà xưởng",
    description:
      "Long Nhật Minh chuyên thiết kế, thi công trạm biến áp đến 35KV và hệ thống điện nhà xưởng, khu công nghiệp.",
  },
  verification: {
    // Dán mã xác minh từ Google Search Console vào đây, ví dụ:
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
