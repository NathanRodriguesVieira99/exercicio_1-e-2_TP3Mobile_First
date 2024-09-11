function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const burgerIcon = document.querySelector(".menu-burger");

  menu.classList.toggle("open");
  overlay.classList.toggle("active");

  if (menu.classList.contains("open")) {
    burgerIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    burgerIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}
