const scroll = () => {
  document.addEventListener("click", (event) => {
    if (
      event.target.closest(".menu-list__link") ||
      event.target.closest(".main__button") ||
      event.target.closest(".main__scroll")
    ) {
      event.preventDefault();
      const ID = event.target.getAttribute("href").substr(1);
      const section = document.getElementById(ID);
      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }
  });
};
export default scroll;
