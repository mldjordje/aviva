import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

// Koraci Hijaluronski fileri tretmana
const service_data: DataType[] = [
  {
    id: '1',
    title: "Uvodni razgovor",
    description: "Razumevanje vaših potreba, očekivanja i estetskih ciljeva kroz otvoren razgovor sa stručnjakom.",
  },
  {
    id: '2',
    title: "Analiza kože i lica",
    description: "Detaljan pregled stanja kože, strukture lica i potencijalnih problematika koje treba tretirati.",
  },
  {
    id: '3',
    title: "Predlog tretmana",
    description: "Lekar predlaže plan tretmana prilagođen vašim potrebama, uz objašnjenje svih opcija.",
  },
  {
    id: '4',
    title: "Pitanja i saveti",
    description: "Dobićete odgovore na sva pitanja i preporuke za negu pre i nakon tretmana.",
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
              Koraci konsultacija sa lekarom
            </h4>
            <p className="cs_mp0 anim_text">
              Konsultacije su prvi i najvažniji korak ka ostvarivanju vaših
              estetskih ciljeva. Tokom razgovora sa lekarom dobijate
              personalizovane smernice i preporuke.
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
