import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.longnhatminh.com.vn";

  const routes = [
    "",
    "/gioi-thieu",
    "/lien-he",
    "/thu-vien-anh",
    "/dich-vu/dien-mat-troi",
    "/dich-vu/nhap-khau",
    "/dich-vu/phan-phoi",
    "/dich-vu/san-xuat",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`, // Đã sửa: Chỉ dùng duy nhất dấu backtick ``, bỏ dấu nháy bọc ngoài
    lastModified: new Date(),
    changeFrequency: "monthly" as const, // Ép kiểu 'as const' để khớp chuẩn Type của Next.js
    priority: route === "" ? 1 : 0.8,
  }));
}