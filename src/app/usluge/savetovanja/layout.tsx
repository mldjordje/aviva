import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Savetovanja – Aviva Ageless Niš',
  description: 'Stručni pregledi i personalizovane preporuke tretmana estetske medicine.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/savetovanja' },
  openGraph: { title: 'Savetovanja – Aviva Ageless Niš', description: 'Stručni pregledi i personalizovane preporuke.', url: 'https://www.avivaageless.rs/usluge/savetovanja', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Savetovanja – Aviva Ageless Niš', description: 'Stručni pregledi i personalizovane preporuke.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

