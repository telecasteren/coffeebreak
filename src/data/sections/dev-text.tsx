import { FolderCodeIcon } from "@/components/icons/code-icon";

const title = (
  <>
    THE FRONTEND NERD
    <FolderCodeIcon variant="animate" size={110} />
  </>
);

const subtitle = (
  <>
    <span className="highlight">User focused, playful and efficient.</span>{" "}
    Turning ideas into actual performant interfaces.
  </>
);

const paragraph = (
  <>
    I enjoy building modern web applications with React, TypeScript and Next.js,
    focusing on{" "}
    <span className="highlight">clarity, accessibility and consistency</span>.
    My client facing background helps me translate real user needs into simple
    flows and clean components. I care about naming, structure and patterns that
    make it easy for others to read, extend and maintain the code.
  </>
);

export { title, subtitle, paragraph };
