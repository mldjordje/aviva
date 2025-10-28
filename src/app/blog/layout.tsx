import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog – Aviva Ageless Niš',
  description: 'Novosti, saveti i edukativni tekstovi iz estetske medicine.',
  alternates: { canonical: 'https://www.avivaageless.rs/blog' },
  openGraph: { title: 'Blog – Aviva Ageless Niš', description: 'Novosti i saveti iz estetske medicine.', url: 'https://www.avivaageless.rs/blog', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Blog – Aviva Ageless Niš', description: 'Novosti i saveti iz estetske medicine.' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

