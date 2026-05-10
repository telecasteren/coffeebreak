"use client";

import React from "react";
import { useProjectCardScroll } from "@/hooks/useProjectCardScroll";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Dialogue } from "@/components/layout/dialogue/index";

export const ProjectCards = () => {
  const { progress, cardData, cardsRef } = useProjectCardScroll();

  return (
    <ul id="cards" ref={cardsRef}>
      {cardData.map((card, index) => {
        const numCards = cardData.length;
        const local = Math.min(Math.max(progress * numCards - index, 0), 1);

        const style: React.CSSProperties = {
          transform: `translateY(${(1 - local) * 40}px) scale(${
            0.9 + 0.1 * local
          })`,
          zIndex: 50 - index,
        };

        return (
          <li
            className="card"
            id={`card_${card.id}`}
            key={card.id}
            style={style}
          >
            <div className="card-content">
              <div className="card-text">
                <Typography variant="h3">{card.title}</Typography>
                <p>{card.tagline}</p>
                <Dialogue
                  className="btn"
                  buttonText="Show Project"
                  title={card.title}
                  media={card.media}
                  content={card.desc}
                  subcontent={card.tech}
                  urls={card.urls}
                />
              </div>
              <Image
                src={card.media?.[0]?.src || "/noimage.png"}
                alt={card.media?.[0]?.alt || "Project image"}
                width={500}
                height={300}
                loading="eager"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
