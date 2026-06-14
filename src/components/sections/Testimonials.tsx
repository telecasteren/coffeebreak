"use client";

import { useState } from "react";
import { NavigateBeforeIcon, NavigateNextIcon } from "../icons/MuiIcons";
import { TestimonialTexts } from "../../data/testimonials/testimonial-texts";
import Typography from "@mui/material/Typography";
import { Highlight } from "../Highlight";
import { useTranslations } from "next-intl";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("about");

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialTexts.length) % TestimonialTexts.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialTexts.length);
  };

  return (
    <div className="testimonials-container" aria-description="testimonials">
      <Typography variant="h3">
        <Highlight>{t("testimonials")}</Highlight>
      </Typography>

      {TestimonialTexts.map((testimonial, index) => (
        <div
          key={index}
          className={
            currentIndex === index
              ? "testimonial-card active"
              : "testimonial-card"
          }
          aria-description={`testimonial-${index}`}
        >
          <div role="presentation" className="testimonial-inner">
            <p
              aria-description={`testimonial-${index}-text`}
              className="testimonial-text testimonial-p"
            >
              &quot;{testimonial.testimonial}&quot;
            </p>

            <p
              aria-description={`testimonial-${index}-author`}
              className="testimonial-text"
            >
              <Highlight>
                <strong>{testimonial.name}</strong>
              </Highlight>{" "}
              - {testimonial.relation},{" "}
              <a
                href={testimonial.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-url"
              >
                {testimonial.company}
              </a>
            </p>
            <p className="testimonial-subject">{testimonial.subject}</p>
          </div>
        </div>
      ))}

      <div className="testimonials-nav">
        <button
          aria-label="previous testimonial"
          className="testimonials-prev"
          onClick={handlePrev}
        >
          <NavigateBeforeIcon sx={{ width: 50, height: 50 }} />
        </button>

        <button
          aria-label="next testimonial"
          className="testimonials-next"
          onClick={handleNext}
        >
          <NavigateNextIcon sx={{ width: 50, height: 50 }} />
        </button>
      </div>
    </div>
  );
};
