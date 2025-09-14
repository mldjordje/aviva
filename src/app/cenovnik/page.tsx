 
'use client'

import Cenovnik from '@/components/cenovnik/Cenovnik';
import FaqArea from '@/components/faq/FaqArea';
import HeroHomeFive from '@/components/hero/HeroHomeFive';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



// export const metadata = {
//   title: "Faq Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFive />
            <Cenovnik />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;