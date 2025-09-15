
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

import AboutHomeFour from '@/components/about/AboutHomeFour';

import Mila from './Mila';


export const metadata = {
  title: "Dr Mila Đorđević - Estetski hirurg | Aviva Ageless",
  description: "Dr Mila Đorđević je vrhunski estetski hirurg u poliklinici Aviva Ageless. Nudimo prirodne i sigurne estetske tretmane prilagođene vašim potrebama.",
  openGraph: {
    title: "Dr Mila Đorđević - Estetski hirurg | Aviva Ageless",
    description: "Dr Mila Đorđević je vrhunski estetski hirurg u poliklinici Aviva Ageless. Nudimo prirodne i sigurne estetske tretmane prilagođene vašim potrebama.",
    url: "https://www.avivaageless.rs/nas-tim/mila",
    type: "profile",
  },
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Mila />
            
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;