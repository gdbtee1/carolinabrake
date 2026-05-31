import {
  Phone,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";

  const contactInfo = [
    [Phone, "Call Now", phone],
    [MapPin, "Service Areas", "Concord, Charlotte, Kannapolis, Harrisburg, Huntersville"],
  ];

  const benefits = [
    ["Fast Scheduling", Clock],
    ["Professional Service", ShieldCheck],
    ["Mobile Convenience", CalendarCheck],
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
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#FFF1B8]/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-[#0F172A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#D7262E]" />
              Mobile Brake Service
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              Contact Carolina Brake & Diagnostics
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl">
              Request mobile brake service.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Call now or send a service request. Carolina Brake & Diagnostics
              provides mobile brake repair at your home, workplace, or safe
              vehicle location.
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
                href="#service-request"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-[#0F172A] shadow-sm transition hover:border-[#C99700] hover:text-[#C99700]"
              >
                Get Quote
              </a>
            </div>

            <div className="mt-10 grid gap-4">
              {contactInfo.map(([Icon, label, text]) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C99700]">
                      {label}
                    </p>

                    <p className="mt-1 text-lg font-black text-[#0F172A]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="service-request" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/80 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              Service Request
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A]">
              Tell us what your vehicle needs.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fill this out and Carolina Brake & Diagnostics will contact you.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 outline-none transition focus:border-[#C99700]"
                  placeholder="Name"
                />

                <input
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 outline-none transition focus:border-[#C99700]"
                  placeholder="Phone Number"
                />
              </div>

              <input
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 outline-none transition focus:border-[#C99700]"
                placeholder="Vehicle Year / Make / Model"
              />

              <input
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 outline-none transition focus:border-[#C99700]"
                placeholder="Service Needed"
              />

              <input
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 outline-none transition focus:border-[#C99700]"
                placeholder="ZIP Code"
              />

              <select className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 text-slate-500 outline-none transition focus:border-[#C99700]">
                <option>Preferred Contact Method</option>
                <option>Call</option>
                <option>Text</option>
                <option>Email</option>
              </select>

              <button
                type="submit"
                className="rounded-full bg-[#D7262E] px-8 py-4 text-lg font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
              >
                Request Service / Get Quote
              </button>

              <a
                href={phoneHref}
                className="rounded-full bg-[#0F172A] px-8 py-4 text-center text-lg font-black text-white transition hover:bg-[#1E293B]"
              >
                Call Now: {phone}
              </a>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-slate-300/70">
            <div
              className="flex min-h-[420px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                  Premium Mobile Service
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Professional brake repair where customers already are.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Convenient brake service designed around safety, speed, and
                  customer trust.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              Why Customers Call
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
              Fast contact. Clear quote. Mobile convenience.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This contact page is designed to turn visitors into calls and
              quote requests as quickly as possible.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {benefits.map(([title, Icon]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                    <Icon />
                  </div>

                  <p className="font-black text-[#0F172A]">
                    {title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-300/70">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#D7262E] text-white">
                  <CheckCircle />
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    Serving Local Drivers
                  </h3>

                  <p className="mt-2 leading-7 text-slate-300">
                    Concord, Charlotte, Kannapolis, Harrisburg, Huntersville,
                    and nearby areas.
                  </p>
                </div>
              </div>

              <a
                href={phoneHref}
                className="mt-6 block rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A]"
              >
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

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