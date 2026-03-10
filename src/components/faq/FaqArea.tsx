"use client";

import { faqItems } from "@/data/faq_data";
import React, { useState } from "react";

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">Cesta pitanja</h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faqItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => toggleAccordion(i)}
              className={`cs_accordion_item cs_color_1 ${i === activeIndex ? "active cs_icon" : ""}`}
            >
              <div className="cs_accordion_header">
                <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  width="30"
                  style={{ transform: i === activeIndex ? "rotate(-90deg)" : "none" }}
                >
                  <path
                    style={{ fill: "#ffffff" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>

              <div className={`cs_accordion_body ${i === activeIndex ? "" : "d-none"}`}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
