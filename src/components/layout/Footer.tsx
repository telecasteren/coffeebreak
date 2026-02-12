"use client";

import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../icons/mui-icons";

const footerItems = [
  {
    id: "github",
    label: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/telecasteren",
  },
  {
    id: "email",
    label: "Email",
    icon: EmailIcon,
    href: "mailto:nilsen.tele@proton.me",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/tele-caster-nilsen-7002b9249",
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        {footerItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`footer-link footer-${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.icon /> {item.label}
          </Link>
        ))}
      </footer>
    </>
  );
};

export default Footer;
