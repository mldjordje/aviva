import React from "react";

const pricing = [
  { name: "Lipoliza (jedna doza)", price: "6.000 RSD (50 €)" },
  { name: "Lemon Bottle", price: "10.000 RSD (85 €)" },
];

const benefits = [
  "Ciljano delovanje na stomak, bokove, podbradak ili druge manje regije.",
  "Bez operacije – nema rezova niti dugog oporavka kakav prati liposukciju.",
  "Brz tretman posle kog se možete vratiti dnevnim obavezama.",
  "Prvi pomaci vidljivi nakon par nedelja, konačan rezultat procenjujemo posle mesec dana.",
  "Može da se kombinuje sa tretmanima za zatezanje kože ili redukciju celulita uz procenu lekara.",
];

const candidateChecklist = [
  "Osobe sa manjim do umerenim masnim naslagama koje žele definisanu konturu tela.",
  "Pacijenti koji žele lipolizu podbratka ili redukciju duple brade.",
  "Svi koji žele blaže ublažavanje izgleda celulita, uz realna očekivanja o rezultatu.",
];

const steps = [
  "Prva konsultacija – lekar meri regiju, razgovara o ciljevima i dogovara realan plan.",
  "Priprema – koža se dezinfikuje, a po potrebi nanosimo blagi anestetik radi komfora.",
  "Aplikacija – u više preciznih tačaka ubrizgavamo lipolitik ili Lemon Bottle formulu.",
  "Nakon tretmana – očekujte kratkotrajan otok i crvenilo, uz savete za hlađenje i aktivnosti.",
];

const faqs = [
  {
    question: "Da li lipoliza boli?",
    answer:
      "Većina pacijenata oseća samo blagu nelagodnost pri ubodu, jer se koristi vrlo tanka igla i postupak je kratak.",
  },
  {
    question: "Koliko traje oporavak?",
    answer: "Uglavnom se vraćate redovnim aktivnostima istog dana, uz otok koji traje nekoliko dana.",
  },
  {
    question: "Da li su rezultati trajni?",
    answer:
      "Uništene masne ćelije se ne vraćaju. Rezultat je dugotrajan sve dok ne dođe do značajnijeg povećanja telesne mase.",
  },
  {
    question: "Koliko košta tretman stomaka?",
    answer:
      "Cena zavisi od broja potrebnih doza. Osnovna cena jedne doze je 6.000 RSD, a plan dobijate na konsultaciji.",
  },
  {
    question: "Radite li lasersku lipolizu?",
    answer:
      "Ne. U Aviva Ageless primenjujemo standardnu injekcionu lipolizu i Lemon Bottle protokol, bez laserskih procedura.",
  },
];

