'use client'
import React from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'PRP tretman – Aviva Ageless Niš',
  description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/prp' },
  openGraph: { title: 'PRP tretman – Aviva Ageless Niš', description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.', url: 'https://www.avivaageless.rs/usluge/prp', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PRP tretman – Aviva Ageless Niš', description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.' },
};
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';

import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceAreaDetailsPrp from './ServiceAreaDetailsPrp';

import About2 from '@/components/about/About2';
import AboutUs from '@/components/about/AboutUs';
// export const metadata = {
//   title: "Team Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="PRP tretman"
              title="PRP tretman – prirodna regeneracija kože koja vraća mladost i svežinu."
              des="Iskoristite moć sopstvene plazme za podmlađivanje i regeneraciju kože. PRP tretman stimuliše prirodnu proizvodnju kolagena i vraća elastičnost, tonus i sjaj vašem licu, vratu ili dekolteu."
              images={[
                "/assets/img1/1.jpg"
              ]}
            />
            
            <ServiceAreaDetailsPrp />
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
