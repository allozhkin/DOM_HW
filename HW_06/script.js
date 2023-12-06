"use strict";

const products = JSON.parse(productsData);

let productBox = document.querySelector("div.product-box");
let productTemplate = document.querySelector("#productTemplate .product");

products.forEach((element) => {
  let product = productTemplate.cloneNode(true);
  product.querySelector("div.product-img img").src = element.img;
  product.querySelector(".product-info .product-title").textContent =
    element.title;
  product.querySelector(".product-info .product-text").textContent =
    element.desc;
  product.querySelector(".product-info .product-price").textContent =
    element.price;
  productBox.appendChild(product);
});
