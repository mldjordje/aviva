import { getServiceJsonLd, getServiceSeoEntry } from "@/data/service_seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const service = getServiceSeoEntry("hijaluronski-fileri");

export const metadata: Metadata = {
  title: `${service.name} - Aviva Ageless Nis`,
  description: service.description,
  keywords: service.keywords,
  alternates: { canonical: service.url },
  openGraph: {
    title: `${service.name} - Aviva Ageless Nis`,
    description: service.description,
    url: service.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} - Aviva Ageless Nis`,
    description: service.description,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getServiceJsonLd("hijaluronski-fileri") }}
      />
      {children}
    </>
  );
}
