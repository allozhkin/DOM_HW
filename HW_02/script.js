"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownEl = document.querySelectorAll(
  "div.dropdown div.dropdown-menu a.dropdown-item"
);

dropdownEl.forEach((element) => {
  element.classList.add("superDropdown");
});

console.log(dropdownEl);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector("div.dropdown button.btn");
console.log(btnEl);

if (btnEl.classList.contains("btn-secondary")) {
  btnEl.classList.remove("btn-secondary");
} else {
  btnEl.classList.add("btn-secondary");
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector("div.dropdown div.menu");
if (menuEl.classList.contains("dropdown-menu")) {
  menuEl.classList.remove("dropdown-menu");
}

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownDiv = document.querySelector("div.dropdown");
dropdownDiv.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const idEl = document.getElementById("dropdownMenuButton");
idEl.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const delAtribute = document.getElementsByClassName("dropdown-toggle");
delAtribute[0].removeAttribute("type");
console.log(delAtribute);
