import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Champions from "./components/Champions";
import About from "./components/About";
import Institutions from "./components/Institutions";
import TracksAndProjects from "./components/TracksAndProjects";
import Gallery from "./components/Gallery";
import PartnersAndSponsors from "./components/PartnersAndSponsors";
import CommitteeAndModerators from "./components/CommitteeAndModerators";
import CertificatesCTA from "./components/CertificatesCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Champions />
        <About />
        <Institutions />
        <TracksAndProjects />
        <Gallery />
        <PartnersAndSponsors />
        <CommitteeAndModerators />
        <CertificatesCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
