import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Hijaluronski fileri – Aviva Ageless Niš',
  description: 'Prirodno isticanje lepote uz hijaluronske filere: usne, konture, bore – individualni pristup i sigurni rezultati.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/hijaluronski-fileri' },
  openGraph: { title: 'Hijaluronski fileri – Aviva Ageless Niš', description: 'Prirodno isticanje lepote uz hijaluronske filere.', url: 'https://www.avivaageless.rs/usluge/hijaluronski-fileri', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Hijaluronski fileri – Aviva Ageless Niš', description: 'Prirodno isticanje lepote uz hijaluronske filere.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

