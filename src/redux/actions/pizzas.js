import axios from "axios";
export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ""}&sortType=${
        sortBy.type
      }&orderType=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
export const setCategories = (items) => ({
  type: "SET_CATEGORIES",
  payload: items,
});
export const fetchCategories = () => (dispatch) => {
  axios.get("/category").then(({ data }) => {
    dispatch(setCategories(data));
  });
};
