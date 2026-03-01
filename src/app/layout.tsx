import "@/styles/index.scss";
import { organizationJsonLd } from "@/data/contact";
import type { Metadata } from "next";
import HeroUIRootProvider from "@/components/providers/HeroUIRootProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avivaageless.rs"),
  title: { default: "Aviva Ageless – Estetska medicina Niš", template: "%s | Aviva Ageless" },
  description:
    "Aviva Ageless u Nišu – estetski tretmani (botoks, fileri, PRP, skinboosteri, mezoterapija) uz stručni tim i individualni pristup.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://www.avivaageless.rs/", siteName: "Aviva Ageless" },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/icon.png?v=3", type: "image/png", sizes: "512x512" }],
    shortcut: [{ url: "/favicon.ico?v=3" }],
    apple: [{ url: "/apple-icon.png?v=3", type: "image/png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION as string },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd("MedicalClinic") }}
        />
      </head>
      <body>
        <HeroUIRootProvider>{children}</HeroUIRootProvider>
        <Analytics />
      </body>
    </html>
  );
}
