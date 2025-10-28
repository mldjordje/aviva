import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Botox – Aviva Ageless Niš',
  description: 'Osvežen izgled bez bora: bezbedan i brz tretman botoksom uz prirodan rezultat.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/botox' },
  openGraph: { title: 'Botox – Aviva Ageless Niš', description: 'Osvežen izgled bez bora – prirodan rezultat.', url: 'https://www.avivaageless.rs/usluge/botox', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Botox – Aviva Ageless Niš', description: 'Osvežen izgled bez bora – prirodan rezultat.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

