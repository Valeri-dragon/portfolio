const menu = () => {
  const menuBtn = document.querySelector(".humburger-menu");
  const blockMenu = document.querySelector(".menu");
  const showMenu = () => {
    if (blockMenu.classList.contains("menu-active")) {
      menuBtn.classList.remove("humburger-menu-active");
      blockMenu.classList.remove("menu-active");
    } else {
      menuBtn.classList.add("humburger-menu-active");
      blockMenu.classList.add("menu-active");
    }
  };
  document.addEventListener("click", (event) => {
    if (
      event.target === menuBtn ||
      event.target.closest(".menu-list__link") ||
      event.target == !blockMenu
    ) {
      showMenu();
    } else if (event.target === blockMenu) {
      menuBtn.classList.add("humburger-menu-active");
      blockMenu.classList.add("menu-active");
    } else {
      menuBtn.classList.remove("humburger-menu-active");
      blockMenu.classList.remove("menu-active");
    }
  });
};
export default menu;
