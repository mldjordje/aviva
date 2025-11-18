"use client";

import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type DataType = {
  title_1: string;
  title_2: string;
  des: string;
  links: { title: string }[];
};

const hero_data: DataType = {
  title_1: `Česta`,
  title_2: `pitanja`,
  des: `Pronađite odgovore na najčešća pitanja vezana za naše usluge.`,
  links: [{ title: "Facebook" }, { title: "Instagram" }, { title: "YouTube" }],
};

const { title_1, title_2, des, links } = hero_data;

const HeroHomeThree = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const backgroundScale = useMemo(
    () => (prefersReducedMotion ? 1 : scale),
    [prefersReducedMotion, scale]
  );

  const staticFade = { opacity: 1, y: 0 };

  return (
    <>
      <section ref={sectionRef}>
        <div className="cs_hero cs_style2" style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            className="cs_hero_bg cs_bg cs_parallax_bg"
            style={{
              backgroundImage: "url(/assets/img1/6.jpg)",
              filter: "brightness(0.6)",
              position: "absolute",
              inset: 0,
              zIndex: 1,
              scale: backgroundScale,
            }}
          />

          <div className="textupdowns">
            <div className="cs_left_text">
              <span className="cs_arrow">
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <p>SAZNAJ JOŠ</p>
            </div>
          </div>

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="cs_hero_text">
              <motion.div
                className="anim_banner_text_left"
                initial={prefersReducedMotion ? staticFade : { opacity: 0, y: -50 }}
                whileInView={prefersReducedMotion ? staticFade : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 1 }}
              >
                <h1 className="cs_hero_title cs_hero_title_lg" style={{ marginBottom: "0" }}>
                  {title_1}
                </h1>
              </motion.div>

              <motion.div
                className="anim_banner_text_right"
                initial={prefersReducedMotion ? staticFade : { opacity: 0, y: -30 }}
                whileInView={prefersReducedMotion ? staticFade : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1,
                  delay: prefersReducedMotion ? 0 : 0.2,
                }}
                style={{ marginTop: "0" }}
              >
                <h1 className="cs_hero_title cs_hero_title_lg">{title_2}</h1>
              </motion.div>

              <motion.div
                className="cs_hero_subtitle"
                initial={prefersReducedMotion ? staticFade : { opacity: 0, y: -20 }}
                whileInView={prefersReducedMotion ? staticFade : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1,
                  delay: prefersReducedMotion ? 0 : 0.6,
                }}
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div className="anim_subtext">
                  <p className="cs_hero_title cs_hero_title_s">{des}</p>
                </div>
                <div className="cs_section_heading_right cs_btn_anim">
                  <Link href="/faq" className="cs_btn cs_style_1 cs_color_1">
                    <span>Pročitaj FAQ</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="cs_right_text" style={{ position: "relative", zIndex: 2 }}>
            {links.map((link) => (
              <p className="colorChanegs t1" key={link.title}>
                {link.title}
              </p>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_0"></div>
    </>
  );
};

export default HeroHomeThree;
