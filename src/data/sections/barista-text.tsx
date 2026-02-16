import { CoffeeIcon } from "@/components/icons/coffee-icon";

const title = (
  <>
    THE COFFEE NERD
    <CoffeeIcon variant="animate" size={110} />
  </>
);

const subtitle = (
  <>
    <span className="highlight">Barista for over a decade.</span> Drinking
    coffee fulltime.
  </>
);

const paragraph = (
  <>
    Rocked the grinder behind the espresso machine, brewing coffee for over a
    decade. Managed cafés in fast-paced environments, serving the people their
    daily dose of caffeine. Those years taught me to listen, understand needs
    quickly and simplify choices.{" "}
    <span className="highlight">Now I bring that mindset into tech,</span>{" "}
    focusing on a <i>digital customer experience</i> and building interfaces
    that feel as friendly and intuitive as a good coffee shop.
  </>
);

export { title, subtitle, paragraph };
