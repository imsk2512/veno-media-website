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
    <section id="why-veno" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Why Veno Media
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-5xl">
              More Than An Agency.
              <span className="text-cyan-500"> Your Growth Partner.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              We don&apos;t just create campaigns—we build long-term growth
              strategies that help ambitious brands stand out, attract
              customers, and scale with confidence.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-20 md:grid-cols-2 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={index} delay={index * 80}>
                <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8 lg:hover:-translate-y-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900 sm:mt-7 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 sm:mt-4 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#123D9A] p-6 text-white sm:mt-20 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-2xl font-bold leading-tight sm:text-4xl">
                  Ready To Scale Your Brand?
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Let&apos;s build powerful campaigns that drive visibility,
                  engagement, and measurable business growth.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:scale-105 sm:w-auto sm:px-7 sm:py-4"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}