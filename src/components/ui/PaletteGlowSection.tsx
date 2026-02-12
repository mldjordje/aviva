"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

type PaletteGlowSectionProps = {
  className?: string;
  children: React.ReactNode;
};

const PaletteGlowSection = ({ className, children }: PaletteGlowSectionProps) => {
  return (
    <Card
      shadow="none"
      radius="lg"
      className={`palette-glow-section ${className ?? ""}`}
    >
      <div className="palette-glow-layer palette-glow-layer-1" />
      <div className="palette-glow-layer palette-glow-layer-2" />
      <div className="palette-glow-layer palette-glow-layer-3" />
      <CardBody className="palette-glow-content">{children}</CardBody>
    </Card>
  );
};

export default PaletteGlowSection;
