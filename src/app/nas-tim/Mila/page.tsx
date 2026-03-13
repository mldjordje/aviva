
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

import AboutHomeFour from '@/components/about/AboutHomeFour';

import Mila from './Mila';


export const metadata = {
  title: "Dr Mila ÄorÄ‘eviÄ‡ - Estetski hirurg | Aviva Ageless",
  description: "Dr Mila ÄorÄ‘eviÄ‡ je vrhunski estetski hirurg u poliklinici Aviva Ageless. Nudimo prirodne i sigurne estetske tretmane prilagoÄ‘ene vaĹˇim potrebama.",
  openGraph: {
    title: "Dr Mila ÄorÄ‘eviÄ‡ - Estetski hirurg | Aviva Ageless",
    description: "Dr Mila ÄorÄ‘eviÄ‡ je vrhunski estetski hirurg u poliklinici Aviva Ageless. Nudimo prirodne i sigurne estetske tretmane prilagoÄ‘ene vaĹˇim potrebama.",
    url: "https://ageless.rs/nas-tim/mila",
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