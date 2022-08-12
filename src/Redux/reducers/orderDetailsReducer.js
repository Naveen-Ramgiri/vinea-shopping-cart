import { ActionTypes } from "../constants/action-types";
const intialState = {
  shippingAddress: {},
  shippingMethod: '',
  paymentInfo: {}
};

export const orderDetailsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHIPPING_ADDRESS:
      return {...state, shippingAddress: payload}
    case ActionTypes.SET_SHIPPING_METHOD:
      return {...state, shippingMethod: payload}
    case ActionTypes.SET_PAYMENT_METHOD:
      return {...state, paymentInfo: payload}
    default:
      return state;
  }
};


