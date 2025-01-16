let api = "https://676e39ccdf5d7dac1cca000c.mockapi.io/shoppingCarts";

const useFetch = () => {
  const fetchData = ({ url, method = "GET", data }) => {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET") {
      options.body = JSON.stringify(data);
    }

    return fetch(`${api}/${url}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return fetchData;
};

export { useFetch };

function addUIData(value, carts) {
  let card = document.createElement("div");
  card.innerHTML = `
    <div class="flex flex-col gap-[10px]">
        <div>
          <img
            src="https://images.uzum.uz/crm0jeuvip07shn579rg/t_product_540_high.jpg#1736222803923"
            alt=""
          />
        </div>

        <div class="flex flex-col gap-[5px]">
          <h2 class="text-[14px]">
            ${value.title}
          </h2>
          <p><i class="bx bxs-star text-[gold]"></i>${value.rate}</p>
          <h2 class="font-[700] text-[18px] text-[#006bff]">${value.price} so'm</h2>
          <div class="monthly border border-[#fe7300] rounded-[4px] p-[7px]">
            <h3 class="font-[500] text-[14px] text-[#fe7300]">
              ${value.month} so'm/oyiga
            </h3>
          </div>

          <div class="flex items-center justify-between">
            <button class="buy">Купить в один клик</button>
            <div class="shopping_bag">
              <i class="bx bx-shopping-bag text-2xl text-[white]"></i>
            </div>
          </div>
        </div>
      </div>
      `;
  carts.append(card);
}

export { addUIData };
