import { useFetch } from "./utils/index.js";
import { addUIData } from "./utils/index.js";

const carts = document.querySelector(".carts");

const request = useFetch();

request({ url: "" })
  .then((data) => getData(data))
  .catch((error) => console.error(error));
let cart = localStorage.getItem("cards") || [];

function getData(data) {
  
  data.forEach((value) => {
    addUIData(value, carts);
  });
  let buttons = document.querySelectorAll(".btn_shop");
  buttons.forEach((value, idx) => {
    value.addEventListener("click", () => {
      addToCart(data[idx]);
    });
  });
}

function addToCart(data) {
  cart = [...cart, data];
  localStorage.setItem("carts",JSON.stringify)
}
