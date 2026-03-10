import type { MetadataRoute } from "next";

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.avivaageless.rs";
  const lastModified = new Date();

  const routes: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/nase-usluge", priority: 0.95, changeFrequency: "weekly" },
    { path: "/usluge/hijaluronski-fileri", priority: 0.92, changeFrequency: "weekly" },
    { path: "/usluge/botox", priority: 0.92, changeFrequency: "weekly" },
    { path: "/usluge/skinboosteri", priority: 0.9, changeFrequency: "weekly" },
    { path: "/usluge/prp", priority: 0.9, changeFrequency: "weekly" },
    { path: "/usluge/lipoliza", priority: 0.9, changeFrequency: "weekly" },
    { path: "/usluge/mezoterapija", priority: 0.9, changeFrequency: "weekly" },
    { path: "/usluge/savetovanja", priority: 0.9, changeFrequency: "weekly" },
    { path: "/cenovnik", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nas-tim", priority: 0.8, changeFrequency: "monthly" },
    { path: "/galerija", priority: 0.78, changeFrequency: "monthly" },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/llms.txt", priority: 0.65, changeFrequency: "monthly" },
    { path: "/llms-full.txt", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
