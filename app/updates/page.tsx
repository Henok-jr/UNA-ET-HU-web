import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function UpdatesPage() {
  const [reports, events] = await Promise.all([
    prisma.annualReport.findMany({
      orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
    }),
    prisma.conference.findMany({
      where: { status: 'UPCOMING' },
      orderBy: { date: 'asc' },
    }),
  ]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Annual Reports & Upcoming Events
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
              Explore our published annual reports and stay updated on upcoming chapter events.
            </p>
          </div>
        </section>

        <section id="reports" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Annual Reports</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Download and read our yearly progress and impact.
                </p>
              </div>
            </div>

            {reports.length === 0 ? (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-8 text-center text-slate-600 dark:text-slate-400">
                No reports yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                  <article
                    key={report.id}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">
                          {report.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {report.year ? `Year: ${report.year}` : `Published: ${new Date(report.publishedAt).toLocaleDateString()}`}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">description</span>
                    </div>

                    {report.description && (
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {report.description}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-between">
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        View / Download
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </a>
                      <Link
                        href="#events"
                        className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                      >
                        Upcoming events →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Upcoming Events</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Join our next activities and workshops.
                </p>
              </div>
            </div>

            {events.length === 0 ? (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-8 text-center text-slate-600 dark:text-slate-400">
                No upcoming events yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <article
                    key={event.id}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 overflow-hidden shadow-sm"
                  >
                    {event.image ? (
                      <div className="h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                      </div>
                    ) : null}

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {new Date(event.date).toLocaleString()}
                            {event.location ? ` • ${event.location}` : ''}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">event</span>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-4">
                        {event.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
