import React, { useState, useMemo } from "react";
import {
  Layers,
  Search,
  Trophy,
  Crown,
  Cpu,
  Shield,
  HeartPulse,
  Leaf,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { thematicTracks } from "../data/iriseData";

const trackIcons = {
  1: Cpu,
  2: Shield,
  3: HeartPulse,
  4: Leaf,
  5: GraduationCap,
  6: Sparkles,
};

export default function TracksAndProjects() {
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten all projects
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

  const getScoreBadgeClass = (score) => {
    if (score >= 80) return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    if (score >= 70) return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    if (score >= 60) return "bg-blue-500/20 text-blue-300 border-blue-500/40";
    return "bg-slate-800 text-slate-300 border-slate-700";
  };

  return (
    <section id="tracks" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Innovation Tracks & Projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Explore student solutions across all 6 thematic tracks evaluated during Round 1 and Round 2
            by the multidisciplinary jury panel.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Search Box */}
          <div className="relative w-full sm:w-80 md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects (e.g. Pinacare, Argus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="text-xs text-slate-400 flex items-center space-x-2 self-start sm:self-center">
            <span>Showing:</span>
            <span className="font-bold text-emerald-400 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
              {filteredProjects.length} of 45 Projects
            </span>
          </div>
        </div>

        {/* Track Category Buttons (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedTrack("all")}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedTrack === "all"
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            All Tracks (45)
          </button>

          {thematicTracks.map((track) => {
            const Icon = trackIcons[track.id] || Layers;
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{track.name} ({track.projectCount})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, idx) => {
            const isWinner = project.rank === 1 || String(project.rank).includes("1");
            const Icon = trackIcons[project.trackId] || Layers;
            return (
              <div
                key={`${project.trackId}-${project.team}-${idx}`}
                className={`p-4 sm:p-5 rounded-2xl transition-colors relative flex flex-col justify-between ${
                  isWinner
                    ? "bg-slate-900 border border-emerald-500/40"
                    : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Top line with rank & score */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-lg ${
                          isWinner
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-slate-950 text-slate-400 border border-slate-800"
                        }`}
                      >
                        Rank #{project.rank}
                      </span>
                      {isWinner && (
                        <Crown className="w-4 h-4 text-amber-400" />
                      )}
                    </div>

                    <div
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${getScoreBadgeClass(
                        project.score
                      )}`}
                    >
                      {project.score.toFixed(2)} pts
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {project.team}
                  </h3>

                  {/* Track Name */}
                  <div className="flex items-center space-x-1.5 text-xs text-cyan-400/90 font-medium mb-2.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{project.trackName}</span>
                  </div>

                  {/* Description / Highlight */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.highlight}
                  </p>
                </div>

                {/* Card footer */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>I-RISE 2026</span>
                  {isWinner ? (
                    <span className="text-amber-400 font-bold flex items-center space-x-1">
                      <Trophy className="w-3 h-3" />
                      <span>Category Winner</span>
                    </span>
                  ) : (
                    <span>Scored</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No projects matched your search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTrack("all");
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-slate-850 text-slate-200 text-xs font-semibold hover:bg-slate-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
