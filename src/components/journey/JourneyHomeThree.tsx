import Image from 'next/image';
import React from 'react';

import journey_img_1 from "@/assets/img1/profhilo.png";
import journey_img_2 from "@/assets/img1/2.jpg";
import journey_img_3 from "@/assets/img1/3.jpg";
import journey_img_4 from "@/assets/img1/4.jpg";


const JourneyHomeThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_journey_stary">
            <div className="anim_div_ShowZoom">
              <h6>Naše Putovanje</h6>
            </div>

            <div className="cs_height_50"></div>

            <h2 className="cs_line_height_85 anim_text">
              Dobrodošli u {" "}
              <span className="journey-icon"><Image src={journey_img_1} alt="Profhilo" /></span> 
             Aviva Ageless – mesto gde stručnost i inovativni tretmani{" "}
              <span className="journey-icon"><Image src={journey_img_2} alt="Botox" /></span> 
                spajaju estetiku i zdravlje.{" "}
              <span className="journey-icon"><Image src={journey_img_3} alt="Fileri" /></span> 
              tehnike kako bi naglasio vašu prirodnu lepotu i {" "}
              <span className="journey-icon"><Image src={journey_img_4} alt="Mezoterapija" /></span> 
               pružio rezultate koje volite. Bilo da je u pitanju{" "}
             
            </h2>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default JourneyHomeThree;
