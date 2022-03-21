const accordeon = () => {
  const blockAccordeon = document.querySelector(".feature-list");
  const accordeonBtns = blockAccordeon.querySelectorAll(".feature__link");
  const featureSub = blockAccordeon.querySelectorAll(".feature-sub");

  /* accordeonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordeonBtns.forEach((btnItem, index) => {
        if (btnItem === btn) {
          btnItem.classList.toggle("feature__link_active");

          featureSub[index].classList.toggle("hidden");
        } else {
          btnItem.classList.remove("feature__link_active");
          featureSub[index].classList.add("hidden");
        }
      });
    });
  });*/
  accordeonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordeonBtns.forEach((button, index) => {
        if (button === btn) {
          button.classList.toggle("feature__link_active");
          button.nextElementSibling.classList.toggle("hidden");
        } else {
          button.classList.remove("feature__link_active");
          button.nextElementSibling.classList.add("hidden");
        }
      });
    });
  });
};
export default accordeon;
