const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelectorAll(".nav-links a");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

menuButton.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
