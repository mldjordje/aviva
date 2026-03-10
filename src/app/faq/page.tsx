import FaqArea from "@/components/faq/FaqArea";
import { faqItems } from "@/data/faq_data";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQ - Estetska medicina Nis",
  description:
    "Cesta pitanja o estetskim tretmanima u Aviva Ageless klinici u Nisu: botoks, fileri, PRP, skinboosteri, mezoterapija i konsultacije.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ - Aviva Ageless Nis",
    description:
      "Odgovori na najcesca pitanja o tretmanima estetske medicine u Nisu i pripremi za tretman.",
    url: "https://www.avivaageless.rs/faq",
    type: "website",
  },
};

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export default function FaqPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
