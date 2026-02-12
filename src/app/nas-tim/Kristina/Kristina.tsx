import React from 'react';
import avatar_img_1 from '@/assets/aviva-nove-slike/petra-kordinator-klinike2.webp';
import Image from 'next/image';

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
    href?: string;
  }[];
}

const team_content: DataType = {
  des: `Petra je kordinatorka klinike Aviva Ageless i prvi kontakt za pacijente u planiranju termina i organizaciji dolazaka.
Koordinira komunikaciju između pacijenta i medicinskog tima, vodi računa o jasnoći informacija i celokupnom iskustvu tokom boravka u klinici.

Njen fokus je da svaki pacijent dobije precizne smernice, pravovremenu podršku i prijatan osećaj tokom celog procesa.`,
  info: [
    { title: 'Address:', des: 'Bulevar Nemanjića 12, Niš' },
    { title: 'Email:', des: 'ageless@poliklinikaaviva.rs', href: 'mailto:ageless@poliklinikaaviva.rs' },
    { title: 'Phone:', des: '062400407', href: 'tel:062400407' },
    { title: 'Website:', des: 'www.avivaageless.rs', href: 'https://www.avivaageless.rs' },
  ],
};

const { des, info } = team_content;

const Petra = () => {
  

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">Petra &nbsp;&bull;&nbsp; kordinatorka klinike</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={avatar_img_1} alt="Petra" width={500} height={500} priority />
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {info.map((item, i) => (
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">{item.title}</p>
                    <p className="col-md-4 col-10">
                      {item.href ? (
                        <a href={item.href}>{item.des}</a>
                      ) : (
                        item.des
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
                <a target="_blank" href="https://www.instagram.com/aviva_ageless/?hl=en" className="cs_center" rel="noreferrer">
                  Instagram
                </a>
                <a target="_blank" href="https://www.facebook.com/avivaageless/" className="cs_center" rel="noreferrer">
                  Facebook
                </a>
                <a target="_blank" href="https://youtube.com" className="cs_center" rel="noreferrer">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default Petra;

