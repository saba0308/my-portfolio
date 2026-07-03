"use client";

import Link from "next/link";
import ThemeToggle from "../common/ThemeToggle";
const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Resume",
];

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        <h1 className="font-bold text-2xl text-blue-600">
          Sabapathi P
        </h1>

        <div className="flex gap-8">

          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
            <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}