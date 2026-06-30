import {
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Results-Driven Approach",
    description:
      "Every campaign is built around measurable growth, real performance, and long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "We combine bold ideas with strategic execution to build brands people remember.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-backed decisions, continuous optimization, and campaigns focused on ROI.",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description:
      "We work as an extension of your team, treating your brand's growth as our own.",
  },
];

export function WhyVeno() {
  return (
    <section id="why-veno" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              <Sparkles className="h-4 w-4" />
              Why Veno Media
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              More Than An Agency.
              <span className="text-cyan-500"> Your Growth Partner.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              We don't just create campaigns—we build long-term growth strategies
              that help ambitious brands stand out, attract customers, and scale
              with confidence.
            </p>

          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={index} delay={index * 80}>
                <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white group-hover:scale-110 transition">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {item.description}
                  </p>

                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#0F172A] to-[#123D9A] p-10 text-white">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>
                <h3 className="text-4xl font-bold">
                  Ready To Scale Your Brand?
                </h3>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Let's build powerful campaigns that drive visibility,
                  engagement, and measurable business growth.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Let's Talk
                <ArrowRight size={18} />
              </a>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}