import * as actionTypes from './actionTypes';

export const setDeliveryStart = requestParams => ({
  type: actionTypes.SET_DELIVERY_START,
  requestParams,
});
export const setDeliverySuccess = response => ({
  type: actionTypes.SET_DELIVERY_SUCCESS,
  response,
});
export const setDeliveryFailure = responseError => ({
  type: actionTypes.SET_DELIVERY_FAILURE,
  responseError,
});