import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export default function SmoothScroll() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        immediate: true,
      });
    }
  }, [pathname]);

  return null;
}