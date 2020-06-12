import axios from "axios";

const HOST = "http://localhost:3001";

const paymentIntentUrl = `${HOST}/checkout/create-payment-intent`;
const confirmPaymentUrl = `${HOST}/checkout/confirm-payment`;

export function paymentIntent(data) {
  return axios.post(paymentIntentUrl, data);
}

export function confirmPayment(data) {
  console.log("inside api", data);
  return axios.post(confirmPaymentUrl, data);
}
