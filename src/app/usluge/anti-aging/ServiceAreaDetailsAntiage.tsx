import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

// Koraci Anti-Aging tretmana
const service_data: DataType[] = [
  {
    id: '1',
    title: "Konzultacija sa lekarom",
    description: `Razgovor sa stručnjakom o vašim željama, procena stanja kože i preporuka za odgovarajući anti-aging tretman.`,
  },
  {
    id: '2',
    title: "Priprema kože",
    description: `Očišćavanje i hidratacija kože kako bi se stvorio savršen temelj za primenu tretmana.`,
  },
  {
    id: '3',
    title: "Aplikacija tretmana",
    description: `Primena specijalizovanih proizvoda ili tehnika koje stimulišu proizvodnju kolagena i zatežu kožu. Postupak traje oko 15-20 minuta.`,
  },
  {
    id: '4',
    title: "Završni saveti",
    description: `Dobićete uputstva o tome šta da izbegavate narednih nekoliko dana (poput direktnog sunca i intenzivnog fizičkog napora).`,
  },
  {
    id: '5',
    title: "Rezultati i efekti",
    description: `Efekti će biti vidljivi već nakon nekoliko dana, a potpuni rezultati u periodu od 2-3 nedelje. Efekat traje do 6 meseci, uz redovno održavanje.`,
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
              Koraci Anti-Aging tretmana
            </h4>
            <p className="cs_mp0 anim_text">
              Anti-aging tretman je efikasan način da zadržite mladalački izgled kože, poboljšate njen tonus i smanjite znakove starenja. Evo kako izgleda procedura:
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
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
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
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
