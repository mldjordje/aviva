import Link from "next/link";
import React from "react";

type ServiceSlug =
  | "hijaluronski-fileri"
  | "botox"
  | "skinboosteri"
  | "prp"
  | "lipoliza"
  | "mezoterapija"
  | "savetovanja";

type ServiceLink = {
  slug: ServiceSlug;
  title: string;
  href: string;
};

const serviceLinks: ServiceLink[] = [
  { slug: "hijaluronski-fileri", title: "Hijaluronski fileri", href: "/usluge/hijaluronski-fileri" },
  { slug: "botox", title: "Botox", href: "/usluge/botox" },
  { slug: "skinboosteri", title: "Skinboosteri", href: "/usluge/skinboosteri" },
  { slug: "prp", title: "PRP tretman", href: "/usluge/prp" },
  { slug: "lipoliza", title: "Lipoliza", href: "/usluge/lipoliza" },
  { slug: "mezoterapija", title: "Mezoterapija", href: "/usluge/mezoterapija" },
  { slug: "savetovanja", title: "Savetovanja", href: "/usluge/savetovanja" },
];

export default function RelatedServiceLinks({ current }: { current: ServiceSlug }) {
  const related = serviceLinks.filter((item) => item.slug !== current);

  return (
    <section>
      <div className="container">
        <div className="cs_height_80 cs_height_lg_50"></div>
        <div className="cs_work cs_work_text">
          <h4 className="anim_heading_title">Povezane usluge u Nisu</h4>
          <p className="cs_mp0 anim_text">
            Ako uporedjujete opcije, pogledajte i sledece tretmane i rezervisite konsultaciju.
          </p>
        </div>
        <div className="cs_height_30 cs_height_lg_20"></div>
        <ul className="cs_footer_nav">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
          <li>
            <Link href="/cenovnik">Cenovnik tretmana</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt i zakazivanje</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
