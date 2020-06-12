import { secret, file_upload } from "../actions/actionTypes";

const initialState = {
  secretVal: null,
  file_upload_status: null,
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case secret:
      return {
        secretVal: action.data,
      };

    case file_upload:
      return {
        file_upload_status: action.data,
      };
    default:
      return state;
  }
}
