import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog - Aviva Ageless Niš",
  description: "Blog sekcija trenutno nije aktivna.",
  alternates: { canonical: "https://ageless.rs/" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
