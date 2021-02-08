const menuOpenRef = document.querySelector(".menu-btn-open");
const menuCloseRef = document.querySelector(".menu-btn-close");
const headerWrapRef = document.querySelector(".header-nav-wrap");
const ourPerformanceRef = document.querySelector(".our-performance");

menuOpenRef.addEventListener("click", () => {
  headerWrapRef.classList.toggle("is-close");
  headerWrapRef.classList.toggle("is-open");
});

menuCloseRef.addEventListener("click", () => {
  headerWrapRef.classList.toggle("is-close");
  headerWrapRef.classList.toggle("is-open");
});

if (document.documentElement.clientWidth < 1920) {
  ourPerformanceRef.classList.toggle("container-box");
  ourPerformanceRef.classList.toggle("large-container");
}
