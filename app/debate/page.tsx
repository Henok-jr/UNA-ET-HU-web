import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventFlipCard from "../components/innovation/EventFlipCard";
import { prisma } from "@/lib/prisma";

const heroBackdrop =
  "linear-gradient(120deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.95) 100%), url(https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=2200&q=80)";

const stats = [
  { value: "42", label: "FORMAL DEBATES" },
  { value: "15", label: "MOTION PACKS" },
  { value: "88%", label: "SPEAKER IMPROVEMENT" },
];

export default async function DebatePage() {
  const events = await prisma.conference.findMany({
    where: { status: "UPCOMING" },
    orderBy: { date: "asc" },
    take: 50,
  });

  const debateEvents = events.filter((ev) => (ev as any).team === "DEBATE") as unknown as Array<{
    id: string;
    title: string;
    description: string;
    date: Date;
    image: string | null;
  }>;

  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <section
          id="team"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 sm:pb-24 sm:pt-32"
          style={{ backgroundImage: heroBackdrop, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_10%,rgba(0,158,219,0.18),transparent)]" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Debate Team
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
              Diplomacy Through{" "}
              <span className="text-primary">Evidence, Procedure,</span>{" "}
              and Principled Speech
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Our chamber prepares delegates for high-pressure negotiations, formal
              committee speaking, and Charter-grounded rebuttal strategy. Every round
              trains clarity, discipline, and diplomatic confidence.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white/75 p-5 backdrop-blur-sm shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Policy Framing</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Build arguments around Charter articles, precedent, and realistic state interests.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white/75 p-5 backdrop-blur-sm shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Rebuttal Discipline</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Practice concise responses, procedural motions, and coalition positioning.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white/75 p-5 backdrop-blur-sm shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Speaker Growth</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Structured feedback cycles to improve delivery, logic flow, and composure.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="events" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Debate program calendar</h2>

            {debateEvents.length === 0 ? (
              <p className="mt-6 text-sm text-slate-600">No upcoming Debate events yet.</p>
            ) : (
              <div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-3 md:items-stretch">
                {debateEvents.map((event) => (
                  <EventFlipCard
                    key={event.id}
                    title={event.title}
                    date={new Date(event.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    summary={event.description}
                    detail={event.description}
                    badge={"Registration open"}
                    poster={event.image || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="milestones" className="border-t border-slate-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-md border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Performance snapshot
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-white p-8 shadow-lg sm:p-12">
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Join the debate team</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Apply for the next chamber</h2>
                <p className="mt-4 text-slate-700">
                  Submit your interest, preferred committee topics, and speaking background.
                  Selected applicants are invited to a placement round.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:debate@unaethu.org?subject=Debate%20Team%20Application"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
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

