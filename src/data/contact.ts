export interface ContactInfo {
  name: string;
  url: string;
  email: string;
  phone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode?: string;
    addressRegion?: string;
    addressCountry: string;
  };
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  mapUrl?: string;
}

export const SERVICE_URLS = [
  "https://www.avivaageless.rs/usluge/hijaluronski-fileri",
  "https://www.avivaageless.rs/usluge/botox",
  "https://www.avivaageless.rs/usluge/skinboosteri",
  "https://www.avivaageless.rs/usluge/prp",
  "https://www.avivaageless.rs/usluge/lipoliza",
  "https://www.avivaageless.rs/usluge/mezoterapija",
  "https://www.avivaageless.rs/usluge/savetovanja",
];

export const CONTACT: ContactInfo = {
  name: "Aviva Ageless",
  url: "https://www.avivaageless.rs",
  email: "ageless@poliklinikaaviva.rs",
  phone: "062400407",
  address: {
    streetAddress: "Bulevar Nemanjica 12",
    addressLocality: "Nis",
    postalCode: "18000",
    addressRegion: "RS",
    addressCountry: "RS",
  },
  openingHours: ["Mo-Fr 09:00-17:00"],
  geo: {
    latitude: 43.3240535,
    longitude: 21.907158,
  },
  mapUrl:
    "https://www.google.com/maps/place/Poliklinika+Aviva/@43.3240535,21.907158,17z",
};

export function organizationJsonLd(type: "Organization" | "MedicalClinic" = "MedicalClinic") {
  const c = CONTACT;
  const normalizedPhone = c.phone.startsWith("+") ? c.phone : `+381${c.phone.replace(/^0/, "")}`;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${c.url}#medical-clinic`,
    name: c.name,
    url: c.url,
    email: c.email,
    telephone: normalizedPhone,
    image: `${c.url}/icon.png`,
    logo: `${c.url}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address.streetAddress,
      addressLocality: c.address.addressLocality,
      postalCode: c.address.postalCode,
      addressRegion: c.address.addressRegion,
      addressCountry: c.address.addressCountry,
    },
    openingHours: c.openingHours,
    areaServed: {
      "@type": "City",
      name: "Nis",
    },
    availableService: SERVICE_URLS.map((url) => ({
      "@type": "Service",
      url,
    })),
  };

  if (c.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: c.geo.latitude,
      longitude: c.geo.longitude,
    };
  }

  if (c.mapUrl) {
    data.hasMap = c.mapUrl;
  }

  return JSON.stringify(data);
}
