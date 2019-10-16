
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PCS_BY_COTEGORY_SUCCESS:
      return {
        ...state,
        cotegoryPCs: action.response,
      };
    default:
      return state;
  }
};
