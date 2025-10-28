import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kontakt – Aviva Ageless Niš',
  description: 'Kontaktirajte Aviva Ageless u Nišu: Bulevar Nemanjića 12, 0653502771, aviva@email.com.',
  alternates: { canonical: 'https://www.avivaageless.rs/contact' },
  openGraph: { title: 'Kontakt – Aviva Ageless Niš', description: 'Kontakt informacije i lokacija.', url: 'https://www.avivaageless.rs/contact', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Kontakt – Aviva Ageless Niš', description: 'Kontakt informacije i lokacija.' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

