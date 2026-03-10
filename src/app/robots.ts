import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.avivaageless.rs";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/anti-aging", "/usluge/anti-aging"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/anti-aging", "/usluge/anti-aging"],
      },
    ],
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}
