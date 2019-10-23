import * as actionTypes from './actionTypes';

export const getPcsByCotegoryStart = requestParams => ({
  type: actionTypes.GET_PCS_BY_COTEGORY_START,
  requestParams,
});
export const getPcsByCotegorySuccess = response => ({
  type: actionTypes.GET_PCS_BY_COTEGORY_SUCCESS,
  response,
});
export const getPcsByCotegoryFailure = responseError => ({
  type: actionTypes.GET_PCS_BY_COTEGORY_FAILURE,
  responseError,
});


export const setResponseSuccessStatuses = responseStatuses => ({
  type: actionTypes.SET_RESPONSE_SUCCESS_STATUSES,
  responseStatuses,
});
export const setResponseFailureStatuses = responseStatuses => ({
  type: actionTypes.SET_RESPONSE_FAILURE_STATUSES,
  responseStatuses,
});
export const setDefaultResponseStatuses = () => ({
  type: actionTypes.SET_DEFAULT_STATUSES,

});