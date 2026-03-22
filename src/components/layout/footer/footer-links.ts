import { EmailIcon, GitHubIcon, LinkedInIcon } from "../../icons/mui-icons";

export const footerLinks = [
  {
    key: "github",
    icon: GitHubIcon,
    href: "https://github.com/telecasteren",
  },
  {
    key: "email",
    icon: EmailIcon,
    href: "mailto:nilsen.tele@proton.me",
  },
  {
    key: "linkedin",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/tele-caster-nilsen-7002b9249",
  },
] as const;
