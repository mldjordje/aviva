import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Skinboosteri – Aviva Ageless Niš',
  description: 'Dubinska hidratacija i revitalizacija kože uz skinboostere.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/skinboosteri' },
  openGraph: { title: 'Skinboosteri – Aviva Ageless Niš', description: 'Dubinska hidratacija i revitalizacija kože uz skinboostere.', url: 'https://www.avivaageless.rs/usluge/skinboosteri', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Skinboosteri – Aviva Ageless Niš', description: 'Dubinska hidratacija i revitalizacija kože uz skinboostere.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

