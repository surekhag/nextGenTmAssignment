import { all, fork } from "redux-saga/effects";

import { watchCheckoutSaga } from "./watchers/checkout";
export default function* root() {
  yield all([fork(watchCheckoutSaga)]);
}
