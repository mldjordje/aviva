import React from "react";
import Image from "next/image";
import Wrapper from "@/layouts/Wrapper";
import logo from "@/assets/img1/logo4.png";
import { CONTACT } from "@/data/contact";

const IndexPage = () => {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section>
              <div className="cs_hero cs_style1 cs_center">
                <div
                  className="cs_hero_bg cs_bg"
                  style={{ backgroundImage: "url(/assets/img1/4.jpg)" }}
                ></div>
                <div className="container">
                  <div className="cs_hero_text">
                    <div className="cs_hero_text_in">
                      <Image
                        src={logo}
                        alt="Aviva Ageless logo"
                        width={160}
                        height={60}
                        priority
                      />
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_mini_title cs_hero_text_in">
                      Aviva Ageless
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <h1 className="cs_hero_title cs_hero_text_in">Uskoro</h1>
                    <div className="cs_height_40 cs_height_lg_30"></div>
                    <div className="cs_hero_text_in">
                      <div className="cs_hero_subtitle">
                        Pripremamo novu web stranicu. Za zakazivanje i informacije, kontaktirajte nas.
                      </div>
                      <div className="cs_height_40 cs_height_lg_30"></div>
                      <div className="cs_btn cs_style_2">
                        <a href={`tel:${CONTACT.phone}`} className="cs_center">Pozovi</a>
                        <a href={`mailto:${CONTACT.email}`} className="cs_center">Email</a>
                      </div>
                      <div className="cs_height_30 cs_height_lg_20"></div>
                      <div className="cs_hero_subtitle">
                        {CONTACT.address.streetAddress}, {CONTACT.address.addressLocality}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
