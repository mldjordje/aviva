"use client"
import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface DataType {
  id: number;
  title: string;
  des: string;
  icon: string; // dodato za ikonu
  slug: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    title: `Brze i vidljive rezultate`,
    des: `Često odmah nakon tretmana.`,
    icon: "/assets/icon/hiperhidroza.png",
    slug: "hijaluronski-fileri",
  },
  {
    id: 2,
    title: `Minimalnu nelagodnost`,
    des: `Zahvaljujući lokalnoj anesteziji.`,
    icon: "/assets/icon/ikonica.png",
    slug: "botox",
  },
  {
    id: 3,
    title: `Kratak oporavak`,
    des: `Pa možete odmah nastaviti svakodnevne aktivnosti.`,
    icon: "/assets/icon/ikonica2.png",
    slug: "skinboosteri",
  },
  {
    id: 4,
    title: `Prilagodljivost`,
    des: `Tretman se može postepeno nadograditi radi prirodnog efekta.`,
    icon: "/assets/icon/ikonica3.png",
    slug: "lipoliza",
  },
  {
    id: 5,
    title: `Personalizovani plan tretmana`,
    des: `Kreiran posebno za vaš tip kože i željeni izgled..`,
    icon: "/assets/icon/ikonica4.png",
    slug: "prp",
  },
];

const ServiceHomeOne = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Hijaluronski fileri su jedan od najtraženijih tretmana u estetskoj medicini jer nude:
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Zašto odabrati hijaluronske filere?
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/contact" className="cs_btn cs_style_1 cs_color_1">
                <span>Zakaži konsultacije</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>

          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <motion.div
                key={i}
                className="cs_card cs_style_1 cs_color_1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
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
                    <span>{/* SVG strelica */}</span>
                  </Link>
                </div>
                
              </motion.div>
            ))}
            
          </div>
          
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>

      <style jsx>{`
        .cs_card {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          flex-wrap: wrap;
        }

        .cs_card_icon {
          width: 220px;
          height: 220px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }

        .cs_card_icon img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .cs_card_icon {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 575px) {
          .cs_card {
            flex-direction: column;
            align-items: flex-start;
          }
          .cs_card_icon {
            width: 180px;
            height: 180px;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceHomeOne;
