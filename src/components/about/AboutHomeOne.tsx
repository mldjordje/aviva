'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img1/2.jpg",
    sub_title: "Naša misija",
    title: `Negujemo prirodnu lepotu`,
    des: `U Aviva Ageless klinici verujemo da svaka žena zaslužuje da se oseća lepo, samopouzdano i negovano. Naš cilj je da kroz stručne tretmane podmlađivanja istaknemo Vašu prirodnu lepotu uz individualan pristup i vrhunsku negu.`,
  },
  {
    img: "/assets/img1/6.jpg",
    sub_title: "Naš pristup",
    title: `Stručnost i posvećenost pacijentu`,
    des: `Dr Mila Đorđević i dr Marša Leone Papović primenjuju savremene metode estetske medicine uz poseban akcenat na sigurnost, prirodan rezultat i lični kontakt sa svakim pacijentom. Vaše poverenje nam je najvažnije.`,
  },
  {
    img: "/assets/img1/7.jpg",
    sub_title: "Zašto Aviva Ageless?",
    title: `Savremena estetska medicina u srcu Niša`,
    des: `Klinika je opremljena najnovijom tehnologijom, a naš tim se neprestano usavršava kako bi pružio najkvalitetnije tretmane poput hijaluronskih filera, botoksa, PRP terapije, skinboostera i lipolize.`,
  },
];


const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;