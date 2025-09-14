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
              title="Skinboosteri – dubinska hidratacija i revitalizacija kože"
              des="Skinboosteri su tretmani na bazi hijalurona koji se unose u kožu kako bi joj vratili elastičnost, sjaj i svežinu. Namenjeni su prevenciji starenja i poboljšanju kvaliteta kože."
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
