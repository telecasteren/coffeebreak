"use client";

import { useState, useEffect } from "react";

export const useActiveNav = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEl = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          )[0];

        if (visibleEl?.target.id) {
          setActiveId(visibleEl.target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.6], // check if 30% or 60% of the section is visible
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
