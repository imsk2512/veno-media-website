import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/social-icons";;
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
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[36px] bg-gradient-to-br from-[#143C8F] to-[#0B2A68] p-8 shadow-2xl lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-300">
                Get In Touch
              </p>

              <h2 className="mt-8 max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Let's Build Your Next Growth Story.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Tell us about your business, goals, or campaign. We'll
                create a custom strategy designed to help your brand grow faster.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 rounded-3xl border border-white/15 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </span>

                      <span>
                        <span className="block text-sm text-blue-200">
                          {item.label}
                        </span>
                        <span className="block font-semibold text-white">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="mt-8 flex items-center gap-3 text-sm text-blue-100">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Typically replies within 24 hours.
              </p>
            </div>

            <form className="rounded-[32px] bg-white p-8 shadow-xl lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company / Brand Name"
                    className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-slate-900">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your brand, goals, services, timeline and budget..."
                  rows={5}
                  className="mt-3 w-full resize-none rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#143C8F] to-cyan-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Schedule a Discovery Call
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}