"use client";
import Link from "next/link";

const navItems = [
  { href: "/", label: "今日天气" },
  { href: "/components/hours", label: "逐小时天气" },
  { href: "/components/suggestion", label: "天气指数" },
];

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 bg-gray-100">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
