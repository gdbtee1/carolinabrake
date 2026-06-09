import {
  Disc3,
  Gauge,
  ShieldCheck,
  Wrench,
  Car,
  AlertTriangle,
  CheckCircle,
  CalendarCheck,
  ClipboardCheck,
  Truck,
  Phone,
  MapPin,
} from "lucide-react";
import CTA from "../components/CTA";

export default function Services() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";

  const services = [
    ["Brake Pad Replacement", "Clean, reliable replacement for worn brake pads.", Disc3],
    ["Rotor Replacement", "Rotor replacement or inspection for smoother stopping.", Gauge],
    ["Brake Inspections", "Full brake system check for safety and confidence.", ShieldCheck],
    ["Brake Diagnostics", "Squealing, grinding, vibration, pulling, or brake warning concerns.", AlertTriangle],
    ["Mobile Brake Repair", "We come to your home, job, or safe location.", Car],
    ["Fleet Brake Service", "Brake support for small business and work vehicles.", Wrench],
  ];

  const process = [
    ["01", "Request Service", "Send your vehicle details, location, and brake concern.", CalendarCheck],
    ["02", "Confirm The Issue", "We review the symptoms and service needed before arrival.", ClipboardCheck],
    ["03", "Technician Arrives", "Mobile brake service comes directly to your location.", Truck],
    ["04", "Service Completed", "Brake work is handled cleanly, professionally, and safely.", CheckCircle],
  ];

