'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';

import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import ServiceAreaDetails from './ServiceAreaDetailsSavetovanje';
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
              subtitle="Konsultacije sa lekarom"
              title="Prvi korak ka zdravijoj i lepšoj koži – stručne konsultacije"
              des="Konsultacije omogućavaju da zajedno sa stručnjakom definišete ciljeve, dobijete personalizovane savete i saznate koje tretmane je najbolje primeniti za vaš tip kože."
              images={["/assets/img1/1.jpg"]}
            />

            <ServiceAreaDetails />
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


