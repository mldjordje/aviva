"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import brand_profhilo from "@/assets/img1/profhilo.png";
import brand_maili from "@/assets/img1/maili_logo.png";
import brand_masteli from "@/assets/brands/logo-payoff.svg";
import brand_skintech from "@/assets/brands/skin-tech-logo.png";

interface BrandItem {
  src: StaticImageData;
  alt: string;
  isWide?: boolean;
}

const brand_data: BrandItem[] = [
  { src: brand_profhilo, alt: "Profhilo logo" },
  { src: brand_maili, alt: "Maili logo" },
  { src: brand_masteli, alt: "Mastelli logo", isWide: true },
  { src: brand_skintech, alt: "Skin Tech logo", isWide: true },
  { src: brand_maili, alt: "Maili logo" },
  { src: brand_profhilo, alt: "Profhilo logo" },
  { src: brand_skintech, alt: "Skin Tech logo", isWide: true },
  { src: brand_masteli, alt: "Mastelli logo", isWide: true },
];

const brand_thumb_data: BrandItem[] = [
  { src: brand_skintech, alt: "Skin Tech logo", isWide: true },
  { src: brand_masteli, alt: "Mastelli logo", isWide: true },
  { src: brand_maili, alt: "Maili logo" },
  { src: brand_profhilo, alt: "Profhilo logo" },
  { src: brand_masteli, alt: "Mastelli logo", isWide: true },
  { src: brand_skintech, alt: "Skin Tech logo", isWide: true },
  { src: brand_profhilo, alt: "Profhilo logo" },
  { src: brand_maili, alt: "Maili logo" },
];

const brand_mobile_data: BrandItem[] = [
  { src: brand_profhilo, alt: "Profhilo logo" },
  { src: brand_maili, alt: "Maili logo" },
  { src: brand_masteli, alt: "Mastelli logo", isWide: true },
  { src: brand_skintech, alt: "Skin Tech logo", isWide: true },
];

const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? (
        <>
          <div className="cs_height_20 cs_height_lg_60"></div>
          <h2 className="text-center cs_section_title anim_text_writting cs_brand_section_title">
            Naši preparati i brendovi koje koristimo
          </h2>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
      ) : (
        <div className="cs_height_140 cs_height_lg_70"></div>
      )}

      <div className="aviva-brand-section">
        <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push cs_brand_desktop">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "auto", maxHeight: item.isWide ? "78px" : "92px" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "auto", maxHeight: item.isWide ? "78px" : "92px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="cs_height_45 cs_height_lg_45 cs_brand_desktop"></div>

        <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push cs_brand_desktop">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "auto", maxHeight: item.isWide ? "78px" : "92px" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "auto", maxHeight: item.isWide ? "78px" : "92px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="cs_brand_mobile_grid">
          {brand_mobile_data.map((item, i) => (
            <div key={i} className="cs_brand_mobile_item">
              <Image
                src={item.src}
                alt={item.alt}
                style={{ width: "auto", maxHeight: item.isWide ? "42px" : "48px" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
