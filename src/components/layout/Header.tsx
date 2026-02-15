"use client";

import Link from "next/link";
import { useActiveNav } from "@/hooks/use-active-nav";

const navItems = [
  { id: "hero", label: "home" },
  { id: "dev", label: "the man" },
  { id: "work", label: "projects" },
  { id: "contact", label: "contact" },
  // { id: "cv", label: "cv" },
];

const Header = () => {
  const sectionIds = navItems.map((n) => n.id);
  const activeId = useActiveNav(sectionIds);

  return (
    <header>
      <nav>
        <div className="nav-inner">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={item.id === activeId ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
