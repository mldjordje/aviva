
'use client'

import React, { useState } from 'react';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "O nama – Aviva Ageless Niš",
  description: "Upoznajte Aviva Ageless: tim, pristup i vrednosti estetske medicine u Nišu.",
  alternates: { canonical: "https://www.avivaageless.rs/about" },
  openGraph: { title: "O nama – Aviva Ageless Niš", description: "Tim i pristup estetskoj medicini u Nišu.", url: "https://www.avivaageless.rs/about", type: "website" },
  twitter: { card: "summary_large_image", title: "O nama – Aviva Ageless Niš", description: "Tim i pristup estetskoj medicini u Nišu." },
};
import About from '@/components/about/About';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import VideoPopup from '@/components/modals/VideoPopup';

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <VideoHomeOne style_2={true} setIsVideoOpen={setIsVideoOpen} />
            <FunFactHomeOne style_3={true} />
            <About />
            <TeamHomeTwo style_2={true} style_3={true} />
            <AwardsHomeOne style_2={true} />
            <Testimonial />
            <Gellary style_2={true} />
            <BrandHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>

        {/* video modal start */}
        <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
