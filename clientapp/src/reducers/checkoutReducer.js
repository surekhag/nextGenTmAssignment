import { secret } from "../actions/actionTypes";

const initialState = {
  secretVal: null,
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case secret:
      return {
        secretVal: action.data,
      };
    default:
      return state;
  }
}
