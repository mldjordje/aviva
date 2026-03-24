import AiReferralTracker from "@/components/analytics/AiReferralTracker";
import HeroUIRootProvider from "@/components/providers/HeroUIRootProvider";
import { organizationJsonLd } from "@/data/contact";
import "@/styles/index.scss";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";

const GOOGLE_TAG_MANAGER_ID = "GTM-TXZ8XV3L";

export const metadata: Metadata = {
  metadataBase: new URL("https://ageless.rs"),
  title: { default: "Aviva Ageless - Estetska medicina Nis", template: "%s | Aviva Ageless" },
  description:
    "Aviva Ageless u Nisu - estetski tretmani (botoks, fileri, PRP, skinboosteri, mezoterapija) uz strucni tim i individualni pristup.",
  keywords: [
    "estetska medicina nis",
    "botox nis",
    "hijaluronski fileri nis",
    "prp nis",
    "skinboosteri nis",
    "mezoterapija nis",
    "lipoliza nis",
    "aviva ageless",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://ageless.rs/",
    siteName: "Aviva Ageless",
    locale: "sr_RS",
    title: "Aviva Ageless - Estetska medicina Nis",
    description:
      "Strucni estetski tretmani u Nisu: botoks, hijaluronski fileri, PRP, skinboosteri, mezoterapija i lipoliza.",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Aviva Ageless" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviva Ageless - Estetska medicina Nis",
    description:
      "Lokalna klinika estetske medicine u Nisu. Usluge: botoks, fileri, PRP, skinboosteri, mezoterapija, lipoliza.",
  },
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
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
        <link rel="alternate" type="text/plain" href="https://ageless.rs/llms.txt" />
        <link rel="alternate" type="text/plain" href="https://ageless.rs/llms-full.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd("MedicalClinic") }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <HeroUIRootProvider>{children}</HeroUIRootProvider>
        <AiReferralTracker />
        <Analytics />
      </body>
    </html>
  );
}
