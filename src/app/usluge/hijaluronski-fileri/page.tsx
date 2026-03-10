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
import RelatedServiceLinks from "@/components/service/RelatedServiceLinks";
const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Hijaluronski fileri Niš – Prirodna lepota u stručnim rukama"
              title="U Avivi Ageless, naš cilj je jednostavan: da sačuvamo i istaknemo vašu prirodnu lepotu na potpuno prirodan način."
              des="Na čelu našeg tima je Dr Mila Đorđević, zajedno sa grupom iskusnih lekara estetske medicine.
 Naši tretmani hijaluronskim filerima kombinuju sigurnost, efikasnost i personalizovan pristup, tako da svaka osoba dobije rezultate prilagođene svom licu."
              images={[
                "/assets/aviva-nove-slike/hijalurnski-fileri.webp",
                "/assets/aviva-nove-slike/work2.webp",
                "/assets/aviva-nove-slike/model.webp",
              ]}
            />
            <AboutHomeOne />
            <ServiceAreaDetailsFiler />
            <Zastofiler />
            <RelatedServiceLinks current="hijaluronski-fileri" />
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
