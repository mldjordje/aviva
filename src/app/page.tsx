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
            <div className="cs_home_defer">
              <HeroHomeThree />
            </div>
            <div className="cs_home_defer">
              <AboutHomeOne />
            </div>
            <div className="cs_home_defer">
              <ServiceHomeOne />
            </div>
            <div className="cs_home_defer">
              <Cenovnik />
            </div>
            <div className="cs_home_defer">
              <VideoHomeOne />
            </div>
            <div className="cs_home_defer">
              <TeamArea />
            </div>
            <div className="cs_home_defer">
              <BrandHomeOne style_2={true} />
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
