import React from 'react';
import Link from 'next/link';

interface DataType {
  id: number;
  title: string;
  description: string;
  link: string; // Dodato polje za link
}

const banner_data: DataType[] = [
  { id: 1, title: "Hijaluronski fileri", description: "Popunjavanje bora i vraćanje volumena licu uz prirodan izgled.", link: "/usluge/hijaluronski-fileri" },
  { id: 2, title: "Botox", description: "Uklanjanje mimičkih bora i postizanje mladalačkog izgleda.", link: "/usluge/botox" },
  { id: 3, title: "Skinboosteri", description: "Dubinska hidratacija kože i poboljšanje elastičnosti.", link: "/usluge/skinboosteri" },
  { id: 4, title: "PRP tretman", description: "Regeneracija kože pomoću vaše krvne plazme bogate trombocitima.", link: "/usluge/prp" },
  { id: 5, title: "Lipoliza", description: "Nekirurško uklanjanje masnih naslaga sa problematičnih regija.", link: "/usluge/lipoliza" },
  { id: 6, title: "Mezoterapija", description: "Unošenje vitamina, minerala i hijalurona za svež i zdrav ten.", link: "/usluge/mezoterapija" },
  { id: 7, title: "Anti-aging", description: "Savremeni tretmani za usporavanje procesa starenja kože.", link: "/usluge/anti-aging" },
  { id: 8, title: "Savetovanja", description: "Stručni pregledi i preporuke za negu i tretmane lica.", link: "/usluge/savetovanja" },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Naše Usluge
              </h2>
              <p>Otkrijte širok spektar estetskih tretmana za zdrav, mladalački i negovan izgled.</p>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.filter((b) => b.link !== "/usluge/anti-aging").map((item, i) =>
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href={item.link} className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
