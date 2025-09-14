'use client'

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,                 // ublažavanje skrola
      duration: 1.2,             // ako ne koristiš lerp
      smoothWheel: true,         // smooth scroll za točkić
      syncTouch: true,           // omogućava smooth i za touch (mobilni)
      syncTouchLerp: 0.085,      // koliko da se ublaži touch inercija
      touchInertiaMultiplier: 1.7, // "snaga" inercije na telefonu
      wheelMultiplier: 1,        // osetljivost miša
      touchMultiplier: 1.2,      // osetljivost dodira
      gestureOrientation: "vertical", // ili "both" ako hoćeš i horizontalno
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
