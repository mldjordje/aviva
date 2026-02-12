import React from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

interface TeamMemberGalleryProps {
  title?: string;
  items: GalleryItem[];
}

const TeamMemberGallery = ({ title = "Galerija", items }: TeamMemberGalleryProps) => {
  if (!items.length) return null;

  return (
    <section>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h3 className="cs_section_title_3">{title}</h3>
          </div>
        </div>
        <div className="cs_height_40 cs_height_lg_30"></div>
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={`${item.src}-${index}`}>
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                quality={70}
                sizes="(max-width: 991px) 100vw, 33vw"
                style={{ width: "100%", height: "auto", borderRadius: "18px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_60"></div>
    </section>
  );
};

export default TeamMemberGallery;
