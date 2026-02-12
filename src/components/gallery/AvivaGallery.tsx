"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import PaletteGlowSection from "@/components/ui/PaletteGlowSection";

type GalleryCategory = "all" | "work" | "team";

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
}

const galleryItems: GalleryItem[] = [
  { src: "/assets/aviva-nove-slike/work.webp", alt: "Aviva rad - tretman 1", category: "work" },
  { src: "/assets/aviva-nove-slike/work2.webp", alt: "Aviva rad - tretman 2", category: "work" },
  { src: "/assets/aviva-nove-slike/rad1.webp", alt: "Aviva rad - tretman 3", category: "work" },
  { src: "/assets/aviva-nove-slike/rad2.webp", alt: "Aviva rad - tretman 4", category: "work" },
  { src: "/assets/aviva-nove-slike/rad3.webp", alt: "Aviva rad - tretman 5", category: "work" },
  { src: "/assets/aviva-nove-slike2/outsiide-clinic.webp", alt: "Aviva klinika - eksterijer", category: "work" },
  { src: "/assets/aviva-nove-slike2/somewhere-on-landing.webp", alt: "Aviva klinika - atmosfera", category: "work" },
  { src: "/assets/aviva-nove-slike2/work-mila.webp", alt: "Dr Mila u radu", category: "work" },
  { src: "/assets/aviva-nove-slike2/mila-work2.webp", alt: "Dr Mila tretman", category: "work" },
  { src: "/assets/aviva-nove-slike2/vlada-work.webp", alt: "Dr Vladimir tretman", category: "work" },
  { src: "/assets/aviva-nove-slike/mila.webp", alt: "Dr Mila Đorđević", category: "team" },
  { src: "/assets/aviva-nove-slike/mila2.webp", alt: "Dr Mila - portret 2", category: "team" },
  { src: "/assets/aviva-nove-slike/mila3.webp", alt: "Dr Mila - portret 3", category: "team" },
  { src: "/assets/aviva-nove-slike/mila4.webp", alt: "Dr Mila - portret 4", category: "team" },
  { src: "/assets/aviva-nove-slike/mila5.webp", alt: "Dr Mila - portret 5", category: "team" },
  { src: "/assets/aviva-nove-slike/mila6.webp", alt: "Dr Mila - portret 6", category: "team" },
  { src: "/assets/aviva-nove-slike/mila7.webp", alt: "Dr Mila - portret 7", category: "team" },
  { src: "/assets/aviva-nove-slike/mila8.webp", alt: "Dr Mila - portret 8", category: "team" },
  { src: "/assets/aviva-nove-slike/rad-mila-i-vladimir.webp", alt: "Dr Mila i Dr Vladimir", category: "team" },
  { src: "/assets/aviva-nove-slike/mila-i-vladimir.webp", alt: "Tim - Mila i Vladimir", category: "team" },
  { src: "/assets/aviva-nove-slike/mila-i-vladimir2.webp", alt: "Tim - Mila i Vladimir 2", category: "team" },
  { src: "/assets/aviva-nove-slike/petra-kordinator-klinike.webp", alt: "Petra - koordinatorka klinike", category: "team" },
  { src: "/assets/aviva-nove-slike/petra-kordinator-klinike2.webp", alt: "Petra - koordinacija", category: "team" },
  { src: "/assets/aviva-nove-slike2/petra1.webp", alt: "Petra - nova fotografija 1", category: "team" },
  { src: "/assets/aviva-nove-slike2/petra2.webp", alt: "Petra - nova fotografija 2", category: "team" },
  { src: "/assets/aviva-nove-slike2/vlada-main-photo.webp", alt: "Dr Vladimir Sokolović", category: "team" },
];

const filters: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "Sve" },
  { key: "work", label: "Work" },
  { key: "team", label: "Team" },
];

const AvivaGallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");

  const visibleItems = useMemo(
    () => (activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      <div className="cs_height_170 cs_height_lg_100" />
      <section>
        <div className="container">
          <PaletteGlowSection>
            <div className="aviva-gallery-head">
              <p className="aviva-gallery-kicker">Galerija</p>
              <h2 className="cs_section_title">Transformacije, tim i atmosfera klinike</h2>
              <p className="aviva-gallery-subtitle">
                Odaberi prikaz i pregledaj fotografije rada i članova Aviva Ageless tima.
              </p>
              <div className="aviva-gallery-filters">
                {filters.map((filter) => (
                  <Button
                    key={filter.key}
                    radius="full"
                    variant={activeFilter === filter.key ? "solid" : "bordered"}
                    className={`aviva-gallery-filter-btn ${
                      activeFilter === filter.key ? "active" : ""
                    }`}
                    onPress={() => setActiveFilter(filter.key)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </PaletteGlowSection>
          <div className="cs_height_50 cs_height_lg_30" />
          <div className="aviva-gallery-grid">
            {visibleItems.map((item, index) => (
              <motion.div
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <Card shadow="sm" radius="lg" className="aviva-gallery-card">
                  <CardBody className="p-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      quality={70}
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      style={{ width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }}
                    />
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_70" />
    </>
  );
};

export default AvivaGallery;
