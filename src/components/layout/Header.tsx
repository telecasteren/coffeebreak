"use client";

import Link from "next/link";
import { useActiveNav } from "@/hooks/use-active-nav";

const navItems = [
  { id: "landing", label: "home" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const Header = () => {
  const sectionIds = navItems.map((n) => n.id);
  const activeId = useActiveNav(sectionIds);

  return (
    <header>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={item.id === activeId ? "nav-link active" : "nav-link"}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
