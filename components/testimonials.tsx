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
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Why Brands Choose
              <span className="text-cyan-500"> Veno Media</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              We combine creativity, strategy, influencer marketing, and
              performance-driven execution to help ambitious brands grow faster.
            </p>

          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((item, index) => (
            <Reveal key={index} delay={index * 80}>

              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#123D9A] to-cyan-400 text-white">

                  <CheckCircle2 className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
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