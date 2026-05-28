import { Link } from "react-router-dom";
import { Disc3 } from "lucide-react";
import { business } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#B91C1C] text-white">
              <Disc3 />
            </div>

            <div>
              <p className="text-xl font-black text-slate-950">
                {business.name}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                {business.tagline}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md leading-7 text-slate-600">
            Mobile brake repair built for drivers who want safety, speed, and convenience without waiting at a shop.
          </p>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Pages</h3>
          <div className="mt-4 grid gap-3 text-slate-600">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/service-area">Service Area</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Contact</h3>
          <div className="mt-4 grid gap-3 text-slate-600">
            <p>{business.phone}</p>
            <p>{business.email}</p>
            <p>{business.serviceArea}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        © 2026 {business.name}. All rights reserved.
      </div>
    </footer>
  );
}