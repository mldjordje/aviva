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
    title: "Procena i odabir tretmana",
    description:
      "Lekar određuje da li su skinboosteri pravi tretman za vašu kožu i pravi plan aplikacije.",
  },
  {
    id: "2",
    title: "Priprema kože",
    description: "Čišćenje i lokalna anestezija radi maksimalnog komfora.",
  },
  {
    id: "3",
    title: "Aplikacija skinboostera",
    description:
      "Ubrizgavanje hijalurona u dermis mikroinjekcijama radi dubinske hidratacije.",
  },
  {
    id: "4",
    title: "Režim nege nakon tretmana",
    description:
      "Saveti za negu, izbegavanje šminke, sunca i fizičke aktivnosti 24-48h.",
  },
  {
    id: "5",
    title: "Održavanje efekta",
    description:
      "Preporučuje se serija tretmana (2-3) i ponavljanje na 6 meseci za optimalne rezultate.",
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
              Koraci tretmana skinboosterima
            </h4>
            <p className="cs_mp0 anim_text">
              Skinboosteri dubinski hidriraju kožu i vraćaju joj elastičnost.
              Saznajte kako izgleda tretman korak po korak.
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
