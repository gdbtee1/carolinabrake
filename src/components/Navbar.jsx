import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { business } from "../utils/constants";
import logo from "../assets/cbd.jpg";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Service Area", "/service-area"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 shadow-sm backdrop-blur-2xl">
      <div className="h-1 bg-gradient-to-r from-slate-950 via-[#D7262E] to-[#C99700]" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300">
            <img
              src={logo}
              alt={`${business.name} logo`}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xl font-black tracking-tight text-slate-950">
              {business.name}
            </p>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D7262E]">
              Premium Mobile Brake Service
            </p>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#D7262E] px-5 py-3 text-sm font-black text-white shadow-md shadow-red-200"
                  : "rounded-full px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-red-50 hover:text-[#D7262E]"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:9809990319"
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-[#D7262E] shadow-sm transition hover:border-[#D7262E]"
          >
            <Phone size={20} />
          </a>

          <Link
            to="/contact"
            className="rounded-full bg-[#D7262E] px-6 py-3 font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-[#D7262E] shadow-sm transition active:scale-95 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white shadow-xl transition-all duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[650px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-5 py-5">
          <div className="grid gap-2">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-2xl bg-red-50 px-5 py-4 font-black text-[#D7262E] shadow-sm"
                    : "rounded-2xl px-5 py-4 font-bold text-slate-700 transition hover:bg-red-50 hover:text-[#D7262E]"
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4">
              <a
                href="tel:9809990319"
                className="flex items-center justify-center gap-2 rounded-full border border-red-100 bg-red-50 px-6 py-4 font-black text-[#D7262E] transition hover:bg-red-100"
              >
                <Phone size={18} />
                Call Now
              </a>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#D7262E] px-6 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C1C]"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}