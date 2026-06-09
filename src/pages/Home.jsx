import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Moments from "../components/home/Moments";
import WhyRCMG from "../components/home/WhyRCMG";
import CTA from "../components/home/CTA";

import PageTransition from "../components/animations/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Moments />
      <WhyRCMG />
      <CTA />
    </PageTransition>
  );
}