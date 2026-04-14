import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventFlipCard from "../components/innovation/EventFlipCard";

const teamHeadImage =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80";

const projectHeroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80";

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

function ProjectHero() {
  return (
    <header className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${projectHeroImage}')` }}
        />
      </div>

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Delivering real-world impact
          </span>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:max-w-4xl">
          Project <br />
          <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            Team
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-200 sm:text-xl">
          Turning ideas into measurable initiatives through planning, partnerships, and accountable
          delivery.
        </p>
      </div>
    </header>
  );
}

export default function ProjectTeamPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#0a1118] text-white">
        <ProjectHero />

        <section id="team" className="bg-[#0a1118] pb-16 pt-28 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
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
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent opacity-60 blur-xl"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121b26] shadow-2xl shadow-black/40">
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
                    <figcaption className="border-t border-white/10 bg-[#121b26] px-5 py-4">
                      <p className="text-sm font-semibold text-white">Samuel Bekele</p>
                      <p className="text-xs text-slate-400">Head of Project Team</p>
                      <div className="mt-3 space-y-1 text-xs text-slate-300">
                        <p>
                          <span className="font-semibold text-white">Email:</span>{" "}
                          <a className="text-primary hover:underline" href="mailto:projects@unaethu.org">
                            projects@unaethu.org
                          </a>
                        </p>
                        <p>
                          <span className="font-semibold text-white">Phone:</span>{" "}
                          <a className="text-primary hover:underline" href="tel:+251900000000">
                            +251 900 000 000
                          </a>
                        </p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="border-t border-white/10 bg-gradient-to-b from-[#0a1118] to-[#0d1520] py-16 sm:py-24"
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

        <section id="milestones" className="border-t border-white/10 bg-[#121b26] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-md border border-yellow-300/35 bg-yellow-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">
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

        <section id="registration" className="border-t border-white/10 bg-[#0a1118] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-[#121b26] via-[#152a45]/80 to-[#0a1118] p-8 shadow-[0_0_60px_rgba(0,163,255,0.08)] sm:p-12">
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
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
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(0,163,255,0.35)] transition hover:bg-primary/90"
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

