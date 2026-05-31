import { Link } from "react-router-dom";
import { business } from "../utils/constants";
import logo from "../assets/cbd.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <img
                src={logo}
                alt={`${business.name} Logo`}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xl font-black text-slate-950">
                {business.name}
              </p>

              <p className="text-sm font-semibold text-[#C99700]">
                {business.tagline}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md leading-7 text-slate-600">
            Mobile brake repair built for drivers who want safety, speed, and
            convenience without spending hours waiting at a repair shop.
          </p>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Pages</h3>

          <div className="mt-4 grid gap-3 text-slate-600">
            <Link
              to="/"
              className="transition hover:text-[#D7262E]"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="transition hover:text-[#D7262E]"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[#D7262E]"
            >
              About
            </Link>

            <Link
              to="/service-area"
              className="transition hover:text-[#D7262E]"
            >
              Service Area
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-[#D7262E]"
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-[#D7262E]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Contact</h3>

          <div className="mt-4 grid gap-3 text-slate-600">
            <a
              href={`tel:${business.phone?.replace(/\D/g, "")}`}
              className="font-semibold transition hover:text-[#D7262E]"
            >
              {business.phone}
            </a>

            <a
              href={`mailto:${business.email}`}
              className="transition hover:text-[#D7262E]"
            >
              {business.email}
            </a>

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