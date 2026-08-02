"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { footerLinks } from "./footerLinks";
import { useTranslations } from "next-intl";
import { LighthouseBadges } from "../../badge/LighthouseBadges";
import { fetchLighthouseScores, Scores } from "@/data/fetch-lighthouse-scores";

const Footer = () => {
  const t = useTranslations("footer");
  const [scores, setScores] = useState<Scores | null>(null);

  useEffect(() => {
    fetchLighthouseScores().then(setScores);
  }, []);

  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="footer-links-wrapper">
            {footerLinks.map(({ key, icon: Icon, href }) => (
              <Link
                key={key}
                href={href}
                className={`footer-link footer-${key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon /> {t(key)}
              </Link>
            ))}
          </div>

          <p className="footer-version">
            © {new Date().getFullYear()} {t("author")}. {t("rights")}
          </p>
        </footer>

        {scores && <LighthouseBadges scores={scores} />}
      </div>
    </>
  );
};

export default Footer;
