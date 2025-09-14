import React from "react";

interface DataType {
  id: string;
  title: string;
  description: string;
}

// Koraci Hijaluronski fileri tretmana
const service_data: DataType[] = [
  {
    id: "1",
    title: "Konzultacija i analiza kože",
    description:
      "Određivanje potreba kože i sastava koktela koji će se koristiti.",
  },
  {
    id: "2",
    title: "Priprema kože",
    description:
      "Čišćenje, dezinfekcija i nanošenje anestetske kreme radi komfora.",
  },
  {
    id: "3",
    title: "Aplikacija koktela",
    description:
      "Mikroinjekcijama se unose aktivne supstance u srednji sloj kože.",
  },
  {
    id: "4",
    title: "Nakon tretmana",
    description:
      "Moguće blago crvenilo ili otok, uz preporuke za negu narednih dana.",
  },
  {
    id: "5",
    title: "Rezultati",
    description:
      "Koža postaje hidrirana, osvežena i blistava. Preporučuju se serije tretmana za dugotrajniji efekat.",
  },
];

const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Koraci tretmana mezoterapijom
            </h4>
            <p className="cs_mp0 anim_text">
              Mezoterapija je brz i efikasan način da se koža regeneriše i
              osveži iznutra. Evo kako izgleda procedura od konsultacije do
              rezultata.
            </p>
          </div>

          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div
                    key={i}
                    className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
                  >
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;
