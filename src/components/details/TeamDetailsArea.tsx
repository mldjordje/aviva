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
  des: `Dr Mila Đorđević je završila Srednju medicinsku školu „Dr Milenko Hadžić“ 2016. godine, a Medicinski fakultet u Nišu 2023. godine. 
Svoje prve profesionalne korake u oblasti medicine započela je još 2022. godine, radeći u poliklinici Aviva, gde je stekla dragoceno iskustvo u radu sa pacijentima.

Svoje znanje i veštine u estetskoj medicini razvijala je kroz brojne edukacije i međunarodne kongrese. 
Među značajnijim iskustvima su Milano ICAMP kongres 2023, Zem kongres u Skoplju 2024. godine, 
Paris IMCAs kongres 2025. godine, kao i različite edukacije kod priznatih inostranih, ali i domaćih stručnjaka. 
Takođe je aktivna članica SESIAM udruženja i učestvovala je na petom i šestom međunarodnom kongresu u Beogradu.

Od 2025. godine, Dr Mila Đorđević je ko-osnivač nove poliklinike Aviva Ageless, gde nastoji da spoji vrhunsku stručnost, 
inovativne tretmane i individualan pristup kako bi pacijentima pružila prirodne i dugoročne rezultate.`,
  info: [
    {
      title: `Address:`,
      des: `2118 Thornridge Cir, 35624`
    },
    {
      title: `Email:`,
      des: `example@example.com`
    },
    {
      title: `Phone:`,
      des: `060 1450145`
    },
    {
      title: `Website:`,
      des: `www.avivaageless.com`
    },
  ]
}

const { des, info } = team_content

const TeamDetailsArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                Dr Mila Đorđević &nbsp;&bull;&nbsp; Specijalista estetske medicine
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={avatar_img_1} alt="team_detalils" />
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
                <a target='_blank' href="https://behance.com" className="cs_center">Behance</a>
                <a target='_blank' href="https://dribbble.com" className="cs_center">Dribbble</a>
                <a target='_blank' href="https://github.com" className="cs_center">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default TeamDetailsArea;
