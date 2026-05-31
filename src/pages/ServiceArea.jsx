import {
  MapPin,
  Navigation,
  PhoneCall,
  Home,
  Briefcase,
  CheckCircle,
  Phone,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function ServiceArea() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";

  const cities = [
    "Concord",
    "Charlotte",
    "Kannapolis",
    "Harrisburg",
    "Huntersville",
  ];

  const serviceTypes = [
    [Home, "Home Appointments", "Brake service completed right in the customer’s driveway."],
    [Briefcase, "Workplace Service", "Customers can get brake work handled while they are at work."],
    [Navigation, "Safe Location Visits", "Service can be requested at a safe vehicle location within the coverage area."],
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
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Service Area"
              title="Mobile brake service in Concord, Charlotte, and nearby areas."
              text="Carolina Brake & Diagnostics brings professional brake repair directly to customers at home, work, or a safe location, helping drivers save time without sacrificing safety or quality."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm transition hover:border-[#C99700] hover:text-[#C99700]"
                >
                  {city}
                </span>
              ))}
            </div>

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
                Confirm Your Area
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/70">
            <div
              className="flex min-h-[420px] items-end bg-cover bg-center p-8 md:min-h-[500px]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.12)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                  Coverage Area
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Professional brake service brought directly to your area.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Serving Concord, Charlotte, Kannapolis, Harrisburg,
                  Huntersville, and nearby areas.
                </p>

                <a
                  href={phoneHref}
                  className="mt-6 inline-block rounded-full bg-[#D7262E] px-8 py-4 font-black text-white shadow-lg shadow-red-900/30"
                >
                  Call Now: {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
                Where We Come To You
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-6xl">
                We bring the brake shop to you.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Whether the vehicle is at home, work, or another safe location,
              customers can request convenient brake service without visiting a shop.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {serviceTypes.map(([Icon, title, text], index) => (
              <div
                key={title}
                className={`rounded-[2rem] border p-7 shadow-xl transition hover:-translate-y-1 ${
                  index === 0
                    ? "border-[#E8C547]/50 bg-gradient-to-br from-[#FFF7D6] to-white shadow-slate-200/80"
                    : "border-slate-200 bg-[#F8FAFC] shadow-slate-200/70 hover:border-[#C99700]/40"
                }`}
              >
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${
                    index === 0
                      ? "bg-[#0F172A] text-white"
                      : "bg-[#FFF7D6] text-[#C99700]"
                  }`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black text-[#0F172A]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>

                <a
                  href={phoneHref}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black shadow-lg transition ${
                    index === 0
                      ? "bg-[#D7262E] text-white hover:bg-[#B91C1C]"
                      : "bg-[#0F172A] text-white hover:bg-[#D7262E]"
                  }`}
                >
                  Call For Availability
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-slate-300/70 lg:grid-cols-[1fr_1fr]">
          <div
            className="flex min-h-[420px] items-end bg-cover bg-center p-8"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(15,23,42,0.92), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                Mobile Convenience
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                No shop visit. No waiting room. Just professional service.
              </h3>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
              Before You Book
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
              Confirm your location before scheduling.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Coverage may vary depending on distance, appointment availability,
              and the type of brake service needed. Customers can call or submit
              a request to confirm whether their area is currently covered.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Share your city and vehicle details",
                "Describe the brake issue",
                "Confirm appointment availability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-white"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#D7262E]">
                    <CheckCircle size={22} />
                  </div>

                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A] sm:w-auto"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call {phone}
              </a>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white transition hover:bg-white/20 sm:w-auto"
              >
                Check My Service Area
              </a>
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