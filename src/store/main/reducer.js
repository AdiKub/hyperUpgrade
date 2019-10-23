
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PCS_BY_COTEGORY_SUCCESS:
      return {
        ...state,
        cotegoryPCs: action.response,
      };
      case actionTypes.SET_RESPONSE_SUCCESS_STATUSES:
        return {
          ...state,
          responseStatuses: {
            isSuccess: true,
            isOpen: true,
            title: action.responseStatuses.title,
            message: action.responseStatuses.message,
          },
        };
      case actionTypes.SET_RESPONSE_FAILURE_STATUSES:
        return {
          ...state,
          responseStatuses: {
            isSuccess: false,
            isOpen: true,
            title: action.responseStatuses.title,
            message: action.responseStatuses.message,
          },
        };
    default:
      return state;
  }
};
