import axios from "axios";

const HOST = "http://localhost:3001";

const paymentIntentUrl = `${HOST}/checkout/create-payment-intent`;
const confirmPaymentUrl = `${HOST}/checkout/confirm-payment`;

export function paymentIntent(data) {
  return axios.post(paymentIntentUrl, data);
}

export function confirmPayment(paymentData) {
  const { client_secret, card, billing_details } = paymentData;
  return axios.post(confirmPaymentUrl, paymentData);
  //This is giving Converting circular structure to JSON err
}
