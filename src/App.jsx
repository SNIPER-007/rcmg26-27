import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import CoreTeam from "./pages/CoreTeam";
import Achievements from "./pages/Achievements";
import GetInvolved from "./pages/GetInvolved";
import BOD from "./pages/BOD";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

// Reporting Pages
import Login from "./pages/reporting/Login";
import Dashboard from "./pages/reporting/Dashboard";
import ReportForm from "./pages/reporting/ReportForm";
import ReportList from "./pages/reporting/ReportList";
import Profile from "./pages/reporting/Profile";
import ReportingLayout from "./components/reporting/ReportingLayout";

import SmoothScroll from "./components/ui/SmoothScroll";
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
    <AuthProvider>
      <Loader loading={loading} />

      {!loading && (
        <BrowserRouter>
          <SmoothScroll />

          <Routes>
            {/* Public Layout Routes */}
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/core-team" element={<CoreTeam />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/bod" element={<BOD />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<BlogPost />} />
                  </Routes>
                </Layout>
              }
            />

            {/* Reporting Pages - Custom Layouts */}
            <Route path="/reporting/login" element={<Login />} />
            
            <Route element={<ReportingLayout />}>
              <Route path="/reporting/dashboard" element={<Dashboard />} />
              <Route path="/reporting/projects" element={<ReportList />} />
              <Route path="/reporting/create" element={<ReportForm />} />
              <Route path="/reporting/edit/:id" element={<ReportForm />} />
              <Route path="/reporting/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </AuthProvider>
  );
}