const menuBtnRef = document.querySelector('[data-menu-button]');
const openMenuBtnRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener("click", () => {
  
    menuBtnRef.classList.toggle("is-open");
   
  });

menuBtnRef.addEventListener('click', () => {
  openMenuBtnRef.classList.toggle('is-open')
});