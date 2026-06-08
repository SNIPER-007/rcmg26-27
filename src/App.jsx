import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import CoreTeam from "./pages/CoreTeam";
import Achievements from "./pages/Achievements";
import GetInvolved from "./pages/GetInvolved";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/core-team" element={<CoreTeam />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}