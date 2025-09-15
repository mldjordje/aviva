import React from 'react';
import avatar_img_1 from "@/assets/img1/7.jpg";
import Image from 'next/image';

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const team_content: DataType = {
  des: `Dr Nikola Igić je diplomirao na Medicinskom fakultetu Univerziteta u Nisu 2023. godine. Nakon zavrsenih osnovnih studija, pocinje rad u privatnoj klinici za estetsku medicinu i plastičnu hrirguju, gde je uspešno radio 2 godine. Novembra 2024. upisuje specijalizaciju iz plastične, estetske i rekonstruktivne hirurgije, koja se uspešno odvija.
Svoje radno iskustvo i vestine stekao je u privatnoj klinici, zatim na brojnim grupnim i individualnim edukacijama širom Srbije kod raznih stručnjaka iz oblasti estetske medicine, ali i u gradovima van nase drzave kao sto su UAE, Dubai i Sofia. Aktivni je ucesnik brojnih kongresa i seminara u zemlji i svetu.`,
  info: [
    { title: `Address:`, des: `📍Bulevar Nemanjića 12, Niš` },
    { title: `Email:`, des: `office@aviva.com` },
    { title: `Phone:`, des: `060 1450145` },
    { title: `Website:`, des: `www.aviva.com` },
  ]
}

const { des, info } = team_content;

const Mila = () => {
  // Random query parametar za osvežavanje slike
  const imageSrc = `${avatar_img_1.src}?v=${new Date().getTime()}`;

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                Dr Nikola Igić &nbsp;&bull;&nbsp; Specijalista estetske medicine
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image 
              src={imageSrc} 
              alt="team_detalils" 
              width={500} 
              height={500} 
              priority 
            />
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {info.map((item, i) =>
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      {item.title}
                    </p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                )}
              </div>

              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                <a target='_blank' href="https://www.instagram.com/aviva_ageless/?hl=en" className="cs_center">Instagram</a>
                <a target='_blank' href="https://www.facebook.com/avivaageless/" className="cs_center">Facebook</a>
                <a target='_blank' href="https://youtube.com" className="cs_center">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default Mila;
