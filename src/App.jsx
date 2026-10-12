import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Winners from "./components/Winners";
import Institutions from "./components/Institutions";
import Gallery from "./components/Gallery";
import PartnersAndSponsors from "./components/PartnersAndSponsors";
import CommitteeAndModerators from "./components/CommitteeAndModerators";
import CertificatesCTA from "./components/CertificatesCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Winners />
        <Institutions />
        <Gallery />
        <PartnersAndSponsors />
        <CommitteeAndModerators />
        <CertificatesCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
