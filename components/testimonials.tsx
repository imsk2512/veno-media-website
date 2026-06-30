import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const reasons = [
  {
    title: "Strategy First",
    description:
      "Every project begins with a tailored growth strategy built around your business goals and target audience.",
  },
  {
    title: "Premium Creative Execution",
    description:
      "From branding and content to video production, every asset is crafted to look premium and perform better.",
  },
  {
    title: "Influencer Expertise",
    description:
      "We connect brands with the right creators to build authentic campaigns that drive trust and engagement.",
  },
  {
    title: "Performance Marketing",
    description:
      "Every campaign is optimized using data, analytics, and continuous improvements to maximize ROI.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates, timely delivery, and complete transparency throughout every stage of your project.",
  },
  {
    title: "Growth Partnership",
    description:
      "We don't work like a vendor—we become an extension of your team, focused on long-term business growth.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-5xl">
              Why Brands Choose
              <span className="text-cyan-500"> Veno Media</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              We combine creativity, strategy, influencer marketing, and
              performance-driven execution to help ambitious brands grow faster.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reasons.map((item, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8 lg:hover:-translate-y-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 sm:mt-6 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 sm:mt-4 sm:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}