"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on the project scope. One-off branding or creative projects usually take a few weeks, while ongoing marketing partnerships begin delivering measurable results within the first month.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We collaborate with brands worldwide through online meetings, structured workflows, and seamless communication.",
  },
  {
    question: "Do you offer monthly marketing packages?",
    answer:
      "Absolutely. We offer flexible monthly plans for social media management, influencer marketing, branding, video production, and performance marketing.",
  },
  {
    question: "Do you provide influencer marketing?",
    answer:
      "Yes. From creator selection and campaign planning to execution and reporting, we manage complete influencer marketing campaigns.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a discovery call or contact us through our website. We'll understand your goals and recommend the best strategy for your brand.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-500">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need to Know
          </h2>
        </div>

        <div className="mt-20 space-y-6">

          {faqs.map((item, index) => {

            const isOpen = open === index;

            return (

              <div
                key={index}
                onMouseEnter={() => !isMobile && setOpen(index)}
                onMouseLeave={() => !isMobile && setOpen(null)}
                onClick={() =>
                  isMobile && setOpen(open === index ? null : index)
                }
                className="cursor-pointer rounded-[32px] border border-slate-200 bg-white px-8 py-7 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl"
              >

                <div className="flex items-center justify-between gap-6">

                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <Plus
                    className={`h-7 w-7 shrink-0 text-cyan-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />

                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-base leading-8 text-slate-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}