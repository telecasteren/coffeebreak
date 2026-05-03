import Typography from "@mui/material/Typography";
import { Highlight } from "@/components/Highlight";
import { CoffeeIcon } from "@/components/icons/coffee-icon";
import { useTranslations } from "next-intl";
import SoftSkillCards from "../cards/SoftSkillCards";

const Barista = () => {
  const t = useTranslations("about.coffee");
  return (
    <div className="coffee-section">
      <Typography variant="h1" component="h1" className="title-container">
        {t("coffeeTitle")} <CoffeeIcon variant="animate" size={110} />
      </Typography>
      <Typography variant="h2" component="h2">
        <Highlight>{t("coffeeTagline")}</Highlight> {t("coffeeSubtitle")}
      </Typography>
      <p className="paragraph-text">
        {t("coffeeDescPart1")} <Highlight>{t("highlightCoffeeLine")}</Highlight>
        {", "}
        {t("coffeeDescPart2")}
      </p>

      <SoftSkillCards />
    </div>
  );
};

export default Barista;
