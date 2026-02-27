"use client";

import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { cvItems as items } from "@/data/curriculum/cv-texts";
import Image from "next/image";

const Curriculum = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScroll = rect.height + viewportHeight;

      const p = Math.min(
        Math.max((viewportHeight - rect.top) / totalScroll, 0),
        1,
      );
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="cv-header">
        <Typography variant="h4" component="h4">
          Tele Caster Nilsen
        </Typography>
        <Image
          src="/tele-avatar-blue.webp"
          alt="avatar of the author"
          width={200}
          height={200}
        />
      </div>
      <section className="cv-timeline" ref={timelineRef}>
        <div
          className="cv-timeline-inner"
          style={{ "--timeline-progress": progress } as React.CSSProperties}
        >
          {items.map((item, index) => {
            const amplifier = 1.4;
            const scaled = Math.min(progress * amplifier, 1);

            const local = Math.min(
              Math.max(scaled * items.length - index, 0),
              1,
            );

            return (
              <div
                key={item.id}
                className="cv-timeline-item"
                style={{
                  opacity: local,
                  transform: `translateY(${(1 - local) * 40}px)`,
                }}
              >
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-content">
                  <span className="cv-timeline-year">{item.year}</span>
                  <h4 className="cv-timeline-title">{item.title}</h4>
                  {item.subtitle && (
                    <h5 className="cv-timeline-subtitle">{item.subtitle}</h5>
                  )}
                  <p className="cv-timeline-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Curriculum;
