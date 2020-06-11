import { put, takeLatest, call } from "redux-saga/effects";

function* workerCheckoutSaga() {
  //   try {
  //     const userSessionData = yield call(userSessionApi);
  //     yield put(loginToSiteSuccess(userSessionData));
  //   } catch (e) {
  //     if (e.response.data && e.response.data.message) {
  //       if (e.response.data.message === "Invalid Token") {
  //         yield sessionExpiryHandler();
  //       } else yield put(loginToSiteError(e.response.data.message));
  //     }
  //   }
}

export function* watchCheckoutSaga() {
  //   yield takeLatest(USER_ATHENTICATION, workerCheckoutSaga);
}
