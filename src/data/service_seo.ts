export type ServiceSlug =
  | "hijaluronski-fileri"
  | "botox"
  | "skinboosteri"
  | "prp"
  | "lipoliza"
  | "mezoterapija"
  | "savetovanja";

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceSeoEntry = {
  slug: ServiceSlug;
  name: string;
  url: string;
  description: string;
  keywords: string[];
  faqs: FaqItem[];
};

const BASE_URL = "https://www.avivaageless.rs";
const CLINIC = {
  id: `${BASE_URL}#medical-clinic`,
  name: "Aviva Ageless",
  url: BASE_URL,
  telephone: "+38162400407",
  email: "ageless@poliklinikaaviva.rs",
  address: {
    streetAddress: "Bulevar Nemanjica 12",
    addressLocality: "Nis",
    postalCode: "18000",
    addressRegion: "RS",
    addressCountry: "RS",
  },
};

const SERVICE_SEO: Record<ServiceSlug, ServiceSeoEntry> = {
  "hijaluronski-fileri": {
    slug: "hijaluronski-fileri",
    name: "Hijaluronski fileri",
    url: `${BASE_URL}/usluge/hijaluronski-fileri`,
    description:
      "Prirodno isticanje lepote uz hijaluronske filere: usne, konture i bore uz individualan i bezbedan pristup.",
    keywords: [
      "hijaluronski fileri nis",
      "fileri usana nis",
      "dermalni fileri",
      "jawline filer nis",
      "podocnjaci filer nis",
      "aviva ageless fileri",
    ],
    faqs: [
      {
        question: "Koliko dugo traju hijaluronski fileri?",
        answer:
          "Efekat najcesce traje od 6 do 12 meseci, zavisno od regije, tipa preparata i metabolizma.",
      },
      {
        question: "Da li je rezultat odmah vidljiv?",
        answer:
          "Da, rezultat je uglavnom vidljiv odmah nakon tretmana, uz moguc blagi otok koji se povlaci u narednim danima.",
      },
      {
        question: "Da li fileri mogu da izgledaju prirodno?",
        answer:
          "Da. Individualno planiranje i precizna aplikacija omogucavaju diskretan i prirodan rezultat.",
      },
    ],
  },
  botox: {
    slug: "botox",
    name: "Botox",
    url: `${BASE_URL}/usluge/botox`,
    description:
      "Botox tretman za smanjenje mimickih bora i osvezen izgled lica uz prirodan rezultat.",
    keywords: [
      "botox nis",
      "botoks nis",
      "uklanjanje mimickih bora",
      "anti wrinkle tretman",
      "aviva ageless botox",
    ],
    faqs: [
      {
        question: "Kada se vide rezultati botoxa?",
        answer:
          "Prvi efekti se obicno vide za 3 do 5 dana, a puni rezultat za oko 10 do 14 dana.",
      },
      {
        question: "Koliko traje efekat botoxa?",
        answer: "Efekat najcesce traje od 4 do 6 meseci, u zavisnosti od osobe i regije.",
      },
      {
        question: "Da li tretman botoxom menja prirodan izraz lica?",
        answer:
          "Cilj pravilno doziranog botoxa je osvezen izgled bez ukocenosti i bez neprirodnog izraza.",
      },
    ],
  },
  skinboosteri: {
    slug: "skinboosteri",
    name: "Skinboosteri",
    url: `${BASE_URL}/usluge/skinboosteri`,
    description:
      "Dubinska hidratacija i revitalizacija koze skinbooster tretmanima na bazi hijalurona.",
    keywords: [
      "skinboosteri nis",
      "skinbooster nis",
      "profhilo nis",
      "dubinska hidratacija koze",
      "aviva ageless skinboosteri",
    ],
    faqs: [
      {
        question: "Cemu sluze skinboosteri?",
        answer:
          "Skinboosteri poboljsavaju hidrataciju, elasticnost i kvalitet koze bez menjanja prirodnih crta lica.",
      },
      {
        question: "Koliko tretmana skinboosterima je obicno potrebno?",
        answer:
          "Najcesce se preporucuje serija od 2 do 3 tretmana, uz odrzavanje prema proceni lekara.",
      },
      {
        question: "Da li je oporavak nakon skinbooster tretmana dug?",
        answer:
          "Oporavak je uglavnom kratak, uz moguce blago crvenilo ili osetljivost neposredno nakon aplikacije.",
      },
    ],
  },
  prp: {
    slug: "prp",
    name: "PRP tretman",
    url: `${BASE_URL}/usluge/prp`,
    description:
      "PRP tretman koristi sopstvenu plazmu bogatu faktorima rasta za regeneraciju i podmladjivanje koze.",
    keywords: [
      "prp nis",
      "vampirski tretman",
      "platelet rich plasma",
      "prp podmladjivanje",
      "aviva ageless prp",
    ],
    faqs: [
      {
        question: "Sta je PRP tretman?",
        answer:
          "PRP tretman koristi plazmu izdvojenu iz vase krvi kako bi podstakao prirodnu regeneraciju koze.",
      },
      {
        question: "Kada se vide rezultati PRP tretmana?",
        answer:
          "Koza obicno deluje svezije nakon nekoliko nedelja, a puni efekat se razvija kroz seriju tretmana.",
      },
      {
        question: "Da li je PRP tretman bezbedan?",
        answer:
          "Koristi se sopstveni bioloski materijal pacijenta, pa je tretman prirodan i uz strucnu primenu bezbedan.",
      },
    ],
  },
  lipoliza: {
    slug: "lipoliza",
    name: "Lipoliza",
    url: `${BASE_URL}/usluge/lipoliza`,
    description:
      "Lipoliza je minimalno invazivan tretman za smanjenje lokalizovanih masnih naslaga.",
    keywords: [
      "lipoliza nis",
      "injekciona lipoliza",
      "smanjenje lokalnih masnih naslaga",
      "lemon bottle nis",
      "aviva ageless lipoliza",
    ],
    faqs: [
      {
        question: "Za koje regije se radi lipoliza?",
        answer:
          "Najcesce se tretiraju podbradak, stomak, bokovi i druge manje lokalizovane regije sa viskom masnog tkiva.",
      },
      {
        question: "Kada su vidljivi rezultati lipolize?",
        answer:
          "Prvi rezultati se obicno primecuju u periodu od 2 do 4 nedelje, uz moguce dodatne tretmane.",
      },
      {
        question: "Da li je lipoliza zamena za mrsavljenje?",
        answer:
          "Lipoliza je namenjena lokalnim regijama i konturisanju, a nije zamena za opste mrsavljenje.",
      },
    ],
  },
  mezoterapija: {
    slug: "mezoterapija",
    name: "Mezoterapija",
    url: `${BASE_URL}/usluge/mezoterapija`,
    description:
      "Mezoterapija sa vitaminskim i hijaluronskim koktelima za hidrataciju, tonus i osvezen izgled koze.",
    keywords: [
      "mezoterapija nis",
      "mezoterapija lica",
      "vitaminski kokteli za kozu",
      "mesotherapy nis",
      "aviva ageless mezoterapija",
    ],
    faqs: [
      {
        question: "Sta je mezoterapija?",
        answer:
          "Mezoterapija podrazumeva aplikaciju aktivnih sastojaka u srednji sloj koze radi boljeg tonusa i hidratacije.",
      },
      {
        question: "Koliko traje oporavak nakon mezoterapije?",
        answer:
          "Oporavak je obicno kratak, uz blago crvenilo koje se najcesce povlaci brzo nakon tretmana.",
      },
      {
        question: "Koliko tretmana mezoterapije je potrebno?",
        answer:
          "Broj tretmana zavisi od stanja koze i cilja, a plan se definise tokom konsultacije.",
      },
    ],
  },
  savetovanja: {
    slug: "savetovanja",
    name: "Savetovanja",
    url: `${BASE_URL}/usluge/savetovanja`,
    description:
      "Strucne konsultacije i personalizovan plan estetskih tretmana prema potrebama pacijenta.",
    keywords: [
      "konsultacije estetska medicina nis",
      "savetovanje estetski tretmani",
      "pregled koze nis",
      "aviva ageless savetovanje",
    ],
    faqs: [
      {
        question: "Sta obuhvataju konsultacije u estetskoj medicini?",
        answer:
          "Konsultacije ukljucuju razgovor, analizu stanja i predlog individualnog plana tretmana.",
      },
      {
        question: "Da li mogu da dodjem samo na procenu bez tretmana?",
        answer:
          "Da, savetovanje je prvi korak i moze se obaviti nezavisno od odluke o daljim tretmanima.",
      },
      {
        question: "Kako da znam koji tretman je najbolji za mene?",
        answer:
          "Na osnovu pregleda i ciljeva, lekar predlaze personalizovanu opciju koja je najprimerenija za vas.",
      },
    ],
  },
};

