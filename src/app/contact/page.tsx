'use client'

import ContactArea from '@/components/contact/ContactArea';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kontakt – Aviva Ageless Niš",
  description: "Kontaktirajte Aviva Ageless u Nišu: Bulevar Nemanjića 12, 0653502771, aviva@email.com.",
  alternates: { canonical: "https://www.avivaageless.rs/contact" },
  openGraph: { title: "Kontakt – Aviva Ageless Niš", description: "Kontakt informacije i lokacija.", url: "https://www.avivaageless.rs/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Kontakt – Aviva Ageless Niš", description: "Kontakt informacije i lokacija." },
};
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Contact Vixan - Digital  Creative Agency Next js Template",  
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
        <ContactArea />
        </main>
        <FooterOne />
      </div>
      </div>
    </Wrapper>
  );
};

export default index;
