import { FolderCodeIcon } from "@/components/icons/code-icon";
import { Highlight } from "../../components/Highlight";

const title = (
  <>
    THE FRONTEND NERD
    <FolderCodeIcon variant="animate" size={110} />
  </>
);

const subtitle = (
  <>
    <Highlight>User focused, playful and efficient.</Highlight> Turning ideas
    into actual performant interfaces.
  </>
);

const paragraph = (
  <>
    I enjoy building modern web applications with React, TypeScript and Next.js,{" "}
    focusing on <Highlight>clarity</Highlight>,{" "}
    <Highlight>accessibility</Highlight> and <Highlight>consistency.</Highlight>{" "}
    My client facing background helps me translate real user needs into simple
    flows and clean components. I care about naming, structure and patterns that
    make it easy for others to read, extend and maintain the code.
  </>
);

export { title, subtitle, paragraph };
