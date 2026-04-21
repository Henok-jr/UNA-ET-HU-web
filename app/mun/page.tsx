"use client";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Award, BookOpen, PlayCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

// --- Components ---

const munHeadImage =
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80";

function MUNHero() {
  return (
    <header className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRcNbo_xf8xjs17oSvEe-uHey6xqpKdBTCGc3qrsBJUpW7rOnTRA6kPtE0W00c7PdVJipO1ABO3AydMUSCjqUOjAcjSuKvQIi7c9qL2eKQYfwiD1WPA2BWCI7Aci-Yf4cCF3y60lOnpWol4P3R1eaiOHOySQ4srX0BvjaGiYZdjwOOkKKx4pma0dkzMy7bb81cnZb8t4U615I8aRN3KRKn4luK6dTzEeQOvNBCmZnldQc4VTJDrZ1iUkG42ll8UAVY5RyHU1HEf-Yx')`,
          }}
        />
      </div>
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Excellence in Diplomacy
          </span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:max-w-4xl">
          Model United <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
            Nations
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-200 sm:text-xl">
          Empowering the next generation of global leaders through rigorous debate,
          collaborative problem-solving, and international cooperation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="font-bold shadow-xl shadow-primary/20">
            Register for Next MUN
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold backdrop-blur-sm"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            View Schedule
          </Button>
        </div>
      </div>
    </header>
  );
}

const stats = [
  { value: "300+", label: "Delegates" },
  { value: "12", label: "Councils" },
  { value: "24", label: "Resolutions" },
]

function PastSuccess() {
  return (
    <section id="milestones" className="border-t border-white/10 bg-[#121b26] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <p className="inline-flex w-fit items-center rounded-md border border-yellow-300/35 bg-yellow-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">
            Historical Milestone
          </p>

          <h2 className="mt-6 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            2022 Diplomatic Conference
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            Reflecting on the monumental success of the 2022 summit held in
            Budapest, where over 300 delegates from 45 universities
            collaborated on revolutionary resolutions for maritime security.
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

          <div className="mt-10">
            <Button
              asChild
              size="sm"
              className="w-fit bg-amber-500 px-4 sm:px-8 py-2 sm:py-4 font-bold text-xs sm:text-base text-slate-900 hover:bg-amber-500/90"
            >
              <Link href="#">
                Read the 2022 Report
                <BookOpen className="ml-2 size-3 sm:size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function MUNAboutTeam() {
  return (
    <section id="team" className="bg-[#0a1118] pb-16 pt-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              About the team
            </p>
            <p className="mt-4 text-lg font-semibold text-white">Head of MUN Team</p>
            <p className="mt-1 text-base text-slate-400">Dr. Jane Doe</p>

            {/* Contact info moved under the photo (figcaption) */}

            <div className="mt-8 space-y-4 text-justify text-[15px] leading-relaxed text-slate-300 sm:text-base">
              <p>
                The Model United Nations (MUN) Team empowers students to explore global
                issues through diplomacy, negotiation, and structured debate. We train
                delegates in research, rules of procedure, and coalition-building to
                represent countries with confidence and professionalism.
              </p>
              <p>
                Through simulations, workshops, and conferences, members develop
                leadership, public speaking, and policy-writing skills while fostering a
                culture of respect, collaboration, and international understanding.
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
                    src={munHeadImage}
                    alt="Head of the MUN Team"
                    width={720}
                    height={900}
                    className="h-full w-full object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <figcaption className="border-t border-white/10 bg-[#121b26] px-5 py-4">
                  <p className="text-sm font-semibold text-white">Dr. Jane Doe</p>
                  <p className="text-xs text-slate-400">Head of MUN Team</p>
                  <div className="mt-3 space-y-1 text-xs text-slate-300">
                    <p>
                      <span className="font-semibold text-white">Email:</span>{" "}
                      <a className="text-primary hover:underline" href="mailto:mun@unaethu.org">
                        mun@unaethu.org
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
  );
}

// --- Main Page Component ---

export default function MUNPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <MUNHero />

        {/* About the Team */}
        <MUNAboutTeam />

        <div className="max-w-7xl mx-auto px-6 pt-16">
          {/* Upcoming Conferences */}
          <section className="mb-20">
            <div className="flex items-end justify-between mb-8 px-2">
              <div>
                <h2 className="text-3xl font-bold mb-2">Upcoming Conferences</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  Join our upcoming sessions and represent a nation.
                </p>
              </div>
              <a
                href="#"
                className="text-primary font-bold text-sm flex items-center gap-1 group"
              >
                View full calendar
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Conference Card 1 */}
              <div className="group bg-white dark:bg-[#16191d] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=600&fit=crop")',
                  }}
                >
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#16191d]/90 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
                    Registration Open
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    Oct 12-15, 2024
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Addis Ababa MUN 2024
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Theme: &quot;Resilient Infrastructure for a Sustainable Future in the Horn
                    of Africa.&quot;
                  </p>
                  <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
                    Details & Registration
                  </button>
                </div>
              </div>

              {/* Conference Card 2 */}
              <div className="group bg-white dark:bg-[#16191d] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop")',
                  }}
                >
                  <div className="absolute top-4 right-4 bg-gray-100/90 dark:bg-gray-800/90 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    Dec 05, 2024
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Global Leadership Summit
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    A focus on youth representation in peace-building and diplomatic
                    mediation.
                  </p>
                  <button className="w-full py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-400 font-bold text-sm cursor-not-allowed">
                    Notify Me
                  </button>
                </div>
              </div>

              {/* Conference Card 3 */}
              <div className="group bg-white dark:bg-[#16191d] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop")',
                  }}
                >
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#16191d]/90 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
                    Registration Open
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    Jan 20, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Youth Assembly
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Simulating the UN General Assembly to address urgent climate policy.
                  </p>
                  <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
                    Details & Registration
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Past Success Section (Moved Below) */}
        <PastSuccess />

        <div className="max-w-7xl mx-auto px-6">
          {/* Final CTA */}
          <section className="text-center py-20 px-6">
            <h2 className="text-4xl font-bold mb-4">Ready to take your seat?</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
              Join our network of diplomats and start building the skills that will shape
              your professional career and the world&apos;s future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3">
                Register for Next MUN
                <span className="material-symbols-outlined">person_add</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Contact Organizer
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}