export function getServiceSeoEntry(slug: ServiceSlug): ServiceSeoEntry {
  return SERVICE_SEO[slug];
}

export function getServiceJsonLd(slug: ServiceSlug): string {
  const service = SERVICE_SEO[slug];
  const serviceId = `${service.url}#service`;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": CLINIC.id,
        name: CLINIC.name,
        url: CLINIC.url,
        telephone: CLINIC.telephone,
        email: CLINIC.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC.address.streetAddress,
          addressLocality: CLINIC.address.addressLocality,
          postalCode: CLINIC.address.postalCode,
          addressRegion: CLINIC.address.addressRegion,
          addressCountry: CLINIC.address.addressCountry,
        },
        areaServed: {
          "@type": "City",
          name: "Nis",
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `${service.name} u Nisu`,
        serviceType: service.name,
        url: service.url,
        description: service.description,
        areaServed: {
          "@type": "City",
          name: "Nis",
        },
        provider: {
          "@id": CLINIC.id,
        },
        offers: {
          "@type": "Offer",
          url: `${BASE_URL}/cenovnik`,
          priceCurrency: "RSD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${service.url}#faqpage`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${service.url}#webpage`,
        name: `${service.name} | Aviva Ageless`,
        url: service.url,
        inLanguage: "sr-RS",
        about: {
          "@id": serviceId,
        },
      },
    ],
  });
}