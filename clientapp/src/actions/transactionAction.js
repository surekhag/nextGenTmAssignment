import { checkout, secret } from "./actionTypes";

export const checkoutSubmitData = (data) => {
  return { type: checkout, data };
};

export const setSecret = (data) => {
  return { type: secret, data };
};
