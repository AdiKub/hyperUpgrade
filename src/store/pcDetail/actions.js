import * as actionTypes from './actionTypes';

export const getPcDetailStart = requestParams => ({
  type: actionTypes.GET_PC_DETAIL_START,
  requestParams,
});
export const getPcDetailSuccess = response => ({
  type: actionTypes.GET_PC_DETAIL_SUCCESS,
  response,
});
export const getPcDetailFailure = responseError => ({
  type: actionTypes.GET_PC_DETAIL_FAILURE,
  responseError,
});

