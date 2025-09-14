"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface DataType {
  id: number;
  title: string;
  des: string;
  icon: string;
  slug: string;
}

const service_data: DataType[] = [
  { id: 1, title: "Hijaluronski fileri", des: "Vraćanje volumena i popunjavanje bora...", icon: "/assets/icon/hiperhidroza.png", slug: "hijaluronski-fileri" },
  { id: 2, title: "Botox", des: "Efikasan tretman za uklanjanje mimičnih bora...", icon: "/assets/icon/ikonica.png", slug: "botox" },
  { id: 3, title: "Skinboosteri", des: "Dubinska hidratacija kože uz pomoć hijaluronskih boostera...", icon: "/assets/icon/ikonica2.png", slug: "skinboosteri" },
  { id: 4, title: "Lipoliza", des: "Neinvazivno uklanjanje lokalizovanih masnih naslaga...", icon: "/assets/icon/ikonica3.png", slug: "lipoliza" },
  { id: 5, title: "PRP tretman", des: "Regenerativna terapija sopstvenom plazmom...", icon: "/assets/icon/ikonica4.png", slug: "prp" },
  { id: 6, title: "Anti-aging", des: "Stručno vođeni anti-age protokoli...", icon: "/assets/icon/ikonica5.png", slug: "anti-aging" },
  { id: 7, title: "Savetovanja", des: "Individualni pristup svakom pacijentu...", icon: "/assets/icon/ikonica6.png", slug: "savetovanja" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ServiceHomeOne = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Estetske Usluge
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Vrhunski Tretmani Lica i Tela
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>Usluge</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_10"></div>
          <div ref={ref} className="cs_card_1_list">
            {service_data.map((item, i) => (
              <motion.div
                key={item.id}
                className="cs_card cs_style_1 cs_color_1"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <div className="cs_card_left">
                  <div className="cs_card_icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={`/usluge/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href={`/usluge/${item.slug}`} className="cs_card_link">
                    <span></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>
    </>
  );
};

export default ServiceHomeOne;
