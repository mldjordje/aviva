'use client'
import React from 'react';
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
              title="PRP tretman â€“ prirodna regeneracija koÅ¾e koja vraÄ‡a mladost i sveÅ¾inu."
              des="Iskoristite moÄ‡ sopstvene plazme za podmlaÄ‘ivanje i regeneraciju koÅ¾e. PRP tretman stimuliÅ¡e prirodnu proizvodnju kolagena i vraÄ‡a elastiÄnost, tonus i sjaj vaÅ¡em licu, vratu ili dekolteu."
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

