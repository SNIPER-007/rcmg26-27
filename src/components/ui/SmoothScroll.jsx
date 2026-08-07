import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export default function SmoothScroll() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const isReportingRoute = pathname.startsWith("/reporting");

    document.documentElement.style.scrollBehavior = isReportingRoute ? "auto" : "smooth";

    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    if (isReportingRoute) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
      if (document.documentElement.style.scrollBehavior === "smooth") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    };
  }, [pathname]);

  return null;
}