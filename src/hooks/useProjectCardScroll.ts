import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import projectsEn from "@/data/projects/projects.en";
import projectsNo from "@/data/projects/projects.no";

export const useProjectCardScroll = () => {
  const cardsRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  const locale = useLocale();
  const cardData = locale === "no" ? projectsNo : projectsEn;

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      const rect = cardsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScroll = rect.height + viewportHeight;

      const p = Math.min(
        Math.max((viewportHeight - rect.top) / totalScroll, 0),
        1,
      );
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, cardData, cardsRef };
};
