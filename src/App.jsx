import React from "react";
import UniversityHeader from "./components/UniversityHeader";
import BlogArticle from "./components/BlogArticle";
import UniversityFooter from "./components/UniversityFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-emerald-600 selection:text-white">
      <UniversityHeader />
      <div className="flex-1">
        <BlogArticle />
      </div>
      <UniversityFooter />
    </div>
  );
}
