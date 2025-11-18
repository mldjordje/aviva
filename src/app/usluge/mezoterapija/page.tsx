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
              title="Mezoterapija – intenzivna hidratacija i podmlađivanje kože"
              des="Mezoterapija podrazumeva mikroinjekcije koktela vitamina, minerala i hijalurona direktno u srednji sloj kože, čime se postiže osvežen izgled i poboljšava tonus kože."
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


