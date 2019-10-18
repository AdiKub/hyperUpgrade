import {
  take, put, call, fork,
} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export function* setPcToCartRequest(pc) {
  let locStorCart = JSON.parse(localStorage.getItem('pcCart'))
  if (locStorCart) {
    locStorCart.push(pc)
    localStorage.setItem('pcCart', JSON.stringify(locStorCart)) 
  } else {
    locStorCart = [pc];
    localStorage.setItem('pcCart', JSON.stringify(locStorCart))
  }
    yield put(actions.setPcToCartSuccess(locStorCart));
}

export function* watchSetPcToCartRequest() {
  while (true) {
    const { pc } = yield take(actionTypes.SET_PC_TO_CART_START);
    yield call(setPcToCartRequest, pc);
  }
}

export default function* () {
  yield fork(watchSetPcToCartRequest);
}
