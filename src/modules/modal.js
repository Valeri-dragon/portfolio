const modal = () => {
  const openModalBtns = document.querySelectorAll(".more");
  const modal = document.querySelector(".modal");
  const modalClose = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".overlay");
  const showModal = () => {
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  };
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", showModal);
  });
  modal.addEventListener("click", (event) => {
    if (
      event.target == modalClose ||
      (event.target == overlay &&
        !event.target.classList.contains("modal-wrapper"))
    ) {
      showModal();
    }
  });
};
export default modal;
