 
'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import TeamArea from '@/components/team/TeamArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import About from '@/components/about/About';
import AboutUs from '@/components/about/AboutUs';


// export const metadata = {
//   title: "Team Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamArea />
            <AboutUs />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;