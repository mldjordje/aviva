"use client";
import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceTeam from "@/components/service/ServiceTeam";

import TeamDetailsArea from "@/components/details/TeamDetailsArea";
import ServiceAreaDetails from "./ServiceAreaDetailsMezoterapija";
import About2 from "@/components/about/About2";
import AboutUs from "@/components/about/AboutUs";

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Mezoterapija"
              title="Mezoterapija â€“ intenzivna hidratacija i podmlaÄ‘ivanje koÅ¾e"
              des="Mezoterapija podrazumeva mikroinjekcije koktela vitamina, minerala i hijalurona direktno u srednji sloj koÅ¾e, Äime se postiÅ¾e osveÅ¾en izgled i poboljÅ¡ava tonus koÅ¾e."
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


