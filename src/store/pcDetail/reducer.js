
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PC_DETAIL_SUCCESS:
      return {
        ...state,
        selectedPc: action.response[0],
      };
    default:
      return state;
  }
};
