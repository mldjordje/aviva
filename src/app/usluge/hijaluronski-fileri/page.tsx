"use client";
import React from "react";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";

import Mila from "@/components/tim/Mila";
import ServiceAreaDetailsFiler from "./ServiceAreaDetailsFiler";
import About2 from "@/components/about/About2";
import AboutUs from "@/components/about/AboutUs";
import AboutHomeOne from "./AboutHome";
import Zastofiler from "./Zastofiler";
import Cenovnik from "@/components/cenovnik/Cenovnik";
const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Hijaluronski fileri NiÅ¡ â€“ Prirodna lepota u struÄnim rukama"
              title="U Avivi Ageless, naÅ¡ cilj je jednostavan: da saÄuvamo i istaknemo vaÅ¡u prirodnu lepotu na potpuno prirodan naÄin."
              des="Na Äelu naÅ¡eg tima je Dr Mila ÄorÄ‘eviÄ‡, zajedno sa grupom iskusnih lekara specijalista estetske medicine.
 NaÅ¡i tretmani hijaluronskim filerima kombinuju sigurnost, efikasnost i personalizovan pristup, tako da svaka osoba dobije rezultate prilagoÄ‘ene svom licu."
              images={[
                "/assets/img1/1.jpg",
                "/assets/img1/2.jpg",
                "/assets/img1/3.jpg",
              ]}
            />
            <AboutHomeOne />
            <ServiceAreaDetailsFiler />
            <Zastofiler />
            <Cenovnik category="fileri" />
            <Mila />
            <AboutUs />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
