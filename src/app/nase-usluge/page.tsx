import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export const metadata = {
  title: "Naše Usluge - Aviva Ageless | Estetska hirurgija i tretmani lica",
  description: "Otkrijte širok spektar estetskih tretmana u poliklinici Aviva Ageless: hijaluronski fileri, Botox, skinboosteri, PRP tretman, lipoliza i više. Prirodni, sigurni i dugotrajni rezultati.",
  canonical: "https://www.avivaageless.rs/usluge",
  openGraph: {
    title: "Naše Usluge - Aviva Ageless",
    description: "Poliklinika Aviva Ageless nudi vrhunske estetske tretmane za zdrav, mladalački i negovan izgled lica.",
    url: "https://www.avivaageless.rs/usluge",
    siteName: "Aviva Ageless",
    type: "website",
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
