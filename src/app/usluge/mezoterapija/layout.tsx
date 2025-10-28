import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mezoterapija – Aviva Ageless Niš',
  description: 'Vitamini, minerali i hijaluron za osvežen, zdrav ten i elastičnost kože.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/mezoterapija' },
  openGraph: { title: 'Mezoterapija – Aviva Ageless Niš', description: 'Vitamini, minerali i hijaluron za osvežen, zdrav ten i elastičnost kože.', url: 'https://www.avivaageless.rs/usluge/mezoterapija', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Mezoterapija – Aviva Ageless Niš', description: 'Vitamini, minerali i hijaluron za osvežen, zdrav ten i elastičnost kože.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

