
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const AboutUs = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}

      <section>
        <div className="cs_bg cs_bg_img_about_titile" style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/assets/aviva-nove-slike2/outsiide-clinic.webp"
            alt="CTA pozadina"
            fill
            quality={66}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center", zIndex: 0 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(125deg, rgba(187,39,74,0.64) 0%, rgba(197,84,94,0.42) 55%, rgba(232,194,182,0.28) 100%)",
              zIndex: 1,
            }}
          />
          <div className="container">
            <div className="cs_learning_project" style={{ position: "relative", zIndex: 2 }}>
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <h3 className="cs_section_title_3 cs_color_2 anim_heading_title" style={{ textShadow: "0 2px 14px rgba(88, 20, 33, 0.45)" }}>
                    Dođite na konsultacije i otkrijte šta vam najviše odgovara.
                  </h3>
                </div>
                <div className="cs_section_heading_right cs_btn_anim">
                  <Link href="/contact" className="cs_btn cs_style_1 cs_color_2">
                    <span>Kontaktiraj nas.</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

