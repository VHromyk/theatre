const menuOpenRef = document.querySelector(".menu-btn-open");
const menuCloseRef = document.querySelector(".menu-btn-close");
const headerWrapRef = document.querySelector(".header-nav-wrap");

menuOpenRef.addEventListener("click", () => {
  headerWrapRef.classList.toggle("is-close");
  headerWrapRef.classList.toggle("is-open");
});

menuCloseRef.addEventListener("click", () => {
  headerWrapRef.classList.toggle("is-close");
  headerWrapRef.classList.toggle("is-open");
});
