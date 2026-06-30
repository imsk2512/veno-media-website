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
    <section id="faq" className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-500 sm:text-sm sm:tracking-[0.45em]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:mt-6 sm:text-5xl">
            Everything You Need to Know
          </h2>
        </div>

        <div className="mt-10 space-y-4 sm:mt-20 sm:space-y-6">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-lg sm:rounded-[32px] sm:px-8 sm:py-7"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-xl">
                    {item.question}
                  </h3>

                  <Plus
                    className={`h-6 w-6 shrink-0 text-cyan-500 transition-transform duration-300 sm:h-7 sm:w-7 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "mt-4 grid-rows-[1fr] opacity-100 sm:mt-6"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 pt-4 sm:pt-6">
                      <p className="text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
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