import { all, fork } from "redux-saga/effects";

import {
  watchCheckoutSaga,
  watchCheckoutSuccessSaga,
} from "./watchers/checkout";
export default function* root() {
  yield all([fork(watchCheckoutSaga), fork(watchCheckoutSuccessSaga)]);
}
