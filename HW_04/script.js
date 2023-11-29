"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

let inputEl = document.getElementById("from");
let spanEl = document.querySelector("span");
inputEl.addEventListener("input", function (e) {
  spanEl.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

let buttonEl = document.querySelector("button.messageBtn");
let messageEl = document.querySelector("div.message");

buttonEl.addEventListener("click", function (e) {
  messageEl.classList.add("animate_animated");
  messageEl.classList.add("animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

let buttonForm = document.querySelector("form button");
let form = document.querySelector("form ");
let inputEls = document.querySelectorAll(".form-control");

buttonForm.addEventListener("click", function (e) {
  inputEls.forEach((element) => {
    if (!element.value) {
      element.classList.add("error");
    } else {
      element.classList.remove("error");
    }
  });
});