const ServiceAreaDetailsLipoliza = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50" />
      <section>
        <div className="container">
          <div className="cs_service_details cs_type_2">
            <div className="row g-4 align-items-start">
              <div className="col-lg-7">
                <div className="cs_service_details_text">
                  <h2 className="cs_section_title_2 anim_heading_title">
                    Lipoliza u Nišu: brzo oblikovanje bez operacije
                  </h2>
                  <p className="cs_service_details_p anim_text">
                    Ako želite da smanjite lokalne masne naslage na stomaku, bokovima, nadlakticama ili podbratku, injekciona
                    lipoliza može biti brzo i efikasno rešenje. U Aviva Ageless ordinaciji dostupni su standardni lipolitički
                    tretmani, kao i popularni Lemon Bottle protokol. Svakom pacijentu nudimo besplatnu konsultaciju, jasan plan
                    koraka i podršku tokom čitavog procesa – od pripreme do procene rezultata.
                  </p>
                  <p className="cs_service_details_p">
                    Ovaj pristup je namenjen manjim, lokalizovanim naslagama koje teško nestaju uprkos zdravoj ishrani ili
                    vežbanju. Aktivne supstance pokreću lokalni proces razgradnje masnih ćelija, a organizam prirodno eliminiše
                    njihove ostatke u narednim nedeljama.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cs_service_details_thumb cs_radius_20 cs_primary_bg p-4">
                  <div className="cs_section_heading cs_style_1 cs_color_1 mb-4">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_4">Cene tretmana</h3>
                    </div>
                  </div>
                  <ul className="cs_list_style_none cs_color_1">
                    {pricing.map((item) => (
                      <li key={item.name} className="d-flex justify-content-between align-items-start mb-3">
                        <span className="fw-semibold">{item.name}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="cs_color_1 mb-0">
                    Nakon konsultacije dobijate preciznu procenu broja doza potrebnih za vašu regiju.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_60" />

          <div className="cs_work cs_work_text">
            <h3 className="anim_heading_title">Prednosti injekcione lipolize</h3>
            <p className="cs_mp0 anim_text">
              Lipoliza omogućava ciljano preoblikovanje kontura bez hirurgije. Ključne prednosti tretmana uključuju:
            </p>
          </div>
          <div className="cs_height_60 cs_height_lg_40" />
          <div className="cs_work cs_work_1">
            <div className="cs_card_work cs_style_1">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                  <div className="cs_card cs_style_1">
                    <div className="cs_posagation">
                      <div className="cs_work_style_1" />
                      <div className="cs_work_style_2" />
                    </div>
                    <div className="cs_stroke_number">
                      <span>{index + 1}</span>
                    </div>
                  </div>
                  <p className="cs_work_subtitle">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_60" />

          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Kome je lipoliza namenjena</h3>
                <ul className="cs_list_style_none cs_mp0">
                  {candidateChecklist.map((item) => (
                    <li key={item} className="cs_service_details_p">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="cs_service_details_p">
                  Na konsultaciji zajedno definišemo ciljeve, očekivanja i broj tretmana – najčešće su potrebne dve do četiri
                  sesije u razmaku od nekoliko nedelja, u zavisnosti od regije i željenih rezultata.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Koraci tretmana</h3>
                <ol className="cs_service_details_p ps-3">
                  {steps.map((step) => (
                    <li key={step} className="mb-2">
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="cs_service_details_p mb-0">
                  Blagi otok, crvenilo ili osećaj zategnutosti prolaze u roku od nekoliko dana. Rezultat vrednujemo posle prvog
                  meseca i po potrebi planiramo sledeću sesiju.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_60" />

          <div className="cs_service_details_text">
            <h3 className="cs_section_title_2 anim_heading_title">Lemon Bottle: dodatna preciznost</h3>
            <p className="cs_service_details_p">
              Lemon Bottle protokol kombinuje aktivne supstance sa prilagođenom tehnikom aplikacije. Posebno je pogodan kada je
              cilj fino oblikovanje manjih regija, jer pruža dobar balans između efikasnosti i komfora pacijenta.
            </p>
          </div>

          <div className="cs_height_80 cs_height_lg_50" />

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Sigurnost i kontraindikacije</h3>
                <p className="cs_service_details_p">
                  Pre svake procedure prolazimo kroz detaljnu anamnezu: prethodne intervencije, alergije, trudnoću ili eventualne
                  aktivne infekcije kože. Tretman radimo isključivo u kontrolisanom kliničkom okruženju kako bismo obezbedili
                  maksimalnu sigurnost.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Očekivanja i održavanje rezultata</h3>
                <p className="cs_service_details_p">
                  Jednom razgrađene masne ćelije se ne obnavljaju. Kako bi rezultat ostao stabilan, preporučujemo održavanje
                  zdrave ishrane i redovne fizičke aktivnosti, uz povremene kontrole ako je potrebno.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_80 cs_height_lg_50" />

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Lipoliza i celulit</h3>
                <p className="cs_service_details_p">
                  Lipoliza može ublažiti izgled površinske masnoće i tako redukovati vizuelni utisak celulita, naročito u ranim
                  fazama. Kod izraženijih oblika celulita predlažemo kombinovani pristup – fizičke tretmane, zatezanje kože i
                  promene u životnim navikama.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_details_text">
                <h3 className="cs_section_title_2 anim_heading_title">Koliko tretmana je potrebno?</h3>
                <p className="cs_service_details_p">
                  U proseku su potrebne dve do četiri sesije da bi se postigao vidljiv rezultat. Razmak između tretmana je nekoliko
                  nedelja kako bi organizam obradio prethodnu aplikaciju i prikazao pun efekat.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_80 cs_height_lg_50" />

          <div className="cs_service_details_text">
            <h3 className="cs_section_title_2 anim_heading_title">Moguće neželjene reakcije</h3>
            <p className="cs_service_details_p">
              Najčešće reakcije su otok, crvenilo, modrice ili blagi osećaj bola na mestima uboda i prolaze u roku od par dana.
              Alergije i komplikacije su retke, a izbegavamo ih izborom proverenih preparata i izvođenjem procedure od strane
              stručnog tima.
            </p>
          </div>

          <div className="cs_height_100 cs_height_lg_50" />

          <section className="cs_service_details_text">
            <h3 className="cs_section_title_2 anim_heading_title">Često postavljana pitanja</h3>
            <div className="cs_accordion cs_style_2">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="cs_accordion_item">
                  <h4 className="cs_accordion_title">{question}</h4>
                  <p className="cs_accordion_text">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetailsLipoliza;
