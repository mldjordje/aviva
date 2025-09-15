"use client";

import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";
import Link from "next/link";
import { motion } from "framer-motion";

const TeamArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_text_writting">
              Naš tim vrhunskih estetskih hirurga
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              U poliklinici Aviva Ageless, naš stručni tim doktora posvećen je
              tome da vam pruži najviši nivo estetske nege i postigne prirodne,
              sigurne i dugotrajne rezultate.
            </p>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.map((item, i) => (
              <motion.div
                key={i}
                className="cs_team_img"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={item.link}>
                  <Image src={item.img} alt={item.avatar_name} />
                  <div className="cs_portfolio_overlay"></div>
                </Link>

                <div className="cs_team_text">
                  <Link href={item.link}>
                    <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
