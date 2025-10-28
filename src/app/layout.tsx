import "@/styles/index.scss";
import { organizationJsonLd } from "@/data/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avivaageless.rs"),
  title: { default: "Aviva Ageless – Estetska medicina Niš", template: "%s | Aviva Ageless" },
  description: "Aviva Ageless u Nišu – estetski tretmani (botoks, fileri, PRP, skinboosteri, mezoterapija) uz stručni tim i individualni pristup.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://www.avivaageless.rs/", siteName: "Aviva Ageless" },
  twitter: { card: "summary_large_image" },
  icons: [ { rel: "icon", url: "/assets/img1/logo3.png" }, { rel: "shortcut icon", url: "/assets/img1/logo1.png" } ],
  robots: { index: true, follow: true },
  verification: { google: (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION as string) },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd("MedicalClinic") }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

