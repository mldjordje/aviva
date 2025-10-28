"use client";
import React from "react";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Lipoliza – Aviva Ageless Niš',
  description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/lipoliza' },
  openGraph: { title: 'Lipoliza – Aviva Ageless Niš', description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.', url: 'https://www.avivaageless.rs/usluge/lipoliza', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lipoliza – Aviva Ageless Niš', description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.' },
};
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceTeam from "@/components/service/ServiceTeam";

import TeamDetailsArea from "@/components/details/TeamDetailsArea";
import ServiceAreaDetailsLipoliza from "./ServiceAreaDetailsLipoliza";
import About2 from "@/components/about/About2";
import AboutUs from "@/components/about/AboutUs";

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Lipoliza"
              title="Lipoliza â€“ efikasno uklanjanje lokalizovanih masnih naslaga"
              des="Lipoliza je minimalno invazivna metoda koja razgraÄ‘uje masne Ä‡elije ubrizgavanjem specijalnih supstanci direktno u problematiÄne regije tela."
              images={["/assets/img1/1.jpg"]}
            />

            <ServiceAreaDetailsLipoliza />
            <TeamDetailsArea />
            <AboutUs />
            <ServiceTeam />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;

