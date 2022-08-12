import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  cart: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, cartProducts: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, cartProducts: {}};
    case ActionTypes.SET_CART_ITEMS:
      return {...state, cart: [...state.cart, payload]}
    case ActionTypes.SET_SHIPPING_ADDRESS:
      return {...state, shippingAddress: payload}
    default:
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
