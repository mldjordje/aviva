'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';

import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceAreaDetailsBotox from './ServiceAreaDetailsBotox';
import About2 from '@/components/about/About2';
import AboutUs from '@/components/about/AboutUs';
import Cenovnik from '@/components/cenovnik/Cenovnik';
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
              subtitle="Botox tretman"
              title="Botox – osvežen i podmlađen izgled bez bora."
              des="Botox je bezbedan i brz estetski tretman koji smanjuje mimične bore i vraća licu svežinu, bez promena u izrazu lica. Efekti traju do 6 meseci uz minimalnu nelagodnost."
              images={["/assets/img1/1.jpg"]}
            />

            <ServiceAreaDetailsBotox />
            <Cenovnik category="botoks" />

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
