import axios from "axios";
export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  console.log(sortBy);
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
  // fetch("http://localhost:3000/db.json").then((response) => {
  //   response.json().then((js) => {
  //     setPizzas(js.pizzas);
  //   });
  // });
};
export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
