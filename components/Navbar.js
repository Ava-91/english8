"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/lesson-1", label: "Lesson", icon: "book" },
  { href: "/world-map", label: "Map", icon: "map" },
  { href: "/practice", label: "Practice", icon: "quiz" },
  { href: "/about", label: "About", icon: "info" },
];

function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "home") {
    return <svg {...common}><path d="M3 10.8 12 3l9 7.8v9.2a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>;
  }
  if (name === "book") {
    return <svg {...common}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 4.5v17M7 6h9M7 10h9M7 14h6" /></svg>;
  }
  if (name === "map") {
    return <svg {...common}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" /></svg>;
  }
  if (name === "quiz") {
    return <svg {...common}><path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
  }
  return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 10v6M12 7h.01" /></svg>;
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark">E8</span>
          <span>English 8</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              href={link.href}
              key={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link
            className={isActive(link.href) ? "mobile-nav-link active" : "mobile-nav-link"}
            href={link.href}
            key={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
