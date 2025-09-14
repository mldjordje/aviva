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
    title: "Konsultacija i planiranje",
    description:
      "Procena regije koja se tretira i kreiranje individualnog plana tretmana.",
  },
  {
    id: "2",
    title: "Priprema regije",
    description: "Čišćenje i dezinfekcija kože pre aplikacije preparata.",
  },
  {
    id: "3",
    title: "Aplikacija lipolitičkih supstanci",
    description: "Ubrizgavanje preparata tankom iglom u potkožno masno tkivo.",
  },
  {
    id: "4",
    title: "Post-tretmanske smernice",
    description:
      "Saveti za oporavak – izbegavanje masaže regije, toplote i fizičke aktivnosti u narednim danima.",
  },
  {
    id: "5",
    title: "Vidljivi rezultati",
    description:
      "Prvi rezultati se uočavaju nakon 2-4 nedelje, uz moguće dodatne tretmane za optimalan efekat.",
  },
];

const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">Koraci tretmana lipolizom</h4>
            <p className="cs_mp0 anim_text">
              Lipoliza je siguran i efikasan tretman za uklanjanje masnih
              naslaga. U nastavku pogledajte kako izgleda ceo proces – od
              procene do rezultata.
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
