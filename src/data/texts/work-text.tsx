"use client";

import { WifiIcon } from "@/components/icons/wifi-icon";

const WorkTitle = (
  <>
    <div className="work-title">
      MY WORK <WifiIcon size={88} />
    </div>
  </>
);

const WorkSubtitle = (
  <>
    <span className="highlight">Everything is simple,</span> a bold statement
    and one of my main goals when building. I want to create things that are
    simple to use, intuitive and{" "}
    <span className="highlight">solve problems</span>.
  </>
);

const WorkText = (
  <>
    Trained in front-end development, working across the full stack. Solid
    background in human connection, structure and project management, with a
    focus on delivering high-quality and make the complex simple. Helping people
    to succeed with digital products.
  </>
);

export { WorkTitle, WorkSubtitle, WorkText };
