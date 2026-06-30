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
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything Your Brand Needs
            <span className="text-cyan-500"> To Grow.</span>
          </h2>

          <p className="mt-6 text-lg text-slate-500">
            From branding and influencer marketing to content production and
            performance campaigns—we help ambitious brands scale faster.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white transition-transform duration-500 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-3">
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