"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/lesson-1", label: "Lesson 1" },
  { href: "/world-map", label: "World Map" },
  { href: "/practice", label: "Practice" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">E8</span>
          <span>English 8</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link className={active ? "nav-link active" : "nav-link"} href={link.href} key={link.href}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "×" : "☰"}</span>
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                className={active ? "mobile-nav-link active" : "mobile-nav-link"}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span>→</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
