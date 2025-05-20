"use client";
import Link from "next/link";
import { fetchWeatherDay } from "../api/hefeng-weather";

const navItems = [
  { href: "/", label: "今日天气" },
  { href: "/components/future", label: "未来三日天气" },
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
