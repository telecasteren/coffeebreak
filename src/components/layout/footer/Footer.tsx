import Link from "next/link";
import { footerLinks } from "./footer-links";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <div className="footer-container">
        <footer>
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
        </footer>
        <p className="footer-version">
          © {new Date().getFullYear()} {t("author")}. {t("rights")} |
          <a href="#"> v2</a> |
          <a href="/v1/" target="_blank" rel="noopener noreferrer">
            v1
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
