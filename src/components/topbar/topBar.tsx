"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group relative text-2xl font-bold tracking-tight text-white"
        >
          VP
          <span className="text-red-500">.</span>

          {/* Red underline */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 md:gap-8">

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
      </div>
    </header>
  );
}