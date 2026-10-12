import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { thematicTracks } from "../data/iriseData";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProjectsPage() {
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flatten all 45 projects
  const allProjects = useMemo(() => {
    const list = [];
    thematicTracks.forEach((track) => {
      track.projects.forEach((proj) => {
        list.push({
          ...proj,
          trackId: track.id,
          trackName: track.name,
        });
      });
    });
    return list;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesTrack = selectedTrack === "all" || p.trackId === selectedTrack;
      const matchesSearch =
        p.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.trackName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTrack && matchesSearch;
    });
  }, [allProjects, selectedTrack, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16 sm:pt-28 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
            All Innovation Projects
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Complete directory of 45 student solutions across 6 thematic tracks evaluated during Round 1 and Round 2.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="relative w-full sm:w-80 md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects (e.g. Pinacare, Argus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-slate-600 flex items-center space-x-2 self-start sm:self-center">
            <span>Showing:</span>
            <span className="font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm">
              {filteredProjects.length} of 45 Projects
            </span>
          </div>
        </div>

        {/* Track Category Buttons */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedTrack("all")}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedTrack === "all"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm"
            }`}
          >
            All Tracks (45)
          </button>

          {thematicTracks.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                <span>{track.name} ({track.projectCount})</span>
              </button>
            );
          })}
        </div>

        {/* Projects List - Clean Minimalist Rows */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-100 shadow-sm">
          {filteredProjects.map((project, idx) => {
            const isWinner = project.rank === 1 || String(project.rank).includes("1");
            return (
              <div
                key={`${project.trackId}-${project.team}-${idx}`}
                className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1 flex-1 pr-4">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Rank #{project.rank}
                    </span>
                    {isWinner && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Category Winner
                      </span>
                    )}
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-medium text-emerald-700">
                      {project.trackName}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {project.team}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.highlight}
                  </p>
                </div>

                <div className="font-mono text-sm sm:text-base font-bold text-emerald-700 shrink-0 self-end md:self-center">
                  {project.score.toFixed(2)} pts
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 mt-6 shadow-sm">
            <p className="text-slate-600 text-sm">
              No projects matched your search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTrack("all");
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 border border-slate-300 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
