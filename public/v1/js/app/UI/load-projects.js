import { pageContent, portfolioContent } from "/v1/js/app/utils/constants.js";
import { renderProjects } from "/v1/js/app/projects/cards/render-projects.js";
import { playVideo } from "/v1/js/app/event-listeners/video-events.js";
import projects from "/v1/resources/projects/projects.js";
import { colorModeToggle } from "/v1/js/app/components/color-modes/switch.js";

export function loadProjects() {
  const homeLi = document.getElementById("navHome");
  const projectsLi = document.getElementById("navProjects");
  const contactLi = document.getElementById("navContact");
  const aboutLi = document.getElementById("navAbout");

  pageContent.classList.remove("landing-content");
  pageContent.classList.remove("contact-page");

  if (projectsLi.classList.contains("active")) return;

  projectsLi.classList.add("active");
  homeLi.classList.remove("active");
  contactLi.classList.remove("active");
  aboutLi.classList.remove("active");

  portfolioContent.innerHTML = "";
  pageContent.innerHTML = "";

  colorModeToggle();
  renderProjects(projects);
  playVideo();

  setLanguage(localStorage.getItem("lang") || "no");
}
