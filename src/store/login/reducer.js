import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: {
          token: action.response.access_token,
        },
        user: action.response.user,
        isLogined: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: {
          token: action.response.access_token,
        },
        user: action.response.user,
        isLogined: true,
      };

    case actionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: {
          token: '',
        },
        isLogined: true,
      };

    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        token: {
          token: action.response.access_token,
        },
        user: action.response.user,
        isLogined: action.response.isLogined,
      };

    case actionTypes.SET_LOGINED:
      return {
        ...state,
        isLogined: true,
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
            status: action.responseStatuses.title,
            message: action.responseStatuses.message,
          },
        };



    default:
      return state;
  }
};
