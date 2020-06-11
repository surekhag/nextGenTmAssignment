import { checkout } from "./actionTypes";

export const checkoutAction = (data) => {
  return { type: checkout, data };
};
