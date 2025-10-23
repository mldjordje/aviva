import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import About2 from "@/components/about/About2";
import TeamDetailsArea from "@/components/details/TeamDetailsArea";
import AboutUs from "@/components/about/AboutUs";
import ServiceTeam from "@/components/service/ServiceTeam";
import ServiceAreaDetailsLipoliza from "./ServiceAreaDetailsLipoliza";

export const metadata: Metadata = {
  title: "Lipoliza u Nišu | Aviva Ageless",
  description:
    "Injekciona lipoliza i Lemon Bottle tretmani u Aviva Ageless ordinaciji u Nišu: cene, kandidati, tok procedure, sigurnost i česta pitanja.",
};

const LipolizaPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About2
              subtitle="Lipoliza u Nišu"
              title="Brzo oblikovanje bez operacije"
              des="Ciljano uklanjamo manje masne naslage na stomaku, bokovima ili podbratku uz standardnu injekcionu lipolizu i Lemon Bottle protokol. Na konsultaciji definišemo plan tretmana i vodimo vas kroz siguran oporavak."
              images={["/assets/img1/1.jpg"]}
            />
            <ServiceAreaDetailsLipoliza />
            <TeamDetailsArea />
            <AboutUs />
            <ServiceTeam />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default LipolizaPage;
