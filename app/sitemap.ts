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
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
