import { put, takeLatest, call } from "redux-saga/effects";
import { checkout } from "../../actions/actionTypes";
import { setSecret } from "../../actions/transactionAction";
import { paymentIntent, confirmPayment } from "../../apis/checkoutApis";
function* workerCheckoutSaga({ data }) {
  const { amount, currency, card, billing_details } = data;
  try {
    const clientSecretData = yield call(paymentIntent, { amount, currency });
    const client_secret = clientSecretData.data.clientSecret;
    const paymentData = {
      client_secret,
      card,
      billing_details,
    };

    //This is giving Converting circular structure to JSON so saved data in localstorage as stripr cant be used here .. must be react component
    // try {
    //   const paymentResponse = yield call(confirmPayment, paymentData);
    //   console.log("paymentResponse ", paymentResponse);
    // } catch (e) {
    //   console.log("err", e);
    // }

    localStorage.setItem("client_secret", client_secret);

    yield put(setSecret("Success"));
  } catch (e) {
    if (e.response.data && e.response.data.message) {
      console.log(e.response.data.message);
    }
  }
}

export function* watchCheckoutSaga() {
  yield takeLatest(checkout, workerCheckoutSaga);
}
