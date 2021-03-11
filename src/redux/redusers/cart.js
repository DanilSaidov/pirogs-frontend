const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

//
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const getStoreTotalPrice = (arr) =>
  arr.reduce((sum, obj) => obj.totalPrice + sum, 0);
const getStoreTotalCount = (arr) =>
  arr.reduce((sum, obj) => obj.items.length + sum, 0);

//
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      const currentPizzaItems = !state.items[action.payload.filter]
        ? [action.payload]
        : [...state.items[action.payload.filter].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.filter]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const arrItems = [].concat.apply([], items);
      return {
        ...state,
        items: newItems,
        totalCount: arrItems.length,
        totalPrice: getTotalPrice(arrItems),
      };

    case "CART_REMOVE_ITEM": {
      const newObjItems = { ...state.items };
      const currentPrice = newObjItems[action.payload].totalPrice;
      const currentCount = newObjItems[action.payload].items.length;
      delete newObjItems[action.payload];
      return {
        ...state,
        items: newObjItems,
        totalCount: state.totalCount - currentCount,
        totalPrice: state.totalPrice - currentPrice,
      };
    }
    case "CART_PLUS_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: getStoreTotalCount(Object.values(newItems)),
        totalPrice: getStoreTotalPrice(Object.values(newItems)),
      };
    }
    case "CART_MINUS_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: getStoreTotalCount(Object.values(newItems)),
        totalPrice: getStoreTotalPrice(Object.values(newItems)),
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};
export default cart;
