import { createStore, applyMiddleware } from "redux";
// import { routerMiddleware } from "connected-react-router";
// import { createBrowserHistory } from "history";
// import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import sagas from "../sagas";

// export const history = createBrowserHistory();

const enhancers = [];

const sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    if (err.response && err.response.data) {
      const errorData = err.response.data;
      store.dispatch({ type: "SET_ERROR_STATE", errorData });
    }
  },
});

const middleware = [sagaMiddleware];

// const composedEnhancers = composeWithDevTools(
//   applyMiddleware(...middleware),
//   ...enhancers
// );

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
