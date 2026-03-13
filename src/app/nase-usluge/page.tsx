import AboutHomeFour from "@/components/about/AboutHomeFour";
import HeroService from "@/components/hero/HeroService";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Naše usluge - Aviva Ageless | Estetska medicina Niš",
  description:
    "Pregled estetskih tretmana u Aviva Ageless u Nišu: hijaluronski fileri, botoks, skinboosteri, PRP, lipoliza, mezoterapija i savetovanja.",
  alternates: { canonical: "https://ageless.rs/nase-usluge" },
  openGraph: {
    title: "Naše usluge - Aviva Ageless",
    description:
      "Poliklinika Aviva Ageless u Nišu nudi estetske tretmane sa fokusom na prirodan rezultat i individualan pristup.",
    url: "https://ageless.rs/nase-usluge",
    siteName: "Aviva Ageless",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naše usluge - Aviva Ageless",
    description:
      "Estetski tretmani u Nišu: botoks, fileri, PRP, skinboosteri, mezoterapija, lipoliza i savetovanja.",
  },
};

const Index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroService />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
