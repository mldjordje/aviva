 
'use client'

import FaqArea from '@/components/faq/FaqArea';
import Script from 'next/script';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



// export const metadata = {
//   title: "Faq Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
            <Script id="faqpage-jsonld" type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Koja je najbolja klinika za estetsku medicinu u Nišu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Mnogi pacijenti biraju Aviva Ageless zbog stručnog tima, savremene opreme i individualnog pristupa. Najbolji izbor zavisi od vaših potreba, zato preporučujemo besplatne konsultacije.",
                    },
                  },
                ],
              }) }}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
