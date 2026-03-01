'use client';

import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import MouseMove from "@/components/common/MouseMove";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ScrollSmoother } from "@/plugins";

gsap.registerPlugin(ScrollSmoother);

const Wrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    // Kill stale smoother instance before initializing on a new page.
    const activeSmoother = ScrollSmoother.get();
    if (activeSmoother) {
      activeSmoother.kill();
    }

    if (isTouchDevice) {
      return;
    }

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");
    if (!smoothWrapper || !smoothContent) {
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.35,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <MouseMove />
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
