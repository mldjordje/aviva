import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/data/contact";

const UnderConstruction = () => {
  const phoneHref = CONTACT.phone.startsWith("+")
    ? CONTACT.phone
    : `+381${CONTACT.phone.replace(/^0/, "")}`;

  return (
    <main className="under-construction">
      <div className="under-construction__overlay" />
      <div className="container">
        <div className="under-construction__content">
          <div className="under-construction__logo">
            <Image
              src="/assets/img1/logo3.png"
              alt="Aviva Ageless logo"
              width={80}
              height={80}
              priority
            />
            <span className="under-construction__tag">Sajt u izradi</span>
          </div>

          <h1>Radimo na novom iskustvu.</h1>
          <p>
            Naš novi veb-sajt je u pripremi. Za sve informacije ili zakazivanje
            termina, obratite nam se direktno putem telefona ili e-maila.
          </p>

          <div className="under-construction__actions">
            <a className="btn btn-light btn-lg" href={`tel:${phoneHref}`}>
              Pozovite: {CONTACT.phone}
            </a>
            <a className="btn btn-outline-light btn-lg" href={`mailto:${CONTACT.email}`}>
              Pišite nam
            </a>
          </div>

          <div className="under-construction__meta">
            <div>
              <h6>Adresa</h6>
              <p>
                {CONTACT.address.streetAddress}
                <br />
                {CONTACT.address.addressLocality}
              </p>
            </div>
            <div>
              <h6>Radno vreme</h6>
              <p>{CONTACT.openingHours?.[0] ?? "Mo-Fr 09:00-17:00"}</p>
            </div>
          </div>

          <div className="under-construction__links">
            <Link href="https://maps.app.goo.gl/MJAd1ccxMsfQw4CV7" target="_blank">
              Pogledajte lokaciju
            </Link>
            <span className="divider" aria-hidden="true">
              ·
            </span>
            <Link href="https://www.instagram.com/aviva_ageless" target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
