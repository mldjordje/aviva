'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';

import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceAreaDetailsPrp from './ServiceAreaDetailsPrp';
import PrpContentSections from './PrpContentSections';

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
              subtitle="PRP tretman u Nišu"
              title="PRP tretman – prirodno obnavljanje kože uz sopstvenu krvnu plazmu"
              des="Želite blistaviju, čvršću i prirodno podmlađenu kožu bez invazivnih procedura? U Aviva Ageless klinici u Nišu PRP tretman počinje besplatnom konsultacijom i individualnim planom lekara. Koristimo vašu krvnu plazmu bogatu faktorima rasta kako bismo stimulisali regeneraciju kože, smanjili bore i vratili tonus i sjaj licu, vratu ili dekolteu."
              images={["/assets/img1/1.jpg"]}
            />

            <PrpContentSections />
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