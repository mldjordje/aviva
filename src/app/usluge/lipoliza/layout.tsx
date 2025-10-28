import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Lipoliza – Aviva Ageless Niš',
  description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.',
  alternates: { canonical: 'https://www.avivaageless.rs/usluge/lipoliza' },
  openGraph: { title: 'Lipoliza – Aviva Ageless Niš', description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.', url: 'https://www.avivaageless.rs/usluge/lipoliza', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Lipoliza – Aviva Ageless Niš', description: 'Neinvazivno smanjenje lokalnih masnih naslaga – precizan i efikasan tretman.' },
};

export default function Layout({ children }: { children: ReactNode }) { return children; }

