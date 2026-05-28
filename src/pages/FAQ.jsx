import {
  HelpCircle,
  ShieldCheck,
  Clock,
  Wrench,
  Phone,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function FAQ() {
  const faqs = [
    [
      "Do you come to me?",
      "Yes. Carolina Brake provides professional mobile brake service directly at your home, workplace, or safe vehicle location.",
    ],
    [
      "Can I provide my own parts?",
      "Yes, but parts should be confirmed before the appointment to ensure compatibility and safety.",
    ],
    [
      "How long does brake service take?",
      "Most brake services can be completed within one appointment depending on the vehicle and repair needed.",
    ],
    [
      "Do you service fleets?",
      "Yes. Fleet and small business vehicle brake service can be requested based on availability.",
    ],
    [
      "What should I do if my brakes are grinding?",
      "If the vehicle feels unsafe, avoid driving it and request service as soon as possible.",
    ],
    [
      "Do you inspect brakes before repair?",
      "Yes. Brake systems are reviewed before work begins to help identify the issue clearly.",
    ],
  ];

  const highlights = [
    [ShieldCheck, "Safety Focused"],
    [Clock, "Fast Scheduling"],
    [Wrench, "Professional Service"],
  ];

  return (
    <main>
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              title="Answers before you schedule service."
              text="Carolina Brake keeps the process clear so customers know what to expect before booking an appointment."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Request Service
              </a>

              <a
                href="tel:16174153493"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-slate-950 shadow-sm transition hover:border-[#B91C1C] hover:text-[#B91C1C]"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(([Icon, text]) => (
                <div
                  key={text}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                    <Icon />
                  </div>

                  <p className="font-black text-slate-800">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div
              className="flex min-h-[520px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Customer Support
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Clear answers. Professional service. No confusion.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Carolina Brake focuses on making the service experience feel
                  transparent, professional, and easy to understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5">
            {faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                    <HelpCircle />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-slate-950">
                      {q}
                    </h2>

                    <p className="mt-3 leading-8 text-slate-600">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div
                className="min-h-[320px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop')",
                }}
              />

              <div className="p-8 md:p-12">
                <p className="font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Still Have Questions?
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                  Reach out directly to Carolina Brake.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Customers can contact Carolina Brake directly to confirm
                  service availability, brake issues, appointment scheduling,
                  and coverage areas.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    "Fast response times",
                    "Professional communication",
                    "Convenient mobile scheduling",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-white"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#B91C1C]">
                        <CheckCircle size={22} />
                      </div>

                      <p className="font-bold">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact"
                    className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-950/30 transition hover:bg-red-700"
                  >
                    Contact Us
                  </a>

                  <a
                    href="tel:16174153493"
                    className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-slate-950"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone size={18} />
                      Call Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}