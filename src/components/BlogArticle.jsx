import React, { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Share2,
  Bookmark,
  Search,
  ExternalLink,
  Award,
  Images,
  FolderArchive,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Trophy
} from "lucide-react";
import {
  eventMeta,
  keyStats,
  grandChampions,
  categoryWinners,
  thematicTracks,
  participatingInstitutions,
  sponsorsAndPartners,
  committeeAndModerators
} from "../data/iriseData";

export default function BlogArticle() {
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  // Flatten all 45 projects for the embedded searchable directory
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

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="bg-white text-slate-800">
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
          <a href="https://cuk.ac.ke" className="hover:text-emerald-700 transition-colors">
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <a href="https://cuk.ac.ke/news" className="hover:text-emerald-700 transition-colors">
            News & Events
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <a href="https://cuk.ac.ke/research" className="hover:text-emerald-700 transition-colors">
            Research & Innovation
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium">
            I-RISE 2026 Recap
          </span>
        </nav>

        {/* Article Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
          <span>Research & Innovation</span>
          <span>•</span>
          <span>Official Event Recap</span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight leading-tight mb-4">
          Where Ideas Rise to Impact: Highlights & Category Winners from the Inaugural I-RISE 2026 & 7th CUK Innovation Week
        </h1>

        {/* Article Sub-headline / Theme */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6">
          Youth-led solutions for a sustainable and inclusive nation: 45+ student innovations across eight premier Kenyan universities showcased at The Co-operative University of Kenya.
        </p>

        {/* Article Metadata & Byline */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <User className="w-4 h-4 text-emerald-700" />
              <span>Directorate of Computing & e-Learning & CUK Innovation Club</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>October 12, 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>5 min read</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </div>

        {/* Featured Photo Banner */}
        <figure className="mb-10">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
            <img
              src="/gallery/day1/day1_1_AHP_3227.JPG"
              alt="Delegates and participants during I-RISE 2026 at The Co-operative University of Kenya"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-xs text-slate-500 mt-2.5 text-center italic">
            Student innovators, university leadership, and industry jury members assemble during the opening ceremony of I-RISE 2026 at CUK Main Campus, Karen.
          </figcaption>
        </figure>

        {/* Article Narrative Section 1: Introduction */}
        <section className="prose prose-slate max-w-none mb-10">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
            <strong>NAIROBI, Kenya —</strong> The Co-operative University of Kenya (CUK) Karen Campus successfully hosted the inaugural <strong>Interuniversity Research & Innovation Student Expo (I-RISE)</strong> in conjunction with the <strong>7th CUK Innovation Week</strong> on <strong>8–9 October 2026</strong>. Anchored under the theme <em>“Youth-Led Solutions for a Sustainable and Inclusive Nation: Where Ideas Rise to Impact,”</em> the two-day summit brought together student delegations from eight premier public and private universities across Kenya.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            The event was officially officiated by university administrators, led by Vice-Chancellor Prof. Kamau Ngamau and Deputy Vice-Chancellor (Academic, Co-operative Development, Research and Innovation) Prof. Isaac Nyamongo. In their opening addresses, university leadership emphasized the critical necessity of transitioning student research and capstone software projects into commercially viable, market-ready national intellectual properties.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            Keynote speaker Derrick Gakuu of SISCOM Technologies challenged student innovators to align their technical architectures with real-world enterprise standards, institutional cybersecurity, and socio-economic inclusion. Over 45 competitive student teams presented working prototypes before multidisciplinary juries across three parallel breakout pitch rooms.
          </p>
        </section>

        {/* Journalistic Event Outcomes & Statistics Strip */}
        <section className="my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h2 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4 text-center sm:text-left">
            I-RISE 2026 Expo By the Numbers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0c2340]">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-600 mt-1 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Article Narrative Section 2: Podium Champions */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mb-4">
            Grand Honors & Podium Champions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            Following rigorous scoring across Round 1 breakout presentations and Round 2 Grand Finals, five outstanding innovations were awarded top podium honors for technological depth, social impact, and viability:
          </p>

          <div className="space-y-4 mb-8">
            {grandChampions.map((champ, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/80 transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {champ.title}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Track: {champ.track}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-emerald-700 self-start sm:self-center">
                    Score: {champ.score.toFixed(2)} pts
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Team {champ.team}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {champ.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Article Narrative Section 3: Category Winners Table */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mb-4">
            Category Winners Across Thematic Tracks
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            In each of the six thematic tracks, teams were evaluated on problem definition, technical execution, scalability, and presentation. Below are the first-place category champions:
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-200 shadow-sm">
            {categoryWinners.map((winner, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-emerald-700">
                      {winner.track}
                    </span>
                    {winner.honor && (
                      <span className="text-[10px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {winner.honor}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {winner.team}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {winner.institution} — {winner.description}
                  </p>
                </div>

                <div className="font-mono text-sm sm:text-base font-bold text-emerald-700 shrink-0 self-end sm:self-center">
                  {winner.score.toFixed(2)} pts
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Article Narrative Section 4: Full 45 Projects Directory (Embedded) */}
        <section id="projects-directory" className="mb-14 pt-4 border-t border-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mb-2">
              All 45 Participating Innovation Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore the complete directory of solutions submitted by student innovators during Round 1 and Round 2 evaluations. Filter by thematic track or search by project keyword below:
            </p>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
            <div className="relative w-full sm:w-80 md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects (e.g. Pinacare, Argus)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
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
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {filteredProjects.length} of 45 Projects
              </span>
            </div>
          </div>

          {/* Thematic Track Pills */}
          <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedTrack("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedTrack === "all"
                  ? "bg-emerald-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-emerald-700 text-white"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  <span>{track.name} ({track.projectCount})</span>
                </button>
              );
            })}
          </div>

          {/* Projects List */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-100 shadow-sm max-h-[600px] overflow-y-auto">
            {filteredProjects.map((project, idx) => {
              const isWinner = project.rank === 1 || String(project.rank).includes("1");
              return (
                <div
                  key={`${project.trackId}-${project.team}-${idx}`}
                  className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1 flex-1 pr-4">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Rank #{project.rank}
                      </span>
                      {isWinner && (
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Category Winner
                        </span>
                      )}
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-medium text-emerald-700">
                        {project.trackName}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {project.team}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700 shrink-0 self-end md:self-center">
                    {project.score.toFixed(2)} pts
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 mt-4">
              <p className="text-slate-600 text-sm">
                No innovation projects found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTrack("all");
                }}
                className="mt-3 px-4 py-2 rounded-lg bg-white text-slate-800 text-xs font-semibold hover:bg-slate-100 border border-slate-300 cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        {/* Article Narrative Section 5: Photo Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mb-4">
            Event Photo Archives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            Official high-resolution photography capturing keynote presentations, panel sessions, live project pitches, and the awards ceremony has been archived on Google Drive:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 1 Drive Card */}
            <a
              href={eventMeta.day1DriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-600 transition-colors shadow-sm"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src="/gallery/day1/day1_1_AHP_3227.JPG"
                  alt="Day 1 Photos - I-RISE 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Day 1 Photo Album
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Opening ceremony, keynote addresses & breakout pitches
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-700 shrink-0" />
              </div>
            </a>

            {/* Day 2 Drive Card */}
            <a
              href={eventMeta.day2DriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-emerald-600 transition-colors shadow-sm"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src="/gallery/day2/day2_1_AHP_3665.JPG"
                  alt="Day 2 Photos - I-RISE 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Day 2 Photo Album
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Grand finals, exhibitions & awards ceremony
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-700 shrink-0" />
              </div>
            </a>
          </div>

          <div className="mt-4 text-center">
            <a
              href={eventMeta.googleDrivePhotosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Open Master Google Drive Photo Archive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* Article Narrative Section 6: Participating Universities & Partners */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] tracking-tight mb-4">
            Participating Universities & Partners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            The Co-operative University of Kenya acknowledges the delegation leadership and student innovators from the following participating universities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {participatingInstitutions.map((inst, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    {inst.code}
                  </span>
                  {inst.badge === "Host" && (
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                      Host
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {inst.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {inst.city}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#0c2340] mb-3">
            Industry Mentors & Partners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {sponsorsAndPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-white"
              >
                <span className="text-[11px] font-semibold text-emerald-700">
                  {partner.role}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-0.5">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  {partner.contribution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Callout Box (University Notice Style) */}
        <section className="my-12 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Participant Notice
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c2340]">
              Claim Your Official Certificate of Participation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              All registered student participants, track finalists, and institution delegates are invited to complete the post-expo feedback form to receive their official certificate.
            </p>
          </div>

          <a
            href={eventMeta.certificateFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Open Certificate Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>

        {/* Article Footer Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-700">Tags:</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">#CUKInnovationWeek</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">#IRISE2026</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">#YouthInnovation</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">#KenyanUniversities</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">#ResearchToImpact</span>
          </div>

          <div className="text-slate-400">
            Published under CUK Research & Innovation News
          </div>
        </div>
      </article>
    </main>
  );
}
