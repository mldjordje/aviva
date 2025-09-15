"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import brand_img_1 from "@/assets/img1/profhilo.png";
import brand_img_2 from "@/assets/img1/maili_logo.png";

import brand_thumb_1 from "@/assets/img1/profhilo.png";
import brand_thumb_2 from "@/assets/img1/maili_logo.png";

// koristimo samo dve slike i pravimo nizove da ih možemo "mešati"
const brand_data: StaticImageData[] = [
  brand_img_1,
  brand_img_2,
  brand_img_2,
  brand_img_1,
  brand_img_2,
  brand_img_1,
  brand_img_2,
  brand_img_1,
  brand_img_2,
];

const brand_thumb_data: StaticImageData[] = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_2,
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_1,
  brand_thumb_2,
];

const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <>
      {style_2 ? (
        <>
          <div className="cs_height_20 cs_height_lg_60"></div>
          <br />
          <h2 className="text-center cs_section_title anim_text_writting">
              Naši preparati i brendovi koje koristimo
            </h2>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
      ) : (
        <div className="cs_height_140 cs_height_lg_70"></div>
      )}

      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="brand-logo" />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="brand-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_45 cs_height_lg_45"></div>

      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="brand-thumb" />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="brand-thumb" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;
