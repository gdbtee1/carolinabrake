import {
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  const contactInfo = [
    [Phone, "(617) 415-3493"],
    [Mail, "stevenblake876@gmail.com"],
    [MapPin, "Serving drivers across the Carolinas"],
  ];

  const benefits = [
    ["Fast Scheduling", Clock],
    ["Professional Service", ShieldCheck],
    ["Mobile Convenience", CalendarCheck],
  ];

  return (
    <main>
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT SIDE */}
          <div>
            <SectionHeader
              eyebrow="Contact Carolina Brake"
              title="Request premium mobile brake service."
              text="Reach out today to schedule brake service at your home, workplace, or safe vehicle location."
            />

            {/* CONTACT CARDS */}
            <div className="mt-10 grid gap-4">
              {contactInfo.map(([Icon, text]) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-400">
                      Contact
                    </p>

                    <p className="text-lg font-black text-slate-800">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE SECTION */}
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
              <div
                className="flex min-h-[420px] items-end bg-cover bg-center p-8"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.88), rgba(15,23,42,0.15)), url('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1400&auto=format&fit=crop')",
                }}
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C9A227]">
                    Premium Mobile Service
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white">
                    Professional brake repair where customers already are.
                  </h2>

                  <p className="mt-3 max-w-sm text-slate-200">
                    Carolina Brake delivers convenient mobile brake service
                    designed around customer safety and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {benefits.map(([title, Icon]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-[#B91C1C]">
                    <Icon />
                  </div>

                  <p className="font-black text-slate-800">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 md:p-8">
            <div className="mb-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#B91C1C]">
                Service Request
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                Tell us what your vehicle needs.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Fill out the request form and Carolina Brake will reach out to confirm your appointment.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]"
                  placeholder="Full Name"
                />

                <input
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]"
                  placeholder="Phone Number"
                />
              </div>

              <input
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]"
                placeholder="Email Address"
              />

              <input
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]"
                placeholder="Vehicle Year / Make / Model"
              />

              <select className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]">
                <option>Select Service Needed</option>
                <option>Brake Pad Replacement</option>
                <option>Rotor Replacement</option>
                <option>Brake Inspection</option>
                <option>Brake Noise Diagnosis</option>
                <option>Fleet Brake Service</option>
              </select>

              <textarea
                className="min-h-40 rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#B91C1C]"
                placeholder="Tell us what is happening with the vehicle."
              />

              <button
                className="flex items-center justify-center rounded-full bg-[#B91C1C] px-8 py-4 text-lg font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
              >
                Submit Service Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}