import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

// Data for Presidency (2 members)
const presidency = [
  {
    name: "Aminu Moges",
    role: "President",
    image: "/images/pr.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Kalkidan Kebede",
    role: "Vice President",
    image: "/images/vp.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

// Data for Team Heads (5 members) - Uses Black&White to Color hover effect
const teamHeads = [
  {
    name: "Rose Kassa",
    role: "MUN Team Head",
    image: "/images/mnu.png",
    phone: "",
    email: "",
  },
  {
    name: "Yonatan Berihun",
    role: "Innovation Team Head",
    image: "/images/Inov.jpg",
    phone: "",
    email: "",
  },
  {
    name: "Kibrab Abera",
    role: "Project Team Head",
    image: "/images/proj.png",
    phone: "",
    email: "",
  },
  {
    name: "Abinet Girma",
    role: "SDG Ambassadors Head",
    image: "/images/sdg.png",
    phone: "",
    email: "",
  },
  {
    name: "Timihirt Shibiru", // Placeholder
    role: "Debate Team Head",
    image: "/images/deb.jpg",
    phone: "",
    email: "",
  },
];

// Data for Executives (6 members)
const executives = [
  {
    name: "Rebecca Tesfa",
    role: "Secretary",
    image: "/images/sec.png",
  },
  {
    name: "Lami Negash", // Placeholder
    role: "Internal Affairs ",
    image: "/images/inter.jpg",
  },
  {
    name: "Gelila Getinet", // Placeholder
    role: "Communication Head",
    image: "/images/gel.jpg",
  },
  {
    name: "Sebona Abdella", // Placeholder
    role: "Finance Tream Head",
    image: "/images/fina.png",
  },
  {
    name: "Eden Lulu", // Placeholder
    role: "Membership Coordinator",
    image: "/images/memb.jpg",
  },
  {
    name: "Betelhem Ayehualem", // Placeholder
    role: "Event Team Head",
    image: "/images/event.jpg",
  },
  {
    name: "Feneti Nuru", // Placeholder
    role: "Social Media Manager",
    image: "/images/media.png",
  },
];

export default function TeamsPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-[#101618] dark:text-white">
            Our Leadership & Teams
          </h1>
          <p className="text-[#5e808d] dark:text-gray-400 text-lg leading-relaxed">
            Meet the changemakers at Hawassa University. Our structure reflects our
            commitment to diplomacy, the Sustainable Development Goals, and tangible
            local impact.
          </p>
        </div>

        {/* 1. Presidency Section (2 Columns) */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
            <h2 className="text-2xl font-black text-center uppercase tracking-wider text-primary">The Presidency</h2>
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {presidency.map((member) => (
              <div key={member.name} className="group relative">
                <div
                  className="mb-4 aspect-square w-full rounded-2xl bg-cover bg-center shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1"
                  style={{ backgroundImage: `url("${member.image}")` }}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#101618] dark:text-white leading-tight mb-2">
                    {member.name}
                  </h3>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Team Heads Section (5 Columns) - Black & White Hover Effect */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
            <h2 className="text-xl font-black text-center uppercase tracking-wider text-[#101618] dark:text-white">Heads of Teams</h2>
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {teamHeads.map((member) => (
              <div key={member.name} className="group relative">
                <div
                  className="mb-4 aspect-square w-full rounded-xl bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0 shadow-sm hover:shadow-md"
                  style={{ backgroundImage: `url("${member.image}")` }}
                />
                <div className="text-center">
                  <p className="text-base font-bold text-[#101618] dark:text-white leading-tight mb-1">{member.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5e808d] dark:text-gray-500">
                    {member.role}
                  </p>

                  <div className="mt-2 space-y-1 text-[11px] text-[#5e808d] dark:text-gray-400">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="block font-semibold hover:text-primary hover:underline break-words"
                      >
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="block font-semibold hover:text-primary hover:underline break-words"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Executives Section (6 Columns) */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
            <h2 className="text-xl font-black text-center uppercase tracking-wider text-[#101618] dark:text-white">Executive Board</h2>
            <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
            {executives.map((member) => (
              <div key={member.name} className="group">
                <div
                  className="mb-3 aspect-square rounded-xl bg-cover bg-center shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1"
                  style={{ backgroundImage: `url("${member.image}")` }}
                />
                <div className="text-center">
                  <p className="text-sm font-bold text-[#101618] dark:text-white leading-tight mb-1">{member.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Ready to lead change?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg relative z-10">
            Join UNA-ET-HU and become part of a global movement. We&apos;re looking for
            passionate students to join our four main pillars and drive impact in our
            community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/auth/signup"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 transition-all text-sm md:text-base uppercase tracking-wide"
            >
              Apply to Join a Team
            </Link>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-sm md:text-base uppercase tracking-wide">
              View Governance Structure
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}