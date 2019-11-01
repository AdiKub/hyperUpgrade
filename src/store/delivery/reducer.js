
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DELIVERY_SUCCESS:
      return {
        ...state,
        delivery: action.response,
      };
    default:
      return state;
  }
};
