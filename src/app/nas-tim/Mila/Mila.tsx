import React from 'react';
import avatar_img_1 from '@/assets/aviva-nove-slike2/mila.webp';
import Image from 'next/image';
import TeamMemberGallery from '@/components/team/TeamMemberGallery';

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
    highlight?: boolean;
    href?: string;
  }[];
}

const team_content: DataType = {
  des: `Dr Mila Đorđević je završila Srednju medicinsku školu „Dr Milenko Hadžić“ 2016. godine, a Medicinski fakultet u Nišu 2023. godine.
Svoje prve profesionalne korake u oblasti medicine započela je još 2022. godine, radeći u poliklinici Aviva, gde je stekla dragoceno iskustvo u radu sa pacijentima.

Svoje znanje i veštine u estetskoj medicini razvijala je kroz brojne edukacije i međunarodne kongrese.
Među značajnijim iskustvima su Milano ICAMP kongres 2023, Zem kongres u Skoplju 2024. godine,
Paris IMCAS kongres 2025. godine, kao i različite edukacije kod priznatih inostranih i domaćih stručnjaka.
Takođe je aktivna članica SESIAM udruženja i učestvovala je na petom i šestom međunarodnom kongresu u Beogradu.

Od 2025. godine, Dr Mila Đorđević je ko-osnivač nove poliklinike Aviva Ageless, gde nastoji da spoji vrhunsku stručnost,
inovativne tretmane i individualan pristup kako bi pacijentima pružila prirodne i dugoročne rezultate.`,
  info: [
    { title: 'Address:', des: 'Bulevar Nemanjića 12, Niš' },
    { title: 'Email:', des: 'ageless@poliklinikaaviva.rs', href: 'mailto:ageless@poliklinikaaviva.rs' },
    { title: 'Phone:', des: '0601450145', highlight: true, href: 'tel:0601450145' },
    { title: 'Website:', des: 'www.avivaageless.rs', href: 'https://www.avivaageless.rs' },
  ],
};

const { des, info } = team_content;
const gallery_items = [
  { src: '/assets/aviva-nove-slike2/mila.webp', alt: 'Dr Mila Đorđević - portret' },
  { src: '/assets/aviva-nove-slike2/work-mila.webp', alt: 'Dr Mila Đorđević - rad sa pacijentima' },
  { src: '/assets/aviva-nove-slike2/mila-work2.webp', alt: 'Dr Mila Đorđević - tretman u ordinaciji' },
];

const Mila = () => {
  

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                Dr Mila Đorđević &nbsp;&bull;&nbsp; specijalizant plastične, rekonstruktivne i estetske hirurgije
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={avatar_img_1} alt="Dr Mila Đorđević" width={500} height={500} priority />
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {info.map((item, i) => (
                  <div key={i} className="d-flex align-items-center">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">{item.title}</p>
                    <p className={`col-md-6 col-8 ${item.highlight ? 'fw-bold fs-4 cs_primary_color' : ''}`}>
                      {item.href ? (
                        <a href={item.href} className={item.highlight ? 'cs_primary_color' : ''}>
                          {item.des}
                        </a>
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
      <div className="cs_height_100 cs_height_lg_50"></div>
      <TeamMemberGallery title="Galerija - Dr Mila Đorđević" items={gallery_items} />
    </>
  );
};

export default Mila;

