
'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog – Aviva Ageless Niš",
  description: "Novosti, saveti i edukativni tekstovi iz estetske medicine.",
  alternates: { canonical: "https://www.avivaageless.rs/blog" },
  openGraph: { title: "Blog – Aviva Ageless Niš", description: "Novosti i saveti iz estetske medicine.", url: "https://www.avivaageless.rs/blog", type: "website" },
  twitter: { card: "summary_large_image", title: "Blog – Aviva Ageless Niš", description: "Novosti i saveti iz estetske medicine." },
};
import BlogArea from '@/components/blog/BlogArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

// export const metadata = {
//   title: "Blog Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
