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

export const metadata: Metadata = {
  title: "Long Nhật Minh | Thiết kế & Thi công Trạm biến áp, Điện nhà xưởng",
  description:
    "Long Nhật Minh chuyên thiết kế, thi công trạm biến áp đến 35KV và hệ thống điện nhà xưởng, khu công nghiệp. Đội ngũ kỹ sư giàu kinh nghiệm, thi công an toàn, đúng tiến độ.",
  keywords: [
    "thiết kế trạm biến áp",
    "thi công trạm biến áp",
    "điện nhà xưởng",
    "trạm biến áp 35kv",
    "Long Nhật Minh",
  ],
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
