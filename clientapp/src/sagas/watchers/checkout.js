import { put, takeLatest, call } from "redux-saga/effects";
import { checkout, checkout_success } from "../../actions/actionTypes";
import { setSecret, fileUploadStatus } from "../../actions/transactionAction";
import { paymentIntent, confirmPayment } from "../../apis/checkoutApis";
function* workerCheckoutSaga({ data }) {
  const { amount, currency, card, billing_details } = data;
  try {
    const clientSecretData = yield call(paymentIntent, { amount, currency });
    const client_secret = clientSecretData.data.clientSecret;
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

function* workerCheckoutSuccessSaga({ data }) {
  try {
    const response = yield yield call(confirmPayment, data.paymentIntent);
    yield put(fileUploadStatus(response.data.status));
  } catch (e) {
    if (e.response.data && e.response.data.message) {
      console.log(e.response.data.message);
    }
  }
}
export function* watchCheckoutSuccessSaga() {
  yield takeLatest(checkout_success, workerCheckoutSuccessSaga);
}
