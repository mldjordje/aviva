import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

// Koraci Botox tretmana
const service_data: DataType[] = [
  {
    id: '1',
    title: "Konzultacija sa lekarom",
    description: `Razgovor sa stručnjakom o vašim željama, procena mišićne aktivnosti i određivanje regija za tretman.`,
  },
  {
    id: '2',
    title: "Priprema regije",
    description: `Očišćavanje i dezinfekcija kože na ciljanim delovima lica pre aplikacije.`,
  },
  {
    id: '3',
    title: "Aplikacija botoksa",
    description: `Botoks se aplikuje tankom iglom u mišiće lica koji uzrokuju bore. Sam postupak traje oko 10-15 minuta.`,
  },
  {
    id: '4',
    title: "Završni saveti",
    description: `Dobićete uputstva o tome šta da izbegavate narednih 24h (poput ležanja, masaže lica i slično).`,
  },
  {
    id: '5',
    title: "Rezultati i efekti",
    description: `Prvi efekti se javljaju kroz 3-5 dana, dok je puni rezultat vidljiv za 10-14 dana. Efekat traje 4-6 meseci.`,
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
              Koraci Botox tretmana
            </h4>
            <p className="cs_mp0 anim_text">
              Botox je brz i efikasan tretman za smanjenje mimičnih bora i osvežen izgled. Evo kako izgleda procedura korak po korak:
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
