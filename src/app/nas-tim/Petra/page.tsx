'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Petra from '../Kristina/Kristina';

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Petra />
            <ServiceTeam />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
