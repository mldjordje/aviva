
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
    question: "Koja je filozofija vaše klinike?",
    ans: "Naš cilj je da istaknemo prirodnu lepotu svakog pacijenta. Radimo u skladu sa vašim željama i preporukama lekara, kako bi rezultat bio diskretan, svež i dugotrajan. Ne menjamo crte lica, već ih osvežavamo i podmlađujemo – da izgledate odmorno, negovano i zadovoljno u svojoj koži."
  },
  {
    id: "Two",
    question: "Ko izvodi tretmane?",
    ans: "Svi tretmani se izvode isključivo od strane stručnih lekara sa iskustvom u estetskoj medicini. Naš tim koristi proverene i sertifikovane preparate, uz poštovanje svih medicinskih standarda."
  },
  {
    id: "Three",
    question: "Da li je botoks bezbedan?",
    ans: "Da, koristi se decenijama i potpuno je bezbedan kada ga primenjuje lekar."
  },
  {
    id: "Four",
    question: "Kada se vide rezultati botoksa?",
    ans: "Prvi efekti se vide za 3–5 dana, a puni rezultat za 10–14 dana."
  },
  {
    id: "Five",
    question: "Koliko traje efekat botoksa?",
    ans: "Obično 4–6 meseci, u zavisnosti od osobe i regije koja se tretira."
  },
  {
    id: "Six",
    question: "Da li ću izgledati neprirodno nakon botoksa?",
    ans: "Ne, cilj je osvežen izgled bez ukočenosti – prirodan rezultat uz smanjene bore."
  },
  {
    id: "Seven",
    question: "Da li tretman botoksom boli i koliko traje?",
    ans: "Sama aplikacija traje 10–15 minuta, osećaj je minimalan, sličan ubodu igle."
  },
  {
    id: "Eight",
    question: "Šta su dermalni fileri?",
    ans: "Fileri na bazi hijalurona vraćaju volumen i hidriraju lice, a rezultat je osvežen i prirodan izgled."
  },
  {
    id: "Nine",
    question: "Kada se vide rezultati filera?",
    ans: "Rezultat je odmah vidljiv, ali najlepše se vidi nakon što otok splasne – kroz par dana."
  },
  {
    id: "Ten",
    question: "Da li ću izgledati neprirodno ili „prenapumpano“ sa filerima?",
    ans: "Ne. Radimo blage korekcije u skladu sa proporcijama vašeg lica, sa ciljem da izgledate odmorno i mladalački, nikad veštački."
  },
  {
    id: "Eleven",
    question: "Koliko dugo traje efekat filera?",
    ans: "Najčešće 6–12 meseci, zavisno od regije i tipa kože."
  },
  {
    id: "Twelve",
    question: "Da li postoji oporavak nakon filera?",
    ans: "Moguća je blaga otečenost ili modrice, koje nestaju u roku od par dana."
  },
  {
    id: "Thirteen",
    question: "Šta je lipoliza (Lemon Bottle)?",
    ans: "To je tretman za smanjenje manjih, lokalnih masnih naslaga koje ne nestaju ni vežbanjem ni dijetom."
  },
  {
    id: "Fourteen",
    question: "Za koje regije je namenjena lipoliza?",
    ans: "Najčešće za podbradak, stomak, bokove, nadlaktice ili butine."
  },
  {
    id: "Fifteen",
    question: "Kada se vide rezultati lipolize?",
    ans: "Prvi efekti se primećuju posle 2–3 nedelje, a konačan rezultat nakon serije tretmana."
  },
  {
    id: "Sixteen",
    question: "Koliko tretmana lipolize je potrebno?",
    ans: "Najčešće 3–5, u razmaku od 2–3 nedelje."
  },
  {
    id: "Seventeen",
    question: "Šta je PRP tretman?",
    ans: "Koristi se vaša sopstvena krvna plazma bogata faktorima rasta, koja stimuliše regeneraciju kože i kose."
  },
  {
    id: "Eighteen",
    question: "Za šta se koristi PRP?",
    ans: "Za podmlađivanje kože, redukciju finih bora, tretman područja oko očiju, kao i za jačanje rasta kose."
  },
  {
    id: "Nineteen",
    question: "Kada se vide rezultati PRP tretmana?",
    ans: "Već posle 2–3 nedelje koža izgleda svežije, a pravi efekat dolazi posle više tretmana."
  },
  {
    id: "Twenty",
    question: "Koliko PRP tretmana je potrebno?",
    ans: "Preporuka je 3–4 tretmana mesečno, a zatim održavanje."
  },
  {
    id: "TwentyOne",
    question: "Da li je PRP tretman prirodan i bezbedan?",
    ans: "Da, jer se koristi sopstveni materijal – nema rizika od alergije ili neprirodnog izgleda."
  },
  {
    id: "TwentyTwo",
    question: "Šta je Profhilo/LOLA tretman?",
    ans: "To je tretman koji ne menja crte lica, već poboljšava kvalitet kože – hidrira, zateže i vraća prirodan sjaj."
  },
  {
    id: "TwentyThree",
    question: "Kako se Profhilo/LOLA razlikuje od filera?",
    ans: "Fileri dodaju volumen gde nedostaje, dok Profhilo/LOLA ne puni već stimuliše kožu da se regeneriše."
  },
  {
    id: "TwentyFour",
    question: "Kada se vide rezultati Profhilo/LOLA tretmana?",
    ans: "Već nakon prve aplikacije koža izgleda hidriranije i zdravije, a puni efekat se razvija tokom 3–4 nedelje."
  },
  {
    id: "TwentyFive",
    question: "Koliko tretmana Profhilo/LOLA je potrebno?",
    ans: "Najčešće 2 tretmana u razmaku od mesec dana, zatim održavanje na 6–9 meseci."
  },
  {
    id: "TwentySix",
    question: "Da li izgled ostaje prirodan sa Profhilo/LOLA?",
    ans: "Da, ovo je jedan od najprirodnijih tretmana – rezultat je sveža, zdrava i sjajna koža, bez promena u crtama lica."
  },
  {
    id: "TwentySeven",
    question: "Koliko traje oporavak posle tretmana?",
    ans: "Većina tretmana je minimalno invazivna i ne zahteva duži oporavak. Nakon tretmana možete odmah da nastavite sa svojim obavezama, uz blage preporuke za negu narednih dana."
  },
  {
    id: "TwentyEight",
    question: "Da li postoji starosna granica za tretmane?",
    ans: "Da, minimalna starosna granica je 18 godina. Estetski tretmani se preporučuju tek kada za to postoji realna potreba i uvek uz stručnu procenu lekara."
  },
  {
    id: "TwentyNine",
    question: "Kako da znam koji tretman je pravi za mene?",
    ans: "Najbolji način je konsultacija sa našim lekarom. Mi ne nudimo univerzalna rešenja – svako lice je jedinstveno, pa je i plan tretmana individualan. Na konsultaciji dobijate iskren savet šta je najbolje baš za vas, u skladu sa vašim godinama, željama i prirodnim izgledom."
  }
];


const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
              Česta pitanja?
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) =>
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