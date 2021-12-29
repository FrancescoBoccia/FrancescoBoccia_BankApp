"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const message = document.createElement("div");
const head = document.querySelector(".header");
const h1 = document.querySelector("h1");
// Scroll Navigation
const scrollingButton = document.querySelector(".btn--scroll-to");
const featuresSection = document.querySelector("#section--1");
// Content Button
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// Menu Fade Animation on Hover
const navigationBar = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (modal) {
  modal.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

message.classList.add("cookie-message");
message.innerHTML =
  'This website uses cookies, for a better usage of the website. <button class="btn btn--close-cookie">Got It!!</button>';

head.append(message);

// /////////////////////////////////////
// Scroll Navigation

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

scrollingButton.addEventListener("click", function () {
  featuresSection.scrollIntoView({ behavior: "smooth" });
});

// Click Navigation to Scroll into Element Selected (Smooth)
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// /////////////////////////////////////
// Content Button
tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  // Highlight the title you have clicked
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");

  // Select which content to show
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// /////////////////////////////////////
// Menu Opacity Fade Animation on Hover
const navLinksHoverOpacity = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const linkMouseOver = e.target;
    const siblingsLinks = linkMouseOver
      .closest(".nav")
      .querySelectorAll(".nav__link");
    const logo = linkMouseOver.closest(".nav").querySelector("img");

    siblingsLinks.forEach((el) => {
      if (el !== linkMouseOver) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navigationBar.addEventListener("mouseover", navLinksHoverOpacity.bind(0.5));
navigationBar.addEventListener("mouseout", navLinksHoverOpacity.bind(1));
