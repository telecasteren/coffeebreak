"use client";

import { CoffeeIcon } from "../../components/icons/coffee-icon";

const HeroTitle = (
  <>
    THE COFFEE NERD
    <CoffeeIcon variant="animate" size={110} />
  </>
);

const HeroSubTitle = (
  <>
    <span className="highlight">Barista for over a decade.</span> Drinking
    coffee fulltime.
  </>
);

const HeroText = (
  <>
    Rocked the grinder behind the espresso machine, brewing coffee for over a
    decade. Managed cafés in fast-paced environments, serving the people their
    daily dose of caffeine.
    <span className="highlight">Emerging into tech,</span> I use my client
    facing skills focusing on a <i>digital customer experience</i>, creating
    clean and interactive user interfaces. Improving my skills every day.
  </>
);

export { HeroTitle, HeroSubTitle, HeroText };
