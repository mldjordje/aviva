import "@/styles/index.scss";

export const metadata = {
  title: "Aviva Ageless - Dr Mila Djordjevic",
  description: "Estetska anti-age klinika - botoks, fileri, podmlađivanje",
  icons: [
    {
      rel: "icon",
      url: "/assets/img1/logo3.png",
    },
    {
      rel: "shortcut icon",
      url: "/assets/img1/logo1.png",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
