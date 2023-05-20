import "../scss/styles.scss";

const btn = document.querySelector(".header__burger");
const menu = document.querySelector(".mobile-nav");

btn.addEventListener("click", () => menu.classList.toggle("mobile-nav_active"));
