"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";

type HeroUIRootProviderProps = {
  children: React.ReactNode;
};

const HeroUIRootProvider = ({ children }: HeroUIRootProviderProps) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default HeroUIRootProvider;
