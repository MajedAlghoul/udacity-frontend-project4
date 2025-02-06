// js files
import { handleSubmit } from "./js/formHandler";
import { logoSvg, modeSwitchSvg, xSvg, goSvg } from "../client/assets/svgs.js";

//alert("I EXIST");
// console.log("CHANGE!!");

// sass files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/results.scss";
import "./styles/about.scss";

const form = document.getElementById("urlForm");
const holder1 = document.getElementById("form-holder-1");
const holder2 = document.getElementById("form-holder-2");
const modeButton = document.getElementById("mode-button");
const aboutButton = document.getElementById("about-button");
const aboutPopup = document.getElementById("popup-blur");
const xButton = document.getElementById("x-button");
const xButtonHolder = document.getElementById("x-button-holder");
const logoHolders = document.querySelectorAll(".logo-holders");
const goHolders = document.querySelectorAll(".go-logo");
//=======================================================================

// checks proper form location on startup
moveForm();

//sets default theme to dark
document.documentElement.setAttribute("data-theme", "dark");

// inject Svgs
injectSvgs();

// add event listener to form
form.addEventListener("submit", handleSubmit);

// add event listener to place form properly on screen resize
window.addEventListener("resize", moveForm);

// add event listener to theme switch
modeButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});

// add event listener to about button
aboutButton.addEventListener("click", () => {
  aboutPopup.style.display = "flex";
});

// event listeners to close the about popup
xButton.addEventListener("click", () => {
  aboutPopup.style.display = "none";
});
aboutPopup.addEventListener("click", (event) => {
  if (event.target.closest("#popup-card")) {
    return;
  }
  aboutPopup.style.display = "none";
});

// add service worker only on production
if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

//=============================================================

// Function that moves the form to / from the header
function moveForm() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 976 && !holder1.contains(form)) {
    holder1.appendChild(form);
  } else if (screenWidth <= 976 && !holder2.contains(form)) {
    holder2.appendChild(form);
  }
}

// Function that adds svgs into html
function injectSvgs() {
  logoHolders.forEach((holder) => {
    holder.innerHTML = logoSvg;
  });
  modeButton.innerHTML = modeSwitchSvg;
  xButtonHolder.innerHTML = xSvg;
  goHolders.forEach((holder) => {
    holder.innerHTML = goSvg;
  });
}
