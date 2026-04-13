import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventFlipCard from "../components/innovation/EventFlipCard";

const heroBackdrop =
  "linear-gradient(120deg, rgba(6,10,18,0.90) 0%, rgba(8,17,31,0.82) 42%, rgba(8,17,31,0.92) 100%), url(https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=2200&q=80)";

const debateEvents = [
  {
    title: "UN Charter Moot Session",
    date: "May 18, 2026",
    summary:
      "Competitive chamber focused on Article 1 principles and conflict de-escalation arguments.",
    detail:
      "Delegates present structured legal and policy arguments tied to Charter obligations.\nA moderation panel scores clarity, citation quality, and diplomatic framing.\nBest speakers advance to the inter-university round.",
    badge: "Registration open",
    poster:
      "https://images.unsplash.com/photo-1528747008803-5f6f72f8f4c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Negotiation and Rebuttal Workshop",
    date: "June 9, 2026",
    summary:
      "Hands-on drills for rebuttal timing, coalition building, and procedural interventions.",
    detail:
      "Sessions focus on cross-examination strategy, caucus leadership, and amendment drafting.\nParticipants practice framing disagreement without losing diplomatic tone.\nMentors provide line-by-line feedback after each round.",
    badge: "Limited seats",
    poster:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Public Speaking Bootcamp",
    date: "July 12-13, 2026",
    summary:
      "Voice control, persuasive speech architecture, and evidence-based closing statements.",
    detail:
      "Day one covers argument architecture and speaking under time pressure.\nDay two runs full simulations with panel scoring and peer critique.\nCertificates are awarded based on consistency and improvement.",
    badge: "Coming soon",
    poster:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const stats = [
  { value: "42", label: "FORMAL DEBATES" },
  { value: "15", label: "MOTION PACKS" },
  { value: "88%", label: "SPEAKER IMPROVEMENT" },
];

export default function DebatePage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#08111f] text-white">
        <section
          id="team"
          className="relative overflow-hidden border-b border-white/10 pb-16 pt-28 sm:pb-24 sm:pt-32"
          style={{ backgroundImage: heroBackdrop, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_10%,rgba(0,161,219,0.25),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100">
              Debate Team
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Diplomacy Through{" "}
              <span className="text-primary [text-shadow:0_0_30px_rgba(0,161,219,0.45)]">
                Evidence, Procedure,
              </span>{" "}
              and Principled Speech
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Our chamber prepares delegates for high-pressure negotiations, formal
              committee speaking, and Charter-grounded rebuttal strategy. Every round
              trains clarity, discipline, and diplomatic confidence.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-white/15 bg-[#0d1b2c]/75 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Policy Framing
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Build arguments around Charter articles, precedent, and realistic state interests.
                </p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-[#0d1b2c]/75 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Rebuttal Discipline
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Practice concise responses, procedural motions, and coalition positioning.
                </p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-[#0d1b2c]/75 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Speaker Growth
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Structured feedback cycles to improve delivery, logic flow, and composure.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="border-t border-white/10 bg-gradient-to-b from-[#08111f] to-[#10213b] py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Debate program calendar
            </h2>
            <div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-3 md:items-stretch">
              {debateEvents.map((event) => (
                <EventFlipCard key={event.title} {...event} />
              ))}
            </div>
          </div>
        </section>

        <section id="milestones" className="border-t border-white/10 bg-[#111d2f] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-md border border-blue-300/35 bg-blue-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Performance snapshot
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

        <section id="registration" className="border-t border-white/10 bg-[#08111f] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-[#0d1b2c] via-[#143053] to-[#08111f] p-8 shadow-[0_0_60px_rgba(0,163,255,0.12)] sm:p-12">
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Join the debate team
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Apply for the next chamber
                </h2>
                <p className="mt-4 text-slate-300">
                  Submit your interest, preferred committee topics, and speaking background.
                  Selected applicants are invited to a placement round.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:debate@unaethu.org?subject=Debate%20Team%20Application"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(0,163,255,0.35)] transition hover:bg-primary/90"
                  >
                    Email application
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

