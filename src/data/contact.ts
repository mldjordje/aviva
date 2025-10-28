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
}

export const CONTACT: ContactInfo = {
  name: "Aviva Ageless",
  url: "https://www.avivaageless.rs",
  // Align with Contact page values
  email: "aviva@email.com",
  phone: "0653502771",
  address: {
    streetAddress: "Bulevar Nemanjića 12",
    addressLocality: "Niš",
    postalCode: "18000",
    addressRegion: "RS",
    addressCountry: "RS",
  },
  openingHours: ["Mo-Fr 09:00-17:00"],
};

export function organizationJsonLd(type: "Organization" | "MedicalClinic" = "MedicalClinic") {
  const c = CONTACT;
  const data: any = {
    "@context": "https://schema.org",
    "@type": type,
    name: c.name,
    url: c.url,
    email: c.email,
    telephone: c.phone.startsWith("+") ? c.phone : `+381${c.phone.replace(/^0/, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address.streetAddress,
      addressLocality: c.address.addressLocality,
      postalCode: c.address.postalCode,
      addressRegion: c.address.addressRegion,
      addressCountry: c.address.addressCountry,
    },
    openingHours: c.openingHours,
  };
  return JSON.stringify(data);
}

