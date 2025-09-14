import React from 'react';
import Image from 'next/image';

interface AboutProps {
  subtitle: string;
  title: string;
  des: string;
  images?: string[]; // da možeš slati različite slike po potrebi
}

const About: React.FC<AboutProps> = ({ subtitle, title, des, images }) => {
  return (
    <>
      <div className="cs_height_90 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">{des}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>

        {images && (
          <div className="container">
            <div className="cs_agency agency_about_images_posation">
              {images.map((img, i) => (
                <div key={i} className={`cs_img_section_${i + 1}`}>
                  <Image src={img} alt="about" className="w-100" width={600} height={400} />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
