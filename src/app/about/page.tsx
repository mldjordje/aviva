
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import { CONTACT } from '@/data/contact';
import PaletteGlowSection from '@/components/ui/PaletteGlowSection';

const highlights = [
  {
    title: 'Nova priča u nastajanju',
    description:
      'Radimo na detaljnom predstavljanju naše istorije, vrednosti i ljudi koji stoje iza Aviva Ageless klinike.',
  },
  {
    title: 'Dokumentujemo iskustva',
    description:
      'Prikupljamo fotografije pre i posle tretmana, iza kulisa i iskrene priče naših pacijenata.',
  },
  {
    title: 'Usklađujemo vizuelni identitet',
    description:
      'Nova stranica će pratiti isti ton i eleganciju koju ste već videli na početnoj i stranicama usluga.',
  },
];

const phoneLink = CONTACT.phone.startsWith('+')
  ? CONTACT.phone
  : `+381${CONTACT.phone.replace(/^0/, '')}`;

const contactInfo = [
  {
    label: 'Pišite nam',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: 'Pozovite nas',
    value: CONTACT.phone,
    href: `tel:${phoneLink}`,
  },
];

const AboutPlaceholderPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="cs_under_construction cs_under_construction_with_bg">
              <Image
                src="/assets/aviva-nove-slike2/outsiide-clinic.webp"
                alt="Aviva Ageless klinika spolja"
                fill
                quality={68}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cs_under_construction_overlay" />
              <div className="container position-relative">
                <p className="cs_under_construction_label">O nama</p>
                <h1>Stranica je u izradi</h1>
                <p className="cs_under_construction_lead">
                  Privremeno smo isključili sadržaj kako bismo pripremili svež prikaz naše priče,
                  stručnog tima i metoda rada. Hvala na strpljenju — želiš da bude perfektno kada
                  ponovo bude online.
                </p>

                <div className="row cs_under_construction_highlights">
                  {highlights.map((item) => (
                    <div className="col-lg-4" key={item.title}>
                      <PaletteGlowSection className="cs_under_construction_card">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </PaletteGlowSection>
                    </div>
                  ))}
                </div>

                <div className="cs_under_construction_actions">
                  <Link href="/" className="cs_btn cs_style_1">
                    Nazad na početnu
                  </Link>
                  <Link href="/contact" className="cs_btn cs_style_1 cs_color_1">
                    Kontakt
                  </Link>
                </div>

                <div className="row cs_under_construction_contact">
                  {contactInfo.map((item) => (
                    <div className="col-md-6" key={item.label}>
                      <PaletteGlowSection className="cs_under_construction_contact_item">
                        <p>{item.label}</p>
                        <a href={item.href}>{item.value}</a>
                      </PaletteGlowSection>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPlaceholderPage;
