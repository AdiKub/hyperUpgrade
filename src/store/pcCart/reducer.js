
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PC_TO_CART_SUCCESS:
      return {
        ...state,
        pcCart: action.pc,
      };
    default:
      return state;
  }
};
