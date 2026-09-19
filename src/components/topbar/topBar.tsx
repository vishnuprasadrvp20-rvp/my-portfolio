"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Personal", href: "/personal" },
  { name: "Contact", href: "/contact" },
];

export default function Topbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group relative text-2xl font-bold tracking-tight text-white"
        >
          VP
          <span className="text-red-500">.</span>

          {/* Red underline */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">

            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group relative inline-block py-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? "text-red-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {/* Active / Hover underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1px] bg-red-500 transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">

            {/* Top line */}
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[4px] rotate-45"
                  : ""
              }`}
            />

            {/* Middle line */}
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            {/* Bottom line */}
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-[4px] -rotate-45"
                  : ""
              }`}
            />

          </div>
        </button>

      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-4">

          <ul className="space-y-1">

            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? "bg-red-500/10 text-red-400"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>

                </li>
              );
            })}

          </ul>

        </nav>
      </div>

    </header>
  );
}