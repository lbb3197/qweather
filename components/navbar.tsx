"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navItems = [
    { href: `/?${searchParams.toString()}`, label: "今日天气" },
    { href: `/hours?${searchParams.toString()}`, label: "逐小时天气" },
    { href: `/suggestion?${searchParams.toString()}`, label: "天气指数" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-md rounded-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">天气预报</h1>
        <div className="flex gap-6">
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 px-3 rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
