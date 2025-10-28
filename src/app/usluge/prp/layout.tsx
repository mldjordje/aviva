import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'PRP tretman – Aviva Ageless Niš',
  description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/prp' },
  openGraph: { title: 'PRP tretman – Aviva Ageless Niš', description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.', url: 'https://www.avivaageless.rs/usluge/prp', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'PRP tretman – Aviva Ageless Niš', description: 'Regeneracija kože sopstvenom plazmom – prirodan pristup bezbednim rezultatima.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

