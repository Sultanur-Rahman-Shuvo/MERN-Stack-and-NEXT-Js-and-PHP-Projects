submit.addEventListener("click", (e) => {
  e.preventDefault();
  let title_value = title.value;
  let description_value = description.value;
  localStorage.setItem("todo", JSON.stringify(title, description));
  todo.innerHTML = `<h1>${title_value}</h1>
                      <p>${description_value}</p>`;
  title_value = "";
  description_value = "";
});

deletebutton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("todo");
  todo.innerHTML = "";
});
