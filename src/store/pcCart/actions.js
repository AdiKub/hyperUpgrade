import * as actionTypes from './actionTypes';

export const setPcToCartStart = pc => ({
  type: actionTypes.SET_PC_TO_CART_START ,
  pc,
});
export const setPcToCartSuccess = pc => ({
  type: actionTypes.SET_PC_TO_CART_SUCCESS,
  pc,
});
export const setPcToCartFailure = pc => ({
  type: actionTypes.SET_PC_TO_CART_FAILURE,
  pc,
});

export const deletePcFromCartStart = pc => ({
  type: actionTypes.DELET_PC_FROM_CART_START ,
  pc,
});


