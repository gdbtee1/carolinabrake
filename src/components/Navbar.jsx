import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Disc3, Phone } from "lucide-react";
import { business } from "../utils/constants";

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
      <div className="h-1 bg-gradient-to-r from-slate-950 via-[#B91C1C] to-[#C9A227]" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="relative grid h-13 w-13 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B91C1C] via-slate-950 to-[#C9A227] opacity-80 transition group-hover:opacity-100" />
            <Disc3 className="relative z-10" size={28} />
          </div>

          <div>
            <p className="text-xl font-black tracking-tight text-slate-950">
              {business.name}
            </p>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#B91C1C]">
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
                  ? "rounded-full bg-[#B91C1C] px-5 py-3 text-sm font-black text-white shadow-md shadow-red-200"
                  : "rounded-full px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-red-50 hover:text-[#B91C1C]"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:16174153493"
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-[#B91C1C] shadow-sm transition hover:border-[#B91C1C]"
          >
            <Phone size={20} />
          </a>

          <Link
            to="/contact"
            className="rounded-full bg-[#B91C1C] px-6 py-3 font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-[#B91C1C] shadow-sm transition active:scale-95 lg:hidden"
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
                    ? "rounded-2xl bg-red-50 px-5 py-4 font-black text-[#B91C1C] shadow-sm"
                    : "rounded-2xl px-5 py-4 font-bold text-slate-700 transition hover:bg-red-50 hover:text-[#B91C1C]"
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4">
              <a
                href="tel:16174153493"
                className="flex items-center justify-center gap-2 rounded-full border border-red-100 bg-red-50 px-6 py-4 font-black text-[#B91C1C] transition hover:bg-red-100"
              >
                <Phone size={18} />
                Call Now
              </a>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#B91C1C] px-6 py-4 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-700"
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