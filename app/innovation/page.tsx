import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventFlipCard from "../components/innovation/EventFlipCard";
import { prisma } from "@/lib/prisma";

const teamHeadImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80";

const stats = [
  { value: "300+", label: "DELEGATES" },
  { value: "12", label: "COUNCILS" },
  { value: "24", label: "RESOLUTIONS" },
];

export default async function InnovationPage() {
  const allUpcomingEvents = await prisma.conference.findMany({
    where: { status: "UPCOMING" },
    orderBy: { date: "asc" },
    take: 50,
  });

  const upcomingEvents = allUpcomingEvents.filter((event) => (event as any).team === "INNOVATION") as unknown as Array<{
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
        <section id="team" className="bg-white pb-16 pt-28 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  About the team
                </p>
                <p className="mt-4 text-lg font-semibold text-slate-900">
                  Head of Innovation Team
                </p>
                <p className="mt-1 text-base text-slate-600">Dr. Jane Doe</p>
                <div className="mt-8 space-y-4 text-justify text-[15px] leading-relaxed text-slate-700 sm:text-base">
                  <p>
                    The Innovation Team advances the mission of our Model United Nations
                    community by designing reliable digital tools, improving how delegates
                    access schedules and resources, and ensuring every visitor can navigate
                    Charter-related content with clarity and confidence.
                  </p>
                  <p>
                    We work closely with faculty, student leadership, and technical
                    partners to prototype responsibly, measure outcomes, and ship
                    improvements that respect accessibility, multilingual needs, and the
                    formal tone expected of UN-style institutions.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:sticky md:top-24 md:justify-end">
                <figure className="relative w-full max-w-md">
                  <div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/25 to-transparent opacity-60 blur-xl"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <div className="aspect-[4/5] w-full">
                      <Image
                        src={teamHeadImage}
                        alt="Head of the Innovation Team"
                        width={720}
                        height={900}
                        className="h-full w-full object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </div>
                    <figcaption className="border-t border-slate-200 bg-white px-5 py-4">
                      <p className="text-sm font-semibold text-slate-900">Dr. Jane Doe</p>
                      <p className="text-xs text-slate-600">Head of Innovation Team</p>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Upcoming events
            </h2>
            {upcomingEvents.length === 0 ? (
              <p className="mt-6 text-sm text-slate-600">
                No upcoming Innovation events yet.
              </p>
            ) : (
              <div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-3 md:items-stretch">
                {upcomingEvents.map(
                  (
                    event: {
                      id: string;
                      title: string;
                      description: string;
                      date: Date;
                      image: string | null;
                    }
                  ) => (
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
                      poster={event.image || teamHeadImage}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </section>

        <section id="milestones" className="border-t border-slate-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="inline-flex items-center rounded-md border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Historical Milestone
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-white p-8 shadow-lg sm:p-12">
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Registration
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Secure your seat
                </h2>
                <p className="mt-4 text-slate-700">
                  Use the register button on an event card to land here, then complete your
                  application through your official form or inbox.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:register@example.org?subject=Event%20registration"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                  >
                    Email to register
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

