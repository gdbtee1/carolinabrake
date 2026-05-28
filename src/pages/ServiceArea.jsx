import {
  MapPin,
  Navigation,
  PhoneCall,
  Home,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function ServiceArea() {
  const cities = [
    "Charlotte",
    "Raleigh",
    "Greensboro",
    "Durham",
    "Columbia",
    "Greenville",
    "Rock Hill",
    "Spartanburg",
  ];

  const serviceTypes = [
    [Home, "Home Appointments", "Brake service completed right in the customer’s driveway."],
    [Briefcase, "Workplace Service", "Customers can get brake work handled while they are at work."],
    [Navigation, "Safe Location Visits", "Service can be requested at a safe vehicle location within the coverage area."],
  ];

  return (
    <main>
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Service Area"
              title="Mobile brake service across the Carolinas."
              text="Carolina Brake brings professional brake repair directly to customers throughout the service region, helping drivers save time without sacrificing safety or quality."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm transition hover:border-[#B91C1C] hover:text-[#B91C1C]"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Confirm Your Area
              </a>

              <a
                href="tel:16174153493"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-slate-950 shadow-sm transition hover:border-[#B91C1C] hover:text-[#B91C1C]"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div
              className="flex min-h-[500px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Coverage Area
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Professional brake service brought directly to your area.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Serving customers across the Carolinas with convenient mobile
                  brake repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#B91C1C]">
                Where We Come To You
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Service designed around the customer’s location.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Whether the vehicle is at home, work, or another safe location,
              customers can request convenient brake service without visiting a shop.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceTypes.map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-[#B91C1C]/30"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black text-slate-950">
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
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl lg:grid-cols-[1fr_1fr]">
          <div
            className="flex min-h-[420px] items-end bg-cover bg-center p-8"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(15,23,42,0.92), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                Mobile Convenience
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                No shop visit. No waiting room. Just professional service.
              </h3>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A227]">
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
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#B91C1C]">
                    <CheckCircle size={22} />
                  </div>

                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-950/30 transition hover:bg-red-700 sm:w-auto"
            >
              Check My Service Area
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}