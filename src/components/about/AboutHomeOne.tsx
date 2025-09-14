'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const imgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const AnimatedSlide = ({ item, isActive }: { item: DataType; isActive: boolean }) => {
  return (
    <div className="cs_about cs_style_1">
      <motion.div
        className="cs_about_bg cs_bg"
        style={{ backgroundImage: `url(${item.img})` }}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={imgVariants}
      />
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="cs_about_text"
        >
          <motion.div
            className="cs_section_subtitle"
            custom={1}
            variants={textVariants}
          >
            {item.sub_title}
          </motion.div>
          <motion.h2
            className="cs_section_title"
            custom={2}
            variants={textVariants}
          >
            {item.title}
          </motion.h2>
          <motion.p
            className="cs_m0"
            custom={3}
            variants={textVariants}
          >
            {item.des}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

const AboutHomeOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          renderFraction: (currentClass, totalClass) =>
            `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <AnimatedSlide item={item} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
