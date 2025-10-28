
'use client'
import React, { useState } from 'react';


interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: "Koja je filozofija vaÅ¡e klinike?",
    ans: "NaÅ¡ cilj je da istaknemo prirodnu lepotu svakog pacijenta. Radimo u skladu sa vaÅ¡im Å¾eljama i preporukama lekara, kako bi rezultat bio diskretan, sveÅ¾ i dugotrajan. Ne menjamo crte lica, veÄ‡ ih osveÅ¾avamo i podmlaÄ‘ujemo â€“ da izgledate odmorno, negovano i zadovoljno u svojoj koÅ¾i."
  },
  {
    id: "Two",
    question: "Ko izvodi tretmane?",
    ans: "Svi tretmani se izvode iskljuÄivo od strane struÄnih lekara sa iskustvom u estetskoj medicini. NaÅ¡ tim koristi proverene i sertifikovane preparate, uz poÅ¡tovanje svih medicinskih standarda."
  },
  {
    id: "Three",
    question: "Da li je botoks bezbedan?",
    ans: "Da, koristi se decenijama i potpuno je bezbedan kada ga primenjuje lekar."
  },
  {
    id: "Four",
    question: "Kada se vide rezultati botoksa?",
    ans: "Prvi efekti se vide za 3â€“5 dana, a puni rezultat za 10â€“14 dana."
  },
  {
    id: "Five",
    question: "Koliko traje efekat botoksa?",
    ans: "ObiÄno 4â€“6 meseci, u zavisnosti od osobe i regije koja se tretira."
  },
  {
    id: "Six",
    question: "Da li Ä‡u izgledati neprirodno nakon botoksa?",
    ans: "Ne, cilj je osveÅ¾en izgled bez ukoÄenosti â€“ prirodan rezultat uz smanjene bore."
  },
  {
    id: "Seven",
    question: "Da li tretman botoksom boli i koliko traje?",
    ans: "Sama aplikacija traje 10â€“15 minuta, oseÄ‡aj je minimalan, sliÄan ubodu igle."
  },
  {
    id: "Eight",
    question: "Å ta su dermalni fileri?",
    ans: "Fileri na bazi hijalurona vraÄ‡aju volumen i hidriraju lice, a rezultat je osveÅ¾en i prirodan izgled."
  },
  {
    id: "Nine",
    question: "Kada se vide rezultati filera?",
    ans: "Rezultat je odmah vidljiv, ali najlepÅ¡e se vidi nakon Å¡to otok splasne â€“ kroz par dana."
  },
  {
    id: "Ten",
    question: "Da li Ä‡u izgledati neprirodno ili â€žprenapumpanoâ€œ sa filerima?",
    ans: "Ne. Radimo blage korekcije u skladu sa proporcijama vaÅ¡eg lica, sa ciljem da izgledate odmorno i mladalaÄki, nikad veÅ¡taÄki."
  },
  {
    id: "Eleven",
    question: "Koliko dugo traje efekat filera?",
    ans: "NajÄeÅ¡Ä‡e 6â€“12 meseci, zavisno od regije i tipa koÅ¾e."
  },
  {
    id: "Twelve",
    question: "Da li postoji oporavak nakon filera?",
    ans: "MoguÄ‡a je blaga oteÄenost ili modrice, koje nestaju u roku od par dana."
  },
  {
    id: "Thirteen",
    question: "Å ta je lipoliza (Lemon Bottle)?",
    ans: "To je tretman za smanjenje manjih, lokalnih masnih naslaga koje ne nestaju ni veÅ¾banjem ni dijetom."
  },
  {
    id: "Fourteen",
    question: "Za koje regije je namenjena lipoliza?",
    ans: "NajÄeÅ¡Ä‡e za podbradak, stomak, bokove, nadlaktice ili butine."
  },
  {
    id: "Fifteen",
    question: "Kada se vide rezultati lipolize?",
    ans: "Prvi efekti se primeÄ‡uju posle 2â€“3 nedelje, a konaÄan rezultat nakon serije tretmana."
  },
  {
    id: "Sixteen",
    question: "Koliko tretmana lipolize je potrebno?",
    ans: "NajÄeÅ¡Ä‡e 3â€“5, u razmaku od 2â€“3 nedelje."
  },
  {
    id: "Seventeen",
    question: "Å ta je PRP tretman?",
    ans: "Koristi se vaÅ¡a sopstvena krvna plazma bogata faktorima rasta, koja stimuliÅ¡e regeneraciju koÅ¾e i kose."
  },
  {
    id: "Eighteen",
    question: "Za Å¡ta se koristi PRP?",
    ans: "Za podmlaÄ‘ivanje koÅ¾e, redukciju finih bora, tretman podruÄja oko oÄiju, kao i za jaÄanje rasta kose."
  },
  {
    id: "Nineteen",
    question: "Kada se vide rezultati PRP tretmana?",
    ans: "VeÄ‡ posle 2â€“3 nedelje koÅ¾a izgleda sveÅ¾ije, a pravi efekat dolazi posle viÅ¡e tretmana."
  },
  {
    id: "Twenty",
    question: "Koliko PRP tretmana je potrebno?",
    ans: "Preporuka je 3â€“4 tretmana meseÄno, a zatim odrÅ¾avanje."
  },
  {
    id: "TwentyOne",
    question: "Da li je PRP tretman prirodan i bezbedan?",
    ans: "Da, jer se koristi sopstveni materijal â€“ nema rizika od alergije ili neprirodnog izgleda."
  },
  {
    id: "TwentyTwo",
    question: "Å ta je Profhilo/LOLA tretman?",
    ans: "To je tretman koji ne menja crte lica, veÄ‡ poboljÅ¡ava kvalitet koÅ¾e â€“ hidrira, zateÅ¾e i vraÄ‡a prirodan sjaj."
  },
  {
    id: "TwentyThree",
    question: "Kako se Profhilo/LOLA razlikuje od filera?",
    ans: "Fileri dodaju volumen gde nedostaje, dok Profhilo/LOLA ne puni veÄ‡ stimuliÅ¡e koÅ¾u da se regeneriÅ¡e."
  },
  {
    id: "TwentyFour",
    question: "Kada se vide rezultati Profhilo/LOLA tretmana?",
    ans: "VeÄ‡ nakon prve aplikacije koÅ¾a izgleda hidriranije i zdravije, a puni efekat se razvija tokom 3â€“4 nedelje."
  },
  {
    id: "TwentyFive",
    question: "Koliko tretmana Profhilo/LOLA je potrebno?",
    ans: "NajÄeÅ¡Ä‡e 2 tretmana u razmaku od mesec dana, zatim odrÅ¾avanje na 6â€“9 meseci."
  },
  {
    id: "TwentySix",
    question: "Da li izgled ostaje prirodan sa Profhilo/LOLA?",
    ans: "Da, ovo je jedan od najprirodnijih tretmana â€“ rezultat je sveÅ¾a, zdrava i sjajna koÅ¾a, bez promena u crtama lica."
  },
  {
    id: "TwentySeven",
    question: "Koliko traje oporavak posle tretmana?",
    ans: "VeÄ‡ina tretmana je minimalno invazivna i ne zahteva duÅ¾i oporavak. Nakon tretmana moÅ¾ete odmah da nastavite sa svojim obavezama, uz blage preporuke za negu narednih dana."
  },
  {
    id: "TwentyEight",
    question: "Da li postoji starosna granica za tretmane?",
    ans: "Da, minimalna starosna granica je 18 godina. Estetski tretmani se preporuÄuju tek kada za to postoji realna potreba i uvek uz struÄnu procenu lekara."
  },
  {
    id: "TwentyNine",
    question: "Kako da znam koji tretman je pravi za mene?",
    ans: "Najbolji naÄin je konsultacija sa naÅ¡im lekarom. Mi ne nudimo univerzalna reÅ¡enja â€“ svako lice je jedinstveno, pa je i plan tretmana individualan. Na konsultaciji dobijate iskren savet Å¡ta je najbolje baÅ¡ za vas, u skladu sa vaÅ¡im godinama, Å¾eljama i prirodnim izgledom."
  },
];
const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const extendedFaq: DataType[] = [
    ...faq_data,
    {
      id: "Thirty",
      question: "Koja je najbolja klinika za estetsku medicinu u Nišu?",
      ans: "Mnogi pacijenti biraju Aviva Ageless zbog stručnog tima, savremene opreme i individualnog pristupa. Najbolji izbor zavisi od vaših potreba, zato preporučujemo besplatne konsultacije.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              ÄŒesta pitanja?
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {extendedFaq.map((item, i) =>
            <div key={i} 
            onClick={() => toggleAccordion(i)}
            className={`cs_accordion_item cs_color_1 ${i === activeIndex ? 'active cs_icon' : ''}`}>
              <div className="cs_accordion_header">
                <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                  <path style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
                </svg>
              </div>

              <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>
                {item.ans}
              </div>
            </div>
          )} 

        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
