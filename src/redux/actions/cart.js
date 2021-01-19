export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_TO_CART",
  payload: pizzaObj,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
export const cartRemoveItem = (id) => ({
  type: "CART_REMOVE_ITEM",
  payload: id,
});
export const cartPlusItem = (id) => ({
  type: "CART_PLUS_ITEM",
  payload: id,
});
export const cartMinusItem = (id) => ({
  type: "CART_MINUS_ITEM",
  payload: id,
});
