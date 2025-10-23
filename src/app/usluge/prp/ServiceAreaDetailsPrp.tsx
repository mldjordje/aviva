import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

const service_data: DataType[] = [
  {
    id: '1',
    title: "Konzultacija",
    description: `Detaljna, besplatna konsultacija na kojoj lekar procenjuje stanje kože, upoznaje se sa vašim ciljevima i kreira personalizovan plan tretmana.`,
  },
  {
    id: '2',
    title: "Uzimanje krvi",
    description: `Uzima se mala količina krvi u sterilnim uslovima, kao pri standardnim laboratorijskim analizama.`,
  },
  {
    id: '3',
    title: "Priprema plazme",
    description: `U zatvorenoj centrifugi pažljivo odvajamo plazmu obogaćenu trombocitima (PRP) bogatu faktorima rasta.`,
  },
  {
    id: '4',
    title: "Aplikacija PRP-a",
    description: `Koncentrovana plazma se injektuje u ciljane zone lica, vrata, dekoltea ili vlasišta tankim iglicama uz lokalnu anesteziju.`,
  },
  {
    id: '5',
    title: "Oporavak i rezultati",
    description: `Većina pacijenata se vraća obavezama odmah po tretmanu. Dajemo savete za negu narednih dana, pratimo reakcije kože i planiramo kontrole kako bi efekti regeneracije postali sve izraženiji u nedeljama koje slede.`,
  },
]

const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Koraci PRP tretmana
            </h4>
            <p className="cs_mp0 anim_text">
              PRP tretman je prirodan i siguran postupak podmlađivanja koji se odvija u nekoliko jasnih koraka. 
              Evo kako izgleda ceo proces od početka do kraja:
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
