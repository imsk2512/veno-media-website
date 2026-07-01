"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/917589011809",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@venomedia.in",
    href: "https://www.instagram.com/venomedia.in",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Veno Media",
    href: "https://www.linkedin.com/company/veno-media/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@venomedia.in",
    href: "mailto:hello@venomedia.in",
  },
];

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqevlovv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#143C8F] to-[#0B2A68] p-5 shadow-2xl sm:p-8 lg:rounded-[36px] lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
                Get In Touch
              </p>

              <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-8 lg:text-5xl">
                Let&apos;s Build Your Next Growth Story.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
                Tell us about your business, goals, or campaign. We&apos;ll
                create a custom strategy designed to help your brand grow faster.
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-300 hover:bg-white/10 sm:rounded-3xl sm:p-5 lg:hover:-translate-y-1"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300 sm:h-12 sm:w-12 sm:rounded-2xl">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>

                      <span>
                        <span className="block text-xs text-blue-200 sm:text-sm">
                          {item.label}
                        </span>
                        <span className="block text-sm font-semibold text-white sm:text-base">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 flex items-center gap-3 text-xs text-blue-100 sm:mt-8 sm:text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Typically replies within 24 hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:rounded-[32px] lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
  <div>
    <label className="text-sm font-semibold text-slate-900">
      Name
    </label>
    <input
      name="name"
      type="text"
      required
      placeholder="Your full name"
      className="mt-2.5 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white sm:mt-3 sm:px-5 sm:py-4 sm:text-base"
    />
  </div>

  <div>
    <label className="text-sm font-semibold text-slate-900">
      Email
    </label>
    <input
      name="email"
      type="email"
      required
      placeholder="you@example.com"
      className="mt-2.5 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white sm:mt-3 sm:px-5 sm:py-4 sm:text-base"
    />
  </div>

  <div>
    <label className="text-sm font-semibold text-slate-900">
      Phone
    </label>
    <input
      name="phone"
      type="tel"
      required
      placeholder="+91 XXXXX XXXXX"
      className="mt-2.5 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white sm:mt-3 sm:px-5 sm:py-4 sm:text-base"
    />
  </div>

  <div>
    <label className="text-sm font-semibold text-slate-900">
      Company
    </label>
    <input
      name="company"
      type="text"
      placeholder="Company / Brand Name"
      className="mt-2.5 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white sm:mt-3 sm:px-5 sm:py-4 sm:text-base"
    />
  </div>
</div>

<div className="mt-5 sm:mt-6">
  <label className="text-sm font-semibold text-slate-900">
    Project Details
  </label>
  <textarea
    name="message"
    required
    placeholder="Tell us about your brand, goals, services, timeline and budget..."
    rows={5}
    className="mt-2.5 w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white sm:mt-3 sm:rounded-[28px] sm:px-5 sm:py-4 sm:text-base"
  />
</div>

<button
  type="submit"
  disabled={loading}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#143C8F] to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl disabled:opacity-60 sm:mt-8 sm:px-7 sm:py-4 sm:text-base lg:hover:scale-[1.02]"
>
  {loading ? "Submitting..." : "Schedule a Discovery Call"}
  {!loading && <ArrowUpRight className="h-5 w-5" />}
</button>

{success && (
  <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium text-green-700">
    ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
  </div>
)}

</form>

          </div>
        </div>
      </div>
    </section>
  );
}