import { ActionTypes } from "../constants/action-types";

export const setShippingAddress = (payload) => {
    return {
      type: ActionTypes.SET_SHIPPING_ADDRESS,
      payload: payload
    };
};
export const setShippingMethod = (payload) => {
  return {
    type: ActionTypes.SET_SHIPPING_METHOD,
    payload: payload
  };
};
export const setPaymentInfo = (payload) => {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: payload
  };
};
