import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'O nama – Aviva Ageless Niš',
  description: 'Upoznajte Aviva Ageless: tim, pristup i vrednosti estetske medicine u Nišu.',
  alternates: { canonical: 'https://www.avivaageless.rs/about' },
  openGraph: { title: 'O nama – Aviva Ageless Niš', description: 'Tim i pristup estetskoj medicini u Nišu.', url: 'https://www.avivaageless.rs/about', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'O nama – Aviva Ageless Niš', description: 'Tim i pristup estetskoj medicini u Nišu.' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

