import {
  Megaphone,
  Camera,
  Clapperboard,
  Palette,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Connect your brand with trusted creators to increase reach, engagement, and sales.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "We create, manage, and grow your social presence with consistent premium content.",
  },
  {
    icon: Clapperboard,
    title: "Video Production",
    description:
      "High-converting reels, commercials, and brand films crafted for every platform.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Build a memorable brand through modern design, strategy, and visual storytelling.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "ROI-focused paid advertising campaigns designed to generate leads and revenue.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Premium product photography, creative shoots, and social-first visual content.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-5xl">
            Everything Your Brand Needs
            <span className="text-cyan-500"> To Grow.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg">
            From branding and influencer marketing to content production and
            performance campaigns—we help ambitious brands scale faster.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-20 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8 lg:hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900 sm:mt-8 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 sm:mt-4 sm:text-base">
                  {service.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-all group-hover:gap-3 sm:mt-8 sm:text-base">
                  Learn More
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}