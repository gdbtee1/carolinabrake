import {
  HelpCircle,
  ShieldCheck,
  Clock,
  Wrench,
  Phone,
  CheckCircle,
  MessageCircle,
  MapPin,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function FAQ() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";

  const faqs = [
    [
      "Do you come to me?",
      "Yes. Carolina Brake & Diagnostics provides professional mobile brake service directly at your home, workplace, or safe vehicle location.",
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

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2F7] px-5 py-16 md:py-24">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#FFF1B8]/70 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              Frequently Asked Questions
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl">
              Clear answers before you book.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Know what to expect before scheduling mobile brake repair. Fast
              answers, simple booking, and professional service at your location.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneHref}
                className="rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
              >
                <Phone className="mr-2 inline h-5 w-5" />
                Call Now: {phone}
              </a>

              <a
                href="#questions"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-[#0F172A] shadow-sm transition hover:border-[#C99700] hover:text-[#C99700]"
              >
                View Questions
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(([Icon, text]) => (
                <div
                  key={text}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-center shadow-lg shadow-slate-200/70"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                    <Icon />
                  </div>

                  <p className="font-black text-[#0F172A]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/70">
              <div
                className="flex min-h-[430px] items-end bg-cover bg-center p-8 md:min-h-[540px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.1)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop')",
                }}
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                    Mobile Brake Support
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white">
                    Questions answered. Service made simple.
                  </h2>

                  <p className="mt-3 max-w-sm text-slate-200">
                    Carolina Brake & Diagnostics helps drivers book with
                    confidence before the technician arrives.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#D7262E] text-white">
                  <Phone />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C99700]">
                    Need help now?
                  </p>
                  <a href={phoneHref} className="text-xl font-black text-[#0F172A]">
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-2xl shadow-slate-300/70">
              <MessageCircle className="h-12 w-12 text-[#E8C547]" />

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Still unsure?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Call Carolina Brake & Diagnostics and confirm your brake issue,
                service area, and appointment availability.
              </p>

              <div className="mt-8 grid gap-4">
                {["Fast response", "Clear communication", "Mobile scheduling"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <CheckCircle className="h-5 w-5 text-[#E8C547]" />
                    <p className="font-bold">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={phoneHref}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-[#E8C547] px-6 py-4 text-center font-black text-[#0F172A]"
              >
                Call {phone}
              </a>
            </div>

            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-xl shadow-slate-200/70">
              <MapPin className="h-10 w-10 text-[#C99700]" />
              <h3 className="mt-4 text-2xl font-black text-[#0F172A]">
                Service Areas
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Concord, Charlotte, Kannapolis, Harrisburg, Huntersville, and
                nearby areas.
              </p>
            </div>
          </aside>

          <div className="grid gap-5">
            {faqs.map(([q, a], index) => (
              <div
                key={q}
                className="group rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:border-[#C99700]/40 hover:bg-white hover:shadow-2xl"
              >
                <div className="flex gap-5">
                  <div className="hidden text-5xl font-black text-[#FFF1B8] sm:block">
                    0{index + 1}
                  </div>

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                    <HelpCircle />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-[#0F172A]">
                      {q}
                    </h2>

                    <p className="mt-3 leading-8 text-slate-600">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-slate-300/70">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div
                  className="min-h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(15,23,42,0.25), rgba(15,23,42,0.05)), url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop')",
                  }}
                />

                <div className="p-8 md:p-10">
                  <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
                    Ready To Schedule?
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                    Get mobile brake service without the shop wait.
                  </h2>

                  <p className="mt-5 leading-8 text-slate-300">
                    Call now or request service to confirm availability and get
                    help with your brake issue.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={phoneHref}
                      className="rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A]"
                    >
                      <Phone className="mr-2 inline h-5 w-5" />
                      Call {phone}
                    </a>

                    <a
                      href="/contact"
                      className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#0F172A]"
                    >
                      Request Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
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