
  function toggleMenu() {
    var menu = document.querySelector(".side-menu");
    menu.classList.toggle("show");
  }

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", toggleMenu);