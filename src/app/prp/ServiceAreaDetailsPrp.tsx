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
    description: `Detaljan pregled i razgovor sa lekarom kako bismo odredili da li ste idealan kandidat za PRP tretman i definisali plan procedure.`,
  },
  {
    id: '2',
    title: "Uzimanje krvi",
    description: `Mala količina krvi se uzima iz vene, slično kao kod običnih laboratorijskih analiza.`,
  },
  {
    id: '3',
    title: "Priprema plazme",
    description: `Krv se stavlja u centrifugu radi odvajanja plazme obogaćene trombocitima (PRP) koja sadrži faktore rasta.`,
  },
  {
    id: '4',
    title: "Aplikacija PRP-a",
    description: `Plazma se nežno ubrizgava u ciljane regije (lice, vrat, dekolte ili vlasište) tankim iglicama, uz prethodnu lokalnu anesteziju.`,
  },
  {
    id: '5',
    title: "Oporavak i rezultati",
    description: `Koža je blago crvena prvih nekoliko sati, a potpuni efekat regeneracije i osveženja postaje vidljiv u narednim nedeljama.`,
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
