import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventFlipCard from "../components/innovation/EventFlipCard";

const teamHeadImage =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80";

const projectEvents = [
  {
    title: "Community Impact Sprint",
    date: "May 26-28, 2026",
    summary:
      "Rapid project design cycle aligned with SDG targets and local implementation constraints.",
    detail:
      "Teams map local needs, define measurable outcomes, and draft implementation plans.\nReview panels assess impact logic, risk mitigation, and stakeholder engagement.\nWinning concepts enter pilot support with mentors.",
    badge: "Call for teams",
    poster:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Monitoring & Evaluation Studio",
    date: "June 15, 2026",
    summary:
      "Build practical indicators, reporting templates, and accountability dashboards for field projects.",
    detail:
      "Participants create baseline metrics, milestones, and evidence collection plans.\nSessions include ethical data handling and transparent status reporting.\nEach team leaves with an M&E board ready for deployment.",
    badge: "Limited seats",
    poster:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Partnership Design Forum",
    date: "July 20, 2026",
    summary:
      "Cross-team workshop for NGO collaboration, proposal writing, and resource planning.",
    detail:
      "Project leads practice stakeholder mapping, MoU framing, and implementation budgeting.\nAdvisors provide live feedback on sustainability and governance structure.\nTop proposals are introduced to partner organizations.",
    badge: "Open",
    poster:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const stats = [
  { value: "19", label: "ACTIVE PROJECTS" },
  { value: "7", label: "PARTNER ORGS" },
  { value: "2.4K", label: "BENEFICIARIES REACHED" },
];

export default function ProjectTeamPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0a1410] text-white">
        <section id="team" className="bg-[#0a1410] pb-16 pt-28 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                  Delivery and implementation
                </p>
                <p className="mt-4 text-lg font-semibold text-white">Head of Project Team</p>
                <p className="mt-1 text-base text-slate-400">Samuel Bekele</p>
                <div className="mt-8 space-y-4 text-justify text-[15px] leading-relaxed text-slate-300 sm:text-base">
                  <p>
                    The Project Team transforms policy ideas into practical action programs.
                    We plan initiatives that are realistic, measurable, and aligned with UN
                    Charter values and community priorities.
                  </p>
                  <p>
                    Our workflow combines design sprints, partnership mapping, and evidence
                    tracking to ensure every project can be implemented and sustained. From
                    pilot to rollout, we focus on responsible delivery.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:sticky md:top-24 md:justify-end">
                <figure className="relative w-full max-w-md">
                  <div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/40 to-transparent opacity-70 blur-xl"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#13241e] shadow-2xl shadow-black/40">
                    <div className="aspect-[4/5] w-full">
                      <Image
                        src={teamHeadImage}
                        alt="Head of Project Team"
                        width={720}
                        height={900}
                        className="h-full w-full object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </div>
                    <figcaption className="border-t border-white/10 bg-[#13241e] px-5 py-4">
                      <p className="text-sm font-semibold text-white">Samuel Bekele</p>
                      <p className="text-xs text-slate-400">Head of Project Team</p>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="border-t border-white/10 bg-gradient-to-b from-[#0a1410] to-[#123126] py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Project pipeline events
            </h2>
            <div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-3 md:items-stretch">
              {projectEvents.map((event) => (
                <EventFlipCard key={event.title} {...event} />
              ))}
            </div>
          </div>
        </section>

        <section id="milestones" className="border-t border-white/10 bg-[#13241e] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-md border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
              Impact tracker
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="border-t border-white/10 bg-[#0a1410] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-gradient-to-br from-[#11231d] via-[#1c3d31] to-[#0a1410] p-8 shadow-[0_0_60px_rgba(16,185,129,0.14)] sm:p-12">
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Join the project team
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Propose and lead impact work
                </h2>
                <p className="mt-4 text-slate-300">
                  Share your project concept, target group, and proposed outcomes. Shortlisted
                  teams will enter the implementation mentorship cycle.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:projects@unaethu.org?subject=Project%20Team%20Proposal"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-bold text-[#052012] shadow-[0_0_24px_rgba(16,185,129,0.45)] transition hover:bg-emerald-300"
                  >
                    Submit proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