const areas = [
  "Ballantyne",
  "South Charlotte",
  "Pineville",
  "Matthews",
  "Fort Mill",
  "Indian Land",
];

  function QuoteForm({ dark = false }) {
    return (
      <form
        className={`rounded-[2rem] border p-6 shadow-2xl ${
          dark
            ? "border-white/10 bg-white text-[#0F172A] shadow-black/30"
            : "border-slate-200 bg-white shadow-slate-300/80"
        }`}
      >
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C99700]">
          Get A Quote
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#0F172A]">
          Request mobile brake service
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill this out and Carolina Brake & Diagnostics will contact you.
        </p>

        <div className="mt-5 grid gap-4">
          <input className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#C99700]" placeholder="Name" />
          <input className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#C99700]" placeholder="Phone Number" />
          <input className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#C99700]" placeholder="Vehicle Year/Make/Model" />
          <input className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#C99700]" placeholder="Service Needed" />
          <input className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none focus:border-[#C99700]" placeholder="ZIP Code" />

          <select className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-slate-500 outline-none focus:border-[#C99700]">
            <option>Preferred Contact Method</option>
            <option>Call</option>
            <option>Text</option>
            <option>Email</option>
          </select>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-full bg-[#D7262E] px-6 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
          >
            Request Service / Get Quote
          </button>

          <a
            href={phoneHref}
            className="flex w-full items-center justify-center rounded-full bg-[#0F172A] px-6 py-4 text-center font-black text-white transition hover:bg-[#1E293B]"
          >
            Call Now: {phone}
          </a>
        </div>
      </form>
    );
  }

  return (
    <main className="bg-[#F8FAFC] pb-24 text-[#0F172A] md:pb-0">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="hidden font-black text-[#0F172A] sm:block">
            Carolina Brake & Diagnostics
          </p>

          <a
            href={phoneHref}
            className="flex w-full items-center justify-center rounded-full bg-[#D7262E] px-6 py-3 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C] sm:w-auto"
          >
            Call Now: {phone}
          </a>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2F7] px-5 py-16 md:py-24">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#FFF1B8]/80 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-[#0F172A] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#D7262E]" />
                Mobile Brake Services
              </div>

              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
                Carolina Brake & Diagnostics
              </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl">
  Mobile Brake Repair For Charlotte's Daily Drivers & Luxury Vehicles.
</h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
               Professional mobile brake service throughout
Ballantyne, South Charlotte, Pineville, Matthews,
Fort Mill, and Indian Land. We come directly to
your home, office, or roadside location. Built for fast calls, easy quotes, and safer driving.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={phoneHref}
                  className="flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C] sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {phone}
                </a>

                <a
                  href="#quote"
                  className="flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-[#0F172A] shadow-sm transition hover:border-[#C99700] hover:text-[#C99700] sm:w-auto"
                >
                  Request Quote
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Mobile Service", "Upfront Pricing", "Brake Specialists"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/90 p-4 font-bold text-slate-700 shadow-sm"
                  >
                    <CheckCircle className="mb-2 h-5 w-5 text-[#C99700]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/70">
                <div
                  className="flex min-h-[500px] items-end bg-cover bg-center p-8"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.08)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1600&auto=format&fit=crop')",
                  }}
                >
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                      Professional Mobile Service
                    </p>

                    <h2 className="mt-3 max-w-xl text-3xl font-black text-white md:text-5xl">
                      Brake work handled at your location.
                    </h2>

                    <a
                      href={phoneHref}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-900/30 transition hover:bg-[#B91C1C] sm:w-auto"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="quote" className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <QuoteForm />

            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map(([title, text, Icon]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#C99700]/40"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFF7D6] text-[#C99700]">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-black text-[#0F172A]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service-list" className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              What We Handle
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
              Mobile brake services for everyday drivers.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Clear service options help Google Ads visitors understand what you
              do fast, then call or request a quote.
            </p>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 sm:inline-flex sm:w-auto"
            >
              Call For Brake Service
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map(([title, text, Icon], index) => (
              <div
                key={title}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#C99700]/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0F172A] text-white transition group-hover:bg-[#D7262E]">
                    <Icon />
                  </div>

                  <p className="text-5xl font-black leading-none text-[#FFF1B8]">
                    0{index + 1}
                  </p>
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#0F172A]">
                  {title}
                </h3>

                <p className="mt-3 flex-grow leading-7 text-slate-600">
                  {text}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <div className="mb-4 flex justify-center">
                    <span className="rounded-full bg-[#FFF7D6] px-4 py-2 text-center text-xs font-black uppercase tracking-[0.15em] text-[#C99700]">
                      Mobile Service Available
                    </span>
                  </div>

                  <a
                    href={phoneHref}
                    className="flex w-full items-center justify-center rounded-full bg-[#0F172A] px-5 py-3 text-center text-sm font-black text-white shadow-lg transition hover:bg-[#D7262E]"
                  >
                    Call For This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-slate-300/70 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            className="flex min-h-[430px] items-end bg-cover bg-center p-8"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(15,23,42,0.92), rgba(15,23,42,0.1)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                Service Process
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                Simple booking. Professional repair. Safer driving.
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
              A cleaner way to handle brake service.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The process is designed to make brake repair feel simple from the
              first call to the completed service.
            </p>

            <div className="mt-8 grid gap-4">
              {process.map(([num, title, text, Icon]) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white/10 p-5 text-white"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#D7262E]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#E8C547]">
                      {num}
                    </p>

                    <h3 className="text-lg font-black">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A] sm:inline-flex sm:w-auto"
            >
              Call Now: {phone}
            </a>
          </div>
        </div>
      </section>
<section className="bg-[#F8FAFC] px-5 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
        Luxury Vehicle Specialists
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
        Trusted By Owners Of Premium Vehicles
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
        Carolina Brake & Diagnostics provides professional mobile brake
        repair, brake pad replacement, rotor replacement, inspections,
        and diagnostics for luxury, imported, domestic, and performance
        vehicles throughout Ballantyne, South Charlotte, Pineville,
        Matthews, Fort Mill, and Indian Land.
      </p>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "Mercedes-Benz",
        "BMW",
        "Audi",
        "Lexus",
        "Tesla",
        "Porsche",
        "Land Rover",
        "Jaguar",
      ].map((brand) => (
        <div
          key={brand}
          className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center font-black text-[#0F172A] shadow-lg shadow-slate-200/60"
        >
          {brand}
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <a
        href={phoneHref}
        className="rounded-full bg-[#D7262E] px-8 py-4 font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
      >
        Call For Luxury Vehicle Service
      </a>
    </div>
  </div>
</section>
      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <MapPin className="h-12 w-12 text-[#C99700]" />

            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
              Service areas
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-slate-600">
            Mobile brake repair available throughout Ballantyne,
South Charlotte, Pineville, Matthews, Fort Mill,
Indian Land, and surrounding communities.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 font-black text-[#0F172A] shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 sm:inline-flex sm:w-auto"
            >
              Call For Service Area Availability
            </a>
          </div>

          <QuoteForm />
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