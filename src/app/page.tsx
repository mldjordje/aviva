import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import HeroHomeThree from "@/components/hero/HeroHomeThree";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Cenovnik from "@/components/cenovnik/Cenovnik";
import TeamArea from "@/components/team/TeamArea";

const IndexPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            <HeroHomeThree />
            <AboutHomeOne />
            <ServiceHomeOne />
            <Cenovnik />
            <VideoHomeOne />
            <TeamArea />
            <BrandHomeOne style_2={true} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
