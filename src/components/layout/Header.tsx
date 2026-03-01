"use client";

import Link from "next/link";
import { useActiveNav } from "@/hooks/use-active-nav";
import { useState, useEffect } from "react";
import { AlignRightIcon } from "@/components/icons/menu-icon";

const navItems = [
  { id: "hero", label: "home" },
  { id: "work", label: "my work" },
  { id: "dev", label: "the man" },
  { id: "contact", label: "contact" },
  { id: "cv", label: "cv" },
];

const BREAKPOINT = 768;

const Header = () => {
  const sectionIds = navItems.map((n) => n.id);
  const activeId = useActiveNav(sectionIds);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
      if (window.innerWidth >= BREAKPOINT) setShowMobileMenu(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMobileMenu = () => setShowMobileMenu((v) => !v);

  return (
    <header>
      <nav>
        <div className="nav-container">
          {(showMobileMenu || !isMobile) && (
            <div className="nav-inner">
              {navItems.map((item) => {
                const href = item.id === "cv" ? "/curriculum" : `/#${item.id}`;

                return (
                  <Link
                    key={item.id}
                    href={href}
                    className={
                      item.id === activeId ? "nav-link active" : "nav-link"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}

          {isMobile && (
            <AlignRightIcon className="menu-icon" onClick={openMobileMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
