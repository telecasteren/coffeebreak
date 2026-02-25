import { landingTexts } from "/v1/resources/translations/landing.js";
import { keywords } from "/v1/resources/translations/keywords.js";
import { experience } from "/v1/resources/translations/experience.js";
import { contactTexts } from "/v1/resources/translations/contact-info.js";
import { projectTexts } from "/v1/resources/translations/projects.js";
import {
  switchTexts,
  navItems,
  titles,
  introText,
} from "/v1/resources/translations/general-elements.js";

const setTranslations = (lang) => {
  const selectedLanding = landingTexts[lang];
  const selectedKeywords = keywords[lang];
  const selectedExperience = experience[lang];
  const selectedContactTexts = contactTexts[lang];
  const selectedProjectTexts = projectTexts[lang];
  const selectedSwitchTexts = switchTexts[lang];
  const selectedIntroText = introText[lang];
  const selectedNavItems = navItems[lang];
  const selectedTitles = titles[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    el.innerHTML =
      selectedLanding[key] ||
      selectedKeywords[key] ||
      selectedExperience[key] ||
      selectedContactTexts[key] ||
      selectedProjectTexts[key] ||
      selectedSwitchTexts[key] ||
      selectedIntroText[key] ||
      selectedNavItems[key] ||
      selectedTitles[key] ||
      key;
  });
};

export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  setTranslations(lang);
};

// defaults to Norwegian
const saved = localStorage.getItem("lang") || "no";
setTranslations(saved);

window.setLanguage = setLanguage;
