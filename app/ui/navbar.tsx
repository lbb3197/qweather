"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "今日天气" },
  { href: "/components/hours", label: "逐小时天气" },
  { href: "/components/suggestion", label: "天气指数" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-md rounded-lg mb-6">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">天气预报</h1>
        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
