import { checkout, secret, checkout_success, file_upload } from "./actionTypes";

export const checkoutSubmitData = (data) => {
  return { type: checkout, data };
};

export const setSecret = (data) => {
  return { type: secret, data };
};

export const submitCheckoutData = (data) => {
  return { type: checkout_success, data };
};

export const fileUploadStatus = (data) => {
  return { type: file_upload, data };
};
