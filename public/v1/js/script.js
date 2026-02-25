import { colorModeToggle } from "./app/components/color-modes/switch.js";
import {
  switchColorMode,
  defaultColorMode,
} from "./app/components/color-modes/toggle-events.js";
import { menu } from "./app/components/navigation/menu.js";
import { welcomeMessage } from "./app/landing/welcome-message.js";
import { renderContent } from "./app/UI/render-content.js";
import { setPageTitles } from "./app/utils/set-page-titles.js";

// COLORMODE
colorModeToggle();
defaultColorMode();
switchColorMode();

// GENERAL CONTENT
menu();
welcomeMessage();
renderContent();

// URL PATH ON HASHCHANGE
setPageTitles();
window.addEventListener("hashchange", setPageTitles);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menuContainer");
  if (!container) return;

  const alreadyRan = sessionStorage.getItem("animateTopBorder");
  if (!alreadyRan) {
    container.classList.add("animate-once");
    sessionStorage.setItem("animateTopBorder", "1");
  }
});
