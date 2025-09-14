'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';

import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceAreaDetailsAntiage from './ServiceAreaDetailsAntiage';
import About2 from '@/components/about/About2';
import AboutUs from '@/components/about/AboutUs';

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Anti-Aging tretman"
              title="Anti-Aging tretman – Zadrži mladalački izgled kože."
              des="Anti-aging tretman koristi napredne tehnike za zatezanje kože, smanjenje bora i poboljšanje tonusa. Rezultati su prirodni i dugotrajni, uz minimalnu nelagodnost."
              images={["/assets/img1/1.jpg"]}
            />

            <ServiceAreaDetailsAntiage />
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
