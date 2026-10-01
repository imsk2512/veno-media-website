import {
  Megaphone,
  Camera,
  Clapperboard,
  TrendingUp,
  Users,
  ArrowUpRight,
  Search,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Complete social media management including content planning, posts, reels, captions, hashtags, and audience engagement.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram ad campaigns designed to generate quality leads, reach, and business growth.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Performance-focused Google Ads campaigns that help your business reach high-intent customers and generate quality leads.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "SEO strategies designed to improve search rankings, increase organic traffic, and build long-term online visibility.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Creative posts, reels, graphics, and visual content designed to build a professional and engaging online presence.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to showcase your business and turn visitors into customers.",
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
            Digital Marketing That Helps
            <span className="text-cyan-500"> Your Business Grow.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg">
            From social media management and paid advertising to SEO and
            content creation, we help businesses build visibility, generate
            leads, and grow online.
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