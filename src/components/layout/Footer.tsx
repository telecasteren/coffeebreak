"use client";

import Link from "next/link";

const footerItems = [
  { id: "github", label: "GitHub", href: "https://github.com/telecasteren" },
  { id: "email", label: "Email", href: "mailto:nilsen.tele@proton.me" },
  {
    id: "linkedin",
    label: "LinkedIn",
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
            {item.label}
          </Link>
        ))}
      </footer>
    </>
  );
};

export default Footer;
