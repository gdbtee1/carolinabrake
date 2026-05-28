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
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function Services() {
  const services = [
    ["Brake Pad Replacement", "Clean, reliable replacement for worn brake pads.", Disc3],
    ["Rotor Service", "Rotor replacement or inspection for smoother stopping.", Gauge],
    ["Brake Inspections", "Full brake system check for safety and confidence.", ShieldCheck],
    ["Noise Diagnosis", "Squealing, grinding, vibration, or pulling issues.", AlertTriangle],
    ["Mobile Repairs", "We come to your home, job, or safe location.", Car],
    ["Fleet Service", "Brake support for small business and work vehicles.", Wrench],
  ];

  const process = [
    ["01", "Request Service", "Customer submits service details and vehicle information.", CalendarCheck],
    ["02", "Review The Issue", "Brake symptoms, location, and service needs are confirmed.", ClipboardCheck],
    ["03", "Technician Arrives", "Mobile brake service comes directly to the customer.", Truck],
    ["04", "Service Completed", "Brake work is handled cleanly and professionally.", CheckCircle],
  ];

  return (
    <main>
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Services"
              title="Premium brake solutions without the shop delay."
              text="Carolina Brake gives drivers a cleaner, faster way to handle brake repair with mobile service built around safety, convenience, and professionalism."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Request Service
              </a>

              <a
                href="#service-list"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-slate-950 shadow-sm transition hover:border-[#B91C1C] hover:text-[#B91C1C]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div
              className="flex min-h-[420px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.85), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Technician At Work
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Real mobile brake service, done professionally.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Professional mobile brake repair designed for convenience,
                  safety, and customer trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-list" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#B91C1C]">
                What We Handle
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Brake services built for everyday drivers.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Each service is designed to help customers understand what they need and book with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text, Icon]) => (
              <div
                key={title}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:border-[#B91C1C]/30"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-[#B91C1C]">
                  <Icon />
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 flex-grow leading-7 text-slate-600">
                  {text}
                </p>

                <div className="mt-6 flex flex-col items-center border-t border-slate-100 pt-5 text-center">
                  <p className="text-sm font-bold text-[#B91C1C]">
                    Mobile service available
                  </p>

                  <a
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#B91C1C]"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="flex min-h-[420px] items-end rounded-[1.5rem] bg-cover bg-center p-8"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                Mobile Service
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                Professional work at the customer’s location.
              </h3>
            </div>
          </div>

          <div className="p-2 md:p-4">
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A227]">
              Service Process
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
              Simple booking. Professional repair. Safer driving.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              The process is built to make brake repair feel simple from the first message to the completed service.
            </p>

            <div className="mt-8 grid gap-4">
              {process.map(([num, title, text, Icon]) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white/10 p-5 text-white"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#B91C1C]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#C9A227]">
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
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}