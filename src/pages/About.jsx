import {
  Award,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Wrench,
  MapPin,
  CheckCircle,
  Star,
  UserCheck,
  Phone,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function About() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";

  const values = [
    [ShieldCheck, "Safety First", "Brake service is handled with care because stopping power is not optional."],
    [Clock, "Time Saving", "Mobile appointments help customers avoid losing their day at a shop."],
    [Award, "Premium Feel", "Clean presentation, clear process, and professional customer experience."],
    [HeartHandshake, "Customer Focused", "Built around communication, convenience, and trust."],
  ];

  const standards = [
    [Wrench, "Professional brake service"],
    [MapPin, "Mobile appointment convenience"],
    [ShieldCheck, "Safety-focused inspections"],
  ];

  return (
    <main className="bg-[#F8FAFC] pb-24 text-[#0F172A] md:pb-0">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="hidden font-black text-[#0F172A] sm:block">
            Carolina Brake & Diagnostics
          </p>

          <a
            href={phoneHref}
            className="w-full rounded-full bg-[#D7262E] px-6 py-3 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C] sm:w-auto"
          >
            Call Now: {phone}
          </a>
        </div>
      </div>

      <section className="bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2F7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeader
                eyebrow="About Carolina Brake"
                title="A modern mobile brake company built around trust."
                text="Carolina Brake & Diagnostics gives drivers a better way to handle brake repair: professional service, clear communication, and mobile convenience without the wasted time of a traditional shop visit."
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={phoneHref}
                  className="rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
                >
                  <Phone className="mr-2 inline h-5 w-5" />
                  Call Now: {phone}
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-[#0F172A] shadow-sm transition hover:border-[#C99700] hover:text-[#C99700]"
                >
                  Request Service
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Mobile Service", "Safety Focused", "Upfront Pricing"].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-bold text-slate-700">
                    <CheckCircle className="h-5 w-5 text-[#C99700]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/70">
              <div
                className="flex min-h-[420px] items-end bg-cover bg-center p-8 md:min-h-[520px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.12)), url('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1400&auto=format&fit=crop')",
                }}
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                    Founder-Led Service
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white">
                    Professional brake service with a personal standard.
                  </h2>

                  <p className="mt-3 max-w-sm text-slate-200">
                    Carolina Brake focuses on making brake repair feel simple,
                    safe, and dependable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#C99700]/40 hover:shadow-xl"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-[#0F172A]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-2xl shadow-slate-300/70 md:p-10">
            <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
              Our Difference
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              We are not trying to feel like a regular repair shop.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Carolina Brake is built to feel more direct, more convenient, and
              more customer-focused. The experience is designed around the
              customer’s time, location, and safety.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Clear service expectations",
                "Convenient mobile appointments",
                "Professional customer experience",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#D7262E]">
                    <CheckCircle size={22} />
                  </div>

                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={phoneHref}
              className="mt-8 inline-block rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A]"
            >
              Call Now: {phone}
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Convenience", "Mobile brake service designed around your schedule, location, and day."],
              ["02", "Trust", "Clear communication, professional presentation, and dependable service from start to finish."],
              ["03", "Professionalism", "A clean customer experience that feels more premium than the average repair visit."],
            ].map(([num, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#C99700]/40"
              >
                <p className="text-6xl font-black text-[#FFF1B8]">{num}</p>

                <h3 className="mt-3 text-2xl font-black text-[#0F172A]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/80 lg:grid-cols-[1fr_1fr]">
          <div
            className="flex min-h-[440px] items-end bg-cover bg-center p-8"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                Service Standard
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                Premium work starts with a better customer experience.
              </h3>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-4 py-2 text-sm font-black text-[#C99700]">
              <Star size={18} />
              Carolina Brake Standard
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
              Brake repair should feel simple, safe, and professional.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every part of the Carolina Brake experience is built to reduce
              stress: easier scheduling, mobile convenience, clear expectations,
              and a premium presentation customers can trust.
            </p>

            <div className="mt-8 grid gap-4">
              {standards.map(([Icon, text]) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#C99700] shadow-sm">
                    <Icon size={22} />
                  </div>

                  <p className="font-bold text-slate-800">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#D7262E] text-white">
                  <UserCheck />
                </div>

                <div>
                  <h3 className="font-black text-[#0F172A]">
                    Built Around Accountability
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    A strong service brand is built around reputation, clear
                    communication, and pride in the work customers trust for
                    their safety.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={phoneHref}
              className="mt-8 inline-block rounded-full bg-[#D7262E] px-8 py-4 font-black text-white shadow-lg shadow-red-200"
            >
              Call For Mobile Brake Service
            </a>
          </div>
        </div>
      </section>

      <CTA />

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-2xl md:hidden">
        <a
          href={phoneHref}
          className="flex items-center justify-center rounded-full bg-[#D7262E] px-6 py-4 text-center font-black text-white"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now: {phone}
        </a>
      </div>
    </main>
  );
}