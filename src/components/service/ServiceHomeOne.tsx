import React from 'react';
import Link from 'next/link';

interface DataType {
  id: number;
  title: string;
  des: string;
  icon: string; // dodato za ikonu
}

const service_data: DataType[] = [
  {
    id: 1,
    title: `Hijaluronski fileri`,
    des: `Vraćanje volumena i popunjavanje bora za prirodan i mladalački izgled. Precizno aplicirano od strane iskusnih lekara.`,
    icon: "/assets/icon/hiperhidroza.png",
  },
  {
    id: 2,
    title: `Botox`,
    des: `Efikasan tretman za uklanjanje mimičnih bora i osvežavanje lica. Bezbedan i brz postupak sa vidljivim rezultatima.`,
    icon: "/assets/icon/ikonica.png",
  },
  {
    id: 3,
    title: `Skinboosteri`,
    des: `Dubinska hidratacija kože uz pomoć hijaluronskih boostera. Povećava sjaj, elastičnost i tonus kože.`,
    icon: "/assets/icon/ikonica2.png",
  },
  {
    id: 4,
    title: `Lipoliza`,
    des: `Neinvazivno uklanjanje lokalizovanih masnih naslaga. Idealno za predeo podbratka, stomaka i butina.`,
    icon: "/assets/icon/ikonica3.png",
  },
  {
    id: 5,
    title: `PRP tretman (Vampirski lifting)`,
    des: `Regenerativna terapija sopstvenom plazmom bogatom trombocitima. Poboljšava tonus, teksturu i podmlađuje kožu.`,
    icon: "/assets/icon/ikonica4.png",
  },
  {
    id: 6,
    title: `Anti-aging saveti i konsultacije`,
    des: `Stručno vođeni anti-age protokoli i personalizovane konsultacije sa dr Milom i dr Maršom.`,
    icon: "/assets/icon/ikonica5.png",
  },
];

const ServiceHomeOne = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Estetske Usluge
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Vrhunski Tretmani Lica i Tela
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>Usluge</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns"
              >
                <div className="cs_card_left">
                  <div className="cs_card_icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      {/* SVG strelica */}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>

<style jsx>{`
  .cs_card {
    display: flex;
    align-items: flex-start;
    gap: 6px; /* još manji razmak između ikonice i teksta */
    flex-wrap: wrap;
  }

  .cs_card_icon {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .cs_card_icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    .cs_card_icon {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 575px) {
    .cs_card {
      flex-direction: column;
      align-items: flex-start;
    }
    .cs_card_icon {
      width: 180px;
      height: 180px;
      margin-bottom: 10px;
    }
  }
`}</style>









    </>
  );
};

export default ServiceHomeOne;
