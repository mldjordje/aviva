import React from "react";
import { motion } from "framer-motion";

interface DataType {
  id: string;
  title: string;
  description: string;
}

const pristup_data: DataType[] = [
  {
    id: "1",
    title: "NaglaÅ¡avanje kontura usana",
    description: `Oblikujemo ih tako da prirodno prate liniju lica.`,
  },
  {
    id: "2",
    title: "Blago poveÄ‡anje volumena",
    description: `Bez preterivanja, tako da rezultat izgleda suptilno i prirodno.`,
  },
  {
    id: "3",
    title: "UjednaÄenost i simetrija",
    description: `Svaka usna se tretira prema njenoj individualnoj anatomiji.`,
  },
];

const postupak_data: DataType[] = [
  {
    id: "1",
    title: "Konsultacije i planiranje",
    description: `Dr Mila ÄorÄ‘eviÄ‡ i tim zajedno sa vama definiÅ¡u koliko filera je potrebno i gde ga primeniti.`,
  },
  {
    id: "2",
    title: "Priprema koÅ¾e i anestezija",
    description: `KoÅ¾a se Äisti, a lokalna krema uklanja nelagodnost.`,
  },
  {
    id: "3",
    title: "Precizna aplikacija",
    description: `Filer se ubrizgava tankim iglicama ili kanilama na ciljane taÄke.`,
  },
  {
    id: "4",
    title: "Rezultat i oporavak",
    description: `Vidljiv odmah, sa blagim otokom koji se povlaÄi u par dana.`,
  },
];

const regije_data: DataType[] = [
  {
    id: "1",
    title: "Jagodice i obraze",
    description: `VraÄ‡anje volumena i konturiranje.`,
  },
  {
    id: "2",
    title: "PodoÄnjake",
    description: `Uklanjanje umornog izgleda.`,
  },
  {
    id: "3",
    title: "Nazolabijalne bore i sitne linije",
    description: `Blago popunjavanje.`,
  },
  {
    id: "4",
    title: "Deo vrata i dekoltea",
    description: `OsveÅ¾enje koÅ¾e i tonus.`,
  },
  {
    id: "5",
    title: "Ruke",
    description: `PodmlaÄ‘ivanje koÅ¾e i vraÄ‡anje punoÄ‡e.`,
  },
  {
    id: "6",
    title: "Blage korekcije nosa",
    description: `Neinvazivno oblikovanje.`,
  },
];

const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          {/* Uvodni tekst */}
          <motion.div
            className="cs_work cs_work_text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="anim_heading_title flex items-center">
              <img
                src="/assets/icon/ikonica2.png"
                alt="Hijaluronski fileri za usne - ikonica"
                loading="lazy"
                style={{
                  width: "clamp(100px, 20vw, 240px)",
                  height: "clamp(100px, 20vw, 240px)",
                  marginRight: "10px",
                }}
              />
              Hijaluronski fileri za usne â€“ kljuÄ za prirodnu lepoticu
            </h4>
            <p className="cs_mp0 anim_text">
              Usne su jedan od najvaÅ¾nijih elemenata lica, jer definiÅ¡u osmeh i
              izraÅ¾avaju emocije. U Aviva Ageless NiÅ¡, posebnu paÅ¾nju
              posveÄ‡ujemo hijaluronskim filerima za usne, kako bi svaki tretman
              bio prirodan, elegantan i skladan sa ostatkom lica.
            </p>
          </motion.div>

          <div className="cs_height_80 cs_height_lg_40"></div>

          {/* NaÅ¡ pristup usnama */}
          <motion.div
            className="cs_work cs_work_text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="anim_heading_title flex items-center">
              NaÅ¡ pristup usnama
            </h4>
          </motion.div>

          <div className="cs_height_40 cs_height_lg_20"></div>

          <div className="cs_work cs_work_1">
            <div className="cs_card_work cs_style_1">
              {pristup_data.map((item, i) => (
                <motion.div
                  key={i}
                  className="cs_card cs_mt_nthchild_0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
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
                </motion.div>
              ))}
            </div>
          </div>

          <div className="cs_height_80 cs_height_lg_40"></div>

          {/* Postupak i efekti */}
          <motion.div
            className="cs_work cs_work_text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="anim_heading_title flex items-center">
              <img
                src="/assets/icon/ikonica3.png"
                alt="Postupak i efekti - ikonica"
                loading="lazy"
                style={{
                  width: "clamp(100px, 20vw, 240px)",
                  height: "clamp(100px, 20vw, 240px)",
                  marginRight: "10px",
                }}
              />
              Postupak i efekti
            </h4>
            <p className="cs_mp0 anim_text">
              Hijaluronski fileri za usne omoguÄ‡avaju senzualan, ali prirodan
              izgled. NaÅ¡i pacijenti Äesto traÅ¾e diskretno popunjavanje ili
              naglaÅ¡avanje oblika usana â€“ uvek sa ciljem da se naglasi prirodna
              lepota, a ne da se promeni izraÅ¾aj lica.
            </p>
          </motion.div>

          <div className="cs_height_40 cs_height_lg_20"></div>

          <div className="cs_work cs_work_1">
            <div className="cs_card_work cs_style_1">
              {postupak_data.map((item, i) => (
                <motion.div
                  key={i}
                  className="cs_card cs_mt_nthchild_0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
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
                </motion.div>
              ))}
            </div>
          </div>

          <div className="cs_height_80 cs_height_lg_40"></div>

          {/* TreÄ‡a lista: Koje regije lica i tela moÅ¾emo tretirati */}
          {/* TreÄ‡a lista: Koje regije lica i tela moÅ¾emo tretirati */}
<motion.div
  className="cs_work cs_work_text"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <h4 className="anim_heading_title flex items-center">
    <img
      src="/assets/icon/ikonica4.png"
      alt="Regije lica i tela - ikonica"
      loading="lazy"
      style={{
        width: "clamp(100px, 20vw, 240px)",
        height: "clamp(100px, 20vw, 240px)",
        marginRight: "10px",
      }}
    />
    Koje regije lica i tela moÅ¾emo tretirati
  </h4>

  <div className="cs_card_work cs_style_1" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {regije_data.map((item, i) => (
      <motion.div
        key={i}
        className="cs_card cs_mt_nthchild_0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        style={{ flex: '1 1 calc(33% - 20px)', minWidth: '250px' }}
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
      </motion.div>
    ))}
  </div>
  <br />
   <h4 className="anim_heading_title cs_mt_40">
    Svaka aplikacija poÄinje detaljnom analizom lica i konsultacijom sa Dr Milom ÄorÄ‘eviÄ‡ i timom, kako bi se odredile najbolje tehnike i koliÄine filera za optimalan rezultat.
  </h4>
</motion.div>


          <div className="cs_height_100 cs_height_lg_50"></div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;

