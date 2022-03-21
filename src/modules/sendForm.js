const sendForm = () => {
  const cl = console.log;
  const forms = document.querySelectorAll("form");
  forms.forEach((itemForm) => {
    itemForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(itemForm);
      const body = {};

      formData.append("form", itemForm.classList.value);

      formData.forEach((value, field) => {
        body[field] = value;
      });
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(body), 
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          
          if (
            response.ok 
          ) {
            return response.json(); 
          } else {
            throw new Error(response.status);
          } 
        })
        

        .then((data) => {
          alert("Спасибо, ваши данные отправлены! "); 
        })

        .catch((error) => {
          alert("Произошла ошибка " + error.message);
        }) 
        .finally(() => {
          itemForm.reset();
        });
    });
  });
};
export default sendForm;
