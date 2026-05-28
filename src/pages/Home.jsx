import { Link } from "react-router-dom";
import { Clock, MapPin, ShieldCheck, Wrench } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function Home() {
  const features = [
    ["Fast Scheduling", "Convenient brake service built around your day.", Clock],
    ["Mobile Service", "We come to your home, work, or safe location.", MapPin],
    ["Safety Focused", "Professional inspections before the work starts.", ShieldCheck],
    ["Clean Repairs", "Premium service without the shop waiting room.", Wrench],
  ];

  return (
    <main>
      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#B91C1C]">
              Carolina Brake
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              Premium mobile brake repair brought to you.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Skip the shop. Carolina Brake delivers professional brake service
              at your driveway, workplace, or safe roadside location.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Book Service
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-black text-slate-950 shadow-sm transition hover:border-[#B91C1C] hover:text-[#B91C1C]"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div
              className="flex min-h-[500px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.88), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Mobile Brake Experts
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Professional service without the shop wait.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Brake repair brought directly to the customer with clean,
                  dependable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Brake service that feels professional from start to finish."
            text="The experience is designed to feel clean, fast, trustworthy, and premium."
            center
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {features.map(([title, text, Icon]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-slate-950">
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div
              className="flex min-h-[420px] items-end bg-cover bg-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop')",
              }}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                  Built For Convenience
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  Brake service where the customer already is.
                </h2>

                <p className="mt-3 max-w-sm text-slate-200">
                  Perfect for driveway appointments, workplace service, and
                  safe-location brake repair.
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Built For Convenience"
              title="No waiting room. No wasted day."
              text="Carolina Brake gives customers a smoother way to handle one of the most important safety services on their vehicle."
            />

            <div className="mt-8 grid gap-4">
              {[
                "Brake pads and rotors",
                "Brake inspections",
                "Noise and vibration diagnosis",
                "Same-location convenience",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-700 shadow-sm"
                >
                  {item}
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