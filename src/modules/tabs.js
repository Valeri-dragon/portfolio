const tabs = () => {
  const blockTabsBtns = document.querySelector(".design-list");
  document.title = `Разработка сайтов`;
  const getConditionTabBtn = () => {
    const tabsBtn = document.querySelectorAll(".design-list__item");
    tabsBtn.forEach((item) => {
      if (item.classList.contains("design-list__item_active")) {
        item.classList.remove("design-list__item_active");
      } else {
        item.classList.add("design-list__item_active");
      }
    });
  };
  const showElemBlockDesign = () => {
    const blockDesign = document.querySelector(".design-wrapper");
    const itemBlockDesign = blockDesign.querySelectorAll("[data-tabs-field]");
    const title = document.querySelectorAll(".design__title");
    itemBlockDesign.forEach((item) => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");

        title.forEach((elemTit) => {
          if (item == elemTit) {
            document.title = elemTit.innerText;
          }
        });
      } else {
        item.classList.add("hidden");
      }
    });
  };
  blockTabsBtns.addEventListener("click", (event) => {
    getConditionTabBtn();
    showElemBlockDesign();
  });
};
export default tabs;
