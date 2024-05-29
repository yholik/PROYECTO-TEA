document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuList = document.querySelector(".menu_index ul");

  mobileMenu.addEventListener("click", function () {
    menuList.classList.toggle("menu-list-active");
    mobileMenu.classList.toggle("active");
  });
});

