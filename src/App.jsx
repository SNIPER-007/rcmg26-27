import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import CoreTeam from "./pages/CoreTeam";
import Achievements from "./pages/Achievements";
import GetInvolved from "./pages/GetInvolved";
import BOD from "./pages/BOD";

import SmoothScroll from "./components/ui/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/ui/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />

          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/core-team" element={<CoreTeam />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/bod" element={<BOD />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}