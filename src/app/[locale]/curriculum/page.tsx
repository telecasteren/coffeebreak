import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Typography from "@mui/material/Typography";
import CurriculumVitae from "../../../components/sections/Curriculum";
import Contact from "@/components/sections/Contact";
import { useTranslations } from "next-intl";
import { Highlight } from "../../../components/Highlight";

export default function Curriculum() {
  const t = useTranslations("cv");
  return (
    <main>
      <Header />
      <section id="cv">
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "3rem", mt: 4 }}
        >
          <Highlight>{t("title")}</Highlight>
        </Typography>
        <p>{t("subtitle")}</p>
        <CurriculumVitae />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
