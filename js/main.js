import { useFetch } from "./utils/index.js";

const cards = document.querySelector(".cards");

const request = useFetch();

request({ url: "" })
  .then((data) => getData(data))
  .catch((error) => console.error(error));

function getData(data) {
  //   cards.innerHTML = "";
  //   console.log(data);
  data.forEach((value) => {
    console.log(value);
    let card = document.createElement("div");
    card.innerHTML = `<div class="flex flex-col gap-[10px]">
    <div>
      <img
        src=${value.img}
        alt=""
      />
    </div>
    
    <div class="flex flex-col gap-[5px]">
      <h2 class="text-[14px]">${value.title.slice(0,40 )}</h2>
      <p><i class="bx bxs-star text-[gold]"></i>${value.rate}</p>
      <h2 class="font-[700] text-[18px] text-[#006bff]">${value.price
        .toLocaleString("uz-UZ")
        .replace(/,/g, " ")} so'm</h2>
      <div class="monthly border border-[#fe7300] rounded-[4px] p-[7px]">
        <h3 class="font-[500] text-[14px] text-[#fe7300]">
        ${value.month.toLocaleString("uz-UZ").replace(/,/g, " ")} so'm/oyiga
        </h3>
      </div>
    
      <div class="flex items-center justify-between">
        <button class="buy">Купить в один клик</button>
        <div class="shopping_bag">
          <i class="bx bx-shopping-bag text-2xl text-[white]"></i>
        </div>
      </div>
    </div>
    </div>`;
    cards.append(card);
  });
}
