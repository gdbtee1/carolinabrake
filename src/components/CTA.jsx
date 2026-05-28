import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl md:p-14">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_0.7fr]">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C9A227]">
              Ready To Drive Safe?
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
              Book premium mobile brake service today.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              Carolina Brake brings professional brake repair directly to your driveway, workplace, or safe location.
            </p>
          </div>

          <Link
            to="/contact"
            className="rounded-full bg-[#B91C1C] px-8 py-4 text-center font-black text-white shadow-lg shadow-red-950/30 transition hover:bg-red-700"
          >
            Request Service
          </Link>
        </div>
      </div>
    </section>
  );
}