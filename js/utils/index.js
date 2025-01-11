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
