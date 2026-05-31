import { useRef } from "react";
import {
  Clock,
  MapPin,
  ShieldCheck,
  Wrench,
  Phone,
  CheckCircle,
  Star,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CTA from "../components/CTA";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";
import car8 from "../assets/car8.jpg";
import car9 from "../assets/car9.JPG";
import car10 from "../assets/car10.jpg";

export default function Home() {
  const phone = "980-999-0319";
  const phoneHref = "tel:9809990319";
  const galleryRef = useRef(null);

  const trustItems = [
    ["Mobile Brake Repair", "We come to your home, work, or safe location.", MapPin],
    ["Brake Pad & Rotor Replacement", "Professional brake service without the shop wait.", Wrench],
    ["Brake Diagnostics", "Grinding, squeaking, vibration, pulling, and brake concerns.", ClipboardCheck],
    ["Honest Upfront Pricing", "Clear communication before the work starts.", ShieldCheck],
    ["Convenient Mobile Service", "Save time and get service where your vehicle already is.", Clock],
  ];

  const services = [
    "Brake pad replacement",
    "Rotor replacement",
    "Brake inspections",
    "Grinding noise diagnostics",
    "Squeaking brake diagnostics",
    "Brake vibration checks",
  ];

  const areas = ["Concord", "Charlotte", "Kannapolis", "Harrisburg", "Huntersville"];

  const testimonials = [
    {
      name: "Local Driver",
      location: "Concord, NC",
      text: "They came to my driveway, explained what was going on, and got my brakes handled without me sitting at a shop.",
    },
    {
      name: "Google Review",
      location: "Charlotte, NC",
      text: "Fast, professional, and convenient. The mobile service made everything easy from the first call.",
    },
    {
      name: "Local Customer",
      location: "Kannapolis, NC",
      text: "Great communication and honest pricing. I knew what to expect before the work started.",
    },
  ];

  const galleryImages = [car2, car3, car4, car5, car6, car8, car9, car10];

  function scrollGallery(direction) {
    if (!galleryRef.current) return;

    galleryRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  }

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
          Request Service
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#0F172A]">
          Get a fast brake quote
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
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-[#0F172A] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#D7262E]" />
                Mobile Brake Repair in Concord & Charlotte
              </div>

              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
                Carolina Brake & Diagnostics
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl">
                Mobile brake repair that comes to you.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Skip the shop and get professional brake repair, diagnostics,
                pads, and rotors at your driveway, workplace, or safe location.
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
                  Get Quote
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Fast Mobile Service", "Upfront Pricing", "Brake Specialists"].map((item) => (
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
                    backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.08)), url(${car1})`,
                  }}
                >
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                      Mobile Brake Specialists
                    </p>

                    <h2 className="mt-3 max-w-xl text-3xl font-black text-white md:text-5xl">
                      Professional brake service without the shop wait.
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

          <section className="mt-16">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
                  Work Showcase
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
                  Real mobile brake service photos.
                </h2>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => scrollGallery("left")}
                  className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-[#0F172A] shadow-sm transition hover:border-[#D7262E] hover:text-[#D7262E]"
                >
                  <ChevronLeft />
                </button>

                <button
                  type="button"
                  onClick={() => scrollGallery("right")}
                  className="grid h-12 w-12 place-items-center rounded-full bg-[#D7262E] text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div
              ref={galleryRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[82%] snap-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 sm:min-w-[48%] lg:min-w-[31%]"
                >
                  <img
                    src={image}
                    alt={`Carolina Brake service showcase ${index + 1}`}
                    className="h-72 w-full object-cover md:h-80"
                  />

                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C99700]">
                        Service Photo
                      </p>
                      <p className="mt-1 font-black text-[#0F172A]">
                        Mobile Brake Work
                      </p>
                    </div>

                    <a
                      href={phoneHref}
                      className="rounded-full bg-[#0F172A] px-4 py-2 text-sm font-black text-white transition hover:bg-[#D7262E]"
                    >
                      Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div id="quote" className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <QuoteForm />

            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.slice(0, 4).map(([title, text, Icon]) => (
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

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
              Services
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
              Brake repair and diagnostics without the shop wait.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Customers searching from Google usually need help fast. This page
              makes the offer clear, trustworthy, and easy to call.
            </p>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 sm:inline-flex sm:w-auto"
            >
              Call For Brake Service
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item, index) => (
              <div
                key={item}
                className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-lg shadow-slate-200/70"
              >
                <p className="text-5xl font-black text-[#FFF1B8]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-black text-[#0F172A]">
                  {item}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Mobile service available with clear communication and a
                  professional customer experience.
                </p>
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
                "linear-gradient(to top, rgba(15,23,42,0.92), rgba(15,23,42,0.1)), url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop')",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C547]">
                Service Areas
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                Mobile brake repair where customers already are.
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <MapPin className="h-12 w-12 text-[#E8C547]" />

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
              Serving Concord, Charlotte, Kannapolis, Harrisburg, and Huntersville.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Carolina Brake & Diagnostics brings brake repair to homes,
              workplaces, and safe locations throughout the service area.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-black text-white"
                >
                  {area}
                </div>
              ))}
            </div>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A] sm:inline-flex sm:w-auto"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C99700]">
                Customer Reviews
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
                Trusted by local drivers.
              </h2>
            </div>

            <a
              href={phoneHref}
              className="flex w-full items-center justify-center rounded-full bg-[#D7262E] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-200 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={`${review.name}-${review.location}`}
                className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-7 shadow-xl shadow-slate-200/60"
              >
                <div className="mb-4 flex gap-1 text-[#C99700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="flex-grow leading-7 text-slate-600">
                  “{review.text}”
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-black text-[#0F172A]">{review.name}</p>
                  <p className="mt-1 text-sm font-bold text-[#C99700]">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-2xl shadow-slate-300/70 md:p-10">
            <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
              Questions Before Booking?
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Clear answers reduce stress before service.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Call directly to confirm service area, brake symptoms, parts,
              availability, and quote details.
            </p>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A] sm:inline-flex sm:w-auto"
            >
              Call {phone}
            </a>
          </div>

          <div className="grid gap-4">
            {[
              ["Do you come to me?", "Yes. Carolina Brake & Diagnostics provides convenient mobile brake service."],
              ["What areas do you serve?", "Concord, Charlotte, Kannapolis, Harrisburg, Huntersville, and nearby areas."],
              ["Can I call instead of filling out the form?", `Yes. Call ${phone} for faster service.`],
              ["Do you diagnose brake noise?", "Yes. We inspect grinding, squeaking, vibration, and other brake concerns."],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#C99700]/40 hover:shadow-xl"
              >
                <h3 className="font-black text-[#0F172A]">{q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#E8C547]">
              Get A Quote
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
              Ready for mobile brake service?
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Request service or call now. The page is built for phone calls,
              fast quotes, and lead generation from Google Ads traffic.
            </p>

            <a
              href={phoneHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#E8C547] px-8 py-4 text-center font-black text-[#0F172A] sm:inline-flex sm:w-auto"
            >
              Call {phone}
            </a>
          </div>

          <QuoteForm dark />
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