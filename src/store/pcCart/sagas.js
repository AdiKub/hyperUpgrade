import {
  take, put, call, fork,
} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {getCount} from '../../services/helpers';

export function* addPcToCart(pc) {
  let locStorCart = JSON.parse(localStorage.getItem('pcCart'))

  if (locStorCart) {
    if (!getCount(pc, locStorCart)[0]) {
      locStorCart.push({number:1, pc})
    } else {
      locStorCart[getCount(pc, locStorCart)].number += 1;
    }  
    localStorage.setItem('pcCart', JSON.stringify(locStorCart)) 
  } else {
    locStorCart = [{number:1, pc}];
    localStorage.setItem('pcCart', JSON.stringify(locStorCart))
  }
    yield put(actions.setPcToCartSuccess(locStorCart));
}

export function* deletePcFromCart(pc) {
  let locStorCart = JSON.parse(localStorage.getItem('pcCart'))

  if (pc.number) {
    if (pc.number > 1) {
      locStorCart[getCount(pc.pc, locStorCart)].number -= 1
    } else {
      locStorCart.splice(getCount(pc.pc, locStorCart), 1)
    } 
  } else {
    locStorCart.splice(getCount(pc, locStorCart), 1)
  }
  localStorage.setItem('pcCart', JSON.stringify(locStorCart))
  yield put(actions.setPcToCartSuccess(locStorCart));
}

export function* watchAddPcToCart() {
  while (true) {
    const { pc } = yield take(actionTypes.SET_PC_TO_CART_START);
    yield call(addPcToCart, pc);
  }
}

export function* watchDeletePcFromCart() {
  while (true) {
    const { pc } = yield take(actionTypes.DELET_PC_FROM_CART_START);
    yield call(deletePcFromCart, pc);
  }
}

export default function* () {
  yield fork(watchAddPcToCart);
  yield fork(watchDeletePcFromCart);
}
