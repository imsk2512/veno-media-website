"use client";

import { useState } from "react";
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

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-500">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Everything You Need to Know
          </h2>
        </div>

        <div className="mt-20 space-y-6">

          {faqs.map((item, index) => {

            const isOpen = open === index;

            return (

              <div
                key={index}
                onMouseEnter={() => setOpen(index)}
                onMouseLeave={() => setOpen(null)}
                className="cursor-pointer rounded-[32px] border border-slate-200 bg-white px-10 py-8 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <Plus
                    className={`h-8 w-8 text-cyan-500 transition-all duration-500 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />

                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-8"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-slate-200 pt-8">

                      <p className="text-lg leading-8 text-slate-500">
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