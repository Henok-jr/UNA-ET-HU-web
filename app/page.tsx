import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let announcements: Array<{ id: string; title: string; content: string | null; image: string | null }> = [];

  try {
    announcements = await prisma.heroPost.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        content: true,
        image: true,
      },
    });
  } catch (error) {
    // Keep the home page available even when DB is temporarily unreachable.
    console.error('Failed to load announcements:', error);
  }

  return (
    <>
      <Navigation />
      <main>
        {announcements.length > 0 && (
          <section className="relative z-[4500] bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Announcement
              </span>
              <Link
                href={`/announcements/${announcements[0].id}`}
                className="text-slate-900 font-semibold text-sm md:text-base hover:underline line-clamp-1"
              >
                {announcements[0].title}
              </Link>
            </div>
          </section>
        )}

        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            {/* Light overlay to keep footer-like feel while still showing image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 z-10" />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1920&h=1080&fit=crop")',
              }}
            />
          </div>

          {/* Top Right Announcement (Absolute - Desktop Only) */}
          {announcements.length > 0 && (
            <div className="hidden md:flex absolute top-4 right-4 z-[4500] flex-col gap-2 w-full max-w-[220px]">
              {announcements.map((post: any) => (
                <Link href={`/announcements/${post.id}`} key={post.id} className="block group">
                  <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg p-2 shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex items-start gap-2">
                      {post.image && (
                        <div className="w-8 h-8 rounded bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                          <img
                            src={post.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[8px] uppercase font-bold text-primary tracking-wider">New</span>
                          </span>
                          <span className="material-symbols-outlined text-slate-400 text-[12px] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                        <h4 className="text-slate-900 font-bold text-xs leading-tight mb-0.5 line-clamp-1 group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        {post.content && (
                          <p className="text-slate-600 text-[10px] line-clamp-2 leading-relaxed">{post.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="relative z-20 ml-0 md:ml-12 max-w-7xl mr-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-start gap-12">
            <div className="max-w-2xl flex-1 order-1 md:order-2 mt-4 md:mt-0 mr-auto text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full mb-6">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  United Nations Association - Hawassa University
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Empowering the <span className="text-primary">Next Generation</span> of Global Leaders
              </h1>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                Join a community dedicated to diplomacy, sustainable development, and socio
                impact at Hawassa University. We translate global goals into local actions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/teams"
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 flex items-center gap-2 transition-colors"
                >
                  Explore Our Projects
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  href="/blog"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all"
                >
                  Read the Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Announcements (Below Hero) */}
        {announcements.length > 0 && (
          <div className="md:hidden w-full bg-white border-b border-slate-200 overflow-x-auto scrollbar-hide">
            <div className="flex items-start gap-3 p-4 w-max">
              {announcements.map((post: any) => (
                <Link href={`/announcements/${post.id}`} key={post.id} className="block group shrink-0 w-[220px]">
                  <div className="bg-white border border-slate-200 rounded-lg p-2.5 active:bg-slate-50 transition-colors shadow-sm">
                    <div className="flex items-start gap-2.5">
                      {post.image && (
                        <div className="w-8 h-8 rounded bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                          <img src={post.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[9px] uppercase font-bold text-primary tracking-wider">New</span>
                          </span>
                        </div>
                        <h4 className="text-slate-900 font-bold text-xs leading-tight mb-0.5 line-clamp-2">{post.title}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mission / Core Areas */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Our Mission</h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Developing Leadership Through Impact</h3>
              </div>
              <p className="text-slate-600 max-w-md">
                Our specialized teams work across multiple disciplines to foster a
                comprehensive understanding of international relations and sustainable
                development.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">language</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Model UN</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Simulating international relations and developing professional diplomatic
                  skills through global negotiation frameworks.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">diversity_3</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">SDG Ambassadors</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Localizing the 2030 Agenda by creating awareness and implementing
                  actionable solutions for sustainability on campus.
                </p>
              </div>
              {/* Card 3 */}
              <div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Social Impact</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Community-led change initiatives focused on humanitarian assistance and
                  local development within the Sidama region.
                </p>
              </div>
              {/* Card 4 */}
              <div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Innovation Team</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Crafting creative technological and social solutions for complex global
                  and regional challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section: Voices of Change */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Voices of Change
              </h2>
              <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Card 1 */}
              <article className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Diplomacy
                    </span>
                  </div>
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat bg-slate-100 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop")',
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                    Mandela&apos;s Legacy
                  </h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Analyzing how diplomacy and reconciliation shaped the modern era and
                    what it means for youth today.
                  </p>
                  <Link
                    href="/blog/mandelas-legacy"
                    className="inline-flex items-center text-primary font-bold text-sm gap-2"
                  >
                    Read More
                    <span className="material-symbols-outlined text-lg">trending_flat</span>
                  </Link>
                </div>
              </article>
              {/* Blog Card 2 */}
              <article className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Environment
                    </span>
                  </div>
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat bg-slate-100 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop")',
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                    Green Hiking Initiative
                  </h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Environmental stewardship and reforestation efforts in the heart of the
                    Ethiopian highlands.
                  </p>
                  <Link
                    href="/blog/green-hiking-initiative"
                    className="inline-flex items-center text-primary font-bold text-sm gap-2"
                  >
                    Read More
                    <span className="material-symbols-outlined text-lg">trending_flat</span>
                  </Link>
                </div>
              </article>
              {/* Blog Card 3 */}
              <article className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-yellow-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      SDGs
                    </span>
                  </div>
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat bg-slate-100 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop")',
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                    African Youth SDGs Summit
                  </h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Highlights and regional impact stories from our delegation at the
                    continental summit.
                  </p>
                  <Link
                    href="/blog/african-youth-sdgs-summit"
                    className="inline-flex items-center text-primary font-bold text-sm gap-2"
                  >
                    Read More
                    <span className="material-symbols-outlined text-lg">trending_flat</span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to make a difference?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Be part of the premier student organization for diplomacy and global affairs
              in Hawassa. Your journey to international leadership starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-slate-50 transition-colors shadow-xl"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto bg-primary/20 text-white font-bold py-4 px-10 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}