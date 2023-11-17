"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superLinkEl = document.getElementById("super_link");
console.log(superLinkEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBodyEl = document.getElementsByClassName("card-body");
console.log(cardBodyEl[0].getElementsByClassName("card-link"));

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.

const titleEl = document.getElementsByTagName("h5");
console.log(`содержимое тега title: ${titleEl[0].innerHTML}`);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleEl = document.getElementsByClassName("card-title");
console.log(cardTitleEl[0].parentElement);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const tegPEl = document.createElement("p");
tegPEl.innerHTML = "Привет";
const cardEl = document.getElementsByClassName("card");
cardEl[0].appendChild(tegPEl);

// 8. Удалите тег h6 на странице.

const h6El = document.getElementsByTagName("h6");
h6El[0].remove();

const cardLinkEl = document.getElementsByClassName("card-link");
for (const item in cardLinkEl) {
  cardLinkEl[item].textContent = "ссылка";
}