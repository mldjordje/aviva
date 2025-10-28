"use client";
import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceTeam from "@/components/service/ServiceTeam";

import TeamDetailsArea from "@/components/details/TeamDetailsArea";
import ServiceAreaDetails from "./ServiceAreaDetailsSkinboost";
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
              subtitle="Skinboosteri"
              title="Skinboosteri â€“ dubinska hidratacija i revitalizacija koÅ¾e"
              des="Skinboosteri su tretmani na bazi hijalurona koji se unose u koÅ¾u kako bi joj vratili elastiÄnost, sjaj i sveÅ¾inu. Namenjeni su prevenciji starenja i poboljÅ¡anju kvaliteta koÅ¾e."
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


