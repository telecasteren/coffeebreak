"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveNav } from "@/hooks/use-active-nav";
import { useState, useEffect } from "react";
import { AlignRightIcon } from "@/components/icons/menu-icon";
import { BREAKPOINT } from "@/lib/config";
import { useTranslations } from "next-intl";
import LangSwitch from "@/components/layout/toggle/LangSwitch";

const Header = () => {
  const t = useTranslations("nav");
  const items = [
    { id: "hero", label: t("home") },
    { id: "mission", label: t("projects") },
    { id: "dev", label: t("about") },
    { id: "contact", label: t("contact") },
    { id: "cv", label: t("curriculum") },
  ];

  const sectionIds = items.map((n) => n.id);
  const activeId = useActiveNav(sectionIds);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

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
              {items.map((item) => {
                const href =
                  item.id === "cv"
                    ? `/${locale}/curriculum`
                    : `/${locale}/#${item.id}`;

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

          {(showMobileMenu || !isMobile) && (
            <LangSwitch className="lang-switch" />
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
